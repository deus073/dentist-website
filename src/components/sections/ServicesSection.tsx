"use client";

import React from 'react';
import FadeIn from '../animations/FadeIn';
import { FaTooth, FaSmile, FaTeeth } from 'react-icons/fa';

const services = [
  {
    id: 1,
    title: 'General Dentistry',
    description: 'Comprehensive dental care including check-ups, cleanings, and fillings.',
    price: 'From 200 RON',
    icon: <FaTooth className="text-4xl text-blue-500" />,
  },
  {
    id: 2,
    title: 'Cosmetic Dentistry',
    description: 'Enhance your smile with whitening, veneers, and aesthetic procedures.',
    price: 'From 500 RON',
    icon: <FaSmile className="text-4xl text-blue-500" />,
  },
  {
    id: 3,
    title: 'Orthodontics',
    description: 'Straighten your teeth with braces or clear aligners for a perfect smile.',
    price: 'From 3000 RON',
    icon: <FaTeeth className="text-4xl text-blue-500" />,
  },
  {
    id: 4,
    title: 'Pediatric Dentistry',
    description: 'Specialized dental care for children in a friendly environment.',
    price: 'From 150 RON',
    icon: <FaTooth className="text-4xl text-blue-500" />,
  },
  {
    id: 5,
    title: 'Dental Implants',
    description: 'Permanent tooth replacement solutions for a natural look and feel.',
    price: 'From 4500 RON',
    icon: <FaTeeth className="text-4xl text-blue-500" />,
  },
  {
    id: 6,
    title: 'Emergency Care',
    description: 'Immediate dental care for accidents, pain, and urgent situations.',
    price: 'From 300 RON',
    icon: <FaSmile className="text-4xl text-blue-500" />,
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Our Dental Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive dental care for your entire family, using the latest
            technology and techniques to ensure the best results.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <FadeIn 
              key={service.id} 
              delay={0.1 * index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-blue-800 mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <div className="flex justify-between items-center">
                <span className="font-bold text-blue-600">{service.price}</span>
                <button className="text-blue-600 hover:text-blue-800 font-medium">
                  Learn More →
                </button>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn direction="up" delay={0.3} className="mt-16">
          <div className="bg-blue-600 rounded-lg shadow-xl overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Special Family Package
                </h3>
                <p className="text-blue-100 mb-6">
                  Book a comprehensive dental check-up for your entire family and receive a 15% discount.
                  Package includes examination, cleaning, and personalized treatment plan.
                </p>
                <div className="bg-white text-blue-600 inline-block px-4 py-2 rounded-md font-bold self-start">
                  Only 800 RON for a family of four
                </div>
              </div>
              <div className="w-full md:w-1/2 relative min-h-[300px]">
                <img
                  src="/img/candid-WFsNCIn8OF4-unsplash.jpg"
                  alt="Family dental care"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default ServicesSection;