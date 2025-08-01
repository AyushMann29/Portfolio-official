// src/app/page.tsx

import Image from "next/image";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Projects from "./projects";
import About from "./about";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#f8fafc] via-[#e2e8f0] to-[#f1f5f9] dark:from-[#18181b] dark:via-[#27272a] dark:to-[#18181b] transition-colors duration-500">
      {/* Header */}
      <header className="w-full flex justify-between items-center px-6 py-4 max-w-6xl mx-auto">
        <div className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {/* Replace with your logo or initials if desired */}
          Ayush Mann
        </div>
        <nav className="hidden md:flex gap-8">
          <a href="#about" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors">About</a>
          <a href="#projects" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors">Projects</a>
          <a href="#contact" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors">Contact</a>
        </nav>
        <div className="flex gap-4">
          <a href="https://github.com/AyushMann29" aria-label="GitHub" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 text-xl transition-colors">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/ayush-mann29/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 text-xl transition-colors">
            <FaLinkedin />
          </a>
          <a href="https://x.com/ayush_mann59801" aria-label="Twitter" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 text-xl transition-colors">
            <FaTwitter />
          </a>
        </div>
      </header>

      {/* Main Hero Section */}
      <main className="flex-1 flex flex-col-reverse md:flex-row items-center justify-center gap-12 px-6 py-12 max-w-6xl mx-auto w-full">
        {/* Text Content */}
        <section className="flex-1 flex flex-col items-center md:items-start text-center md:text-left gap-6">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-tight">
            Ayush Mann
          </h1>
          <h2 className="text-xl sm:text-2xl font-semibold text-blue-600 dark:text-blue-400">
            Full Stack Developer & Designer
          </h2>
          <p className="text-gray-700 dark:text-gray-300 max-w-md text-base sm:text-lg">
            I build modern, performant web experiences with a focus on clean design, accessibility, and delightful user interactions. Let’s create something amazing together.
          </p>
          <div className="flex gap-4 mt-4">
            <a href="#about" className="px-6 py-2 rounded-full bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition">
              About
            </a>
            <a href="#projects" className="px-6 py-2 rounded-full border border-blue-600 text-blue-600 dark:text-blue-400 font-semibold hover:bg-blue-50 dark:hover:bg-blue-950 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition">
              Projects
            </a>
            <a href="#contact" className="px-6 py-2 rounded-full border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-200 font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition">
              Contact
            </a>
          </div>
        </section>
        {/* Hero Image or Illustration */}
        <section className="flex-1 flex justify-center items-center">
          <Image
            src="/hero.png" 
            alt="Hero illustration"
            width={350}
            height={350}
            className="rounded-2xl shadow-lg object-cover bg-gray-200 dark:bg-gray-800"
            priority
          />
        </section>
      </main>

      {/* Mobile Nav */}
      <nav className="md:hidden flex justify-center gap-8 py-4 border-t border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-black/60 backdrop-blur sticky bottom-0 z-10">
        <a href="#about" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors">About</a>
        <a href="#projects" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors">Projects</a>
        <a href="#contact" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors">Contact</a>
      </nav>
      <Projects />
      <About />
    </div>
  );
}

