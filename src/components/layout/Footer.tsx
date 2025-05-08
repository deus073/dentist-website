"use client";

import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaPhone, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-blue-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="text-2xl font-bold mb-6">
              <span className="text-blue-300">Smile</span>
              <span className="text-white">Dental</span>
            </div>
            <p className="text-blue-100 mb-6">
              Professional dental care for your entire family. We're committed to providing 
              the highest quality dental services in a comfortable environment.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="bg-blue-800 p-2 rounded-full hover:bg-blue-700 transition-colors">
                <FaFacebook className="text-xl" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="bg-blue-800 p-2 rounded-full hover:bg-blue-700 transition-colors">
                <FaInstagram className="text-xl" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="bg-blue-800 p-2 rounded-full hover:bg-blue-700 transition-colors">
                <FaTwitter className="text-xl" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'Services', 'Testimonials', 'Location', 'Contact'].map((item) => (
                <li key={item}>
                  <ScrollLink
                    to={item.toLowerCase()}
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    className="text-blue-100 hover:text-white transition-colors cursor-pointer"
                  >
                    {item}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              {[
                'General Dentistry',
                'Cosmetic Dentistry',
                'Orthodontics',
                'Pediatric Dentistry',
                'Dental Implants',
                'Emergency Care'
              ].map((service) => (
                <li key={service}>
                  <a href="#" className="text-blue-100 hover:text-white transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-blue-300 mr-3 mt-1" />
                <span>Strada Maria Rosetti 26A, București 020487</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="text-blue-300 mr-3" />
                <span>0720.123.123</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-blue-300 mr-3" />
                <span>contact@smiledental.ro</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-blue-800 pt-8">
          <p className="text-center text-blue-200">
            &copy; {currentYear} SmileDental. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;