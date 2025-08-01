import React from "react";
import Image from "next/image";
import { FaDownload, FaEnvelope, FaComments } from "react-icons/fa";

// Profile image should be placed in public/profile.jpg
const profileImage = "/hero.png";

const skills = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "MongoDB",
  "AWS",
  "Vercel",
  "GCP",
  "Firebase",
  "RESTAPIs"
];

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="w-full max-w-4xl mx-auto px-4 py-16 sm:py-24 flex flex-col items-center"
      aria-labelledby="about-heading"
    >
      {/* Profile Image */}
      <div className="mb-8">
        <Image
          src={profileImage}
          alt="Profile portrait of Ayush Mann"
          width={128}
          height={128}
          className="w-32 h-32 rounded-full object-cover border-4 border-neutral-200 dark:border-neutral-800 shadow-lg"
        />
      </div>

      {/* Headline Introduction */}
      <h2
        id="about-heading"
        className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-2 text-center"
      >
        Ayush Mann
      </h2>
      <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-6 text-center font-medium">
        Building elegant web experiences, one pixel at a time.
      </p>

      {/* Detailed About Paragraph */}
      <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-8 text-center max-w-2xl">
        I&apos;m a passionate full-stack developer focused on crafting performant, accessible, and visually engaging web applications. With a background in computer science and a love for clean, maintainable code, I thrive on solving complex problems and bringing ideas to life. My work blends thoughtful design with robust engineering, and I&apos;m always eager to learn new technologies and collaborate with creative teams. When I&apos;m not coding, you&apos;ll find me exploring new music, hiking, or experimenting with generative art.
      </p>

      {/* Skills/Technologies as Badges */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-sm font-semibold text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-700 shadow-sm hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Resume Download & Contact */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
        <a
          href="/AyushMann_Resume.pdf"
          download
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-black text-white dark:bg-white dark:text-black font-semibold text-base hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors shadow"
          aria-label="Download resume as PDF"
        >
          <FaDownload className="text-lg" />
          Download Resume
        </a>
        <a
          href="mannayush60@gmail.com"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-neutral-300 dark:border-neutral-700 text-black dark:text-white font-semibold text-base hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors shadow"
          aria-label="Contact Ayush Mann via email"
        >
          <FaEnvelope className="text-lg" />
          mannayush60@gmail.com
        </a>
      </div>

      {/* Feedback Form Link */}
      <div className="flex justify-center mb-8">
        <a
          href="https://forms.gle/YOUR_FORM_ID_HERE"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 text-white font-semibold text-base hover:bg-blue-700 transition-colors shadow"
          aria-label="Provide feedback via Google Form"
        >
          <FaComments className="text-lg" />
          Share Feedback
        </a>
      </div>

      {/* Fun Fact / Quote */}
      <blockquote className="italic text-neutral-500 dark:text-neutral-400 text-center max-w-xl mx-auto">
        &ldquo;Code is poetry. Design is intelligence made visible.&rdquo;
      </blockquote>
    </section>
  );
};

export default About;
