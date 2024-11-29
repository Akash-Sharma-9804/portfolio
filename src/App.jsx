import About from "./components/About";
import Contact from "./components/Contact";
import ExperienceSection from "./components/ExperienceSection";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";


function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <div class="relative top-0  h-full w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
        <About />
        <ExperienceSection />
        <Projects />
        <Contact />
      </div>

      
    </>
  );
}

export default App;
