"use client";

import Link from "next/link";
import { Github, Linkedin, Twitter, Mail, Terminal, ArrowUp } from "lucide-react";
import { personalInfo } from "@/lib/data";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer
      className="border-t mt-24"
      style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-secondary)" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div
                className="w-7 h-7 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: "var(--accent)" }}
              >
                <Terminal size={14} color="white" strokeWidth={2.5} />
              </div>
              <span
                className="font-display font-bold text-lg"
                style={{ color: "var(--text-primary)" }}
              >
                Utsav<span style={{ color: "var(--accent)" }}>.</span>dev
              </span>
            </div>
            <p className="text-sm" style={{ color: "var(--text-muted)", lineHeight: 1.7 }}>
              Data Analyst turned ML/AI Engineer — Building intelligent systems one project at a time.
            </p>
            <div className="flex items-center gap-1 mt-3">
              <div
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: "var(--green)" }}
              />
              <span className="text-xs" style={{ color: "var(--green)", fontFamily: "'Space Mono', monospace" }}>
                available for work
              </span>
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <p className="section-label mb-4">Navigation</p>
              {["/", "/about", "/projects", "/skills"].map((href) => (
                <Link
                  key={href}
                  href={href}
                  className="block text-sm mb-2 transition-colors hover:text-accent"
                  style={{ color: "var(--text-muted)" }}
                >
                  {href === "/" ? "Home" : href.slice(1).charAt(0).toUpperCase() + href.slice(2)}
                </Link>
              ))}
            </div>
            <div>
              <p className="section-label mb-4">More</p>
              {["/certifications", "/contact"].map((href) => (
                <Link
                  key={href}
                  href={href}
                  className="block text-sm mb-2 transition-colors hover:text-accent"
                  style={{ color: "var(--text-muted)" }}
                >
                  {href.slice(1).charAt(0).toUpperCase() + href.slice(2)}
                </Link>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <p className="section-label mb-4">Connect</p>
            <div className="flex gap-3 mb-4">
              {[
                { href: personalInfo.github, icon: Github, label: "GitHub" },
                { href: personalInfo.linkedin, icon: Linkedin, label: "LinkedIn" },
                { href: personalInfo.twitter, icon: Twitter, label: "Twitter" },
                { href: `mailto:${personalInfo.email}`, icon: Mail, label: "Email" },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                  style={{
                    backgroundColor: "var(--surface)",
                    color: "var(--text-muted)",
                    border: "1px solid var(--border)",
                  }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
            <p className="text-xs" style={{ color: "var(--text-muted)", fontFamily: "'Space Mono', monospace" }}>
              {personalInfo.email}
            </p>
          </div>
        </div>

        <div
          className="flex items-center justify-between mt-10 pt-6 border-t"
          style={{ borderColor: "var(--border)" }}
        >
          <p className="text-xs" style={{ color: "var(--text-muted)", fontFamily: "'Space Mono', monospace" }}>
            © {new Date().getFullYear()} {personalInfo.name}. Built with Next.js + TypeScript.
          </p>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg transition-all hover:scale-110"
            style={{
              backgroundColor: "var(--surface)",
              color: "var(--text-muted)",
              border: "1px solid var(--border)",
            }}
            aria-label="Scroll to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
