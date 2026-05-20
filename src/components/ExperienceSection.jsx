import { motion } from "framer-motion";
import { experiences } from "./config/data";

export default function ExperienceSection() {
  return (
    <section id="experience" className="section-gap container-content relative">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="mb-20"
      >
        <span className="font-code text-primary text-sm uppercase tracking-widest mb-4 block">
          02 // Deployment Logs
        </span>
        <h2 className="font-display text-headline-lg">Deployment Logs</h2>
      </motion.div>

      {/* Timeline */}
      <div className="relative">
        {/*
          Mobile: line runs at left-[23px] (center of the 12px dot which sits at left-[17px], w-4=16px → center = 17+8=25px... adjusted to 23px)
          Desktop: line runs at exactly 50% (md:left-1/2)
          We use a wrapper that is relative, and the line is absolute within it.
        */}
        <div
          className="absolute left-[23px] md:left-1/2 top-0 bottom-0 w-[2px] md:-translate-x-1/2"
          style={{
            background: "linear-gradient(to bottom, transparent 0%, var(--color-primary, #c9a96e) 8%, var(--color-primary, #c9a96e) 92%, transparent 100%)",
            opacity: 0.5,
          }}
        />

        <div className="space-y-20 md:space-y-28">
          {experiences.map((exp, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="relative md:grid md:grid-cols-[1fr_32px_1fr] md:gap-x-8 items-center"
              >
                {/* Left side */}
                <div className={`hidden md:flex ${isEven ? "justify-end pr-4" : "justify-start pl-4"}`}>
                  {isEven ? (
                    <span className="font-code text-xs text-primary/60 uppercase tracking-[0.2em]">
                      {exp.duration}
                    </span>
                  ) : (
                    <div className="glass-panel p-8 hover:border-primary/40 transition-colors max-w-md w-full">
                      <h3 className="font-display text-headline-md mb-1">{exp.role}</h3>
                      <p className="text-primary font-code text-xs mb-4 uppercase tracking-wider">{exp.company}</p>
                      <ul className="font-code text-xs text-on-surface-variant space-y-3">
                        {exp.bullets.map((bullet, i) => (
                          <li key={i} className="flex gap-2">
                            <span className="text-primary flex-shrink-0">▸</span>
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Center dot — sits on the line */}
                {/* Mobile: absolute, positioned to align with the left line at left-[23px] */}
                {/* Desktop: in-flow center column, flex-centered */}
                <div className="absolute left-[15px] top-1/2 -translate-y-1/2 md:static md:translate-y-0 md:flex md:justify-center md:items-center z-10">
                  <div className="w-4 h-4 bg-primary ring-[6px] ring-primary/20 rounded-full shrink-0" />
                </div>

                {/* Right side */}
                <div className={`pl-10 md:pl-0 ${isEven ? "md:flex md:justify-start md:pl-4" : "md:flex md:justify-end md:pr-4"}`}>
                  {isEven ? (
                    <div className="glass-panel p-8 hover:border-primary/40 transition-colors max-w-md w-full">
                      <span className="md:hidden font-code text-[10px] text-primary/60 mb-4 block uppercase tracking-wider">
                        {exp.duration}
                      </span>
                      <h3 className="font-display text-headline-md mb-1">{exp.role}</h3>
                      <p className="text-primary font-code text-xs mb-4 uppercase tracking-wider">{exp.company}</p>
                      <ul className="font-code text-xs text-on-surface-variant space-y-3">
                        {exp.bullets.map((bullet, i) => (
                          <li key={i} className="flex gap-2">
                            <span className="text-primary flex-shrink-0">▸</span>
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <span className="hidden md:inline font-code text-xs text-primary/60 uppercase tracking-[0.2em]">
                      {exp.duration}
                    </span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}