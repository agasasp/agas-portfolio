"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, BadgeCheck } from "lucide-react";

import SectionTitle from "@/components/ui/SectionTitle";
import { projects } from "@/data/portofolio";

export default function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-7xl px-6 py-28"
    >
      <SectionTitle
        badge="Portfolio"
        title="Featured Projects"
        description="Beberapa project yang pernah saya kerjakan sebagai Quality Assurance Engineer."
      />

      <div className="grid gap-8 lg:grid-cols-2">

        {projects.map((project) => (

          <motion.div
            key={project.title}
            whileHover={{
              y: -8,
              scale: 1.02,
            }}
            transition={{
              duration: 0.25,
            }}
            className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-blue-500 hover:shadow-[0_0_35px_rgba(59,130,246,.3)] transition-all"
          >

            <div
              className={`h-2 bg-gradient-to-r ${project.color}`}
            />

            <div className="p-8">

              <span className="rounded-full bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
                {project.category}
              </span>

              <h3 className="mt-6 text-3xl font-bold">
                {project.title}
              </h3>

              <p className="mt-2 text-blue-400 font-medium">
                {project.company}
              </p>

              <p className="mt-6 leading-8 text-gray-400">
                {project.description}
              </p>

              {/* QA Role */}
              <div className="mt-6 flex items-center gap-2 text-green-400">

                <BadgeCheck size={18} />

                <span className="text-sm">
                  QA Engineer
                </span>

              </div>

              {/* Tech */}
              <div className="mt-8 flex flex-wrap gap-3">

                {project.tech.map((tech) => (

                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm transition group-hover:border-blue-500"
                  >
                    {tech}
                  </span>

                ))}

              </div>

              <div className="mt-10">

                <a
                  href={project.demo}
                  className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold transition hover:bg-blue-500"
                >
                  View Project

                  <ArrowUpRight
                    size={18}
                  />

                </a>

              </div>

            </div>

          </motion.div>

        ))}

      </div>
    </section>
  );
}