import "./App.css";
import ComponentParallex from "./components/Parallex/ComponentParallex";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Services from "./components/Services/Services";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Global animation duration
      once: true, // Only once animation
    });
  }, []);
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<ComponentParallex />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
