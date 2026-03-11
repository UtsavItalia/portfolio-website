import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: {
    default: "Utsav Italia — Data Analyst & Aspiring ML/AI Engineer",
    template: "%s | Utsav Italia",
  },
  description:
    "Data Analyst with 3 years of experience transitioning into ML/AI Engineering. Building end-to-end data-driven applications with Python, Scikit-learn, and modern web technologies.",
  keywords: [
    "ML Engineer", "AI Engineer", "Data Analyst", "Machine Learning",
    "Full Stack Developer", "Python", "Next.js", "Data Science",
    "NLP", "Scikit-learn", "TypeScript", "Tableau", "forecasting",
  ],
  authors: [{ name: "Utsav Italia", url: "https://utsavitalia.dev" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://utsavitalia.dev",
    siteName: "Utsav Italia Portfolio",
    title: "Utsav Italia — Data Analyst & Aspiring ML/AI Engineer",
    description: "Data Analyst transitioning into ML/AI Engineering — building intelligent, data-driven systems.",
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
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
