"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 * i, duration: 0.45, ease: "easeOut" },
  }),
};

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      id="about"
      className="mb-28 max-w-[48rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div variants={fadeUp}>
        <SectionHeading>
          About <span className="font-extrabold">Me</span>
        </SectionHeading>
      </motion.div>

      <motion.p variants={fadeUp} custom={1} className="mt-6 px-2 text-[1.05rem]">
        Growing up in a home where both my parents were software engineers, I was
        surrounded by logic, creativity, and debugging long before I wrote my first
        line of code. Their passion for problem-solving felt magical to me.
      </motion.p>

      <motion.p variants={fadeUp} custom={2} className="mt-4 px-2">
        That spark grew even brighter thanks to a childhood friend who was an
        enthusiastic techie. Together we built small but exciting projects — the
        most memorable being a simple school inventory management system. Seeing
        something we built actually work became the moment I knew I wanted to pursue
        computer science seriously.
      </motion.p>

      <motion.p variants={fadeUp} custom={3} className="mt-4 px-2">
        Today, I work across the stack as a{" "}
        <strong>
          Full-Stack Developer, Cloud Engineer, Software Engineer, Backend
          Developer, AI/ML Engineer, and Data Engineer
        </strong>
        . What excites me most is turning complex ideas into elegant, scalable
        systems — finding solutions that are simple, reliable, and maintainable.
      </motion.p>

      {/* Cloud Engineering Focus Section */}
      <motion.div
        variants={fadeUp}
        custom={4}
        className="relative mx-auto mt-8 w-full overflow-hidden rounded-2xl border border-indigo-200/50 p-5 text-left shadow-sm dark:border-indigo-500/20"
      >
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -inset-1 rounded-2xl opacity-0 blur-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.55 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{
            background:
              "radial-gradient(600px circle at 50% -20%, rgba(99,102,241,.25), rgba(236,72,153,.12), transparent 60%)",
          }}
        />
        <div className="relative">
          <p className="text-base sm:text-[1.05rem]">
            <strong>Passion for Cloud Engineering:</strong> I’m especially
            passionate about architecting scalable cloud systems. I enjoy designing
            serverless workflows, optimizing performance, and building reliable
            backend services that can handle real-world, high-volume use cases
            efficiently and securely.
          </p>
        </div>
      </motion.div>

      <motion.p variants={fadeUp} custom={5} className="mt-6 px-2">
        Outside of programming, I enjoy <strong>going to the gym</strong>,{" "}
        <strong>playing football</strong>, and <strong>cooking</strong>. These
        passions keep me grounded, creative, and energized — qualities I bring back
        into every project I work on.
      </motion.p>

      <motion.div
        variants={fadeUp}
        custom={6}
        className="mx-auto mt-6 h-[3px] w-24 rounded-full bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-rose-500"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />
    </motion.section>
  );
}
