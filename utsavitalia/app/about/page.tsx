import type { Metadata } from "next";
import { personalInfo } from "@/lib/data";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About",
  description: `Learn about ${personalInfo.name} — Data Analyst transitioning into ML/AI Engineering, Full-Stack Developer based in ${personalInfo.location}.`,
};

export default function AboutPage() {
  return <AboutClient />;
}
