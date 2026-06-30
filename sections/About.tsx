"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import { stats } from "@/data/portofolio";
import CountUp from "react-countup";

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-7xl px-6 py-24"
    >
      <SectionTitle
        badge="About Me"
        title="Quality isn't just finding bugs."
        description="Saya adalah seorang Quality Assurance Engineer yang berfokus pada Manual Testing, Automation Testing menggunakan Playwright, API Testing, Regression Testing, Smoke Testing, serta memastikan setiap fitur memberikan pengalaman terbaik kepada pengguna."
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-2 gap-6 md:grid-cols-4"
      >
        {stats.map((item) => (
          <div
            key={item.label}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-md transition hover:border-blue-500"
          >
            <h3 className="text-4xl font-black leading-tight md:text-6xl">
        < CountUp
         end={parseInt(item.value)}
         duration={2}
         enableScrollSpy
        />
         {item.value.includes("%") ? "%" : "+"}
            </h3>

            <p className="mt-2 text-gray-400">
              {item.label}
            </p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}