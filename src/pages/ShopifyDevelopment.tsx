import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const ShopifyDevelopment: React.FC = () => {
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
          src="https://images.unsplash.com/photo-1542831371-d531d36971e6?auto=format&fit=crop&w=1500"
          alt="Shopify development"
          className="w-full h-72 object-cover opacity-70"
        />
        <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
          <motion.div variants={fadeUp}>
            <h1 className="text-4xl sm:text-6xl font-bold text-green-400">
              Shopify Development
            </h1>
            <p className="mt-4 text-lg sm:text-xl max-w-xl mx-auto">
              Scalable, high-performing Shopify stores by{" "}
              <span className="font-bold">EcoTech</span>.
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
          transition={{ duration: 0.5 }}
        >
          Areas of Expertise
        </motion.h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            { title: "Custom Theme Development", desc: "Unique, branded store designs." },
            { title: "App Integration", desc: "Connect your store to powerful tools." },
            { title: "Conversion Optimization", desc: "Maximize sales with strategic design." },
            { title: "Speed Optimization", desc: "Fast loading for better SEO and UX." },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="p-6 border rounded-lg hover:shadow-lg transition duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.2 }}
            >
              <h3 className="font-bold text-green-500 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Technologies */}
      <section className="py-12 px-6 bg-gray-50">
        <motion.h2
          className="text-2xl font-semibold text-gray-800 text-center mb-6"
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
        >
          Technologies We Use
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-8">
          {["Shopify", "Liquid", "React", "Tailwind"].map((tech, idx) => (
            <motion.span
              key={tech}
              className="text-lg font-semibold text-green-500 border-b-2 border-green-500 pb-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.2, color: "#065F46" }}
              transition={{ delay: idx * 0.2 }}
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
          Featured Projects
        </motion.h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            {
              img: "https://tint.creativemarket.com/CpgTobRA1N4lDEVn7d9s1CwBebE4U3_F9EYek3uc4oM/width:1200/height:800/gravity:nowe/rt:fill-down/el:1/czM6Ly9maWxlcy5jcmVhdGl2ZW1hcmtldC5jb20vaW1hZ2VzL3NjcmVlbnNob3RzL3Byb2R1Y3RzLzU3NS81NzU1LzU3NTUyNzUvZWNvbWFydC1wcmV2aWV3LTE4MjB4MTIxNC1vLmpwZw?1578623373",
              title: "EcoMart",
              desc: "Shopify store with advanced filtering & multi-currency support.",
            },
            {
              img: "https://wpopal.com/wp-content/uploads/2021/11/qos-best-fashion-store-wordpress-theme.jpg",
              title: "GreenStyle Apparel",
              desc: "Fashion store optimized for high traffic sales events.",
            },
          ].map((project, idx) => (
            <motion.div
              key={idx}
              className="border rounded-lg overflow-hidden shadow hover:shadow-xl transition duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-green-500">{project.title}</h3>
                <p className="text-gray-600 mt-2">{project.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default ShopifyDevelopment;
