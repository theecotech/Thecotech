// // src/App.tsx
// import React, { useState } from "react";
// import { Routes, Route } from "react-router-dom";

// import PrivacyPolicy from './pages/privacypolicy';
// import TermsOfUse from './pages/termsofuse';
// import CookiePolicy from './pages/cookiepolicy';
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import WhatsAppButton from "./components/WhatsAppButton";
// import ScrollToTop from "./utils/ScrollToTop";

// import Home from "./pages/Home";
// import WebsiteDevelopment from "./pages/WebsiteDevelopment";
// import ShopifyDevelopment from "./pages/ShopifyDevelopment";
// import WordPressDevelopment from "./pages/WordPressDevelopment";
// import AIChatbotDevelopment from "./pages/AIChatbotDevelopment";
// import SocialMediaMarketing from "./pages/SocialMediaMarketing";

// // NEW: pages for the three added services
// import GraphicDesign from "./pages/graphic-design";
// import VideoEditing from "./pages/video-editing";
// import SeoServices from "./pages/seo-services";

// import CV from "./components/CV";

// const App: React.FC = () => {
//   // State to control the Portfolio modal
//   const [cvOpen, setCvOpen] = useState(false);

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Pass setCvOpen so Header/Footer can open portfolio modal */}
//       {/* <Header /> */}
//       <Header setCvOpen={setCvOpen} />

//       <ScrollToTop offset={96} />

//       <main>
//         <RoutesWrapper />
//       </main>

//       {/* Pass setter to Footer */}
//       <Footer setCvOpen={setCvOpen} />

//       {/* Portfolio modal */}
//       <CV isOpen={cvOpen} onClose={() => setCvOpen(false)} />

//       <WhatsAppButton />
//     </div>
//   );
// };

// // keep Routes in a small wrapper so file stays tidy
// const RoutesWrapper: React.FC = () => (
//   <Routes>
//     <Route path="/" element={<Home />} />

//     {/* service pages — each renders alone (home content hidden) */}
//     <Route path="/website-development" element={<WebsiteDevelopment />} />
//     <Route path="/shopify-development" element={<ShopifyDevelopment />} />
//     <Route path="/wordpress-development" element={<WordPressDevelopment />} />
//     <Route path="/ai-chatbot-development" element={<AIChatbotDevelopment />} />
//     <Route path="/social-media-marketing" element={<SocialMediaMarketing />} />

//     {/* NEW service pages */}
//     <Route path="/graphic-design" element={<GraphicDesign />} />
//     <Route path="/video-editing" element={<VideoEditing />} />
//     <Route path="/seo-services" element={<SeoServices />} />

//     {/* policy pages */}
//     <Route path="/privacy-policy" element={<PrivacyPolicy />} />
//     <Route path="/terms-of-use" element={<TermsOfUse />} />
//     <Route path="/cookie-policy" element={<CookiePolicy />} />

//     {/* fallback */}
//     <Route path="*" element={<div className="p-8">Page not found</div>} />
//   </Routes>
// );

// export default App;


// src/App.tsx
















// import React, { useState } from "react";
// import { Routes, Route } from "react-router-dom";

// import PrivacyPolicy from './pages/privacypolicy';
// import TermsOfUse from './pages/termsofuse';
// import CookiePolicy from './pages/cookiepolicy';
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import WhatsAppButton from "./components/WhatsAppButton";
// import ScrollToTop from "./utils/ScrollToTop";

// import Home from "./pages/Home";
// import WebsiteDevelopment from "./pages/WebsiteDevelopment";
// import ShopifyDevelopment from "./pages/ShopifyDevelopment";
// import WordPressDevelopment from "./pages/WordPressDevelopment";
// import AIChatbotDevelopment from "./pages/AIChatbotDevelopment";
// import SocialMediaMarketing from "./pages/SocialMediaMarketing";

// // NEW: pages for the three added services
// import GraphicDesign from "./pages/graphic-design";
// import VideoEditing from "./pages/video-editing";
// import SeoServices from "./pages/seo-services";
// import CV from "./components/CV";
// import Blog from "./pages/Blogs";
// import BlogPost from "./pages/BlogPost";


// const App: React.FC = () => {
//   // State to control the Portfolio modal
//   const [cvOpen, setCvOpen] = useState(false);

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Header with portfolio modal trigger */}
//       <Header setCvOpen={setCvOpen} />

//       {/* Utility for smooth scroll */}
//       <ScrollToTop offset={96} />

