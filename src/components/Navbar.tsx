"use client";

import Image from "next/image";
import Link from "next/link";
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
  return (
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
      <ul className="flex flex-wrap items-center gap-4 md:gap-6 lg:gap-8">
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
    </nav>
  );
}
