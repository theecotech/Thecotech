import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const WebsiteDevelopment: React.FC = () => {
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
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1500"
          alt="Website development"
          className="w-full h-72 object-cover opacity-70"
        />
        <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
          <motion.div variants={fadeUp}>
            <h1 className="text-4xl sm:text-6xl font-bold text-blue-400">
              Website Development
            </h1>
            <p className="mt-4 text-lg sm:text-xl max-w-xl mx-auto">
              High-performance, SEO-ready websites by{" "}
              <span className="font-bold">EcoTech</span>
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
            { title: "Responsive Design", desc: "Optimized for all devices." },
            { title: "SEO Optimization", desc: "Fast loading & search friendly." },
            { title: "Component Architecture", desc: "Reusable, scalable code." },
            { title: "Hosting & CI/CD", desc: "Smooth deployments & monitoring." },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="p-6 border rounded-lg hover:shadow-lg transition duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.2 }}
            >
              <h3 className="font-bold text-blue-500 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Technologies We Use */}
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
          {["React", "Next.js", "Tailwind", "Node.js"].map((tech, idx) => (
            <motion.span
              key={tech}
              className="text-lg font-semibold text-blue-500 border-b-2 border-blue-500 pb-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.2, color: "#1E3A8A" }}
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
          {/* Project 1 */}
          <motion.div
            className="border rounded-lg overflow-hidden shadow hover:shadow-xl transition duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <img
              src="https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=800"
              alt="Eco Shop Redesign"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold text-blue-500">
                Eco Shop Redesign
              </h3>
              <p className="text-gray-600 mt-2">
                Redesigned with Next.js & GraphQL to improve performance and
                increase conversions by 40%.
              </p>
            </div>
          </motion.div>

          {/* Project 2 */}
          <motion.div
            className="border rounded-lg overflow-hidden shadow hover:shadow-xl transition duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <img
              src="https://images.unsplash.com/photo-1487014679447-9f8336841d58?auto=format&fit=crop&w=800"
              alt="Corporate Website Launch"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold text-blue-500">
                Corporate Website Launch
              </h3>
              <p className="text-gray-600 mt-2">
                Delivered a high-speed, mobile-friendly corporate site for a
                Fortune 500 client using React & Tailwind.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default WebsiteDevelopment;
