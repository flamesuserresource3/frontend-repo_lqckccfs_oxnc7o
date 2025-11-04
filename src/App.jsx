import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import ExperienceTimeline from './components/ExperienceTimeline';
import ProjectsShowcase from './components/ProjectsShowcase';
import { Calendar, Github, Linkedin, Mail, Twitter, Youtube } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-[#0b0e17] text-white">
      {/* Top navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/40 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="text-sm font-semibold tracking-wide text-cyan-300">Bilal Aamer</a>
          <nav className="hidden gap-6 text-sm text-slate-200 md:flex">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#experience" className="hover:text-white">Experience</a>
            <a href="#projects" className="hover:text-white">Projects</a>
          </nav>
          <a
            href="https://topmate.io/bilal"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 px-4 py-2 text-xs font-medium text-white shadow hover:from-cyan-400 hover:to-indigo-500"
          >
            <Calendar className="h-4 w-4" /> Book a Call
          </a>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <ExperienceTimeline />
        <ProjectsShowcase />

        {/* Primary CTA Section */}
        <section className="relative py-20">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-cyan-600/10 via-indigo-600/10 to-fuchsia-600/10" />
          <div className="relative mx-auto max-w-5xl rounded-3xl border border-white/10 bg-white/5 p-10 text-center shadow-xl">
            <h3 className="text-2xl font-semibold md:text-3xl">Let’s build the next breakthrough together.</h3>
            <p className="mx-auto mt-3 max-w-2xl text-slate-200">
              Consulting, collaborations, or mentorship — I bring reliable execution, clear communication, and community momentum.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <a
                href="https://topmate.io/bilal"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 px-6 py-3 text-sm font-medium text-white shadow hover:from-cyan-400 hover:to-indigo-500"
              >
                <Calendar className="h-4 w-4" /> Book a Call on Topmate
              </a>
              <a
                href="mailto:bilalahmedaamer@gmail.com"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm hover:border-white/20 hover:bg-white/10"
              >
                <Mail className="h-4 w-4" /> Email Me Directly
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer / Contact Links */}
      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <p className="text-sm text-slate-300">© {new Date().getFullYear()} Bilal Aamer · Global portfolio</p>
            <div className="flex flex-wrap items-center gap-4 text-slate-200">
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="hover:text-white inline-flex items-center gap-2"><Github className="h-4 w-4" /> GitHub</a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="hover:text-white inline-flex items-center gap-2"><Linkedin className="h-4 w-4" /> LinkedIn</a>
              <a href="https://twitter.com/" target="_blank" rel="noreferrer" className="hover:text-white inline-flex items-center gap-2"><Twitter className="h-4 w-4" /> X</a>
              <a href="https://youtube.com/" target="_blank" rel="noreferrer" className="hover:text-white inline-flex items-center gap-2"><Youtube className="h-4 w-4" /> YouTube</a>
              <a href="mailto:bilalahmedaamer@gmail.com" className="hover:text-white inline-flex items-center gap-2"><Mail className="h-4 w-4" /> Email</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
