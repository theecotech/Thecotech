// src/pages/videoediting.tsx
import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const VideoEditing: React.FC = () => {
  return (
    <main className="bg-white">
      <motion.section className="relative bg-gray-900 text-white" initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.6 }}>
        <img src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1500" alt="Video editing" className="w-full h-72 object-cover opacity-75" />
        <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
          <motion.div variants={fadeUp}>
            <h1 className="text-4xl sm:text-6xl font-bold text-pink-400">Video Editing</h1>
            <p className="mt-4 text-lg sm:text-xl max-w-xl mx-auto">Editing, motion graphics and short-form ads that convert viewers into customers.</p>
          </motion.div>
        </div>
      </motion.section>

      <section className="py-12 px-6 bg-white">
        <motion.h2 className="text-2xl font-semibold text-gray-800 text-center mb-6" initial="hidden" whileInView="visible" variants={fadeUp}>Services</motion.h2>

        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            { title: "Ad Editing", desc: "Short-form ad edits optimized for conversion." },
            { title: "Explainers & Demos", desc: "Product explainers and walkthroughs." },
            { title: "YouTube & Long-form", desc: "Full editing pipeline for longer videos." },
            { title: "Color & Sound", desc: "Color grading, audio cleanup and mastering." },
          ].map((item, idx) => (
            <motion.div key={idx} className="p-6 border rounded-lg hover:shadow-lg transition duration-300" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: idx * 0.12 }}>
              <h3 className="font-bold text-pink-600 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-12 px-6 bg-gray-50">
        <motion.h2 className="text-2xl font-semibold text-gray-800 text-center mb-6" initial="hidden" whileInView="visible" variants={fadeUp}>How we improve your business</motion.h2>
        <div className="max-w-3xl mx-auto text-gray-700">
          <p className="mb-4">
            Video content drives engagement. We create cutdowns, hooks and ad-ready sequences that boost watch-through and conversions across social platforms.
          </p>
          <p>
            Our workflow includes storyboarding, editing, motion graphics and export presets optimized for every placement.
          </p>
        </div>
      </section>

      <section className="py-12 px-6 bg-white">
        <motion.h2 className="text-2xl font-semibold text-gray-800 text-center mb-8" initial="hidden" whileInView="visible" variants={fadeUp}>Featured Projects</motion.h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
          <motion.div className="border rounded-lg overflow-hidden shadow" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}>
            <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800" alt="Ad edit" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-bold text-pink-600">Ad Campaign Edits</h3>
              <p className="text-gray-600 mt-2">Short form ad edits performing across Facebook and Reels.</p>
            </div>
          </motion.div>

          <motion.div className="border rounded-lg overflow-hidden shadow" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}>
            <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800" alt="Explainer" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-bold text-pink-600">Explainer Videos</h3>
              <p className="text-gray-600 mt-2">Product explainers that improved demo signups.</p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default VideoEditing;
