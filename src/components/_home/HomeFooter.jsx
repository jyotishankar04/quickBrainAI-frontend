import React from "react";
import {  homeNavBarLinks,  supportLinks } from "../../constants/home.constants";
import Logo from "./Logo";

const HomeFooter = () => {
  return (
    <footer id="footer" className="bg-neutral-900 mt-15 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <Logo/>
            <p className="text-gray-400 my-6 max-w-md">
              Transform the way you take notes with our intelligent platform.
              Upload PDFs, collaborate with AI, and access your notes anywhere.
            </p>
           
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {homeNavBarLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.path}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

      
          {/* Support Links */}
          <div className="relative">
            <h3 className="text-lg font-semibold mb-4 opacity-60 pointer-events-none ">Support</h3>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
            <div className="absolute top-0 right-0  h-full bg-gray-700 w-full rounded-lg ">
                <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-400 text-sm text-center">
                    Links will be added soon
                </h1>
            </div>
          </div>
        </div>

       
        {/* Bottom Footer */}
        <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 NotesApp. All rights reserved.
            </p>
            <div className="md:ml-6 flex space-x-6">
              <a
                href="#terms"
                className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
              >
                Terms of Service
              </a>
              <a
                href="#privacy"
                className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#cookies"
                className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
              >
                Cookie Settings
              </a>
            </div>
          </div>
          <div className="mt-6 md:mt-0">
            <div className="flex space-x-4 items-center">
              <span className="text-gray-400 text-sm">
                Made with ❤️ by QuickBrainAi Team
              </span>
         
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default HomeFooter;