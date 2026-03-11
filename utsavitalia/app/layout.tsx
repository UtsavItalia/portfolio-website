import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Utsav Italia — AI/ML Engineer & Data Analyst",
    template: "%s | Utsav ",
  },
  description:
    "AI/ML Engineer with 5+ years building production machine learning systems and full-stack applications. Expert in PyTorch, LangChain, MERN stack, and MLOps.",
  keywords: [
    "ML Engineer", "AI Engineer", "Data Analyst", "Machine Learning",
    "Full Stack Developer", "Python", "Next.js", "Data Science",
    "NLP", "LangChain", "Scikit-learn", "TypeScript",
  ],
  authors: [{ name: "Utsav Italia", url: "https://utsavitalia.dev" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://utsavitalia.dev",
    siteName: "Utsav Italia Portfolio",
    title: "Utsav Italia — AI/ML Engineer & Data Analyst",
    description: "Building intelligent systems that bridge research and production.",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@utsavitalia",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange={false}>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
