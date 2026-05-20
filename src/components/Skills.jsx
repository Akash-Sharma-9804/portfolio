import { motion } from "framer-motion";
import { skillCategories } from "./config/data";
import { Code, Database, Server, BrainCircuit, Wrench } from "lucide-react";

const iconMap = {
  code: Code,
  database: Database,
  server: Server,
  brain: BrainCircuit,
  wrench: Wrench,
};

export default function Skills() {
  return (
    <section id="skills" className="section-gap container-content">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="mb-16"
      >
        <span className="font-code text-primary text-sm uppercase tracking-widest mb-4 block">
          01 // Technical Arsenal
        </span>
        <h2 className="font-display text-headline-lg">The Arsenal</h2>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((skill, index) => {
          const Icon = iconMap[skill.icon] || Code
          return (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="glass-panel p-8 relative overflow-hidden group"
            >
              {/* Version badge */}
              <div className="absolute top-0 right-0 p-4 font-code text-[10px] opacity-20 group-hover:opacity-100 transition-opacity">
                {skill.version}
              </div>

              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-primary/50 transition-colors"
                >
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <span className="font-code text-[10px] text-primary uppercase border border-primary/20 px-2 py-0.5">
                  {skill.category}
                </span>
              </div>

              <h3 className="font-display text-headline-md mb-3">{skill.title}</h3>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {skill.techs.map((t) => (
                  <span
                    key={t}
                    className="font-code text-[10px] bg-white/5 px-2 py-1 text-on-surface-variant"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <p className="font-code text-xs text-on-surface-variant mb-6 leading-relaxed">
                {skill.description}
              </p>

              <div className="space-y-2">
                <div className="flex justify-between font-code text-[10px] uppercase opacity-60">
                  <span>Proficiency</span>
                  <span>{skill.proficiency}%</span>
                </div>
                <div className="h-1 bg-white/5 w-full">
                  <div
                    className="h-full bg-primary transition-all duration-1000"
                    style={{ width: `${skill.proficiency}%` }}
                  />
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  );
}
