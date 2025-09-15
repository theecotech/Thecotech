// import React from 'react';
// import { Code, Bot, Share2, ShoppingCart, WholeWord as Wordpress, Smartphone, Image as ImageIcon, Video, Search } from 'lucide-react';

// const Services = () => {
//   const services = [
//     {
//       icon: <Code size={40} />,
//       title: 'Custom Website Development',
//       description: 'Fully custom-coded websites built from scratch with modern technologies, optimized for performance and user experience.',
//       features: ['React & Next.js', 'Mobile Responsive', 'SEO Optimized', 'Fast Loading']
//     },
//     {
//       icon: <ShoppingCart size={40} />,
//       title: 'Shopify Development',
//       description: 'Complete e-commerce solutions on Shopify with custom themes, integrations, and optimization for maximum conversions.',
//       features: ['Custom Themes', 'App Integration', 'Payment Setup', 'Analytics Tracking']
//     },
//     {
//       icon: <Wordpress size={40} />,
//       title: 'WordPress Development',
//       description: 'Professional WordPress websites with custom themes, plugins, and content management systems tailored to your needs.',
//       features: ['Custom Themes', 'Plugin Development', 'CMS Setup', 'Security Optimization']
//     },
//     {
//       icon: <Bot size={40} />,
//       title: 'AI Chatbot Development',
//       description: 'Intelligent chatbots and AI agents that automate customer service, lead generation, and business processes.',
//       features: ['24/7 Automation', 'Lead Generation', 'Customer Support', 'Integration Ready']
//     },
//     {
//       icon: <Share2 size={40} />,
//       title: 'Social Media Marketing',
//       description: 'Strategic social media campaigns that build brand awareness, engage audiences, and drive conversions.',
//       features: ['Content Strategy', 'Ad Campaigns', 'Analytics Reporting', 'Brand Building']
//     },
//     {
//       icon: <Smartphone size={40} />,
//       title: 'Full Business Management',
//       description: 'Complete social media business management including content creation, scheduling, and community management.',
//       features: ['Content Creation', 'Daily Management', 'Community Building', 'Growth Strategy']
//     },
//     // New services
//     {
//       icon: <ImageIcon size={40} />,
//       title: 'Graphic Designing',
//       description: 'Creative and impactful designs for branding, marketing materials, and digital platforms.',
//       features: ['Logo Design', 'Brand Identity', 'Marketing Materials', 'Social Media Graphics']
//     },
//     {
//       icon: <Video size={40} />,
//       title: 'Video Editing',
//       description: 'High-quality video editing services for promotional, social media, and corporate content.',
//       features: ['Promo Videos', 'Social Media Clips', 'Corporate Videos', 'Motion Graphics']
//     },
//     {
//       icon: <Search size={40} />,
//       title: 'SEO Services',
//       description: 'Boost your search rankings and drive targeted traffic with proven SEO strategies.',
//       features: ['On-Page SEO', 'Off-Page SEO', 'Keyword Research', 'Performance Tracking']
//     }
//   ];

//   return (
//     <section id="services" className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
//             Our <span className="text-blue-600">Services</span>
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             From custom development to AI automation, we provide end-to-end digital solutions 
//             that help your business thrive in the digital age.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className="group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl hover:border-blue-200 transition-all duration-300 transform hover:-translate-y-2"
//             >
//               <div className="text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300">
//                 {service.icon}
//               </div>
              
//               <h3 className="text-xl font-semibold text-gray-900 mb-4">
//                 {service.title}
//               </h3>
              
//               <p className="text-gray-600 mb-6 leading-relaxed">
//                 {service.description}
//               </p>
              
//               <ul className="space-y-2">
//                 {service.features.map((feature, featureIndex) => (
//                   <li key={featureIndex} className="flex items-center text-sm text-gray-700">
//                     <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
//                     {feature}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>

//         <div className="text-center mt-16">
//           <button
//             onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
//             className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
//           >
//             Start Your Project
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;
// src/components/Services.tsx
import React from "react";
import { Code, ShoppingCart, Bot, Share2, Smartphone, Image, Video, Search } from "lucide-react";

const Services: React.FC = () => {
  const services = [
    {
      icon: <Code size={40} />,
      title: 'WordPress Development',
      description: 'Professional WordPress websites with custom themes, plugins, and content management systems tailored to your needs.',
      features: ['Custom Themes', 'Plugin Development', 'CMS Setup', 'Security Optimization']
    },
    {
      icon: <Bot size={40} />,
      title: 'AI Chatbot Development',
      description: 'Intelligent chatbots and AI agents that automate customer service, lead generation, and business processes.',
      features: ['24/7 Automation', 'Lead Generation', 'Customer Support', 'Integration Ready']
    },
    {
      icon: <Share2 size={40} />,
      title: 'Social Media Marketing',
      description: 'Strategic social media campaigns that build brand awareness, engage audiences, and drive conversions.',
      features: ['Content Strategy', 'Ad Campaigns', 'Analytics Reporting', 'Brand Building']
    },
    {
      icon: <Smartphone size={40} />,
      title: 'Full Business Management',
      description: 'Complete social media business management including content creation, scheduling, and community management.',
      features: ['Content Creation', 'Daily Management', 'Community Building', 'Growth Strategy']
    },

    {
      icon: <Image size={40} />,
      title: 'Graphic Designing',
      description: 'Branding, marketing creatives, and visual assets designed to make your business stand out.',
      features: ['Logo & Branding', 'Marketing Collateral', 'Social Creatives', 'Print-ready Files']
    },
    {
      icon: <Search size={40} />,
      title: 'SEO Services',
      description: 'Technical SEO, on-page optimization, and content strategy to increase organic traffic and rankings.',
      features: ['Keyword Research', 'Technical SEO Audit', 'Content Optimization', 'Link Building']
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-blue-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From custom development to AI automation and creative services, we provide end-to-end digital solutions that help your business thrive.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl hover:border-blue-200 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
