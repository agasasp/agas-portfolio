"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import Button from "@/components/ui/Button";
import { personalInfo, stats } from "@/data/portofolio";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-24"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center text-center">

        {/* Profile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative h-44 w-44 sm:h-48 sm:w-48 md:h-52 md:w-52"
        >
          <div className="absolute inset-0 rounded-full bg-blue-500 blur-3xl opacity-30" />

          <Image
            src={personalInfo.profileImage}
            alt={personalInfo.name}
            fill
            priority
            className="rounded-full border-4 border-white/10 object-cover"
          />
        </motion.div>

        {/* Job */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-10 uppercase tracking-[6px] text-sm text-blue-400 sm:text-base"
        >
          {personalInfo.title}
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-5 text-4xl font-black leading-tight sm:text-5xl md:text-7xl lg:text-8xl"
        >
          {personalInfo.name}
        </motion.h1>

        {/* Typing */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-8 h-10 text-lg font-semibold text-blue-300 sm:text-xl md:text-2xl"
        >
          <TypeAnimation
            sequence={[
              "Manual Testing",
              1500,
              "Automation Testing",
              1500,
              "API Testing",
              1500,
              "Regression Testing",
              1500,
              "Smoke Testing",
              1500,
            ]}
            repeat={Infinity}
          />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mx-auto mt-6 max-w-3xl text-base leading-8 text-gray-400 md:text-lg"
        >
          {personalInfo.subtitle}
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12 flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row sm:justify-center"
        >
          <Button href={personalInfo.cv}>
            📄 Download CV
          </Button>

          <Button
            href="#projects"
            variant="secondary"
          >
            🚀 View Projects
          </Button>
        </motion.div>
      </div>
    </section>
  );
}