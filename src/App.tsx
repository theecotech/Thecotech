import React, { useState } from "react";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

import CV from "./components/CV";

const App: React.FC = () => {
  // State to control the Portfolio modal
  const [cvOpen, setCvOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <ScrollToTop offset={96} />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />

          {/* service pages — each renders alone (home content hidden) */}
          <Route path="/website-development" element={<WebsiteDevelopment />} />
          <Route path="/shopify-development" element={<ShopifyDevelopment />} />
          <Route path="/wordpress-development" element={<WordPressDevelopment />} />
          <Route path="/ai-chatbot-development" element={<AIChatbotDevelopment />} />
          <Route path="/social-media-marketing" element={<SocialMediaMarketing />} />

          {/* fallback */}
          <Route path="*" element={<div className="p-8">Page not found</div>} />

          {/* policy pages */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
        </Routes>
      </main>

      {/* Pass setCvOpen to Footer */}
      <Footer setCvOpen={setCvOpen} />

      {/* Render CV modal controlled by state */}
      <CV isOpen={cvOpen} onClose={() => setCvOpen(false)} />

      <WhatsAppButton />
    </div>
  );
};

export default App;
