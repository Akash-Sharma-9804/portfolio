import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { projects } from "./config/data";

export default function Projects() {
  return (
    <section id="projects" className="section-gap container-content">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6"
      >
        <div>
          <span className="font-code text-primary text-sm uppercase tracking-widest mb-4 block">
            03 // Selected Builds
          </span>
          <h2 className="font-display text-headline-lg">Selected Builds</h2>
        </div>
        <p className="font-code text-xs text-on-surface-variant max-w-[260px] leading-relaxed opacity-60">
          End-to-end production apps — architecture through deployment.
        </p>
      </motion.div>

      {/* Projects — alternating layout */}
      <div className="space-y-32">
        {projects.map((project, index) => {
          const isEven = index % 2 === 0;
          const num = String(index + 1).padStart(2, "0");

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-8 md:gap-14 items-center`}
            >
              {/* Screenshot — browser mockup frame */}
              <div className="w-full md:w-[58%] shrink-0 group">
                <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl shadow-black/60">
                  {/* Fake browser bar */}
                  <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/8">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                    <div className="ml-3 flex-1 bg-white/6 rounded-sm px-3 py-1 max-w-[220px]">
                      <span className="font-code text-[10px] text-white/30 truncate block">
                        {project.link.replace("https://", "")}
                      </span>
                    </div>
                  </div>
                  {/* Screenshot */}
                  <div className="overflow-hidden aspect-[16/10]">
                    <img
                      src={project.img}
                      alt={project.title}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  {/* Subtle vignette at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Text content */}
              <div className="flex-1 min-w-0">
                <span className="font-code text-[10px] text-white/25 uppercase tracking-[0.3em] mb-3 block">
                  {num} / {projects.length.toString().padStart(2, "0")}
                </span>

                <span className="font-code text-xs text-primary uppercase tracking-[0.2em] mb-4 block">
                  {project.category}
                </span>

                <h3 className="font-display text-4xl md:text-5xl leading-[1.05] mb-5">
                  {project.title}
                </h3>

                <p className="font-code text-xs text-on-surface-variant leading-relaxed mb-8 opacity-75">
                  {project.desc}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-10">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="font-code text-[10px] uppercase tracking-wider text-white/50 border border-white/12 px-3 py-1.5"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* CTA links */}
                <div className="flex items-center gap-8">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn flex items-center gap-2 font-code text-xs text-primary uppercase tracking-widest
                               border border-primary/40 px-5 py-3 hover:bg-primary/10 transition-colors duration-200"
                  >
                    View Live
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-200" />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-code text-xs text-white/40 uppercase tracking-widest hover:text-white/70 transition-colors"
                  >
                    Source Code
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

    </section>
  );
}