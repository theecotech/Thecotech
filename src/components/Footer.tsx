// // src/components/Footer.tsx
// import React from "react";
// import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react";
// import { Link, useNavigate } from "react-router-dom";

// interface FooterProps {
//   setCvOpen: React.Dispatch<React.SetStateAction<boolean>>;
// }

// const Footer: React.FC<FooterProps> = ({ setCvOpen }) => {
//   const currentYear = new Date().getFullYear();
//   const navigate = useNavigate();

//   const quickLinks = [
//     { name: "Home", id: "home" },
//     { name: "Services", id: "services" },
//     { name: "About", id: "about" },
//     { name: "Portfolio", id: "CV" }, // Portfolio remains unchanged
//     { name: "Contact", id: "contact" },
//   ] as const;

//   const handleQuickLinkClick = (id: string) => {
//     if (!id) return;

//     // Keep portfolio behavior exactly the same
//     if (id === "CV") {
//       setCvOpen(true);
//       return;
//     }

//     // If the element exists on the current page — scroll to it
//     const el = document.getElementById(id);
//     if (el) {
//       el.scrollIntoView({ behavior: "smooth" });
//       return;
//     }

//     // Otherwise, navigate to home and then scroll to the anchor after a short delay.
//     // (Simple and reliable for your current setup.)
//     navigate("/", { replace: false });

//     // Small timeout to let home render — 300ms works well in most cases
//     setTimeout(() => {
//       const elAfterNav = document.getElementById(id);
//       if (elAfterNav) elAfterNav.scrollIntoView({ behavior: "smooth" });
//     }, 300);
//   };

//   return (
//     <footer className="bg-gray-900 text-white py-16">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//           {/* Brand */}
//           <div className="col-span-1 md:col-span-2">
//             <div className="text-3xl font-bold mb-4">
//               About<span className="text-blue-400">Us</span>
//             </div>
//             <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
//               TheEcoTech is a digital agency helping businesses scale online through
//               custom development, AI automation, and strategic digital marketing.
//             </p>

//             <div className="flex space-x-4">
//               <a
//                 href="https://www.facebook.com/profile.php?id=61579378550619"
//                 className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
//                 aria-label="Facebook"
//               >
//                 <Facebook size={24} />
//               </a>
//               <a
//                 href="https://x.com/theecotechh"
//                 className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
//                 aria-label="Twitter"
//               >
//                 <Twitter size={24} />
//               </a>
//               <a
//                 href="https://www.instagram.com/the_ecotech/"
//                 className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
//                 aria-label="Instagram"
//               >
//                 <Instagram size={24} />
//               </a>
             
           
//             </div>
//           </div>

//           {/* Services */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Services</h3>
//             <ul className="space-y-2 text-gray-300">
//               <li>
//                 <Link
//                   to="/website-development"
//                   className="hover:text-white transition-colors duration-200"
//                 >
//                   Website Development
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/shopify-development"
//                   className="hover:text-white transition-colors duration-200"
//                 >
//                   Shopify Development
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/wordpress-development"
//                   className="hover:text-white transition-colors duration-200"
//                 >
//                   WordPress Development
//                 </Link>
//               </li>
             
//               <li>
//                 <Link
//                   to="/social-media-marketing"
//                   className="hover:text-white transition-colors duration-200"
//                 >
//                   Social Media Marketing
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
//             <ul className="space-y-2 text-gray-300">
//               {quickLinks.map(({ name, id }) => (
//                 <li key={id}>
//                   <button
//                     type="button"
//                     onClick={() => handleQuickLinkClick(id)}
//                     className="hover:text-white transition-colors duration-200"
//                   >
//                     {name}
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
//           <p className="text-gray-400 text-sm">
//             © {currentYear} TheEcoTech Digital Agency. All rights reserved.
//           </p>

//           <div className="flex space-x-6 mt-4 md:mt-0 pr-24">
//             <Link to="/privacy-policy" className="hover:text-white transition-colors duration-200">
//               Privacy Policy
//             </Link>
//             <Link to="/terms-of-use" className="hover:text-white transition-colors duration-200">
//               Terms of Use
//             </Link>
//             <Link to="/cookie-policy" className="hover:text-white transition-colors duration-200">
//               Cookie Policy
//             </Link>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
// src/components/Footer.tsx
import React from "react";
import { Facebook, Twitter, Instagram } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

interface FooterProps {
  setCvOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Footer: React.FC<FooterProps> = ({ setCvOpen }) => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

  const quickLinks = [
    { name: "Home", id: "home" },
    { name: "Services", id: "services" },
    { name: "About", id: "about" },
    { name: "Portfolio", id: "CV" }, // portfolio behavior unchanged
    { name: "Contact", id: "contact" },
  ] as const;

  const handleQuickLinkClick = (id: string) => {
    if (!id) return;

    // Portfolio stays the same
    if (id === "CV") {
      setCvOpen(true);
      return;
    }

    // If anchor exists on current page, scroll
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      return;
    }

    // Otherwise navigate to home and then scroll (home will render sections)
    navigate("/", { state: { scrollTo: id } });

    // fallback attempt after a small delay
    setTimeout(() => {
      const elAfter = document.getElementById(id);
      if (elAfter) elAfter.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="text-3xl font-bold mb-4">
              About<span className="text-blue-400">Us</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              TheEcoTech is a digital agency helping businesses scale online through
              custom development, AI automation, and strategic digital marketing.
            </p>

            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=61579378550619"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://x.com/theecotechh"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter size={24} />
              </a>
              <a
                href="https://www.instagram.com/the_ecotech/"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link to="/website-development" className="hover:text-white transition-colors duration-200">
                  Website Development
                </Link>
              </li>
              <li>
                <Link to="/ai-chatbot-development" className="hover:text-white transition-colors duration-200">
                  AI Agent Development
                </Link>
              </li>
              <li>
                <Link to="/shopify-development" className="hover:text-white transition-colors duration-200">
                  Shopify Development
                </Link>
              </li>
              <li>
                <Link to="/wordpress-development" className="hover:text-white transition-colors duration-200">
                  WordPress Development
                </Link>
              </li>
              <li>
                <Link to="/social-media-marketing" className="hover:text-white transition-colors duration-200">
                  Social Media Marketing
                </Link>
              </li>

              {/* NEW services added to footer services list */}
              <li>
                <Link to="/graphic-design" className="hover:text-white transition-colors duration-200">
                  Graphic Designing
                </Link>
              </li>
              <li>
                <Link to="/video-editing" className="hover:text-white transition-colors duration-200">
                  Video Editing
                </Link>
              </li>
              <li>
                <Link to="/seo-services" className="hover:text-white transition-colors duration-200">
                  SEO Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              {quickLinks.map(({ name, id }) => (
                <li key={id}>
                  <button
                    type="button"
                    onClick={() => handleQuickLinkClick(id)}
                    className="hover:text-white transition-colors duration-200"
                  >
                    {name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} TheEcoTech Digital Agency. All rights reserved.
          </p>

          <div className="flex space-x-6 mt-4 md:mt-0 pr-24">
            <Link to="/privacy-policy" className="hover:text-white transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link to="/terms-of-use" className="hover:text-white transition-colors duration-200">
              Terms of Use
            </Link>
            <Link to="/cookie-policy" className="hover:text-white transition-colors duration-200">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
