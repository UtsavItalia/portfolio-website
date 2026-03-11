"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Filter } from "lucide-react";
import { projects, type ProjectCategory } from "@/lib/data";
import ProjectCard from "@/components/ui/ProjectCard";

const categories: (ProjectCategory | "All")[] = ["All", "Data Analytics", "Machine Learning", "AI Web Application", "NLP", "Full Stack", "MLOps"];

export default function ProjectsPage() {
  const [active, setActive] = useState<ProjectCategory | "All">("All");

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  const counts = {
    "All": projects.length,
    "Data Analytics": projects.filter((p) => p.category === "Data Analytics").length,
    "Machine Learning": projects.filter((p) => p.category === "Machine Learning").length,
    "AI Web Application": projects.filter((p) => p.category === "AI Web Application").length,
    "NLP": projects.filter((p) => p.category === "NLP").length,
    "Full Stack": projects.filter((p) => p.category === "Full Stack").length,
    "MLOps": projects.filter((p) => p.category === "MLOps").length,
  };

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-12">
          <p className="section-label mb-3">Portfolio</p>
          <h1 className="font-display font-extrabold text-5xl mb-4" style={{ color: "var(--text-primary)" }}>
            All <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-lg max-w-2xl" style={{ color: "var(--text-secondary)" }}>
            {projects.length} projects spanning data analytics, machine learning, AI web applications, NLP, and full-stack development.
          </p>
        </motion.div>

        {/* Filter */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap items-center gap-2 mb-10">
          <span className="flex items-center gap-1.5 text-xs mr-2" style={{ color: "var(--text-muted)", fontFamily: "'Space Mono', monospace" }}>
            <Filter size={12} /> Filter:
          </span>
          {categories.map((cat) => (
            <button key={cat} onClick={() => setActive(cat)}
              className="px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 border"
              style={{
                fontFamily: "'Space Mono', monospace",
                backgroundColor: active === cat ? "var(--accent)" : "var(--surface)",
                color: active === cat ? "white" : "var(--text-secondary)",
                borderColor: active === cat ? "var(--accent)" : "var(--border)",
              }}>
              {cat} ({counts[cat as keyof typeof counts] ?? 0})
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div key={active} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
