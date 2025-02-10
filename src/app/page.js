'use client';  // This tells Next.js this code runs on the client

import { useState, useEffect } from 'react';

export default function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);

  // Add scroll listener to track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="bg-gray-900 text-white">

      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center bg-cover bg-center relative" style={{ backgroundImage: "url('/hero-background.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="z-10 text-center px-6">
          <h1 className="text-5xl font-bold">Welcome to Adamass Consulting</h1>
          <p className="mt-4 text-lg">Empowering your business through technology and innovation.</p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-800 text-center">
        <h2 className="text-4xl font-semibold text-white">Our Services</h2>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-gray-700 p-8 rounded-lg shadow-lg hover:scale-105 transition duration-300">
            <h3 className="text-xl font-semibold">Tech Due Diligence</h3>
            <p className="mt-4">Assessing technology risks and opportunities to optimize business operations.</p>
          </div>
          {/* Service 2 */}
          <div className="bg-gray-700 p-8 rounded-lg shadow-lg hover:scale-105 transition duration-300">
            <h3 className="text-xl font-semibold">Strategic Advising</h3>
            <p className="mt-4">Helping businesses develop a roadmap for sustainable growth and success.</p>
          </div>
          {/* Service 3 */}
          <div className="bg-gray-700 p-8 rounded-lg shadow-lg hover:scale-105 transition duration-300">
            <h3 className="text-xl font-semibold">Finance Structuring & Capital Advisory</h3>
            <p className="mt-4">Optimizing financial structures and capital strategies for maximum impact.</p>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-blue-600 text-center">
        <h2 className="text-4xl font-semibold text-white">Why Choose Us?</h2>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="p-8 bg-gray-700 text-white rounded-lg">
            <h3 className="text-2xl font-semibold">20 Years of Experience</h3>
            <p className="mt-4">Our team has decades of experience in strategic advisory and technology consulting.</p>
          </div>
          <div className="p-8 bg-gray-700 text-white rounded-lg">
            <h3 className="text-2xl font-semibold">International Partnerships</h3>
            <p className="mt-4">We work globally with trusted partners to deliver the best solutions for your business.</p>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section id="case-studies" className="py-20 bg-gray-800 text-center">
        <h2 className="text-4xl font-semibold text-white">Case Studies</h2>
        <div className="mt-12 space-y-12">
          {/* Case Study 1 */}
          <div className="relative group">
            <img src="/case-study-1.jpg" alt="Case Study 1" className="w-full h-[400px] object-cover rounded-lg" />
            <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-75 transition duration-300"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-xl text-white font-semibold">Tech Transformation for Client A</h3>
              <p className="text-white mt-4">We helped Client A with a complete technology transformation, increasing efficiency by 40%.</p>
            </div>
          </div>
          {/* Case Study 2 */}
          <div className="relative group">
            <img src="/case-study-2.jpg" alt="Case Study 2" className="w-full h-[400px] object-cover rounded-lg" />
            <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-75 transition duration-300"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-xl text-white font-semibold">Financial Structuring for Client B</h3>
              <p className="text-white mt-4">We restructured Client B’s finances, unlocking a new round of investment worth $10M.</p>
            </div>
          </div>
          {/* Case Study 3 */}
          <div className="relative group">
            <img src="/case-study-3.jpg" alt="Case Study 3" className="w-full h-[400px] object-cover rounded-lg" />
            <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-75 transition duration-300"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-xl text-white font-semibold">Strategic Advisory for Client C</h3>
              <p className="text-white mt-4">We provided strategic advice for Client C, expanding their market share by 20%.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="py-20 bg-blue-600 text-center">
        <h2 className="text-4xl font-semibold text-white">Get In Touch</h2>
        <form className="mt-12 max-w-lg mx-auto">
          <input type="email" placeholder="Your Email" className="p-3 rounded-lg w-full mb-4" />
          <textarea placeholder="Your Message" className="p-3 rounded-lg w-full mb-4" rows="4"></textarea>
          <button type="submit" className="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-700 transition">Send Message</button>
        </form>
      </section>

    </div>
  );
}
