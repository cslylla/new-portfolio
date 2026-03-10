"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import contactImg from "@/images/contact.svg";

const experiences = [
  {
    role: "Customer Solutions Engineer",
    company: "Beekeeper AG",
    period: "Nov 2023 - Present",
    description:
      "Built HRIS/payroll/LMS integrations using Workato, APIs, and Python. Led technical onboarding for enterprise customers and partnered with Product/Engineering to turn customer feedback into features.",
  },
  {
    role: "Front-End Engineer",
    company: "Intersys AG",
    period: "Aug 2022 - Oct 2023",
    description:
      "Built full-stack web applications from concept to delivery. Created prototypes and improved codebase quality through testing and documentation.",
  },
  {
    role: "Software Engineer Intern",
    company: "seerow GmbH",
    period: "Sep 2021 - Jul 2022",
    description:
      "Contributed to 10+ web applications. Built CRUD app with REST API and tested endpoints using Postman.",
  },
];

const extracurricular = [
  {
    role: "Open-Source Contributor (Technical Writer)",
    organization: "Codecademy",
    location: "Online",
    period: "Nov 2022 — Nov 2023",
  },
  {
    role: "Educational Content Translator",
    organization: "Khan Academy",
    location: "Online",
    period: "Nov 2018 — Jan 2019",
  },
  {
    role: "Swiss Chapter Co-Lead",
    organization: "Women's Innovation Network",
    location: "Switzerland",
    period: "Feb 2018 — May 2019",
  },
];

export function Experiences() {
  return (
    <section
      id="experiences"
      className="px-6 py-16 md:px-12 lg:px-24"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 font-heading text-3xl font-normal text-[#402e32] md:text-4xl"
      >
        Experiences
      </motion.h2>
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-10">
        <div className="flex-1 space-y-10">
        {experiences.map((exp, index) => (
          <motion.article
            key={exp.role + exp.company}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="mb-2 flex flex-wrap items-baseline gap-2">
              <h3 className="font-heading text-xl font-medium text-[#402e32]">
                {exp.role}
              </h3>
              <span className="font-body text-[#dba11c]">|</span>
              <span className="font-body font-medium text-[#402e32]">
                {exp.company}
              </span>
              <span className="font-body text-sm text-[#402e32]/80">
                {exp.period}
              </span>
            </div>
            <p className="font-body text-[#402e32] leading-relaxed">
              {exp.description}
            </p>
          </motion.article>
        ))}
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex shrink-0 items-center justify-center lg:justify-end"
        >
          <Image
            src={contactImg}
            alt="Working remotely illustration"
            width={280}
            height={156}
            className="h-auto w-40 object-contain sm:w-48 md:w-56 lg:w-64"
          />
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-12"
      >
        <h3 className="mb-4 font-heading text-lg font-medium text-[#402e32]">
          Extracurricular
        </h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {extracurricular.map((item, index) => (
            <motion.div
              key={item.role + item.organization}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="rounded-lg bg-[#402e32] p-4 shadow-[0_4px_15px_rgba(64,46,50,0.2)]"
            >
              <p className="font-heading text-sm font-medium text-[#dfe0df]">
                {item.role}
              </p>
              <p className="font-body text-sm text-[#dfe0df]">
                {item.organization} | {item.location}
              </p>
              <p className="mt-1 font-body text-xs text-[#dfe0df]/90">
                {item.period}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-10"
      >
        <a
          href="https://www.linkedin.com/in/lillacsanaky/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-lg bg-[#dba11c] px-6 py-3 font-body text-sm font-medium text-[#402e32] shadow-[0_6px_20px_rgba(64,46,50,0.3)] transition-colors hover:bg-[#dba11c]/90 hover:shadow-[0_8px_25px_rgba(64,46,50,0.35)]"
          aria-label="View full experience on LinkedIn"
          title="View full experience on LinkedIn"
        >
          See full experience on LinkedIn
        </a>
      </motion.div>
    </section>
  );
}
