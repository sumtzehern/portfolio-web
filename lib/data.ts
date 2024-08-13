import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import aiagentImg from "@/public/aiagent.png";
import sandboxImg from "@/public/sandbox.png";
import devSyncImg from "@/public/devsync.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Computer Science Student",
    location: "Virginia Tech, Blacksburg, VA",
    description:
      "Currently pursuing a Bachelor's degree in Computer Science with a focus on software engineering.",
    icon: React.createElement(LuGraduationCap),
    date: "Graduation: 2025",
  },
  {
    title: "Software Engineer Intern",
    location: "CodeDay",
    description:
      "Completed a software engineering internship where I contributed to the development of scalable web applications, collaborated with cross-functional teams, and gained experience in full-stack development.",
    icon: React.createElement(CgWorkAlt),
    date: "Summer 2023",
  },
  {
    title: "Open Source Contributor",
    location: "Remote",
    description:
      "Continuously contributing to different open-source projects, including those related to web development and AI. Open to full-time opportunities where I can leverage my skills in software engineering.",
    icon: React.createElement(FaReact),
    date: "2024 - present",
  },
] as const;

export const projectsData = [
  {
    title: "AI Agent",
    description:
      "Developed a AI agent capable of real-time PDF interaction, document management, and retrieval using advanced NLP techniques.",
    tags: ["React", "Next.js", "PostgreSQL", "AWS-s3", "Tailwind", "TypeScript", "OpenAI API", "Langchain"],
    imageUrl: aiagentImg,
    githubUrl: "https://github.com/sumtzehern/chat-pdf-ai",
  },
  {
    title: "SandBox",
    description:
      "Developed a content management platform with a user-friendly editor, secure authentication, real-time notifications, and enhanced content discovery.",
    tags: ["React", "Node.js", "MongoDB", "AWS", "JavaScript"],
    imageUrl: sandboxImg,
    githubUrl: "https://sandbox-blog.netlify.app/"
  },
  {
    title: "Dev Sync",
    description:
      "A collaborative coding app with real-time screen sharing, responsive design, and seamless user experience, optimized for remote developer pairings.",
    tags: ["React", "Next.js", "PostgreSQL", "Docker", "GetStream API"],
    imageUrl: devSyncImg,
    githubUrl: "https://github.com/sumtzehern/pair-programming-devsync"
  },
] as const;

export const skillsData = [
  "Java",
  "Python",
  "JS/TS",
  "React",
  "Django",
  "Kotlin",
  "C/C++",
  "Node.js",
  "HTML",
  "CSS",
  "Next.js",
  "Express",
  "Tailwind",
  "MongoDB",
  "PostgreSQL",
  "MySQL",
  "Pinecone",
  "Firebase",
  "Amazon Web Services",
] as const;

