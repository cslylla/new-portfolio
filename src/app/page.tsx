import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Expertise } from "@/components/Expertise";
import { Experiences } from "@/components/Experiences";
import { Certifications } from "@/components/Certifications";
import { Projects } from "@/components/Projects";
import { Connect } from "@/components/Connect";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#dfe0df]">
      <Navbar />
      <main role="main">
        <div className="mx-auto max-w-7xl">
          <Hero />
          <Expertise />
          <Experiences />
          <Certifications />
          <Projects />
          <Connect />
        </div>
        <Footer />
      </main>
    </div>
  );
}
