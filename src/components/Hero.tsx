import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-blue-100
    pt-12 md:pt-0"
    >
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -40 }}   // 👈 added exit
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {/* Headings */}
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-wide text-blue-700">
          Build Smarter.
        </h1>
        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-blue-600">
          Scale Faster.
        </h2>

        {/* Subheading */}
        <h1 className="text-xl md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed text-blue-700 font-normal">
          <span className="font-extrabold text-blue-800 text-xl md:text-xl">
            The Eco Tech :
          </span>{' '}
          We help startups, e-commerce businesses, and local brands scale online
          through custom development, AI automation, and strategic digital marketing.
        </h1>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={scrollToContact}
            className="group px-8 py-4 rounded-lg font-semibold text-lg bg-blue-700 hover:bg-blue-800 text-white shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Get a Free Quote
            <ArrowRight
              className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300"
              size={20}
            />
          </button>

          <button
            onClick={() =>
              document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="px-8 py-4 rounded-lg font-semibold text-lg border-2 border-blue-600 text-blue-700 hover:bg-blue-600 hover:text-white transition-all duration-300"
          >
            Our Services
          </button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { number: '50+', label: 'Projects Delivered' },
            { number: '100%', label: 'Client Satisfaction' },
            { number: '24/7', label: 'Support Available' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2 text-blue-700">
                {stat.number}
              </div>
              <div className="text-blue-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
