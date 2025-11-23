"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";

const ROLES = [
  "Recent Graduate",
  "Full-Stack Engineer",
  "Data Engineer",
  "Machine Learning Enthusiast",
  "Cloud Engineer",
  "Backend Developer",
  "Software Developer",
];

export default function SectionDivider() {
  const roles = useMemo(() => ROLES, []);
  const [i, setI] = useState(0);
  const [j, setJ] = useState(0);
  const [back, setBack] = useState(false);
  const mounted = useRef(true);

  useEffect(() => () => { mounted.current = false; }, []);

  useEffect(() => {
    const current = roles[i];
    const atEnd = j === current.length;
    const atStart = j === 0;
    const hold = back ? 200 : 900;
    const typeSpeed = back ? 35 : 85;

    let t: number;
    if (!back && atEnd) {
      t = window.setTimeout(() => mounted.current && setBack(true), hold);
    } else if (back && atStart) {
      t = window.setTimeout(() => {
        if (!mounted.current) return;
        setBack(false);
        setI((p) => (p + 1) % roles.length);
      }, 220);
    } else {
      t = window.setTimeout(
        () => mounted.current && setJ((p) => p + (back ? -1 : 1)),
        typeSpeed
      );
    }
    return () => clearTimeout(t);
  }, [i, j, back, roles]);

  return (
    <div className="relative my-16 flex items-center justify-center">
      <div className="relative mx-4">
        {/* Glow */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -inset-6 -z-10 rounded-3xl opacity-60 blur-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          style={{
            background:
              "radial-gradient(400px circle at 50% 0%, var(--glow-a), var(--glow-b), transparent 70%)",
          }}
        />

        {/* Card */}
        <motion.div
          className="rounded-2xl border border-black/10 bg-white/70 px-6 py-5 shadow-xl backdrop-blur-md dark:border-white/10 dark:bg-white/10"
          initial={{ y: 20, opacity: 0, scale: 0.98 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <h2 className="text-center text-xl font-extrabold sm:text-2xl">
            I am a{" "}
            <span className="type-gradient bg-clip-text text-transparent">
              {roles[i].slice(0, j)}
            </span>
            <span className="ml-0.5 inline-block h-6 w-[2px] translate-y-[2px] animate-pulse bg-gray-900 dark:bg-white/80" />
          </h2>
        </motion.div>
      </div>

      {/* NEW THEME COLORS */}
      <style jsx global>{`
        /* 🌤️ Light Mode — Teal / Cyan / Blue gradient */
        .type-gradient {
          --grad-from: #0d9488; /* teal-600 */
          --grad-via:  #06b6d4; /* cyan-500 */
          --grad-to:   #3b82f6; /* blue-500 */
          background-image: linear-gradient(
            90deg,
            var(--grad-from),
            var(--grad-via),
            var(--grad-to)
          );
        }

        :root {
          --glow-a: rgba(45, 212, 191, 0.25); /* teal-400 */
          --glow-b: rgba(6, 182, 212, 0.25); /* cyan-500 */
        }

        /* 🌙 Dark Mode — brighter teal/cyan glow */
        .dark .type-gradient {
          --grad-from: #2dd4bf; /* teal-400 */
          --grad-via:  #22d3ee; /* cyan-400 */
          --grad-to:   #60a5fa; /* blue-400 */
          background-image: linear-gradient(
            90deg,
            var(--grad-from),
            var(--grad-via),
            var(--grad-to)
          );
        }

        .dark :root {
          --glow-a: rgba(34, 211, 238, 0.35); /* cyan-400 */
          --glow-b: rgba(14, 165, 233, 0.30); /* sky-500 */
        }
      `}</style>
    </div>
  );
}
