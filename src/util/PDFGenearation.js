// utils/pdfGenerator.js
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

export const generatePdfFromHtml = async (
  element,
  filename = "document.pdf"
) => {
  try {
    // Convert HTML to canvas
    const canvas = await html2canvas(element, {
      scale: 2, // Higher quality
      useCORS: true, // Enable cross-origin images
      allowTaint: true, // Allow tainted images
      logging: false, // Disable logging
    });

    // Convert canvas to PDF
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "mm",
    });

    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save(filename);

    return true;
  } catch (error) {
    console.error("Error generating PDF:", error);
    return false;
  }
};
