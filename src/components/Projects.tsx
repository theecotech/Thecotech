// import React from "react";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";

// const projects = [
//   {
//     title: "AI Agent for E-Commerce",
//     description:
//       "A powerful AI agent that automates customer support and sales for online stores.",
//     image: "./public/project1.png", // replace with your image
//     link: "/projects/ai-agent",
//   },
//   {
//     title: "WordPress Website Redesign",
//     description:
//       "A modern, SEO-optimized WordPress site designed for a growing business in Lahore.",
//     image: "./public/project2.png",
//     link: "/projects/wordpress-redesign",
//   },
//   {
//     title: "Custom Web App",
//     description:
//       "A scalable custom application built to streamline operations for a local startup.",
//     image: "./public/project3.png",
//     link: "/projects/custom-app",
//   },
// ];

// const Projects = () => {
//   return (
//     <section id="projects" className="py-20 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//         <motion.h2
//           className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//         >
//           Our <span className="text-blue-600">Projects</span>
//         </motion.h2>

//         <motion.p
//           className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ delay: 0.2, duration: 0.6 }}
//         >
//           Explore some of our featured projects that showcase how we help
//           businesses build smarter and scale faster.
//         </motion.p>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {projects.map((project, index) => (
//             <motion.div
//               key={index}
//               className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300"
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.2, duration: 0.8 }}
//             >
//               <Link to={project.link}>
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="w-full h-56 object-cover"
//                 />
//                 <div className="p-6 text-left">
//                   <h3 className="text-xl font-semibold text-gray-900 mb-2">
//                     {project.title}
//                   </h3>
//                   <p className="text-gray-600 text-sm leading-relaxed mb-4">
//                     {project.description}
//                   </p>
//                   <span className="text-blue-600 font-medium hover:underline">
//                     View Project →
//                   </span>
//                 </div>
//               </Link>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;


import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "AI Agent for E-Commerce",
    description:
      "A powerful AI agent that automates customer support and sales for online stores.",
    image: "/project1.png", // ✅ public folder image
    link: "/projects/project1",
  },
  {
    title: "WordPress Website Redesign",
    description:
      "A modern, SEO-optimized WordPress site designed for a growing business in Lahore.",
    image: "/project2.png",
    link: "/projects/project2",
  },
  {
    title: "Wordpress website for offering services",
    description:
      "A scalable custom application built to streamline operations for a local startup.",
    image: "/project3.png",
    link: "/projects/project3",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Our <span className="text-blue-600">Projects</span>
        </motion.h2>

        <motion.p
          className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Explore some of our featured projects that showcase how we help
          businesses build smarter and scale faster.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              <Link to={project.link}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6 text-left">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <span className="text-blue-600 font-medium hover:underline">
                    View Project →
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

