"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Sun, Moon, Menu, X, Terminal } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/certifications", label: "Certs" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? "border-b"
          : ""
          }`}
        style={{
          backgroundColor: scrolled ? "var(--bg)" : "transparent",
          borderColor: scrolled ? "var(--border)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
        }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center transition-transform group-hover:rotate-12"
                style={{ backgroundColor: "var(--accent)" }}
              >
                <Terminal size={16} color="white" strokeWidth={2.5} />
              </div>
              <span
                className="font-display font-bold text-lg tracking-tight"
                style={{ color: "var(--text-primary)" }}
              >
                Utsav<span style={{ color: "var(--accent)" }}>.</span>dev
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="relative px-3 py-1.5 rounded-md text-sm font-medium transition-colors duration-200"
                    style={{
                      color: isActive ? "var(--accent)" : "var(--text-secondary)",
                      backgroundColor: isActive ? "var(--accent-subtle)" : "transparent",
                      fontFamily: "'Space Mono', monospace",
                      fontSize: "12px",
                    }}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="nav-active"
                        className="absolute inset-0 rounded-md"
                        style={{ backgroundColor: "var(--accent-subtle)" }}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                    <span className="relative">{link.label}</span>
                  </Link>
                );
              })}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg transition-all duration-200 hover:scale-110"
                style={{
                  backgroundColor: "var(--surface)",
                  color: "var(--text-secondary)",
                  border: "1px solid var(--border)",
                }}
                aria-label="Toggle theme"
              >
                {mounted && theme === "dark" ? (
                  <Sun size={16} />
                ) : (
                  <Moon size={16} />
                )}
              </button>

              <Link
                href="/contact"
                className="hidden md:flex btn-primary text-xs px-4 py-2"
                style={{ fontFamily: "'Space Mono', monospace" }}
              >
                hire_me()
              </Link>

              {/* Mobile menu button */}
              <button
                className="md:hidden p-2 rounded-lg transition-colors"
                style={{
                  backgroundColor: "var(--surface)",
                  color: "var(--text-secondary)",
                  border: "1px solid var(--border)",
                }}
                onClick={() => setMobileOpen(!mobileOpen)}
              >
                {mobileOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 border-b p-4"
            style={{
              backgroundColor: "var(--bg)",
              borderColor: "var(--border)",
              backdropFilter: "blur(16px)",
            }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 rounded-lg text-sm font-medium mb-1 transition-colors"
                style={{
                  color:
                    pathname === link.href
                      ? "var(--accent)"
                      : "var(--text-secondary)",
                  backgroundColor:
                    pathname === link.href
                      ? "var(--accent-subtle)"
                      : "transparent",
                  fontFamily: "'Space Mono', monospace",
                  fontSize: "13px",
                }}
              >
                {link.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
