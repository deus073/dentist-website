import React from 'react';
import dynamic from 'next/dynamic';
import TopBar from '@/components/layout/TopBar';
import Navbar from '@/components/layout/Navbar';
import StickyCallBar from '@/components/layout/StickyCallBar';
import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import LocationSection from '@/components/sections/LocationSection';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/layout/ScrollToTop';

export default function Home() {
  return (
    <main>
      <TopBar />
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <TestimonialsSection />
      <LocationSection />
      <Footer />
      <StickyCallBar />
      <ScrollToTop />
    </main>
  );
}