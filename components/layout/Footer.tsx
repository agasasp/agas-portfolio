"use client";

import { Heart } from "lucide-react";
import { personalInfo } from "@/data/portofolio";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-28">

      <div className="mx-auto max-w-7xl px-6 py-10">

        <div className="flex flex-col items-center gap-4">

          <h2 className="text-3xl font-black">
            Agas<span className="text-blue-500">.</span>
          </h2>

          <p className="text-gray-400 text-center">
            Quality Assurance Engineer
          </p>

          <div className="flex gap-6 text-gray-400">
            <a
              href={personalInfo.github}
              className="hover:text-blue-400 transition"
            >
              GitHub
            </a>

            <a
              href={personalInfo.linkedin}
              className="hover:text-blue-400 transition"
            >
              LinkedIn
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              className="hover:text-blue-400 transition"
            >
              Email
            </a>
          </div>

          <div className="flex items-center gap-2 text-gray-500 text-sm">

            Made with

            <Heart
              size={16}
              className="text-red-500 fill-red-500"
            />

            using Next.js & TypeScript

          </div>

          <p className="text-gray-600 text-sm">

            © {new Date().getFullYear()} Agas Putra. All Rights Reserved.

          </p>

        </div>

      </div>

    </footer>
  );
}