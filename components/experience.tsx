"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();

  // Split work vs education
  const work = experiencesData.filter((i: any) => i.category === "work");
  const education = experiencesData.filter((i: any) => i.category === "education");

  // Themed colors
  const cardBg = theme === "light" ? "#ffffff" : "rgba(255,255,255,0.05)";
  const arrowBorder =
    theme === "light"
      ? "0.4rem solid rgba(20, 184, 166, 0.5)" // teal-500/50
      : "0.4rem solid rgba(34, 211, 238, 0.3)"; // cyan-400/30

  const lineColor = theme === "light" ? "#99f6e4" : "#0891b2"; // teal-200 / cyan-600

  // Circle behind the icon
  const baseIconStyle: React.CSSProperties = {
    background: theme === "light" ? "#f0fdfa" : "rgba(14, 116, 144, 0.5)", // teal-50 / cyan-700/50
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 44,
    height: 44,
    borderRadius: "50%",
    fontSize: "24px",
    border: "2px solid rgba(45, 212, 191, 0.4)", // teal-400/40
  };

  // Normalize icon
  const normalizeIcon = (icon: React.ReactNode) => {
    if (React.isValidElement(icon)) {
      return React.cloneElement(icon as React.ReactElement, {
        size: 24,
        style: {
          display: "block",
          width: 24,
          height: 24,
          verticalAlign: "middle",
          ...(icon as any).props?.style,
        },
      });
    }
    return icon;
  };

  // The wrapper (card)
  const Wrapper: React.FC<{ title: string; children: React.ReactNode }> = ({
    title,
    children,
  }) => (
    <div className="mb-12 rounded-2xl p-[1px] shadow-xl bg-gradient-to-r 
                    from-teal-300/40 via-cyan-300/40 to-blue-300/40
                    dark:from-teal-600/30 dark:via-cyan-600/30 dark:to-blue-600/30">
      <div className="rounded-2xl bg-white/70 px-5 py-6 backdrop-blur-md 
                      dark:bg-gray-900/60">
        <h2 className="mb-6 text-center text-xl sm:text-2xl font-medium 
                       text-neutral-700 dark:text-neutral-200">
          {title}
        </h2>
        {children}
      </div>
    </div>
  );

  const renderTimeline = (items: any[]) => (
    <VerticalTimeline lineColor={lineColor}>
      {items.map((item, index) => (
        <VerticalTimelineElement
          key={index}
          contentStyle={{
            background: cardBg,
            boxShadow: "0 6px 25px rgba(0,0,0,0.05)",
            border: "1px solid rgba(45, 212, 191, 0.20)", // teal-400/20
            textAlign: "left",
            padding: "1.3rem 2rem",
            borderRadius: "1rem",
          }}
          contentArrowStyle={{ borderRight: arrowBorder }}
          date={item.date}
          icon={
            <div className="flex h-full w-full items-center justify-center">
              {normalizeIcon(item.icon)}
            </div>
          }
          iconStyle={baseIconStyle}
        >
          <h3 className="font-semibold text-teal-700 dark:text-teal-300">
            {item.title}
          </h3>

          <p className="font-normal mt-1 text-gray-600 dark:text-gray-300">
            {item.location}
          </p>

          <p className="mt-2 font-normal text-gray-700 dark:text-white/75">
            {item.description}
          </p>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My Experience</SectionHeading>

      <Wrapper title="Work">{renderTimeline(work)}</Wrapper>

      <Wrapper title="Education">{renderTimeline(education)}</Wrapper>
    </section>
  );
}
