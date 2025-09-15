// import React from "react";
// import { motion } from "framer-motion";

// const fadeUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: { opacity: 1, y: 0 },
// };

// const Blog: React.FC = () => {
//   return (
//     <main className="bg-white">
//       {/* Hero */}
//       <motion.section
//         className="relative bg-gray-900 text-white"
//         initial="hidden"
//         animate="visible"
//         variants={fadeUp}
//         transition={{ duration: 0.6 }}
//       >
//         <img
//           src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1500"
//           alt="Blog background"
//           className="w-full h-72 object-cover opacity-70"
//         />
//         <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
//           <motion.div variants={fadeUp}>
//             <h1 className="text-4xl sm:text-6xl font-bold text-blue-400">
//               Our Blog
//             </h1>
//             <p className="mt-4 text-lg sm:text-xl max-w-xl mx-auto">
//               Insights, tutorials, and stories from{" "}
//               <span className="font-bold">EcoTech</span>
//             </p>
//           </motion.div>
//         </div>
//       </motion.section>

//       {/* Featured Article */}
//       <section className="py-12 px-6 bg-gray-50">
//         <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
//           <motion.img
//             src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800"
//             alt="Featured Blog"
//             className="rounded-lg shadow-lg object-cover"
//             initial="hidden"
//             whileInView="visible"
//             variants={fadeUp}
//           />
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             variants={fadeUp}
//             transition={{ delay: 0.2 }}
//           >
//             <h2 className="text-2xl font-bold text-blue-500 mb-2">
//               The Future of Web Development
//             </h2>
//             <p className="text-gray-600 mb-4">
//               Discover how AI, serverless technology, and Jamstack are shaping
//               the next generation of websites.
//             </p>
//             <a
//               href="#"
//               className="inline-block px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
//             >
//               Read More
//             </a>
//           </motion.div>
//         </div>
//       </section>

//       {/* Blog Posts Grid */}
//       <section className="py-12 px-6 bg-white">
//         <motion.h2
//           className="text-2xl font-semibold text-gray-800 text-center mb-8"
//           initial="hidden"
//           whileInView="visible"
//           variants={fadeUp}
//         >
//           Latest Posts
//         </motion.h2>
//         <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {[
//             {
//               title: "10 SEO Tips for 2025",
//               img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800",
//               desc: "Boost your site ranking with these actionable SEO strategies.",
//               date: "Sept 10, 2025",
//             },
//             {
//               title: "Why Responsive Design Matters",
//               img: "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=800",
//               desc: "Learn why mobile-first design is critical in modern web.",
//               date: "Aug 25, 2025",
//             },
//             {
//               title: "AI in E-commerce",
//               img: "https://images.unsplash.com/photo-1508898578281-774ac4893c0c?auto=format&fit=crop&w=800",
//               desc: "How AI chatbots and personalization are transforming online shops.",
//               date: "Aug 5, 2025",
//             },
//           ].map((post, idx) => (
//             <motion.div
//               key={idx}
//               className="border rounded-lg overflow-hidden shadow hover:shadow-xl transition duration-300"
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: idx * 0.2 }}
//             >
//               <img
//                 src={post.img}
//                 alt={post.title}
//                 className="w-full h-48 object-cover"
//               />
//               <div className="p-4">
//                 <p className="text-sm text-gray-500">{post.date}</p>
//                 <h3 className="text-lg font-bold text-blue-500 mt-1">
//                   {post.title}
//                 </h3>
//                 <p className="text-gray-600 mt-2">{post.desc}</p>
//                 <a
//                   href="#"
//                   className="mt-3 inline-block text-blue-600 font-semibold hover:underline"
//                 >
//                   Read More →
//                 </a>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* Categories */}
//       <section className="py-12 px-6 bg-gray-50">
//         <motion.h2
//           className="text-2xl font-semibold text-gray-800 text-center mb-6"
//           initial="hidden"
//           whileInView="visible"
//           variants={fadeUp}
//         >
//           Categories
//         </motion.h2>
//         <div className="flex flex-wrap justify-center gap-4">
//           {["Web Development", "SEO", "AI", "Design", "E-commerce"].map(
//             (cat, idx) => (
//               <motion.span
//                 key={cat}
//                 className="px-4 py-2 bg-white border rounded-lg shadow hover:bg-blue-50 cursor-pointer transition"
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: idx * 0.2 }}
//               >
//                 {cat}
//               </motion.span>
//             )
//           )}
//         </div>
//       </section>
//     </main>
//   );
// };

