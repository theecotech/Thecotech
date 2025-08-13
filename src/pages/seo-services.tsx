// src/pages/seo.tsx
import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const SeoServices: React.FC = () => {
  return (
    <main className="bg-white">
      <motion.section className="relative bg-gray-900 text-white" initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.6 }}>
        <img src="https://images.unsplash.com/photo-1508385082359-fd1b3c02f3b0?auto=format&fit=crop&w=1500" alt="SEO services" className="w-full h-72 object-cover opacity-75" />
        <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
          <motion.div variants={fadeUp}>
            <h1 className="text-4xl sm:text-6xl font-bold text-green-300">SEO Services</h1>
            <p className="mt-4 text-lg sm:text-xl max-w-xl mx-auto">Technical SEO, content strategy and growth-focused organic tactics.</p>
          </motion.div>
        </div>
      </motion.section>

      <section className="py-12 px-6 bg-white">
        <motion.h2 className="text-2xl font-semibold text-gray-800 text-center mb-6" initial="hidden" whileInView="visible" variants={fadeUp}>Core Services</motion.h2>

        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            { title: "Technical SEO", desc: "Crawlability, site speed and index optimization." },
            { title: "On-Page SEO", desc: "Content optimization, schema, and meta best-practices." },
            { title: "Content Strategy", desc: "Topic clusters, keyword research and editorial calendars." },
            { title: "Link Building", desc: "White-hat outreach and high-quality placements." },
          ].map((item, idx) => (
            <motion.div key={idx} className="p-6 border rounded-lg hover:shadow-lg transition duration-300" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: idx * 0.12 }}>
              <h3 className="font-bold text-green-600 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-12 px-6 bg-gray-50">
        <motion.h2 className="text-2xl font-semibold text-gray-800 text-center mb-6" initial="hidden" whileInView="visible" variants={fadeUp}>How we improve your business</motion.h2>
        <div className="max-w-3xl mx-auto text-gray-700">
          <p className="mb-4">
            Organic growth compounds. We prioritize technical fixes, high-value content and measurable link-building to drive sustainable traffic growth and qualified leads.
          </p>
          <p>
            Actionable reports, A/B testing for title/meta, and continuous content improvements produce long-term ROI beyond ads.
          </p>
        </div>
      </section>

      <section className="py-12 px-6 bg-white">
        <motion.h2 className="text-2xl font-semibold text-gray-800 text-center mb-8" initial="hidden" whileInView="visible" variants={fadeUp}>Case Studies</motion.h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
          <motion.div className="border rounded-lg overflow-hidden shadow" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}>
            <div className="p-4">
              <h3 className="text-lg font-bold text-green-600">E-commerce SEO Lift</h3>
              <p className="text-gray-600 mt-2">Technical audit + content strategy increased organic revenue by 85% over 6 months.</p>
            </div>
          </motion.div>

          <motion.div className="border rounded-lg overflow-hidden shadow" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}>
            <div className="p-4">
              <h3 className="text-lg font-bold text-green-600">Local SEO Wins</h3>
              <p className="text-gray-600 mt-2">Local optimization and citation cleanup helped multiple locations move to top 3 for priority keywords.</p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default SeoServices;
