import { useCallback, useState } from 'react';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

const usePdfGenerator = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState(null);

  // Function to sanitize unsupported color functions
  const sanitizeStyles = (element) => {
    const colorProperties = [
      'color',
      'backgroundColor',
      'borderColor',
      'borderTopColor',
      'borderRightColor',
      'borderBottomColor',
      'borderLeftColor',
      'outlineColor',
      'textDecorationColor',
      'columnRuleColor'
    ];

    const replaceUnsupportedColors = (value) => {
      if (typeof value !== 'string') return value;
      if (value.includes('oklch(')) return '#333333';
      if (value.includes('color-mix(')) return '#333333';
      if (value.includes('lab(')) return '#333333';
      if (value.includes('lch(')) return '#333333';
      return value;
    };

    // Process all elements including the root
    const allElements = [element, ...element.querySelectorAll('*')];
    
    allElements.forEach(el => {
      // Handle inline styles
      colorProperties.forEach(prop => {
        if (el.style[prop]) {
          el.style[prop] = replaceUnsupportedColors(el.style[prop]);
        }
      });

      // Handle computed styles
      const computedStyle = window.getComputedStyle(el);
      colorProperties.forEach(prop => {
        const value = computedStyle.getPropertyValue(prop.replace(/([A-Z])/g, '-$1').toLowerCase());
        if (value && (value.includes('oklch(') || 
                      value.includes('color-mix(') || 
                      value.includes('lab(') || 
                      value.includes('lch('))) {
          el.style[prop] = replaceUnsupportedColors(value);
        }
      });
    });
  };

  const generatePdf = useCallback(async (element, filename = 'document.pdf') => {
    if (!element || isGenerating) return;

    setIsGenerating(true);
    setError(null);

    // Create a clone of the element
    const clone = element.cloneNode(true);
    clone.style.position = 'absolute';
    clone.style.left = '-9999px';
    clone.style.width = '210mm';
    clone.style.padding = '20px';
    clone.style.background = 'white';
    document.body.appendChild(clone);

    try {
      // Sanitize styles before rendering
      sanitizeStyles(clone);

      // Wait for images to load
      const images = clone.querySelectorAll('img');
      await Promise.all(Array.from(images).map(img => 
        img.complete ? Promise.resolve() : new Promise((resolve) => {
          img.onload = resolve;
          img.onerror = resolve;
        })
      );

      // Generate canvas with multiple safeguards
      const canvas = await html2canvas(clone, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        logging: false,
        backgroundColor: '#ffffff',
        ignoreElements: (el) => {
          const style = window.getComputedStyle(el);
          return style.color.includes('oklch') || 
                 style.backgroundColor.includes('oklch');
        }
      });

      document.body.removeChild(clone);

      // Create PDF with proper page splitting
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
      });

      const imgData = canvas.toDataURL('image/png', 1.0);
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth() - 20; // 10mm margins
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

      let heightLeft = pdfHeight;
      let position = 10; // Start with top margin
      const pageHeight = pdf.internal.pageSize.getHeight() - 20;

      pdf.addImage(imgData, 'PNG', 10, position, pdfWidth, pdfHeight);
      heightLeft -= pageHeight;

      // Add additional pages if needed
      while (heightLeft >= 0) {
        position = heightLeft - pdfHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 10, position, pdfWidth, pdfHeight);
        heightLeft -= pageHeight;
      }

      pdf.save(filename);
      return true;
    } catch (err) {
      console.error('PDF generation failed:', err);
      setError('Failed to generate PDF. Please try with simpler content.');
      document.body.removeChild(clone);
      return false;
    } finally {
      setIsGenerating(false);
    }
  }, [isGenerating]);

  return { generatePdf, isGenerating, error };
};

export default usePdfGenerator;