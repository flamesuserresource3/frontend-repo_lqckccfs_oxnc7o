import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'AutoPaLM — Autonomous LLM Agent System',
    desc: 'Deep Q-Learning, prompt engineering, and environment navigation for autonomous task execution.',
    code: 'https://github.com/',
    demo: 'https://github.com/'
  },
  {
    title: 'Locus 2.0 — GPT-powered Query Platform',
    desc: 'Full-stack web platform with a GPT-enabled query bot and analytics dashboards.',
    code: 'https://github.com/',
    demo: 'https://github.com/'
  },
];

const ProjectsShowcase = () => {
  return (
    <section id="projects" className="relative py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">Selected Projects</h2>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-cyan-300 hover:text-cyan-200"
          >
            View GitHub
          </a>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-900/40 to-cyan-900/30 p-6 text-white"
            >
              <div className="absolute inset-0 pointer-events-none opacity-0 transition group-hover:opacity-100 bg-[radial-gradient(ellipse_at_top_left,rgba(34,211,238,0.15),transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(99,102,241,0.15),transparent_50%)]" />
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-slate-200">{p.desc}</p>
              <div className="mt-4 flex gap-3">
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm hover:border-white/20 hover:bg-white/10"
                >
                  <ExternalLink className="h-4 w-4" /> Live
                </a>
                <a
                  href={p.code}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm hover:border-white/20 hover:bg-white/10"
                >
                  <Github className="h-4 w-4" /> Code
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-6 text-white">
          <h3 className="text-lg font-medium">Community & Open Source</h3>
          <p className="mt-2 text-slate-200">
            Grew developer communities to 3,000+ members and hosted 25+ sponsored tech events & national hackathons.
            Contributions across Anarchy AI, Ivy, PyTorch Lightning, MindsDB, and UnionML.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;
