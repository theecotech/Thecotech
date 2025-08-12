import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const WordPressDevelopment: React.FC = () => {
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
          src="https://www.rlogical.com/wp-content/uploads/2023/04/wordpress-development.webp"
          alt="WordPress development"
          className="w-full h-72 object-cover opacity-75"
        />
        <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
          <motion.div variants={fadeUp}>
            <h1 className="text-4xl sm:text-6xl font-bold text-yellow-400">
              WordPress Development
            </h1>
            <p className="mt-4 text-lg sm:text-xl max-w-xl mx-auto">
              Reliable, editor-friendly WordPress & headless solutions from <span className="font-bold">EcoTech</span>
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
            { title: "Custom Themes & Plugins", desc: "Tailored WP themes and plugins built to spec." },
            { title: "Headless CMS", desc: "Headless WordPress with modern frontends (React/Next)." },
            { title: "Migrations & Audits", desc: "Smooth migrations, audits and performance tuning." },
            { title: "Editor Experience", desc: "Gutenberg blocks and intuitive authoring workflows." },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="p-6 border rounded-lg hover:shadow-lg transition duration-300"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.15 }}
            >
              <h3 className="font-bold text-yellow-600 mb-2">{item.title}</h3>
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
          {["WordPress", "PHP", "Gutenberg", "Headless (GraphQL)"].map((tech, idx) => (
            <motion.span
              key={tech}
              className="text-lg font-semibold text-yellow-600 border-b-2 border-yellow-600 pb-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.15, color: "#92400E" }}
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
              img: "https://scontent.flhe44-1.fna.fbcdn.net/v/t39.30808-6/494929253_122170999076346731_618549063524366338_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeEccMPNBFbdoGVIFkCq5x0oGXIwI78PVY8ZcjAjvw9VjxlVkbUBhdic_F2W2xlq48VdIe7g9ldFBtFSsoE12oui&_nc_ohc=Zu7JsuvaB8MQ7kNvwFe7ajh&_nc_oc=Adlo-vcylUj0f4f0MLVfLICGGMd38AplLiC9CTIwyb8olJrX3XFcMchewNkjhYKL_iM&_nc_zt=23&_nc_ht=scontent.flhe44-1.fna&_nc_gid=axTGCtvpi-mPARF49X6Gkw&oh=00_AfU87dPJOjwjHLp92HrKHRc0v7LNQU-Ukz9t5d-hOI4SVw&oe=689FD0E7",
              title: "Publisher Hub",
              desc: "Headless WordPress + React frontend for lightning-fast editorial experience.",
            },
            {
              img: "https://images.prismic.io/amazeeio/aBnGsvIqRLdaB5Pj_Renesas-Case-Study.jpg?auto=format%2Ccompress",
              title: "Enterprise Site Migration",
              desc: "Migrated legacy CMS to WP with improved SEO and editor workflows.",
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
                <h3 className="text-lg font-bold text-yellow-600">{p.title}</h3>
                <p className="text-gray-600 mt-2">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default WordPressDevelopment;
