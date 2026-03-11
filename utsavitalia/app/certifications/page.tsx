"use client";

import { motion } from "framer-motion";
import { ExternalLink, Award } from "lucide-react";
import { certifications } from "@/lib/data";

export default function CertificationsPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-16">
          <p className="section-label mb-3">Credentials</p>
          <h1 className="font-display font-extrabold text-5xl mb-4" style={{ color: "var(--text-primary)" }}>
            <span className="gradient-text">Certifications</span>
          </h1>
          <p className="text-lg max-w-2xl" style={{ color: "var(--text-secondary)" }}>
            Industry-recognized certifications validating expertise across machine learning, cloud infrastructure, and software development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, i) => (
            <motion.div key={cert.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              className="card p-6 flex flex-col">
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 text-lg font-bold"
                style={{ backgroundColor: `${cert.color}15`, color: cert.color, border: `1px solid ${cert.color}30`, fontFamily: "'Space Mono', monospace" }}>
                <Award size={22} />
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="font-display font-bold text-base mb-1 leading-snug" style={{ color: "var(--text-primary)" }}>{cert.name}</h3>
                <p className="text-sm mb-3" style={{ color: "var(--accent)" }}>{cert.issuer}</p>
                <div className="flex items-center justify-between text-xs mb-4" style={{ color: "var(--text-muted)", fontFamily: "'Space Mono', monospace" }}>
                  <span>Issued {cert.date}</span>
                  <span>{cert.credentialId}</span>
                </div>
              </div>

              {/* Link */}
              <a href={cert.link} target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-xs py-2 px-4 rounded-lg transition-all border hover:scale-105"
                style={{ borderColor: cert.color, color: cert.color, backgroundColor: `${cert.color}08` }}>
                <ExternalLink size={12} /> Verify Credential
              </a>
            </motion.div>
          ))}
        </div>

        {/* Courses section */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-20">
          <p className="section-label mb-6">Ongoing Learning</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: "Deep Learning Specialization", platform: "DeepLearning.AI", status: "In progress" },
              { title: "HuggingFace NLP Course", platform: "HuggingFace", status: "In progress" },
              { title: "IBM AI Engineering Professional Certificate", platform: "IBM / Coursera", status: "In progress" },
              { title: "AWS Machine Learning Specialty", platform: "Amazon Web Services", status: "In progress" },
              { title: "MLOps Specialization", platform: "DeepLearning.AI", status: "In progress" },
              { title: "Master the Mathematics Behind AI", platform: "DeepLearning.AI", status: "Planned" },
              { title: "IBM AI Product Manager Professional Certificate", platform: "IBM / Coursera", status: "Planned" },
            ].map((course, i) => (
              <div key={i} className="card p-4 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>{course.title}</p>
                  <p className="text-xs mt-0.5" style={{ color: "var(--text-muted)", fontFamily: "'Space Mono', monospace" }}>{course.platform}</p>
                </div>
                <span className="text-xs px-2.5 py-1 rounded-full whitespace-nowrap"
                  style={{
                    backgroundColor: course.status === "In progress" ? "var(--accent-subtle)" : "var(--bg-secondary)",
                    color: course.status === "In progress" ? "var(--accent)" : "var(--text-muted)",
                    fontFamily: "'Space Mono', monospace",
                  }}>
                  {course.status}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
