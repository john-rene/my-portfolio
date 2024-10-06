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
        I started coding at 17 and quickly realized it was my passion. After taking Harvard's CS50 MOOC,
        I became fascinated by the power of programming to solve real-world problems. I'm now finishing my{" "}
        <span className="font-medium">Computer Science degree at WGU</span>, where I've developed a strong foundation in software development.
        I love building things—whether it’s creating web applications or automating processes. Programming
        is the perfect combination for me of logic and creativity.
        {" "}
        <span className="font-medium">My specialties include Java, JavaScript (React, Node.js), Python (Django, Flask),
          and Next.js for building robust and scalable applications. I have solid experience with SQL/NoSQL databases and Git for version control. I am also familiar with TypeScript and Prisma.</span>.{" "}
        <span className="italic">Programming isn’t just my career </span>
        <span className="underline">it’s what drives me.</span> I'm constantly pushing myself to learn and innovate, delivering solutions that make an impact.
        {" "}
         I am always looking to learn new technologies.{" "}
        <span className="font-medium">I am currently looking for a full-time position as a software developer.</span>
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies,
        <span className="font-medium"> and studying languages!</span> I currently speak{" "}
        <span className="font-medium"> 5 including my native English.</span> I grew up the child of two immigrants, and they taught me
        Czech and Spanish while they raised me in Florida but I've since picked up German and Ukrainian to speak with
        my other relatives in Central and Eastern Europe.{" "}
      </p>
    </motion.section>
  );
}
