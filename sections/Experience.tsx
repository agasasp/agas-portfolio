"use client";

import { motion } from "framer-motion";
import { BriefcaseBusiness } from "lucide-react";

import SectionTitle from "@/components/ui/SectionTitle";
import { experiences } from "@/data/portofolio";

export default function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-6xl px-6 py-28"
    >
      <SectionTitle
        badge="Experience"
        title="My Journey"
        description="Perjalanan saya sebagai Quality Assurance Engineer."
      />

      <div className="relative border-l border-white/10 ml-4">

        {experiences.map((exp, index) => (

          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.15,
            }}
            className="relative mb-12 ml-8"
          >

            {/* Timeline Dot */}
            <div className="absolute -left-[42px] top-8 flex h-6 w-6 items-center justify-center rounded-full border-4 border-slate-900 bg-blue-500">
              <div className="h-2 w-2 rounded-full bg-white" />
            </div>

            {/* Card */}
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-[0_0_30px_rgba(59,130,246,.25)]">

              {/* Period */}
              <span className="inline-block rounded-full bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
                {exp.period}
              </span>

              {/* Position */}
              <div className="mt-5 flex items-center gap-3">

                <div className="rounded-xl bg-blue-500/10 p-3">
                  <BriefcaseBusiness
                    size={22}
                    className="text-blue-400"
                  />
                </div>

                <div>
                  <h3 className="text-2xl font-bold">
                    {exp.position}
                  </h3>

                  <p className="text-gray-400">
                    {exp.company}
                  </p>
                </div>

              </div>

              {/* Description */}
              <p className="mt-6 leading-8 text-gray-400">
                {exp.description}
              </p>

            </div>

          </motion.div>

        ))}

      </div>
    </section>
  );
}