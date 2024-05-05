import "./App.css";
import Home from "./components/Home";
import ComponentParallex from "./components/Parallex/ComponentParallex";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Global animation duration
      once: true, // Only once animation
    });
  }, []);
  return (
    <div>
      {/* <Home /> */}
      <ComponentParallex />
    </div>
  );
}

export default App;
