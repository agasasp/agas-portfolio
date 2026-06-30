"use client";

import { motion } from "framer-motion";

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">

      <motion.div
        animate={{
          x: [0, 150, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-10 top-10 h-[450px] w-[450px] rounded-full bg-blue-500/20 blur-[120px]"
      />

      <motion.div
        animate={{
          x: [0, -150, 0],
          y: [0, -120, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-10 right-10 h-[450px] w-[450px] rounded-full bg-cyan-500/20 blur-[120px]"
      />

    </div>
  );
}