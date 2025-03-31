import React from "react";
import { testimonials } from "../../constants/home.constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/bundle";

const HeroTestimonial = () => {
  return (
    <section id="testimonials" className="py-20 text-gray-600 bg-gradient-to-b from-gray-50 to-white">
      {/* Added gradient background */}
      <div className="container mx-auto px-4">
        {/* Introduction - Enhanced with better spacing and animation */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            What Our Users Say
          </h2>
          <p className="text-lg text-gray-500 max-w-3xl mx-auto">
            Discover how our note-taking platform is transforming the way people
            organize information and boost their productivity.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden">
            <Swiper
              modules={[Navigation, Autoplay, Pagination]}
              spaceBetween={30} 
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              autoplay={{ 
                delay: 1000, // Increased delay for better readability
                disableOnInteraction: false 
              }}
              pagination={{ 
                clickable: true,
                dynamicBullets: true // Added dynamic bullets for better UX
              }}
              speed={800} // Added slide transition speed
              loop={true} // Enabled infinite loop
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                  <div className="w-full flex-shrink-0 px-4 py-5 transform transition-all hover:scale-105 duration-300">
                    {/* Added hover scale effect */}
                    <div className="bg-white rounded-xl p-6 h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
                      {/* Changed to white background and added shadow */}
                      <blockquote className="mb-6 relative">
                        {/* Added quote decoration */}
                        <div className="absolute top-0 left-0 text-gray-200 text-5xl font-serif">"</div>
                        <p className="text-gray-600 italic pl-6 pt-4">{testimonial.quote}</p>
                        <div className="absolute bottom-0 right-0 text-gray-200 text-5xl font-serif">"</div>
                      </blockquote>
                      <div className="flex items-center">
                        <div
                          className={`w-12 h-12 ${testimonial.bgColor} rounded-full flex items-center justify-center mr-4 transition-transform duration-300 hover:rotate-6`}
                          // Added hover rotation effect for avatar
                        >
                          <span className="text-white font-bold text-lg">
                            {testimonial.initials}
                          </span>
                        </div>
                        <div>
                          <div className="font-bold text-gray-800">{testimonial.name}</div>
                          <div className="text-gray-500 text-sm">{testimonial.role}</div>
                          {/* Changed text color for better contrast */}
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            
            {/* Custom Navigation Buttons - Improved styling */}
            <div className="swiper-button-prev absolute top-1/2 -left-4 transform -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-white text-gray-600 rounded-full shadow-lg hover:bg-gray-100 hover:text-gray-800 transition-colors duration-300 cursor-pointer">
              
            </div>
            <div className="swiper-button-next absolute top-1/2 -right-4 transform -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-white text-gray-600 rounded-full shadow-lg hover:bg-gray-100 hover:text-gray-800 transition-colors duration-300 cursor-pointer">
              
            </div>
            
            {/* Pagination - Improved styling */}
            <div className="swiper-pagination mt-8 flex justify-center gap-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroTestimonial;