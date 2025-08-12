import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const AIChatbotDevelopment: React.FC = () => {
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
          src="https://frostbrowntodd.com/app/smush-webp/2024/04/digital-chatbot-ai-robot-application-conversation-assistant-ai-artificial-intelligence-concept-woman-using-mobile-smart-phone-chatting-with-digital-chatbot-customer-service-stockpack-gettyimages-600x350.jpg.webp"
          alt="AI chatbot development"
          className="w-full h-72 object-cover opacity-75"
        />
        <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
          <motion.div variants={fadeUp}>
            <h1 className="text-4xl sm:text-6xl font-bold text-indigo-400">
              AI Chatbot Development
            </h1>
            <p className="mt-4 text-lg sm:text-xl max-w-xl mx-auto">
              Conversational AI to automate support & drive conversions — by <span className="font-bold">EcoTech</span>
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
            { title: "Intent & Flow Design", desc: "Robust conversation flows that convert." },
            { title: "LLM Integration", desc: "OpenAI / other LLMs with RAG for accurate answers." },
            { title: "Multichannel", desc: "Deploy to web, WhatsApp, Messenger and more." },
            { title: "Analytics & Improvements", desc: "Conversation analytics and iterative tuning." },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="p-6 border rounded-lg hover:shadow-lg transition duration-300"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.15 }}
            >
              <h3 className="font-bold text-indigo-600 mb-2">{item.title}</h3>
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
          Technologies We Use
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-8">
          {["OpenAI", "RAG", "Node.js", "Dialogflow"].map((tech, idx) => (
            <motion.span
              key={tech}
              className="text-lg font-semibold text-indigo-600 border-b-2 border-indigo-600 pb-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.15, color: "#312E81" }}
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
          Featured Projects
        </motion.h2>

        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            {
              img: "https://res.cloudinary.com/smartsupp/image/upload/w_1972,h_1117,f_auto,c_fill/v1663570206/upload/Support_bot_for_online_businesses2_2x_onugpx.png",
              title: "SupportBot",
              desc: "24/7 support chatbot integrated with knowledge base, reduced tickets by 45%.",
            },
            {
              img: "https://govivace.com/wp-content/uploads/2025/07/AI-Sales-Assistant-1024x545.png",
              title: "Sales Assistant",
              desc: "Pre-sale qualification bot that increased demo requests by 30%.",
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
                <h3 className="text-lg font-bold text-indigo-600">{p.title}</h3>
                <p className="text-gray-600 mt-2">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default AIChatbotDevelopment;
