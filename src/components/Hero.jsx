import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Calendar, Play, ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient aura overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-indigo-950/40 via-black/40 to-black/80" />
      <div className="pointer-events-none absolute -top-36 left-1/2 h-[50rem] w-[50rem] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.18),transparent_60%)]" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 pt-28 text-center text-white md:pt-36">
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs text-cyan-200 backdrop-blur"
        >
          AI/ML Engineer · DevRel · Community Builder
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-balance bg-gradient-to-br from-white via-cyan-100 to-indigo-200 bg-clip-text text-4xl font-semibold leading-tight text-transparent sm:text-5xl md:text-6xl"
        >
          Empowering Innovation at the Intersection of AI, Research, and Community
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-6 max-w-3xl text-pretty text-base text-slate-200 md:text-lg"
        >
          Hi, I’m Bilal Aamer — Sr. AI/ML Engineer, DevRel, and Community Builder passionate about advancing intelligent systems and empowering developers worldwide.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="https://topmate.io/bilal"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-cyan-500/20 transition hover:from-cyan-400 hover:to-indigo-500 focus:outline-none focus:ring-2 focus:ring-cyan-300"
          >
            <Calendar className="h-4 w-4" /> Book a Call with Me
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm text-white transition hover:border-white/20 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-300"
          >
            <Play className="h-4 w-4" /> View My Work
          </a>
        </motion.div>

        <a href="#about" className="mt-16 hidden items-center gap-2 text-cyan-200/80 hover:text-cyan-100 md:inline-flex">
          <ChevronDown className="h-5 w-5 animate-bounce" />
          Explore more
        </a>
      </div>
    </section>
  );
};

export default Hero;
