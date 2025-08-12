// src/utils/ScrollToTop.tsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop: React.FC<{ offset?: number }> = ({ offset = 80 }) => {
  // offset = height of your fixed header in px (adjust as needed)
  const { pathname } = useLocation();

  useEffect(() => {
    // scroll to top + offset so top content isn't hidden behind a fixed header
    const target = Math.max(0, 0 - offset);
    // if you prefer instant jump, use window.scrollTo(0, Math.max(0, 0 - offset));
    window.scrollTo({ top: target, behavior: "smooth" });
  }, [pathname, offset]);

  return null;
};

export default ScrollToTop;
