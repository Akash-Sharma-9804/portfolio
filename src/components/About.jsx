import { motion } from "framer-motion";
import profilepic from "../assets/profilepic.png";

const techBadges = [
  "React", "Node.js", "MongoDB", "TypeScript",
  "Tailwind", "Express", "Next.js", "GraphQL",
];

export default function About() {
  return (
    <section id="about" className="section-gap container-content">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Left — Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative group"
        >
          {/* Decorative offset border */}
          <div className="absolute -inset-4 border border-primary/20 translate-x-6 translate-y-6 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-700" />

          <div className="relative aspect-[4/5] overflow-hidden border border-white/10">
            <img
              src={profilepic}
              alt="Akash Sharma"
              className="w-full h-full object-cover grayscale brightness-75"
            />
            <div className="absolute inset-0 bg-primary/5 mix-blend-overlay" />
            <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent">
              <span className="font-code text-xs text-primary uppercase tracking-widest">
                Full Stack Developer
              </span>
            </div>
          </div>

          {/* Tech badges below image */}
          <div className="mt-8 flex flex-wrap gap-2">
            {techBadges.map((tech) => (
              <span
                key={tech}
                className="font-code text-[11px] bg-white/5 px-3 py-1.5 text-on-surface-variant"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Right — Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="font-display text-headline-lg mb-8">
            Architectural Thinking.<br />
            <span className="text-primary italic">Code Excellence.</span>
          </h2>

          <p className="font-body text-body-lg text-on-surface-variant mb-12">
            For me, code is more than logic — it's the structural steel of the modern
            experience. I approach every project with an architect's eye for form and an
            engineer's obsession with reliability. Every line of code is a commitment to
            performance and maintainability.
          </p>

          <div className="grid grid-cols-2 gap-6">
            <div className="p-6 glass-panel">
              <h4 className="font-display text-lg mb-2">3+ Years</h4>
              <p className="font-code text-[11px] text-on-surface-variant opacity-60">
                Of hands-on full-stack development experience
              </p>
            </div>
            <div className="p-6 glass-panel">
              <h4 className="font-display text-lg mb-2">55+ Repos</h4>
              <p className="font-code text-[11px] text-on-surface-variant opacity-60">
                Open-source contributions and personal projects
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
