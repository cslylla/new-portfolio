"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { ProjectModal } from "./ProjectModal";
import type { Project } from "@/data/projects";

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <section
        id="projects"
        className="px-6 py-16 md:px-12 lg:px-24"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 font-heading text-3xl font-normal text-[#402e32] md:text-4xl"
        >
          Projects
        </motion.h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group cursor-pointer overflow-hidden rounded-xl bg-[#dba11c] shadow-[0_6px_25px_rgba(64,46,50,0.25)] transition-all hover:scale-[1.02] hover:shadow-[0_10px_35px_rgba(64,46,50,0.3)]"
              onClick={() => setSelectedProject(project)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelectedProject(project);
                }
              }}
              role="button"
              tabIndex={0}
              aria-label={`View ${project.title} project details`}
              title={project.title}
            >
              <div className="relative aspect-video w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-4">
                <h3 className="mb-2 font-heading text-lg font-medium text-[#402e32]">
                  {project.title}
                </h3>
                <p className="font-body text-sm leading-relaxed text-[#402e32] line-clamp-2">
                  {project.shortDescription}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
