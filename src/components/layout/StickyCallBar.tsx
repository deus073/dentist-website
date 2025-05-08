"use client";

import React from 'react';
import { FaPhone } from 'react-icons/fa';

const StickyCallBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-blue-600 text-white py-3 px-4 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <FaPhone className="mr-2 animate-pulse" />
          <span className="font-medium">Call to make an appointment</span>
        </div>
        <a 
          href="tel:0720123123" 
          className="bg-white text-blue-600 px-4 py-2 rounded-md font-bold hover:bg-blue-50 transition-colors"
        >
          0720.123.123
        </a>
      </div>
    </div>
  );
};

export default StickyCallBar;