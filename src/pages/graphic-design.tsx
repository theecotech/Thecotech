// src/pages/GraphicDesign.tsx
import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const GraphicDesign: React.FC = () => {
  return (
    <main className="bg-white">
      <motion.section
        className="relative bg-gray-900 text-white"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ duration: 0.6 }}
      >
        <img
          src="https://images.unsplash.com/photo-1526378722269-3c8a6b3b2f3b?auto=format&fit=crop&w=1500"
          alt="Graphic design"
          className="w-full h-72 object-cover opacity-70"
        />
        <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
          <motion.div variants={fadeUp}>
            <h1 className="text-4xl sm:text-6xl font-bold text-indigo-400">Graphic Designing</h1>
            <p className="mt-4 text-lg sm:text-xl max-w-xl mx-auto">
              Brand identity, creatives, and design that communicates your value.
            </p>
          </motion.div>
        </div>
      </motion.section>

      <section className="py-12 px-6 bg-white">
        <motion.h2 className="text-2xl font-semibold text-gray-800 text-center mb-6" initial="hidden" whileInView="visible" variants={fadeUp}>
          What We Offer
        </motion.h2>

        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            { title: "Branding & Logo", desc: "Logo systems, brand guidelines and visual identity." },
            { title: "Marketing Creatives", desc: "Social ads, banners and campaign visuals." },
            { title: "Print & Packaging", desc: "Stationery, packaging and print-ready artwork." },
            { title: "Motion & GIFs", desc: "Short motion clips and animated social creatives." },
          ].map((item, idx) => (
            <motion.div key={idx} className="p-6 border rounded-lg hover:shadow-lg transition duration-300" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: idx * 0.15 }}>
              <h3 className="font-bold text-indigo-600 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-12 px-6 bg-gray-50">
        <motion.h2 className="text-2xl font-semibold text-gray-800 text-center mb-6" initial="hidden" whileInView="visible" variants={fadeUp}>How we improve your business</motion.h2>
        <div className="max-w-3xl mx-auto text-gray-700">
          <p className="mb-4">
            Strong visuals build trust and recognition. We align design with your strategy — increasing CTR on ads, lifting brand recall, and improving conversions across channels.
          </p>
          <p>
            We deliver brand systems and creative assets that are production-ready and optimized for social, web, and print — so your team can scale campaigns quickly.
          </p>
        </div>
      </section>

      <section className="py-12 px-6 bg-white">
        <motion.h2 className="text-2xl font-semibold text-gray-800 text-center mb-8" initial="hidden" whileInView="visible" variants={fadeUp}>Featured Work</motion.h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
          <motion.div className="border rounded-lg overflow-hidden shadow" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}>
            <img src="https://images.unsplash.com/photo-1555949963-aa79dcee981d?auto=format&fit=crop&w=800" alt="Branding project" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-bold text-indigo-600">Brand Refresh</h3>
              <p className="text-gray-600 mt-2">Complete rebrand including logo, color system, and marketing assets that increased engagement by 32%.</p>
            </div>
          </motion.div>

          <motion.div className="border rounded-lg overflow-hidden shadow" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}>
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800" alt="Social creatives" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-bold text-indigo-600">Social Campaign</h3>
              <p className="text-gray-600 mt-2">Visual campaign and motion creatives that boosted ad CTR and reduced CPA.</p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default GraphicDesign;
