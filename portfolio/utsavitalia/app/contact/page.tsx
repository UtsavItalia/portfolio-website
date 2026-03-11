"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";
import { personalInfo } from "@/lib/data";

type FormErrors = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = "Please enter your full name.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.subject) {
      newErrors.subject = "Please select a subject.";
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 20 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const ErrorMsg = ({ msg }: { msg?: string }) =>
    msg ? (
      <p className="flex items-center gap-1 text-xs mt-1" style={{ color: "#e05c2a" }}>
        <AlertCircle size={12} /> {msg}
      </p>
    ) : null;

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-16">
          <p className="section-label mb-3">Get in Touch</p>
          <h1 className="font-display font-extrabold text-5xl mb-4" style={{ color: "var(--text-primary)" }}>
            Let&apos;s <span className="gradient-text">Collaborate</span>
          </h1>
          <p className="text-lg max-w-2xl" style={{ color: "var(--text-secondary)" }}>
            Whether you have a full-time ML/AI role, want to collaborate on a project, or just want to connect — my inbox is always open.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left: Info */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="lg:col-span-2">
            <div className="space-y-8">
              <div>
                <p className="section-label mb-5">Contact Info</p>
                <div className="space-y-4">
                  {[
                    { icon: Mail, label: "Email", value: personalInfo.email, href: null },
                    { icon: MapPin, label: "Location", value: personalInfo.location, href: null },
                    { icon: Github, label: "GitHub", value: "@utsavitalia", href: personalInfo.github },
                    { icon: Linkedin, label: "LinkedIn", value: "in/utsav-italia", href: personalInfo.linkedin },
                    { icon: Twitter, label: "Twitter", value: "@utsavitalia", href: personalInfo.twitter },
                  ].map(({ icon: Icon, label, value, href }) => (
                    <div key={label} className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "var(--accent-subtle)" }}>
                        <Icon size={16} style={{ color: "var(--accent)" }} />
                      </div>
                      <div>
                        <p className="text-xs mb-0.5" style={{ color: "var(--text-muted)", fontFamily: "'Space Mono', monospace" }}>{label}</p>
                        {href ? (
                          <a href={href} target="_blank" rel="noopener noreferrer" className="text-sm font-medium transition-colors hover:text-accent" style={{ color: "var(--text-primary)" }}>{value}</a>
                        ) : (
                          <p className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>{value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card p-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2.5 h-2.5 rounded-full animate-pulse" style={{ backgroundColor: "var(--green)" }} />
                  <span className="text-sm font-medium" style={{ color: "var(--green)", fontFamily: "'Space Mono', monospace" }}>Available for work</span>
                </div>
                <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                  Open to full-time ML/AI engineering roles and data analyst positions.
                </p>
              </div>

              <div>
                <p className="section-label mb-4">Response Time</p>
                <div className="space-y-2 text-sm">
                  {[
                    { label: "Email", time: "< 24 hours" },
                    { label: "LinkedIn", time: "< 24 hours" },
                    { label: "Twitter", time: "2-3 days" },
                  ].map(({ label, time }) => (
                    <div key={label} className="flex justify-between py-2 border-b" style={{ borderColor: "var(--border-subtle)" }}>
                      <span style={{ color: "var(--text-secondary)" }}>{label}</span>
                      <span style={{ color: "var(--text-muted)", fontFamily: "'Space Mono', monospace" }}>{time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.15 }} className="lg:col-span-3">
            {submitted ? (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                className="card p-12 text-center h-full flex flex-col items-center justify-center">
                <CheckCircle size={48} className="mb-4" style={{ color: "var(--green)" }} />
                <h2 className="font-display font-bold text-2xl mb-2" style={{ color: "var(--text-primary)" }}>Message Sent!</h2>
                <p style={{ color: "var(--text-secondary)" }}>Thanks for reaching out. I&apos;ll get back to you within 24 hours.</p>
                <button onClick={() => { setSubmitted(false); setFormData({ name: "", email: "", subject: "", message: "" }); setErrors({}); }}
                  className="btn-secondary mt-6">Send Another Message</button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="card p-8 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {[
                    { name: "name", label: "Name", type: "text", placeholder: "Alex Smith" },
                    { name: "email", label: "Email", type: "email", placeholder: "alex@company.com" },
                  ].map((field) => (
                    <div key={field.name}>
                      <label className="block text-xs mb-1.5" style={{ color: "var(--text-muted)", fontFamily: "'Space Mono', monospace" }}>{field.label} *</label>
                      <input
                        type={field.type}
                        name={field.name}
                        value={formData[field.name as keyof typeof formData]}
                        onChange={handleChange}
                        placeholder={field.placeholder}
                        className="w-full px-3 py-2.5 rounded-lg text-sm border outline-none transition-colors"
                        style={{
                          backgroundColor: "var(--bg)",
                          color: "var(--text-primary)",
                          borderColor: errors[field.name as keyof FormErrors] ? "#e05c2a" : "var(--border)",
                        }}
                      />
                      <ErrorMsg msg={errors[field.name as keyof FormErrors]} />
                    </div>
                  ))}
                </div>

                <div>
                  <label className="block text-xs mb-1.5" style={{ color: "var(--text-muted)", fontFamily: "'Space Mono', monospace" }}>Subject *</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 rounded-lg text-sm border outline-none transition-colors"
                    style={{
                      backgroundColor: "var(--bg)",
                      color: formData.subject ? "var(--text-primary)" : "var(--text-muted)",
                      borderColor: errors.subject ? "#e05c2a" : "var(--border)",
                    }}>
                    <option value="">Select a subject...</option>
                    <option value="full-time">Full-time opportunity</option>
                    <option value="freelance">Freelance / contract work</option>
                    <option value="collaboration">Project collaboration</option>
                    <option value="other">Other</option>
                  </select>
                  <ErrorMsg msg={errors.subject} />
                </div>

                <div>
                  <label className="block text-xs mb-1.5" style={{ color: "var(--text-muted)", fontFamily: "'Space Mono', monospace" }}>Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    placeholder="Tell me about the role, your company, or what you'd like to collaborate on..."
                    className="w-full px-3 py-2.5 rounded-lg text-sm border outline-none transition-colors resize-none"
                    style={{
                      backgroundColor: "var(--bg)",
                      color: "var(--text-primary)",
                      borderColor: errors.message ? "#e05c2a" : "var(--border)",
                    }}
                  />
                  <div className="flex justify-between items-center">
                    <ErrorMsg msg={errors.message} />
                    <span className="text-xs ml-auto" style={{ color: formData.message.length < 10 ? "var(--text-muted)" : "var(--green)", fontFamily: "'Space Mono', monospace" }}>
                      {formData.message.length} / 10 min
                    </span>
                  </div>
                </div>

                <button type="submit" disabled={loading}
                  className="btn-primary w-full justify-center py-3 text-sm"
                  style={{ opacity: loading ? 0.7 : 1 }}>
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <><Send size={16} /> Send Message</>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
