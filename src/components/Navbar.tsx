"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import logoImg from "@/images/logo.png";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Expertise" },
  { href: "#experiences", label: "Experiences" },
  { href: "#projects", label: "Projects" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
    <nav
      className="sticky top-0 z-50 flex h-16 items-center justify-between bg-[#dba11c] px-6 shadow-[0_4px_20px_rgba(64,46,50,0.2)]"
      style={{ height: "64px" }}
    >
      <Link
        href="/"
        className="flex items-center"
        aria-label="Lilla Csanaky - Home"
        title="Home"
      >
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#dfe0df] p-1.5">
          <Image
            src={logoImg}
            alt="Lilla Csanaky logo"
            width={36}
            height={36}
            className="h-9 w-9 object-contain"
          />
        </span>
      </Link>

      {/* Desktop nav */}
      <ul className="hidden items-center gap-6 md:flex lg:gap-8">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="font-body text-sm font-medium text-[#dfe0df] transition-colors hover:text-[#dfe0df]/90"
              aria-label={`Go to ${link.label} section`}
              title={link.label}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile hamburger button */}
      <button
        type="button"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg text-[#dfe0df] transition-colors hover:bg-[#dfe0df]/20 md:hidden"
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        aria-expanded={isMenuOpen}
      >
        <span
          className={`h-0.5 w-6 bg-current transition-all ${
            isMenuOpen ? "translate-y-2 rotate-45" : ""
          }`}
        />
        <span
          className={`h-0.5 w-6 bg-current transition-all ${
            isMenuOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`h-0.5 w-6 bg-current transition-all ${
            isMenuOpen ? "-translate-y-2 -rotate-45" : ""
          }`}
        />
      </button>
    </nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-[#402e32]/60 backdrop-blur-sm md:hidden"
              onClick={closeMenu}
              aria-hidden="true"
            />
            <motion.div
              key="menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.2 }}
              className="fixed right-0 top-0 z-50 flex h-full w-64 flex-col gap-6 bg-[#dba11c] p-6 pt-20 shadow-2xl md:hidden"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="font-body text-lg font-medium text-[#dfe0df] transition-colors hover:text-[#dfe0df]/90"
                  aria-label={`Go to ${link.label} section`}
                >
                  {link.label}
                </Link>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
