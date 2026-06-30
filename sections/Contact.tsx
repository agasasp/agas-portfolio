"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
} from "lucide-react";

import SectionTitle from "@/components/ui/SectionTitle";
import { personalInfo } from "@/data/portofolio";

const contacts = [
  {
    title: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    icon: Mail,
  },
  {
    title: "Phone",
    value: personalInfo.phone,
    href: `https://wa.me/${personalInfo.phone.replace(/\D/g, "")}`,
    icon: Phone,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-7xl px-6 py-28"
    >
      <SectionTitle
        badge="Contact"
        title="Let's Work Together"
        description="Terima kasih telah mengunjungi portfolio saya. Jangan ragu untuk menghubungi saya untuk berdiskusi mengenai peluang kerja maupun kolaborasi."
      />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

        {contacts.map((item) => {
          const Icon = item.icon;

          return (
            <motion.a
              key={item.title}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                y: -6,
                scale: 1.02,
              }}
              className="flex items-center gap-5 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:border-blue-500 hover:shadow-[0_0_30px_rgba(59,130,246,.25)]"
            >
              <div className="rounded-2xl bg-blue-500/10 p-4">
                <Icon size={28} className="text-blue-400" />
              </div>

              <div>
                <h3 className="font-semibold text-lg">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-400 break-all">
                  {item.value}
                </p>
              </div>
            </motion.a>
          );
        })}

      </div>
    </section>
  );
}