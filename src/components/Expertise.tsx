"use client";

import { motion } from "framer-motion";

const expertiseCards = [
  {
    title: "Integrations & Automation",
    items: [
      "APIs, Webhooks, Sync jobs",
      "Python & JavaScript scripting",
      "Workato & workflow automation",
      "Data mapping & reliability",
    ],
  },
  {
    title: "Debugging & Problem-Solving",
    items: [
      "Logs, traces & reproductions",
      "Fixes, workarounds & runbooks",
      "Pattern spotting across issues",
      "Root cause analysis",
    ],
  },
  {
    title: "Customer-Facing Delivery",
    items: [
      "Technical discovery & solution design",
      "Cross-functional collaboration",
      "Enablement, docs & rollouts",
      "Remote, async-first ownership",
    ],
  },
  {
    title: "Languages",
    items: [
      "Hungarian (native)",
      "English (fluent)",
      "German (fluent)",
    ],
  },
];

const toolCards = [
  {
    title: "Developer Tools",
    items: [
      "GitHub & GitLab",
      "Postman",
      "VS Code",
      "Node.js, npm",
      "API debugging & logging",
      "Jira, Confluence",
    ],
  },
  {
    title: "Computer Skills",
    items: [
      "Google Workspace, Slack, Jira, Confluence",
      "Python, JavaScript, SQL",
      "REST APIs, Webhooks, SSO basics (SAML)",
      "Workato (iPaaS), automation workflows",
      "Documentation & training materials",
      "Figma, Canva, Miro (for collaboration & prototypes)",
    ],
  },
];

export function Expertise() {
  return (
    <section
      id="skills"
      className="px-6 py-16 md:px-12 lg:px-24"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 font-heading text-3xl font-normal text-[#402e32] md:text-4xl"
      >
        Expertise
      </motion.h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {expertiseCards.map((card, index) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="overflow-hidden rounded-xl shadow-[0_6px_25px_rgba(64,46,50,0.25)] transition-shadow hover:shadow-[0_10px_35px_rgba(64,46,50,0.3)]"
          >
            <h3 className="rounded-t-xl bg-[#dba11c] px-6 py-4 font-heading text-xl font-medium text-[#402e32]">
              {card.title}
            </h3>
            <ul className="space-y-2 bg-[#dfe0df] p-6 font-body text-sm text-[#402e32]">
              {card.items.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#402e32]" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-10 flex flex-col gap-6 md:flex-row"
      >
        {toolCards.map((card, index) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="flex-1 rounded-xl bg-[#dba11c] p-6 shadow-[0_6px_25px_rgba(64,46,50,0.25)]"
          >
            <h3 className="mb-4 font-heading text-lg font-medium text-[#402e32]">
              {card.title}
            </h3>
            <ul className="space-y-2 font-body text-sm text-[#402e32]">
              {card.items.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#402e32]" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
