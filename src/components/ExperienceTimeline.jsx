import React from 'react';
import { motion } from 'framer-motion';

const items = [
  {
    role: 'Sr. AI/ML Engineer – GenAI',
    org: 'BNY Mellon',
    time: '2024 – Present',
    desc: 'Architected multi-agent orchestration systems and GenAI PoCs for enterprise workflows.'
  },
  {
    role: 'Sr. Data Scientist',
    org: 'Fractal Analytics',
    time: '2025',
    desc: 'Developed GenAI prototypes for Forbes 500 clients accelerating AI adoption.'
  },
  {
    role: 'Founding Engineer',
    org: 'Anarchy AI (YC W23)',
    time: '2023',
    desc: 'Integrated open-source LLMs and authored the LLM-VM package documentation.'
  },
  {
    role: 'Community Lead',
    org: 'TensorFlow User Group Hyderabad',
    time: '2022 – Present',
    desc: 'Scaled to 2.5K+ members and led 10+ technical events.'
  },
];

const ExperienceTimeline = () => {
  return (
    <section id="experience" className="relative py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">Experience</h2>
        <div className="relative mt-10">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-cyan-400/60 via-white/20 to-indigo-400/60 md:left-1/2" />
          <div className="space-y-10">
            {items.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className={`relative grid grid-cols-1 gap-4 md:grid-cols-2 ${idx % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}
              >
                <div className={`${idx % 2 === 0 ? 'md:col-start-1' : 'md:col-start-2'}`}>
                  <div className="rounded-xl border border-white/10 bg-white/5 p-5 text-white shadow">
                    <div className="flex items-center justify-between gap-4">
                      <p className="text-lg font-medium">{item.role}</p>
                      <span className="text-xs text-cyan-200/80">{item.time}</span>
                    </div>
                    <p className="mt-1 text-sm text-slate-300">{item.org}</p>
                    <p className="mt-3 text-slate-200">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
