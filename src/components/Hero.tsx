"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import heroImg from "@/images/hero.jpg";
import heroBgImg from "@/images/hero-bg.png";

export function Hero() {
  return (
    <section
      id="about"
      className="relative flex min-h-[80vh] items-center justify-center overflow-hidden px-6 py-16 md:px-12 lg:px-24"
    >
      {/* Full-width background image */}
      <div
        className="absolute inset-0 left-1/2 z-0 w-screen -translate-x-1/2"
        aria-hidden
      >
        <Image
          src={heroBgImg}
          alt=""
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
      </div>
      {/* Content overlay */}
      <div className="relative z-10 flex w-full max-w-5xl flex-col items-center justify-center">
      <div className="grid w-full max-w-5xl grid-cols-1 items-center gap-8 md:grid-cols-[minmax(280px,480px)_1fr] md:gap-12">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="relative aspect-[4/3] w-full min-w-0 overflow-hidden rounded-2xl shadow-[0_8px_30px_rgba(64,46,50,0.25)] md:aspect-[3/4]"
      >
        <Image
          src={heroImg}
          alt="Lilla - Customer Solutions Engineer"
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="flex flex-col gap-6"
      >
        <h1 className="font-heading text-4xl font-normal text-[#402e32] md:text-5xl lg:text-6xl">
          Hey, I&apos;m Lilla
        </h1>
        <p className="font-heading text-xl font-medium text-[#dba11c] md:text-2xl">
          Customer Solutions Engineer
        </p>
        <p className="font-body max-w-xl text-base leading-relaxed text-[#402e32] md:text-lg">
          I build integrations, automation, and reliable workflows that bridge
          customer needs and engineering teams in fast-moving SaaS environments.
          My diverse background across engineering, customer work, and technical
          delivery allows me to ship solutions that scale.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="#projects"
            className="inline-flex items-center justify-center rounded-lg bg-[#dba11c] px-6 py-3 font-body text-sm font-medium text-[#402e32] shadow-[0_6px_20px_rgba(64,46,50,0.3)] transition-colors hover:bg-[#dba11c]/90 hover:shadow-[0_8px_25px_rgba(64,46,50,0.35)]"
            aria-label="View my projects"
            title="View my projects"
          >
            Projects
          </Link>
          <a
            href="https://github.com/cslylla"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg border-2 border-[#dba11c] px-6 py-3 font-body text-sm font-medium text-[#402e32] shadow-[0_4px_15px_rgba(64,46,50,0.25)] transition-colors hover:bg-[#dba11c]/20 hover:shadow-[0_6px_20px_rgba(64,46,50,0.3)]"
            aria-label="Visit my GitHub profile"
            title="Visit my GitHub profile"
          >
            GitHub
          </a>
        </div>
      </motion.div>
      </div>
      </div>
    </section>
  );
}
