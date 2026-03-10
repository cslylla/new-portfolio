"use client";

import { motion } from "framer-motion";

const certifications = [
  { name: "Intro to OpenAI API", issuer: "Codecademy Verified", date: "Dec 2025" },
  { name: "Intro to AI Agents", issuer: "Codecademy Verified", date: "Dec 2025" },
  {
    name: "Certified Customer Success Manager (CCSM) Level 2",
    issuer: "SuccessHACKER Verified",
    date: "Nov 2024",
  },
  {
    name: "Learn Tableau for Data Visualization Course",
    issuer: "Codecademy Verified",
    date: "May 2024",
  },
  { name: "Workato Foundations Level 1 & 2", issuer: "Workato Verified", date: "Jan 2026" },
  {
    name: "Technical Support Fundamentals",
    issuer: "Coursera Verified",
    date: "Jul 2021",
  },
];

export function Certifications() {
  return (
    <section
      id="certifications"
      className="px-6 py-16 md:px-12 lg:px-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-xl bg-[#dba11c] p-8 shadow-[0_6px_25px_rgba(64,46,50,0.25)] md:p-10"
      >
        <h2 className="mb-8 font-heading text-3xl font-normal text-[#402e32] md:text-4xl">
          Certifications
        </h2>
        <div className="flex flex-wrap gap-x-12 gap-y-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name + cert.date}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="min-w-[200px] flex-1 basis-[calc(50%-1.5rem)]"
            >
              <p className="font-body font-medium text-[#402e32]">{cert.name}</p>
              <p className="font-body text-sm text-[#402e32]/90">
                {cert.issuer} - {cert.date}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