//       {/* ✅ Added pt-24 to push content below fixed header */}
//       <main className="pt-12">
//         <RoutesWrapper />
//       </main>

//       {/* Footer with portfolio modal trigger */}
//       <Footer setCvOpen={setCvOpen} />

//       {/* Portfolio modal */}
//       <CV isOpen={cvOpen} onClose={() => setCvOpen(false)} />

//       {/* Floating WhatsApp button */}
//       <WhatsAppButton />
//     </div>
//   );
// };

// // Keep Routes in a small wrapper so file stays tidy
// const RoutesWrapper: React.FC = () => (
//   <Routes>
//     <Route path="/" element={<Home />} />

//     {/* Service pages — each renders alone */}
//     <Route path="/website-development" element={<WebsiteDevelopment />} />
//     <Route path="/shopify-development" element={<ShopifyDevelopment />} />
//     <Route path="/wordpress-development" element={<WordPressDevelopment />} />
//     <Route path="/ai-chatbot-development" element={<AIChatbotDevelopment />} />
//     <Route path="/social-media-marketing" element={<SocialMediaMarketing />} />

//    {/* Blog page */}
//    <Route path="/blog" element={<Blog />} />
//    <Route path="/blog/:slug" element={<BlogPost />} />


//     {/* NEW service pages */}
//     <Route path="/graphic-design" element={<GraphicDesign />} />
//     <Route path="/video-editing" element={<VideoEditing />} />
//     <Route path="/seo-services" element={<SeoServices />} />

//     {/* Policy pages */}
//     <Route path="/privacy-policy" element={<PrivacyPolicy />} />
//     <Route path="/terms-of-use" element={<TermsOfUse />} />
//     <Route path="/cookie-policy" element={<CookiePolicy />} />

//     {/* Fallback */}
//     <Route path="*" element={<div className="p-8">Page not found</div>} />
//   </Routes>
// );

// export default App;












import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import PrivacyPolicy from "./pages/privacypolicy";
import TermsOfUse from "./pages/termsofuse";
import CookiePolicy from "./pages/cookiepolicy";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import ScrollToTop from "./utils/ScrollToTop";

import Home from "./pages/Home";
import WebsiteDevelopment from "./pages/WebsiteDevelopment";
import ShopifyDevelopment from "./pages/ShopifyDevelopment";
import WordPressDevelopment from "./pages/WordPressDevelopment";
import AIChatbotDevelopment from "./pages/AIChatbotDevelopment";
import SocialMediaMarketing from "./pages/SocialMediaMarketing";

// NEW: pages for the three added services
import GraphicDesign from "./pages/graphic-design";
import VideoEditing from "./pages/video-editing";
import SeoServices from "./pages/seo-services";

import CV from "./components/CV";
import Blog from "./pages/Blogs";
import BlogPost from "./pages/BlogPost";

// ✅ Import project detail pages
import Project1 from "./pages/Project1";
import Project2 from "./pages/Project2";
import Project3 from "./pages/Project3";

const App: React.FC = () => {
  const [cvOpen, setCvOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Header setCvOpen={setCvOpen} />
      <ScrollToTop offset={96} />

      <main className="pt-12">
        <RoutesWrapper />
      </main>

      <Footer setCvOpen={setCvOpen} />
      <CV isOpen={cvOpen} onClose={() => setCvOpen(false)} />
      <WhatsAppButton />
    </div>
  );
};

const RoutesWrapper: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home key={location.pathname} />} /> {/* 👈 force remount */}
        <Route path="/website-development" element={<WebsiteDevelopment />} />
        <Route path="/shopify-development" element={<ShopifyDevelopment />} />
        <Route path="/wordpress-development" element={<WordPressDevelopment />} />
        <Route path="/ai-chatbot-development" element={<AIChatbotDevelopment />} />
        <Route path="/social-media-marketing" element={<SocialMediaMarketing />} />

        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />

        <Route path="/graphic-design" element={<GraphicDesign />} />
        <Route path="/video-editing" element={<VideoEditing />} />
        <Route path="/seo-services" element={<SeoServices />} />

        <Route path="/projects/project1" element={<Project1 />} />
        <Route path="/projects/project2" element={<Project2 />} />
        <Route path="/projects/project3" element={<Project3 />} />

        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />

        <Route path="*" element={<div className="p-8">Page not found</div>} />
      </Routes>
    </AnimatePresence>
  );
};

export default App;

