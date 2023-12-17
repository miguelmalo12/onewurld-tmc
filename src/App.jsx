import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";

// components
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router basename="/letsgothere">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
