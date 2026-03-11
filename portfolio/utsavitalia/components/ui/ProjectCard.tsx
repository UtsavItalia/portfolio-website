"use client";

import { ExternalLink, Github, TrendingUp, Cpu, Globe, Database, BarChart, MessageSquare, Settings } from "lucide-react";
import { motion } from "framer-motion";
import type { Project, ProjectCategory } from "@/lib/data";

const categoryConfig: Record<
  ProjectCategory,
  { icon: React.FC<{ size?: number }>; color: string; bg: string; label: string }
> = {
  "Data Analytics": {
    icon: BarChart,
    color: "var(--blue)",
    bg: "var(--blue-subtle)",
    label: "Analytics",
  },
  "Machine Learning": {
    icon: Cpu,
    color: "#f07040",
    bg: "var(--accent-subtle)",
    label: "ML",
  },
  "AI Web Application": {
    icon: Globe,
    color: "var(--accent-2)",
    bg: "var(--accent-2-subtle)",
    label: "AI App",
  },
  "NLP": {
    icon: MessageSquare,
    color: "var(--purple)",
    bg: "var(--purple-subtle)",
    label: "NLP",
  },
  "Full Stack": {
    icon: Database,
    color: "var(--green)",
    bg: "var(--green-subtle)",
    label: "Full Stack",
  },
  "MLOps": {
    icon: Settings,
    color: "var(--yellow)",
    bg: "var(--yellow-subtle)",
    label: "MLOps",
  },
};

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const cat = categoryConfig[project.category];
  const CategoryIcon = cat.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="card flex flex-col h-full group"
    >
      {/* Header */}
      <div className="p-5 pb-0">
        <div className="flex items-start justify-between mb-3">
          <div
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium"
            style={{ backgroundColor: cat.bg, color: cat.color, fontFamily: "'Space Mono', monospace" }}
          >
            <CategoryIcon size={11} />
            {cat.label}
          </div>
          {project.featured && (
            <span
              className="text-xs px-2 py-0.5 rounded-full"
              style={{
                backgroundColor: "var(--accent-subtle)",
                color: "var(--accent)",
                fontFamily: "'Space Mono', monospace",
              }}
            >
              ★ featured
            </span>
          )}
        </div>

        <h3
          className="font-display font-bold text-lg mb-2 leading-tight group-hover:text-accent transition-colors"
          style={{ color: "var(--text-primary)" }}
        >
          {project.title}
        </h3>
        <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
          {project.description}
        </p>
      </div>

      {/* Results */}
      <div className="px-5 pt-4">
        <div
          className="rounded-lg p-3 border"
          style={{ backgroundColor: "var(--bg-secondary)", borderColor: "var(--border-subtle)" }}
        >
          <div className="flex items-center gap-1.5 mb-2">
            <TrendingUp size={12} style={{ color: "var(--accent)" }} />
            <span className="section-label text-xs">Results</span>
          </div>
          <ul className="space-y-1">
            {project.results.slice(0, 3).map((result, i) => (
              <li key={i} className="flex items-start gap-2 text-xs" style={{ color: "var(--text-secondary)" }}>
                <span style={{ color: "var(--green)", marginTop: 2 }}>›</span>
                {result}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="px-5 pt-4 flex-1">
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.slice(0, 6).map((tech) => (
            <span key={tech} className="tag">
              {tech}
            </span>
          ))}
          {project.techStack.length > 6 && (
            <span className="tag">+{project.techStack.length - 6}</span>
          )}
        </div>
      </div>

      {/* Links */}
      <div
        className="p-5 pt-4 mt-4 border-t flex items-center gap-3"
        style={{ borderColor: "var(--border-subtle)" }}
      >
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary text-xs flex-1 justify-center py-2"
          onClick={(e) => e.stopPropagation()}
        >
          <Github size={14} /> Code
        </a>
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary text-xs flex-1 justify-center py-2"
          onClick={(e) => e.stopPropagation()}
        >
          <ExternalLink size={14} /> Demo
        </a>
      </div>
    </motion.div>
  );
}
