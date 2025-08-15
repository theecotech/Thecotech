import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import CV from './CV';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCVOpen, setIsCVOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (location.pathname === '/' && location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) setTimeout(() => element.scrollIntoView({ behavior: 'smooth' }), 100);
    }
  }, [location]);

  const handleNavClick = (item: string) => {
    if (item === 'portfolio') {
      setIsCVOpen(true);
      setIsMenuOpen(false);
      return;
    }
    if (location.pathname === '/') {
      if (item === 'home') window.scrollTo({ top: 0, behavior: 'smooth' });
      else document.getElementById(item)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/', { state: { scrollTo: item } });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      whileHover={{ scale: 1.02 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all bg-white duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
         <motion.div
  onClick={() => {
    navigate('/'); // navigate to home page
    window.scrollTo({ top: 0, behavior: 'smooth' }); // scroll to top
  }}
  className="flex items-center cursor-pointer"
  whileHover={{ scale: 1.05, rotate: [0, 2, -2, 0] }}
  transition={{ type: 'spring', stiffness: 300 }}
>
  <div className="text-2xl font-bold text-gray-900">
    The<span className="text-blue-600">EcoTech</span>
  </div>
</motion.div>


          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['Home', 'Services', 'About', 'Portfolio', 'Contact'].map((item) => (
              <motion.button
                key={item}
                onClick={() => handleNavClick(item.toLowerCase())}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
                whileHover={{ scale: 1.1, y: -2 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {item}
              </motion.button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t">
            {['Home', 'Services', 'About', 'Portfolio', 'Contact'].map((item) => (
              <motion.button
                key={item}
                onClick={() => handleNavClick(item.toLowerCase())}
                className="block w-full text-left py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {item}
              </motion.button>
            ))}
          </nav>
        )}
      </div>

      <CV isOpen={isCVOpen} onClose={() => setIsCVOpen(false)} />
    </motion.header>
  );
};

export default Header;
