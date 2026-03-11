"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, Download, TrendingUp, Cpu, Globe, Database, BarChart, MessageSquare, Settings } from "lucide-react";
import { personalInfo, stats, projects } from "@/lib/data";
import ProjectCard from "@/components/ui/ProjectCard";

const roles = [
  "Aspiring ML/AI Engineer",
  "Data Analyst",
  "Full-Stack Developer",
  "ML Enthusiast",
];

function TypingRole() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIdx];
    let timeout: ReturnType<typeof setTimeout>;
    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
    } else {
      setDeleting(false);
      setRoleIdx((prev) => (prev + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIdx]);

  return (
    <span style={{ color: "var(--accent)" }}>
      {displayed}
      <span style={{ borderRight: "2px solid var(--accent)", marginLeft: "2px", animation: "blink 1s step-end infinite" }} />
    </span>
  );
}

export default function HomePage() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)`, backgroundSize: "60px 60px" }} />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-10 pointer-events-none" style={{ background: "radial-gradient(circle, var(--accent), transparent)" }} />
        <div className="absolute bottom-1/3 left-1/4 w-64 h-64 rounded-full blur-3xl opacity-10 pointer-events-none" style={{ background: "radial-gradient(circle, var(--accent-2), transparent)" }} />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs mb-8 border"
              style={{ backgroundColor: "var(--green-subtle)", borderColor: "var(--green)", color: "var(--green)", fontFamily: "'Space Mono', monospace" }}>
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: "var(--green)" }} />
              Available for new projects
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display font-extrabold leading-none mb-4"
              style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", color: "var(--text-primary)" }}>
              Building with Data,<br /><span className="gradient-text">Powered by AI</span>
            </motion.h1>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl mb-6 font-medium" style={{ color: "var(--text-secondary)", fontFamily: "'Space Mono', monospace" }}>
              <TypingRole />
            </motion.div>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg mb-10 leading-relaxed max-w-2xl" style={{ color: "var(--text-secondary)" }}>
              {personalInfo.bio}
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-3 mb-12">
              <Link href="/projects" className="btn-primary">View Projects <ArrowRight size={16} /></Link>
              <Link href="/contact" className="btn-secondary">Get in Touch</Link>
              <a href="/resume.pdf" className="btn-secondary" target="_blank" rel="noopener noreferrer">
                <Download size={16} /> Resume
              </a>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center gap-4">
              {[{ href: personalInfo.github, icon: Github, label: "GitHub" }, { href: personalInfo.linkedin, icon: Linkedin, label: "LinkedIn" }, { href: `mailto:${personalInfo.email}`, icon: Mail, label: "Email" }].map(({ href, icon: Icon, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="flex items-center gap-2 text-sm transition-all hover:text-accent" style={{ color: "var(--text-muted)" }}>
                  <Icon size={18} />
                </a>
              ))}
              <span className="text-xs" style={{ color: "var(--text-muted)", fontFamily: "'Space Mono', monospace" }}>{personalInfo.location}</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-y" style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-secondary)" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div key={stat.label} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
                <div className="font-display font-extrabold text-4xl mb-1" style={{ color: "var(--accent)" }}>{stat.value}</div>
                <div className="text-sm" style={{ color: "var(--text-muted)", fontFamily: "'Space Mono', monospace" }}>{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Domains */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <p className="section-label mb-3">What I Do</p>
            <h2 className="font-display font-bold text-3xl" style={{ color: "var(--text-primary)" }}>From Data to Intelligence</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: BarChart, title: "Data Analytics", desc: "Sales performance, churn analysis, and forecasting using Python, Pandas, Tableau, and statistical modeling from real-world experience.", color: "var(--blue)", bg: "var(--blue-subtle)", count: projects.filter((p) => p.category === "Data Analytics").length },
              { icon: Cpu, title: "Machine Learning", desc: "End-to-end ML pipelines, classification models, and time series forecasting using Scikit-learn, XGBoost, and Python.", color: "var(--accent)", bg: "var(--accent-subtle)", count: projects.filter((p) => p.category === "Machine Learning").length },
              { icon: Globe, title: "AI Web Applications", desc: "LLM-powered apps, RAG systems, and AI-native interfaces built with LangChain, OpenAI API, and vector databases.", color: "var(--accent-2)", bg: "var(--accent-2-subtle)", count: projects.filter((p) => p.category === "AI Web Application").length },
              { icon: MessageSquare, title: "NLP", desc: "Text classification, sentiment analysis, and natural language processing using NLTK, Scikit-learn, and HuggingFace Transformers.", color: "var(--purple)", bg: "var(--purple-subtle)", count: projects.filter((p) => p.category === "NLP").length },
              { icon: Database, title: "Full Stack", desc: "Scalable full-stack applications with React, Next.js, Node.js, and MongoDB — from REST APIs to real-time systems.", color: "var(--green)", bg: "var(--green-subtle)", count: projects.filter((p) => p.category === "Full Stack").length },
              { icon: Settings, title: "MLOps", desc: "ML model deployment, REST API serving, and prediction monitoring using FastAPI, Docker, and PostgreSQL.", color: "var(--yellow)", bg: "var(--yellow-subtle)", count: projects.filter((p) => p.category === "MLOps").length },
            ].map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="card p-6">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: item.bg }}>
                  <item.icon size={22} style={{ color: item.color }} />
                </div>
                <h3 className="font-display font-bold text-lg mb-2" style={{ color: "var(--text-primary)" }}>{item.title}</h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>{item.desc}</p>
                <span className="text-xs font-medium" style={{ color: item.color, fontFamily: "'Space Mono', monospace" }}>{item.count} projects →</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20" style={{ backgroundColor: "var(--bg-secondary)" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="section-label mb-3">Portfolio</p>
              <h2 className="font-display font-bold text-3xl" style={{ color: "var(--text-primary)" }}>Featured Projects</h2>
            </div>
            <Link href="/projects" className="text-sm font-medium flex items-center gap-1 transition-colors hover:text-accent" style={{ color: "var(--text-muted)", fontFamily: "'Space Mono', monospace" }}>
              View all <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, i) => <ProjectCard key={project.id} project={project} index={i} />)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden p-12 text-center border"
            style={{ background: "linear-gradient(135deg, var(--accent-subtle) 0%, var(--accent-2-subtle) 100%)", borderColor: "var(--border)" }}>
            <div className="relative">
              <p className="section-label mb-4">Open to Opportunities</p>
              <h2 className="font-display font-extrabold text-4xl mb-4" style={{ color: "var(--text-primary)" }}>
                Let&apos;s build something <span className="gradient-text">intelligent</span>
              </h2>
              <p className="text-lg mb-8 max-w-xl mx-auto" style={{ color: "var(--text-secondary)" }}>
                Open to full-time ML/AI engineering roles. I bring 3 years of hands-on data analytics experience, a full-stack development background, and a growing ML skillset — ready to contribute to teams building real AI products.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link href="/contact" className="btn-primary">Start a Conversation <ArrowRight size={16} /></Link>
                <Link href="/projects" className="btn-secondary"><TrendingUp size={16} /> See My Work</Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
