import React from 'react';
import { X, Mail, Phone, MapPin, Users, Code, Briefcase, Zap, Award } from 'lucide-react';

interface CVProps {
  isOpen: boolean;
  onClose: () => void;
}

const CV: React.FC<CVProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleDownload = () => {
    alert('CV download feature would be implemented here');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-[9999] flex justify-center items-start overflow-y-auto py-10 px-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center rounded-t-2xl">
          <h2 className="text-2xl font-bold text-gray-900">TheEcoTech Agency Portfolio</h2>
          <div className="flex items-center space-x-4">
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
              aria-label="Close CV"
            >
              <X size={24} />
            </button>
          </div>
        </div>

        {/* CV Content */}
        <div className="p-8">
          {/* Header Section */}
          <div className="text-center mb-8 pb-8 border-b border-gray-200">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-gray-900 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white text-2xl font-bold">TT</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">TheEcoTech Digital Agency</h1>
            <p className="text-xl text-blue-600 mb-4">Full-Service Digital Solutions Provider</p>

            <div className="flex flex-wrap justify-center gap-6 text-gray-600">
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <span>info@theecotech.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <span>+92 3290079175</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={16} />
                <span>Remote-First Agency</span>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Users className="mr-3 text-blue-600" size={24} />
              About TheEcoTech
            </h2>
            <p className="text-gray-700 leading-relaxed">
              TheEcoTech is a cutting-edge digital agency specializing in custom web development,
              AI automation, and strategic digital marketing. We help startups, e-commerce businesses,
              and local brands scale online through innovative technology solutions and data-driven strategies.
              Our mission is to democratize digital success by making advanced technology accessible to businesses of all sizes.
            </p>
          </div>

          {/* Core Services */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Code className="mr-3 text-blue-600" size={24} />
              Core Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Wordpress Website Development</h3>
                <p className="text-gray-600 text-sm">Premium Themes and Plugins</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">AI Automation</h3>
                <p className="text-gray-600 text-sm">Chatbots, Process Automation, AI Agents</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Custom Website Development</h3>
                <p className="text-gray-600 text-sm">React, Next.js, Javascript , TypeScript, Tailwind CSS</p>
              </div>
             
              
             
            </div>
          </div>

          {/* Key Projects */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Briefcase className="mr-3 text-blue-600" size={24} />
              Featured Projects
            </h2>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="text-lg font-semibold text-gray-900">E-commerce Platform Redesign</h3>
                <p className="text-blue-600 font-medium">Wordpress Development • 2024</p>
                <p className="text-gray-700 mt-2">
                  Complete redesign and optimization of a multi-vendor e-commerce platform,
                  resulting in 150% increase in conversion rates and 200% improvement in mobile performance.
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Wordpress</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">JavaScript</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Mobile Optimization</span>
                </div>
              </div>

              <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="text-lg font-semibold text-gray-900">AI Customer Support System</h3>
                <p className="text-blue-600 font-medium">AI Development • 2024</p>
                <p className="text-gray-700 mt-2">
                  Developed an intelligent chatbot system that handles 90% of customer inquiries automatically,
                  reducing response time by 80% and improving customer satisfaction scores.
                </p>
               
              </div>

              <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="text-lg font-semibold text-gray-900">Restaurant Management Platform</h3>
                <p className="text-blue-600 font-medium">Full-Stack Development • 2024</p>
                <p className="text-gray-700 mt-2">
                  Built a comprehensive restaurant management system with order tracking, inventory management,
                  and real-time analytics dashboard, serving 50+ restaurant locations.
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">React</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Node.js</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Database Design</span>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Zap className="mr-3 text-blue-600" size={24} />
              Technical Expertise
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Frontend Development</h3>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'JavaScript', 'HTML5', 'CSS3'].map((skill) => (
                    <span key={skill} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
             
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Platforms & Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {['Shopify', 'WordPress', 'AWS', 'Vercel', 'Git', 'Docker'].map((skill) => (
                    <span key={skill} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Award className="mr-3 text-blue-600" size={24} />
              Key Achievements
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <div>
                  <p className="font-medium text-gray-900">50+ Projects Delivered</p>
                  <p className="text-gray-600 text-sm">Successfully completed projects across various industries</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <div>
                  <p className="font-medium text-gray-900">100% Client Satisfaction</p>
                  <p className="text-gray-600 text-sm">Maintained perfect client satisfaction rating</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <div>
                  <p className="font-medium text-gray-900">24/7 Support</p>
                  <p className="text-gray-600 text-sm">Round-the-clock support for all clients</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <div>
                  <p className="font-medium text-gray-900">Industry Recognition</p>
                  <p className="text-gray-600 text-sm">Featured in leading tech publications</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-gray-900 rounded-2xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Work Together?</h3>
            <p className="text-blue-100 mb-6">
              Let's discuss how TheEcoTech can help transform your business with innovative digital solutions.
            </p>
            <button
              onClick={() => {
                onClose();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CV;
