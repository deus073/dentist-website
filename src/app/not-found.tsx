import React from 'react';
import Link from 'next/link';
import { FaTooth } from 'react-icons/fa';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50 px-4">
      <div className="text-center max-w-md">
        <FaTooth className="text-6xl text-blue-600 mx-auto mb-6" />
        <h1 className="text-4xl font-bold text-blue-900 mb-4">404 - Page Not Found</h1>
        <p className="text-gray-600 mb-8">
          The page you are looking for might have been removed, had its name changed, 
          or is temporarily unavailable.
        </p>
        <Link 
          href="/" 
          className="inline-block bg-blue-600 text-white py-3 px-6 rounded-md font-bold hover:bg-blue-700 transition-colors"
        >
          Return to Homepage
        </Link>
      </div>
    </div>
  );
}