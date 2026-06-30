"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import SectionTitle from "@/components/ui/SectionTitle";
import { skills } from "@/data/portofolio";

export default function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto max-w-7xl px-6 py-28"
    >
      <SectionTitle
        badge="Skills"
        title="Tech Stack"
        description="Tools dan teknologi yang saya gunakan dalam pekerjaan sebagai Quality Assurance Engineer."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

        {skills.map((skill) => (

          <motion.div
            key={skill.name}
            whileHover={{
              y: -8,
              scale: 1.03,
            }}
            transition={{ duration: .25 }}
            className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all hover:border-blue-500 hover:shadow-[0_0_35px_rgba(59,130,246,.25)]"
          >

            <div className="flex justify-center">

              <Image
                src={skill.icon}
                alt={skill.name}
                width={60}
                height={60}
                className="transition-transform duration-300 group-hover:scale-110"
              />

            </div>

            <h3 className="mt-6 text-center text-xl font-bold">

              {skill.name}

            </h3>

            <p className="mt-2 text-center text-sm text-gray-400">

              {skill.category}

            </p>

          </motion.div>

        ))}

      </div>

    </section>
  );
}