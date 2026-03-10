"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import instaImg from "@/images/insta-square_.png";
import linkedinImg from "@/images/linkedin-square_.png";
import mediumImg from "@/images/medium-square_.png";
import githubImg from "@/images/github-square_.png";

const socialLinks = [
  { href: "https://medium.com/@cslylla", icon: mediumImg, alt: "Medium" },
  { href: "https://www.linkedin.com/in/lillacsanaky/", icon: linkedinImg, alt: "LinkedIn" },
  { href: "https://www.instagram.com/creative.debugger/", icon: instaImg, alt: "Instagram" },
  { href: "https://github.com/cslylla", icon: githubImg, alt: "GitHub" },
];

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="bg-[#dba11c] px-6 py-8 text-center md:px-12 lg:px-24"
    >
      <div className="mb-4 flex justify-center gap-5">
        {socialLinks.map((link) => (
          <a
            key={link.alt}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-90 transition-opacity hover:opacity-100"
            aria-label={`Visit ${link.alt} profile`}
            title={`Visit ${link.alt}`}
          >
            <Image
              src={link.icon}
              alt={link.alt}
              width={20}
              height={20}
              className="h-5 w-5 object-contain"
            />
          </a>
        ))}
      </div>
      <p className="font-body text-sm font-medium text-[#402e32]">
        This webpage was coded by{" "}
        <a
          href="https://github.com/cslylla"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-[#dfe0df] underline decoration-[#dfe0df]/50 underline-offset-2 transition-colors hover:text-[#dfe0df]/90 hover:decoration-[#dfe0df]"
          aria-label="View cslylla GitHub profile"
          title="View cslylla on GitHub"
        >
          cslylla
        </a>
      </p>
    </motion.footer>
  );
}
