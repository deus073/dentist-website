"use client";

import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import FadeIn from '../animations/FadeIn';
// Image import removed as it's not being used

const testimonials = [
  {
    id: 1,
    name: 'Maria Popescu',
    role: 'Parent',
    quote: 'The team at SmileDental made my children feel comfortable during their first dental visit. Their patience and professionalism are outstanding!',
    image: '/img/reviews/aiony-haust-3TLl_97HNJo-unsplash.jpg',
  },
  {
    id: 2,
    name: 'Alexandru Ionescu',
    role: 'Business Professional',
    quote: "I have been coming to SmileDental for years. Their cosmetic dentistry work transformed my smile and boosted my confidence tremendously.",
    image: '/img/reviews/joseph-gonzalez-iFgRcqHznqg-unsplash.jpg',
  },
  {
    id: 3,
    name: 'Elena Dumitrescu',
    role: 'Teacher',
    quote: "After trying several dentists in București, I finally found SmileDental. Their attention to detail and pain-free procedures keep me coming back.",
    image: '/img/reviews/ivana-cajina-_7LbC5J-jw4-unsplash.jpg',
  },
  {
    id: 4,
    name: 'Mihai Stanescu',
    role: 'Engineer',
    quote: "The dental implant procedure I had was smooth and the results are amazing. I can smile confidently again thanks to the skilled team here.",
    image: '/img/reviews/ian-dooley-d1UPkiFd04A-unsplash.jpg',
  },
  {
    id: 5,
    name: 'Andreea Constantinescu',
    role: 'Marketing Specialist',
    quote: "Their flexible appointment scheduling and friendly staff make dental visits stress-free. I highly recommend their services to everyone!",
    image: '/img/reviews/charles-etoroma-95UF6LXe-Lo-unsplash.jpg',
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">What Our Patients Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We&apos;re proud to have helped thousands of patients achieve healthier, more beautiful smiles.
            Here&apos;s what some of them have to say about their experience with us.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <FadeIn 
              key={testimonial.id} 
              delay={0.1 * index}
              direction={index % 2 === 0 ? 'up' : 'down'}
              className="bg-gray-50 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start mb-4">
                <FaQuoteLeft className="text-blue-300 text-3xl mr-4 mt-1" />
                <p className="text-gray-600 italic">{testimonial.quote}</p>
              </div>
              <div className="flex items-center mt-6">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-blue-800">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn direction="up" delay={0.3} className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            Join our satisfied patients and experience the difference of professional dental care.
          </p>
          <button className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-3 rounded-md font-bold transition-colors">
            Book Your Appointment Today
          </button>
        </FadeIn>
      </div>
    </section>
  );
};

export default TestimonialsSection;