"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar, Coffee, Code2, Zap, Heart, Github, Linkedin, Twitter, Mail, Download, ShieldCheck, Shield, Eye, Users } from "lucide-react";
import { personalInfo } from "@/lib/data";

const timeline = [
  { year: "2023", title: "Data Analyst", company: "P.K. Impex USA Inc.", desc: "Sales performance analysis, customer churn analysis, marketing analysis, and forecasting using Python, Tableau, and statistical modeling." },
  { year: "2021", title: "M.S. Computer Science", company: "Stevens Institute of Technology", desc: "Built ML, full-stack, and blockchain projects. Focus on data-driven systems and AI engineering." },
  { year: "2020", title: "Full Stack Developer Intern", company: "Forefront Infotech", desc: "Redesigned a medical website using MERN stack, implemented a real-time Twilio chatbot with Socket.io, and improved user efficiency by 25%." },
  { year: "2019", title: "Web Development Intern", company: "Vision Infotech", desc: "Collaborated with senior developers on firmware quality, automated testing, and codebase performance improvements." },
  { year: "2017", title: "B.E. Computer Engineering", company: "Sarvajanik College of Engineering and Technology", desc: "Foundation in computer engineering, algorithms, and software development." },
];

const interests = [
  { icon: Shield, text: "Online security & privacy" },
  { icon: Eye, text: "Digital transparency" },
  { icon: Users, text: "Making tech accessible for everyone" },
  { icon: ShieldCheck, text: "Cybersecurity awareness" },
];

export default function AboutClient() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-16">
          <p className="section-label mb-3">About Me</p>
          <h1 className="font-display font-extrabold text-5xl mb-4" style={{ color: "var(--text-primary)" }}>
            The analyst turned <span className="gradient-text">ML/AI engineer</span>
          </h1>
          <div className="flex flex-wrap items-center gap-4 mt-4">
            <span className="flex items-center gap-1.5 text-sm" style={{ color: "var(--text-muted)", fontFamily: "'Space Mono', monospace" }}>
              <MapPin size={14} style={{ color: "var(--accent)" }} />{personalInfo.location}
            </span>
            <span className="flex items-center gap-1.5 text-sm" style={{ color: "var(--text-muted)", fontFamily: "'Space Mono', monospace" }}>
              <Calendar size={14} style={{ color: "var(--accent)" }} />3+ years experience
            </span>
            <span className="flex items-center gap-1.5 text-sm px-3 py-1 rounded-full" style={{ backgroundColor: "var(--green-subtle)", color: "var(--green)", fontFamily: "'Space Mono', monospace" }}>
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: "var(--green)" }} />
              Open to work
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column */}
          <div className="lg:col-span-1">
            {/* Avatar placeholder */}
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.1 }}
              className="relative mb-8">
              <div className="w-full aspect-square rounded-2xl flex items-center justify-center text-8xl font-display font-black border"
                style={{ backgroundColor: "var(--accent-subtle)", borderColor: "var(--accent)", color: "var(--accent)" }}>
                UI
              </div>
              <div className="absolute -bottom-3 -right-3 px-3 py-1.5 rounded-full text-xs border"
                style={{ backgroundColor: "var(--surface)", borderColor: "var(--border)", color: "var(--text-secondary)", fontFamily: "'Space Mono', monospace" }}>
                3yr exp.
              </div>
            </motion.div>
            {/* Social Links */}
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="mb-8">
              <p className="section-label mb-4">Connect</p>
              <div className="space-y-2">
                {[
                  { href: personalInfo.github, icon: Github, label: "GitHub", username: "@utsavitalia" },
                  { href: personalInfo.linkedin, icon: Linkedin, label: "LinkedIn", username: "in/utsav-italia" },
                  { href: personalInfo.twitter, icon: Twitter, label: "Twitter", username: "@utsavitalia" },
                  { href: `mailto:${personalInfo.email}`, icon: Mail, label: "Email", username: personalInfo.email },
                ].map(({ href, icon: Icon, label, username }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-3 p-2.5 rounded-lg transition-all hover:bg-surface-hover"
                    style={{ color: "var(--text-secondary)" }}>
                    <Icon size={16} style={{ color: "var(--accent)" }} />
                    <span className="text-sm" style={{ fontFamily: "'Space Mono', monospace" }}>{username}</span>
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Interests */}
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
              <p className="section-label mb-4">Interests</p>
              <div className="space-y-2">
                {interests.map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-3 text-sm" style={{ color: "var(--text-secondary)" }}>
                    <Icon size={15} style={{ color: "var(--accent)" }} />
                    {text}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-2">
            {/* Bio */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }} className="mb-12">
              <p className="section-label mb-4">Background</p>
              {personalInfo.longBio.split("\n\n").map((para, i) => (
                <p key={i} className="text-base leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>{para}</p>
              ))}
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex mt-2">
                <Download size={16} /> Download Resume
              </a>
            </motion.div>

            {/* Timeline */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.25 }}>
              <p className="section-label mb-6">Experience & Education</p>
              <div className="relative">
                <div className="absolute left-[11px] top-2 bottom-2 w-px" style={{ backgroundColor: "var(--border)" }} />
                <div className="space-y-8">
                  {timeline.map((item, i) => (
                    <motion.div key={i} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                      className="flex gap-6">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full border-2 mt-0.5 flex items-center justify-center z-10"
                        style={{ backgroundColor: "var(--bg)", borderColor: "var(--accent)" }}>
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "var(--accent)" }} />
                      </div>
                      <div className="flex-1 pb-2">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-medium px-2 py-0.5 rounded" style={{ backgroundColor: "var(--accent-subtle)", color: "var(--accent)", fontFamily: "'Space Mono', monospace" }}>{item.year}</span>
                          <span className="text-xs" style={{ color: "var(--text-muted)" }}>{item.company}</span>
                        </div>
                        <h3 className="font-display font-bold text-base mb-1" style={{ color: "var(--text-primary)" }}>{item.title}</h3>
                        <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
