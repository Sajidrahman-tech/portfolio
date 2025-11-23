"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  projectUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <Link href={projectUrl} target="_blank">
        <section
          className="max-w-[64rem] relative overflow-hidden sm:h-[20rem] rounded-lg border
                     bg-white/70 dark:bg-gray-900/50 backdrop-blur-md
                     border-teal-300/30 dark:border-teal-600/30
                     shadow-lg shadow-black/5
                     hover:bg-white/90 dark:hover:bg-gray-900/70
                     transition sm:pr-8 sm:group-even:pl-8"
        >
          {/* Text section */}
          <div
            className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 
                       sm:max-w-[70%] flex flex-col h-full 
                       sm:group-even:ml-[18rem]"
          >
            <h3 className="text-2xl font-semibold text-teal-700 dark:text-teal-300">
              {title}
            </h3>

            <p className="mt-2 leading-relaxed text-gray-700 dark:text-gray-300">
              {description}
            </p>

            {/* Tags */}
            <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
              {tags.map((tag, index) => (
                <li
                  key={index}
                  className="px-3 py-1 text-[0.7rem] uppercase tracking-wider rounded-full
                             bg-gradient-to-r from-teal-500/80 to-cyan-500/80
                             text-white shadow-sm"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          {/* Image */}
          <Image
            src={imageUrl}
            alt="Project preview"
            quality={95}
            className="absolute hidden sm:block top-8 -right-40 w-[28.25rem]
                       rounded-t-lg shadow-2xl transition
                       group-hover:scale-[1.04]
                       group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2

                       group-even:group-hover:translate-x-3
                       group-even:group-hover:translate-y-3
                       group-even:group-hover:rotate-2

                       group-even:right-[initial] group-even:-left-40"
          />
        </section>
      </Link>
    </motion.div>
  );
}