// export default Blog;



import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const blogPosts = [
  {
    slug: "ai-agents-for-business-lahore",
    title: "How AI Agents Are Transforming Businesses in Lahore (2025)",
    date: "September 2025",
    excerpt:
      "Discover how The Eco Tech helps businesses in Lahore automate customer support, sales, and workflows with AI agents.",
  },
  {
    slug: "wordpress-websites-seo-lahore",
    title: "Why WordPress Websites Dominate SEO for Lahore Businesses",
    date: "September 2025",
    excerpt:
      "Learn why WordPress is still the #1 choice for SEO-friendly websites and how The Eco Tech builds optimized sites for local companies.",
  },
  {
    slug: "future-of-ai-in-small-business",
    title: "The Future of AI in Small Businesses: A Lahore Perspective",
    date: "September 2025",
    excerpt:
      "AI is no longer just for big corporations. See how small businesses in Lahore can benefit from affordable AI tools today.",
  },
  {
    slug: "ai-customer-support-lahore",
    title: "AI-Powered Customer Support: Helping Lahore Businesses Save Time",
    date: "September 2025",
    excerpt:
      "AI chatbots reduce customer wait times and save costs for Lahore businesses. Learn how The Eco Tech delivers results.",
  },
  {
    slug: "wordpress-vs-custom-lahore",
    title: "WordPress vs Custom Websites: What’s Best for Lahore Businesses?",
    date: "September 2025",
    excerpt:
      "Not sure between WordPress or custom websites? The Eco Tech explains the best choice for Lahore businesses.",
  },
  {
    slug: "ai-sales-automation-lahore",
    title: "Boosting Sales with AI Automation in Lahore’s Market",
    date: "September 2025",
    excerpt:
      "AI automation is transforming sales processes in Lahore. Here’s how your business can benefit.",
  },
  {
    slug: "seo-for-lahore-startups",
    title: "SEO Tips for Startups in Lahore: Ranking Fast on Google",
    date: "September 2025",
    excerpt:
      "Startups need quick visibility. The Eco Tech shares actionable SEO tips for Lahore-based companies.",
  },
  {
    slug: "wordpress-security-lahore",
    title: "Securing Your WordPress Website in Lahore: A 2025 Guide",
    date: "September 2025",
    excerpt:
      "Protect your WordPress website with The Eco Tech’s best security practices tailored for Lahore businesses.",
  },
  {
    slug: "ai-marketing-lahore",
    title: "AI-Powered Marketing for Lahore Businesses",
    date: "September 2025",
    excerpt:
      "Discover how AI-driven marketing campaigns can boost ROI for Lahore-based businesses.",
  },
  {
    slug: "wordpress-speed-lahore",
    title: "How to Speed Up Your WordPress Website in Lahore",
    date: "September 2025",
    excerpt:
      "A fast website means more customers. Learn how The Eco Tech optimizes WordPress performance.",
  },
  {
    slug: "ai-for-ecommerce-lahore",
    title: "How AI is Revolutionizing E-Commerce in Lahore",
    date: "September 2025",
    excerpt:
      "E-commerce in Lahore is evolving with AI tools. Here’s how your online store can benefit.",
  },
  {
    slug: "wordpress-design-trends-lahore",
    title: "Top WordPress Design Trends in Lahore for 2025",
    date: "September 2025",
    excerpt:
      "Stay ahead with 2025’s top design trends for WordPress websites in Lahore.",
  },
  {
    slug: "ai-small-business-benefits",
    title: "5 Ways AI Helps Small Businesses in Lahore Compete with Giants",
    date: "September 2025",
    excerpt:
      "AI empowers small businesses in Lahore to compete with big players. See how The Eco Tech makes it possible.",
  },
];

const Blog: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-blue-600 text-white py-16 text-center">
        <h1 className="text-4xl font-bold">The Eco Tech Blog</h1>
        <p className="mt-2 text-lg opacity-90">
          Insights on AI, WordPress, and digital growth in Lahore
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post, index) => (
          <motion.div
            key={post.slug}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-shadow"
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              {post.title}
            </h2>
            <p className="text-sm text-gray-500 mb-4">{post.date}</p>
            <p className="text-gray-700 mb-4">{post.excerpt}</p>
            <Link
              to={`/blog/${post.slug}`}
              className="text-blue-600 font-medium hover:underline"
            >
              Read More →
            </Link>
          </motion.div>
        ))}
      </section>
    </div>
  );
};

export default Blog;
