"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import developerImg from "@/images/developer.svg";

const socialLinks = [
  {
    href: "https://medium.com/@cslylla",
    platform: "Medium",
    text: "Read my articles on",
  },
  {
    href: "https://www.linkedin.com/in/lillacsanaky/",
    platform: "LinkedIn",
    text: "Find me on",
  },
  {
    href: "https://www.instagram.com/creative.debugger/",
    platform: "Instagram",
    text: "Follow me on",
  },
  {
    href: "https://github.com/cslylla",
    platform: "GitHub",
    text: "Find me on",
  },
];

export function Connect() {
  return (
    <section
      id="contact"
      className="px-6 py-16 md:px-12 lg:px-24"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 font-heading text-3xl font-normal text-[#402e32] md:text-4xl"
      >
        Connect
      </motion.h2>
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex flex-1 flex-wrap gap-4"
        >
          {socialLinks.map((link) => (
            <p
              key={link.platform}
              className="flex-[1_1_calc(50%-0.5rem)] font-body text-[#402e32]"
            >
              {link.text}{" "}
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[#dba11c] underline decoration-[#dba11c]/50 underline-offset-2 transition-colors hover:text-[#dba11c]/90 hover:decoration-[#dba11c]"
                aria-label={`${link.text} ${link.platform}`}
                title={`${link.text} ${link.platform}`}
              >
                {link.platform}
              </a>
            </p>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="relative flex shrink-0 items-center justify-center"
        >
          <Image
            src={developerImg}
            alt="Developer illustration"
            width={160}
            height={120}
            className="h-auto w-32 object-contain sm:w-36 lg:w-40"
          />
        </motion.div>
      </div>
    </section>
  );
}
