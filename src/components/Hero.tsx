import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { MouseParallaxContainer, MouseParallaxChild } from 'react-parallax-mouse';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-blue-100"
    >
      {/* Futuristic glowing blue blobs */}
      <motion.div
        className="absolute top-10 left-10 w-96 h-96 rounded-full mix-blend-screen filter blur-3xl opacity-50 bg-blue-400"
        animate={{ y: [0, 50, 0], x: [0, 40, 0], scale: [1, 1.25, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-1/3 right-20 w-80 h-80 rounded-full mix-blend-screen filter blur-3xl opacity-40 bg-blue-300"
        animate={{ y: [0, -30, 0], x: [0, -35, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 left-20 w-72 h-72 rounded-full mix-blend-screen filter blur-3xl opacity-50 bg-blue-500"
        animate={{ y: [0, 40, 0], x: [0, 20, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />

      <MouseParallaxContainer globalFactorX={0.3} globalFactorY={0.3} resetOnLeave>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Tagline */}
          <motion.div
            className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-8 text-blue-700 bg-white/30 backdrop-blur-sm drop-shadow-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            🚀 Welcome to TheEcoTech
          </motion.div>

          {/* Headings */}
          <MouseParallaxChild factorX={0.05} factorY={0.05}>
            <motion.h1
              className="text-5xl md:text-7xl font-extrabold mb-4 tracking-wide text-blue-700"
              initial={{ opacity: 0, rotate: 0 }}
              animate={{
                opacity: 1,
                rotate: [0, 360],
                x: [0, 40, 0, -40, 0],
                y: [0, -20, 0, 20, 0],
              }}
              transition={{ duration: 2, ease: 'easeInOut' }}
            >
              Build Smarter.
            </motion.h1>
          </MouseParallaxChild>

          <MouseParallaxChild factorX={0.06} factorY={0.06}>
            <motion.h2
              className="text-4xl md:text-6xl font-bold mb-6 text-blue-600"
              initial={{ opacity: 0, rotate: 0 }}
              animate={{
                opacity: 1,
                rotate: [0, -360],
                x: [0, -35, 0, 35, 0],
                y: [0, 15, 0, -15, 0],
              }}
              transition={{ delay: 1, duration: 2, ease: 'easeInOut' }}
            >
              Scale Faster.
            </motion.h2>
          </MouseParallaxChild>

          <motion.p
            className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed text-blue-600"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 2, duration: 1.2, ease: 'easeOut' }}
          >
            The TheEcoTech Way: We help startups, e-commerce businesses, and local brands
            scale online through custom development, AI automation, and strategic digital marketing.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3, duration: 1.2 }}
          >
            <motion.button
              onClick={scrollToContact}
              className="group px-8 py-4 rounded-lg font-semibold text-lg bg-blue-700 hover:bg-blue-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              whileHover={{ scale: 1.05, rotate: 5 }}
            >
              Get a Free Quote
              <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
            </motion.button>

            <motion.button
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 rounded-lg font-semibold text-lg border-2 border-blue-600 text-blue-700 hover:bg-blue-400 hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.05, rotate: -5 }}
            >
              Our Services
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4, duration: 1 }}
          >
            {[{ number: '50+', label: 'Projects Delivered' }, { number: '100%', label: 'Client Satisfaction' }, { number: '24/7', label: 'Support Available' }].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                whileHover={{ scale: 1.1, rotate: [0, 5, -5, 0] }}
                transition={{ type: 'spring', stiffness: 200 }}
              >
                <div className="text-3xl md:text-4xl font-bold mb-2 text-blue-700">
                  {stat.number}
                </div>
                <div className="text-blue-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </MouseParallaxContainer>
    </section>
  );
};

export default Hero;
