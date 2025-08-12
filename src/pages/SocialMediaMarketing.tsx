import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const SocialMediaMarketing: React.FC = () => {
  return (
    <main className="bg-white">
      {/* Hero */}
      <motion.section
        className="relative bg-gray-900 text-white"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ duration: 0.6 }}
      >
        <img
          src="https://www.beingdigitalz.com/blog/wp-content/uploads/2025/01/types-of-social-media-marketing.png"
          alt="Social media marketing"
          className="w-full h-72 object-cover opacity-75"
        />
        <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
          <motion.div variants={fadeUp}>
            <h1 className="text-4xl sm:text-6xl font-bold text-violet-500">
              Social Media Marketing
            </h1>
            <p className="mt-4 text-lg sm:text-xl max-w-xl mx-auto">
              Strategy, creative & ads to grow your brand — by <span className="font-bold">EcoTech</span>
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Areas of Expertise */}
      <section className="py-12 px-6 bg-white">
        <motion.h2
          className="text-2xl font-semibold text-gray-800 text-center mb-6"
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
        >
          Areas of Expertise
        </motion.h2>

        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            { title: "Content Strategy", desc: "Planning that scales and converts." },
            { title: "Paid Social", desc: "ROI-first ad campaigns." },
            { title: "Creative Production", desc: "High-performing visual content." },
            { title: "Growth & Community", desc: "Organic growth and engagement." },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="p-6 border rounded-lg hover:shadow-lg transition duration-300"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.15 }}
            >
              <h3 className="font-bold text-violet-500 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-12 px-6 bg-gray-50">
        <motion.h2
          className="text-2xl font-semibold text-gray-800 text-center mb-6"
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
        >
          Tools & Platforms
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-8">
          {["Instagram", "Facebook Ads", "TikTok", "Analytics"].map((tech, idx) => (
            <motion.span
              key={tech}
              className="text-lg font-semibold text-violet-600 border-b-2 border-violet-600 pb-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.15, color: "#8b5cf6" }}
              transition={{ delay: idx * 0.15 }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-12 px-6 bg-white">
        <motion.h2
          className="text-2xl font-semibold text-gray-800 text-center mb-8"
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
        >
          Recent Wins
        </motion.h2>

        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            {
              img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800",
              title: "Fintech Growth Campaign",
              desc: "3x follower growth and 35% lower CPL through creative testing.",
            },
            {
              img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800",
              title: "Product Launch",
              desc: "Cross-platform launch that drove pre-orders and high engagement.",
            },
          ].map((p, idx) => (
            <motion.div
              key={idx}
              className="border rounded-lg overflow-hidden shadow hover:shadow-xl transition duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <img src={p.img} alt={p.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-bold text-violet-500">{p.title}</h3>
                <p className="text-gray-600 mt-2">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default SocialMediaMarketing;
