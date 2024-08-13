"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
      As a Computer Science student at {" "}
        <span className="font-medium">Virginia Tech</span>, I have cultivated a robust skill set in programming and{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My passion lies in</span> transforming complex ideas into functional, innovative solutions.{" "}
        <span className="font-medium">
        Java as my primary language. I'm also proficient in Python, React, and Node.js,
        </span>
        and have hands-on experience with TypeScript and Next.js. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        engineer/developer. 💻
      </p>

      <p className="mb-3">
      Beyond the classroom, I thrive in fast-paced hackathons, 
      collaborating to build impactful projects and exploring cutting-edge technologies. 
      These experiences have sharpened my problem-solving skills. 🧠 </p>

      <p>
        <span className="italic">When I'm not coding</span>, you'll find me outdoors, enjoying activities like skateboarding 🛹 or immersing myself in new learning adventures.
        I also enjoy{" "}
        <span className="font-medium">reading books 📚 </span>. I am currently
        learning about{" "}
        <span className="font-medium">Machine Learning (ML), Artificial Intelligence (AI), and deep learning </span>.  🤖
      </p>
    </motion.section>
  );
}
