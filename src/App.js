import "./App.scss";
import { Routes, Route, useLocation } from "react-router-dom";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Home from "./modules/home";
import About from "./modules/about";
import Contact from "./modules/contact";
import Portfolio from "./modules/portfolio";
import Resume from "./modules/resume";
import Skills from "./modules/skills";
import Navbar from "./modules/navbar";
import particles from "./utils/particles";

function App() {
  const location = useLocation();
  console.log(location);

  const handleInit = async (main) => {
    await loadFull(main);
  };

  const renderParticleJsInHomePage = location.pathname === "/";

  return (
    <div className="app">
      {renderParticleJsInHomePage && (
        <Particles id="particles" options={particles} init={handleInit} />
      )}

      <Navbar />

      <div className="app__main_page_container">
        <Routes>
          <Route index path="/react_portfolio" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/about" element={<About />} />
        </Routes>
        <Routes>
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Routes>
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
        <Routes>
          <Route path="/resume" element={<Resume />} />
        </Routes>
        <Routes>
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
