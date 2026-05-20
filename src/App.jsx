import About from "./components/About";
import Contact from "./components/Contact";
import ExperienceSection from "./components/ExperienceSection";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="min-h-screen bg-background text-on-surface antialiased font-body">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <ExperienceSection />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-16">
        <div className="container-content flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center font-display text-[15px] font-semibold tracking-tight">
            <span className="text-white">AKASH</span>
            <span className="text-beige">SHARMA</span>
          </div>

          <p className="font-code text-[12px] text-on-secondary-fixed-variant uppercase tracking-widest text-center">
            &copy; 2024 Akash Sharma — All rights reserved
          </p>

          <div className="flex gap-8">
            <a
              href="https://github.com/Akash-Sharma-9804"
              target="_blank"
              rel="noopener noreferrer"
              className="font-code text-[12px] uppercase tracking-widest text-on-secondary-fixed-variant hover:text-beige transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/akash-sharma-a9a971331"
              target="_blank"
              rel="noopener noreferrer"
              className="font-code text-[12px] uppercase tracking-widest text-on-secondary-fixed-variant hover:text-beige transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:akashsharma9804@gmail.com"
              className="font-code text-[12px] uppercase tracking-widest text-on-secondary-fixed-variant hover:text-beige transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
