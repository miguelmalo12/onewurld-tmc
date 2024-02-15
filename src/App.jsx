import "./App.css";
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Technology from "./pages/Technology";
import Content from "./pages/Content";
import Service from "./pages/Service";
import Contact from "./pages/Contact";

// components
import Header from "./components/Header";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Router basename="/">
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/content" element={<Content />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <CTA />
      <Footer />
    </Router>
  );
}

export default App;
