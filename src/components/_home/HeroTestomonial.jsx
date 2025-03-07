import React, { useState, useEffect } from "react";
import { testimonials } from "../../constants/home.constants";

const HeroTestomonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section id="testimonials" className="py-20 text-gray-600">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate__animated animate__fadeIn">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-lg text-gray-500 max-w-3xl mx-auto">
            Discover how our note-taking platform is transforming the way people
            organize information and boost their productivity.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${
                  window.innerWidth < 768 ? currentIndex * 100 : currentIndex * 33
                }%)`,
              }}
    
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4">
                  <div className="bg-slate-200 rounded-xl p-6 h-full animate__animated animate__fadeIn">
                    <blockquote className="mb-6">
                      <p className="text-gray-600 italic">{testimonial.quote}</p>
                    </blockquote>
                    <div className="flex items-center">
                      <div className={`w-12 h-12 ${testimonial.bgColor} rounded-full flex items-center justify-center mr-4`}>
                        <span className="text-white font-bold text-lg">{testimonial.initials}</span>
                      </div>
                      <div>
                        <div className="font-bold">{testimonial.name}</div>
                        <div className="text-gray-400 text-sm">{testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button onClick={handlePrev} className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 md:-translate-x-0 bg-neutral-900 hover:bg-neutral-700 text-white rounded-full p-2">
            ◀
          </button>
          <button onClick={handleNext} className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2 md:translate-x-0 bg-neutral-900 hover:bg-neutral-700 text-white rounded-full p-2">
            ▶
          </button>
        </div>

        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-blue-500" : "bg-neutral-600"}`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroTestomonial;
