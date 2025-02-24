import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Ensure scroll resets properly for all browsers
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });

    // Extra fix for Safari & some mobile browsers
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

  }, [pathname]); // Runs every time the route changes

  return null;
};

export default ScrollToTop;
