import React from 'react';
import { Target, Users, Zap, Award } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Target size={32} />,
      title: 'Results-Driven',
      description: 'Every project is designed with your business goals in mind, ensuring measurable results and ROI.'
    },
    {
      icon: <Users size={32} />,
      title: 'Client-Focused',
      description: 'We build long-term partnerships with our clients, providing ongoing support and strategic guidance.'
    },
    {
      icon: <Zap size={32} />,
      title: 'Innovation First',
      description: 'We stay ahead of technology trends to deliver cutting-edge solutions that give you a competitive edge.'
    },
    {
      icon: <Award size={32} />,
      title: 'Quality Guaranteed',
      description: 'Our commitment to excellence means every project meets the highest standards of quality and performance.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-blue-600">TheEcoTech</span>
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              TheEcoTech is a full-service digital agency dedicated to helping businesses 
              scale online through innovative technology solutions and strategic digital marketing.
            </p>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our team combines technical expertise with creative vision to deliver 
              custom websites, AI automation tools, and comprehensive digital marketing 
              strategies that drive real business growth.
            </p>

            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-600 rounded-full mr-4"></div>
                <span className="text-gray-700 font-medium">Founded with a mission to democratize digital success</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-600 rounded-full mr-4"></div>
                <span className="text-gray-700 font-medium">Specialized in serving startups and growing businesses</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-600 rounded-full mr-4"></div>
                <span className="text-gray-700 font-medium">Committed to delivering measurable results</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-blue-600 mb-4">
                  {value.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 bg-gradient-to-r from-blue-600 to-gray-900 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join the businesses that have already scaled their online presence with TheEcoTech's 
            innovative solutions and strategic approach.
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg"
          >
            Let's Talk About Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;