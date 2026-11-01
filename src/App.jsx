import "./App.css";

import BackgroundBubbles from "./components/BackgroundBubbles";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Journey from "./components/Journey";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";

function App() {
  return (
    <div className="portfolio">
      <BackgroundBubbles />
      <Navbar />
      <CustomCursor />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;