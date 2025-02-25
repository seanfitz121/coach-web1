import ReactGA from "react-ga4";

// ✅ Initialize Google Analytics with your Measurement ID
export const initGA = () => {
  ReactGA.initialize("G-XKBLCGMVCT"); // Replace with your actual GA ID
};

// ✅ Track page views when the user navigates
export const trackPageView = (page) => {
  ReactGA.send({ hitType: "pageview", page });
};

// ✅ Track custom events (e.g., button clicks)
export const trackEvent = (category, action, label) => {
  ReactGA.event({
    category,
    action,
    label,
  });
};
