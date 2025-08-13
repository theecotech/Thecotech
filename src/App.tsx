// src/App.tsx
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import PrivacyPolicy from './pages/privacypolicy';
import TermsOfUse from './pages/termsofuse';
import CookiePolicy from './pages/cookiepolicy';
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

const App: React.FC = () => {
  // State to control the Portfolio modal
  const [cvOpen, setCvOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Pass setCvOpen so Header/Footer can open portfolio modal */}
      <Header setCvOpen={setCvOpen} />

      <ScrollToTop offset={96} />

      <main>
        <RoutesWrapper />
      </main>

      {/* Pass setter to Footer */}
      <Footer setCvOpen={setCvOpen} />

      {/* Portfolio modal */}
      <CV isOpen={cvOpen} onClose={() => setCvOpen(false)} />

      <WhatsAppButton />
    </div>
  );
};

// keep Routes in a small wrapper so file stays tidy
const RoutesWrapper: React.FC = () => (
  <Routes>
    <Route path="/" element={<Home />} />

    {/* service pages — each renders alone (home content hidden) */}
    <Route path="/website-development" element={<WebsiteDevelopment />} />
    <Route path="/shopify-development" element={<ShopifyDevelopment />} />
    <Route path="/wordpress-development" element={<WordPressDevelopment />} />
    <Route path="/ai-chatbot-development" element={<AIChatbotDevelopment />} />
    <Route path="/social-media-marketing" element={<SocialMediaMarketing />} />

    {/* NEW service pages */}
    <Route path="/graphic-design" element={<GraphicDesign />} />
    <Route path="/video-editing" element={<VideoEditing />} />
    <Route path="/seo-services" element={<SeoServices />} />

    {/* policy pages */}
    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
    <Route path="/terms-of-use" element={<TermsOfUse />} />
    <Route path="/cookie-policy" element={<CookiePolicy />} />

    {/* fallback */}
    <Route path="*" element={<div className="p-8">Page not found</div>} />
  </Routes>
);

export default App;
