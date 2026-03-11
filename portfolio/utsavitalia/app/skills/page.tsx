"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { skills } from "@/lib/data";

function SkillBar({ name, level, delay = 0 }: { name: string; level: number; delay?: number }) {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => setWidth(level), delay);
        observer.disconnect();
      }
    }, { threshold: 0.3 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [level, delay]);

  return (
    <div ref={ref} className="mb-4">
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>{name}</span>
        <span className="text-xs" style={{ color: "var(--text-muted)", fontFamily: "'Space Mono', monospace" }}>{level}%</span>
      </div>
      <div className="h-1.5 rounded-full overflow-hidden" style={{ backgroundColor: "var(--bg-secondary)" }}>
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{
            width: `${width}%`,
            background: "linear-gradient(90deg, var(--accent), var(--accent-2))",
          }}
        />
      </div>
    </div>
  );
}

const categoryColors: Record<string, string> = {
  "Data & Analytics": "var(--accent-2)",
  "Machine Learning & AI": "var(--yellow)",
  "Full Stack": "var(--blue)",
  "Infrastructure & Tools": "#a070f0",
};

export default function SkillsPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-16">
          <p className="section-label mb-3">Technical Skills</p>
          <h1 className="font-display font-extrabold text-5xl mb-4" style={{ color: "var(--text-primary)" }}>
            Tools &amp; <span className="gradient-text">Technologies</span>
          </h1>
          <p className="text-lg max-w-2xl" style={{ color: "var(--text-secondary)" }}>
            Five years of hands-on experience across the ML/AI stack — from data ingestion to model training, deployment, and monitoring.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, skillList], catIdx) => (
            <motion.div key={category} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: catIdx * 0.1 }}
              className="card p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: categoryColors[category] ?? "var(--accent)" }} />
                <h2 className="font-display font-bold text-lg" style={{ color: "var(--text-primary)" }}>{category}</h2>
              </div>
              {skillList.map((skill, i) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={i * 80} />
              ))}
            </motion.div>
          ))}
        </div>

        {/* Tools cloud */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="mt-16">
          <p className="section-label mb-6">Also proficient in</p>
          <div className="flex flex-wrap gap-2">
            {["Git", "GitHub", "Postman", "Jupyter", "VS Code", "Streamlit", "FastAPI", "Figma", "Slack", "Docker", "AWS Lambda", "S3", "Vercel", "Netlify", "Redux", "Socket.io", "Twilio", "JWT", "Agile / Scrum"].map((tool) => (
              <span key={tool} className="tag px-3 py-1.5 text-xs">{tool}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
