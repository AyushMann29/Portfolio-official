// components/Projects.tsx

import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiReact, SiTypescript, SiOpenai, SiNodedotjs, SiJavascript, SiGooglechrome, SiFirefoxbrowser } from "react-icons/si";

// Example project data
const projects = [
  {
    title: "Full Stack Web Game",
    description:
      "A full stack web game built with Next.js, Tailwind CSS, and TypeScript. It is a multiplayer game where players can join a game and play against each other.",
      tech: [<SiReact key="react" title="React" />, <SiNodedotjs key="node" title="Node.js" />, <SiJavascript key="js" title="JavaScript" />],
    image: "/projects/projects1.png",
    demo: "https://halo-havoc.vercel.app/",
    github: "https://github.com/AyushMann29/Halo-Havoc",
  },
  {
    title: "SmartBlock Extension",
    description:
      "A Firefox extension that blocks trackers and ads on websites. It is a browser extension that blocks trackers and ads on websites.",
      tech: [<SiJavascript key="js" title="JavaScript" />, <SiGooglechrome key="chrome" title="Chrome Extension" />, <SiFirefoxbrowser key="firefox" title="Firefox Add-on" />],
    image: "/projects/projects2.png",
    demo: "https://addons.mozilla.org/en-US/firefox/addon/smartblock-tracker-detector/",
    github: "https://github.com/AyushMann29/SmartBlock-extension",
  },
  {
    title: "Health Hackathon",
    description:
      "A web app that helps users track their health and fitness goals. It is a web app that helps users track their health and fitness goals.",
    tech: [<SiNextdotjs key="next" title="Next.js" />, <SiTailwindcss key="tw" title="Tailwind CSS" />, <SiTypescript key="ts" title="TypeScript" />],
    image: "/projects/projects3.png",
    demo: "https://health-hackathon1.vercel.app/Health-Menta",
    github: "https://github.com/AyushMann29/Health_Hackathon",
  },
];

const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="w-full max-w-6xl mx-auto px-4 py-16 sm:py-24"
      aria-labelledby="projects-heading"
    >
      {/* Section Heading */}
      <h2
        id="projects-heading"
        className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-10"
      >
        Featured Projects
      </h2>

      {/* Projects Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, idx) => (
          <div
            key={project.title}
            className="group bg-white/90 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col overflow-hidden"
          >
            {/* Project Image */}
            <div className="relative h-48 w-full overflow-hidden">
              <img
                src={project.image}
                alt={`${project.title} screenshot`}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>

            {/* Project Content */}
            <div className="flex flex-col flex-1 p-6">
              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {project.title}
              </h3>
              {/* Description */}
              <p className="text-gray-700 dark:text-gray-300 mb-4 flex-1">
                {project.description}
              </p>
              {/* Tech Stack */}
              <div className="flex items-center gap-3 mb-6">
                {project.tech.map((icon, i) => (
                  <span
                    key={i}
                    className="text-xl text-neutral-700 dark:text-neutral-300"
                  >
                    {icon}
                  </span>
                ))}
              </div>
              {/* Action Buttons */}
              <div className="mt-auto flex gap-3">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-black text-white dark:bg-white dark:text-black font-semibold text-sm hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors"
                  aria-label={`Live demo of ${project.title}`}
                >
                  <FaExternalLinkAlt className="text-base" />
                  Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 text-black dark:text-white font-semibold text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                  aria-label={`Source code of ${project.title} on GitHub`}
                >
                  <FaGithub className="text-base" />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
