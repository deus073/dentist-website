"use client";

import React from 'react';
import AppointmentForm from '../forms/AppointmentForm';
import FadeIn from '../animations/FadeIn';

const HeroSection = () => {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-700/70 z-10" />
        <img
          src="/img/jonathan-borba-W9YEY6G8LVM-unsplash.jpg"
          alt="Dentist office"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-20">
        <div className="flex flex-col md:flex-row items-center">
          <FadeIn direction="left" className="w-full md:w-1/2 text-white mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Your Family Deserves The Best Dental Care
            </h1>
            <p className="text-xl mb-6">
              Professional and compassionate dental services for the entire family.
              Experience the difference with our modern approach to dental health.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-md font-bold transition-colors">
                Our Services
              </button>
              <button className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-6 py-3 rounded-md font-bold transition-colors">
                Learn More
              </button>
            </div>
          </FadeIn>
          
          <FadeIn direction="right" delay={0.2} className="w-full md:w-1/2 md:pl-10">
            <div className="bg-white rounded-lg shadow-xl p-6">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">Make an Appointment</h2>
              <p className="text-gray-600 mb-6">
                Fill out the form below and we'll contact you to confirm your appointment.
              </p>
              <AppointmentForm />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;