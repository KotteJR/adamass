import { useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Home() {
  // Add animation for when the page loads
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // Trigger animations on scroll if needed
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <section id="home" className="h-screen flex items-center justify-center bg-cover bg-center relative" style={{ backgroundImage: "url('/hero-background.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="z-10 text-center px-6"
        >
          <h1 className="text-5xl font-bold">Welcome to Adamass Consulting</h1>
          <p className="mt-4 text-lg">Empowering your business through technology and innovation.</p>
          <a href="#contact" className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">Contact Us</a>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-4xl font-bold text-white"
          >
            Our Services
          </motion.h2>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="bg-gray-700 p-8 rounded-lg shadow-lg transition"
            >
              <h3 className="text-xl font-semibold">Strategic Consulting</h3>
              <p className="mt-4">Helping you create a roadmap for your business success.</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="bg-gray-700 p-8 rounded-lg shadow-lg transition"
            >
              <h3 className="text-xl font-semibold">Technology Solutions</h3>
              <p className="mt-4">We implement cutting-edge technology to improve operations.</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="bg-gray-700 p-8 rounded-lg shadow-lg transition"
            >
              <h3 className="text-xl font-semibold">Innovation & Growth</h3>
              <p className="mt-4">Driving innovation for businesses to expand and evolve.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-4xl font-bold text-white"
          >
            Meet Our Team
          </motion.h2>
          <div className="mt-12 flex justify-center gap-8">
            {/* Team members can be added here */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="bg-gray-700 p-8 rounded-lg shadow-lg transition"
            >
              <Image
                src="/team-member1.jpg"
                alt="Team Member"
                width={150}
                height={150}
                className="rounded-full"
              />
              <h3 className="mt-4 text-xl font-semibold text-white">John Doe</h3>
              <p className="text-gray-400">CEO & Founder</p>
            </motion.div>
            {/* Repeat for other team members */}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-4xl font-bold text-white"
          >
            What Our Clients Say
          </motion.h2>
          <div className="mt-12">
            {/* Example testimonials */}
            <div className="text-gray-300">
              <p>"This company helped us scale our operations quickly, and with great results."</p>
              <p className="mt-4 font-semibold">Jane Smith, CTO at TechCorp</p>
            </div>
            {/* Repeat for more testimonials */}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-4xl font-bold text-white"
          >
            Get In Touch
          </motion.h2>
          <form className="mt-12">
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 rounded-lg w-1/2 mb-4"
            />
            <textarea
              placeholder="Your Message"
              className="p-3 rounded-lg w-1/2 mb-4"
            />
            <button type="submit" className="px-8 py-3 bg-white text-blue-600 rounded-lg">Send Message</button>
          </form>
        </div>
      </section>
    </div>
  );
}
