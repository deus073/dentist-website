"use client";

import React from 'react';
import dynamic from 'next/dynamic';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import FadeIn from '../animations/FadeIn';

// Dynamically import the Map component to avoid SSR issues with Leaflet
const Map = dynamic(() => import('../map/Map'), {
  ssr: false,
  loading: () => <div className="w-full h-[400px] bg-gray-200 animate-pulse rounded-lg"></div>,
});

const LocationSection = () => {
  return (
    <section id="location" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Find Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're conveniently located in central București. Visit us for your dental care needs.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <FadeIn direction="left">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <Map 
                address="Strada Maria Rosetti 26A, București 020487"
                coordinates={[44.4396, 26.1063]} // Approximate coordinates for the address
              />
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.2}>
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-blue-800 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <FaMapMarkerAlt className="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Address</h4>
                    <p className="text-gray-600">Strada Maria Rosetti 26A, București 020487</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <FaPhone className="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Phone</h4>
                    <p className="text-gray-600">0720.123.123</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <FaEnvelope className="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Email</h4>
                    <p className="text-gray-600">contact@smiledental.ro</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <FaClock className="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Working Hours</h4>
                    <p className="text-gray-600">Monday - Friday: 9:00 - 19:00</p>
                    <p className="text-gray-600">Saturday: 9:00 - 14:00</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;