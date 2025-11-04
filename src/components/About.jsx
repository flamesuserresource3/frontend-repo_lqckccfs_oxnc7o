import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Building2 } from 'lucide-react';

const logos = [
  { name: 'BNY Mellon', abbr: 'BNY' },
  { name: 'Fractal Analytics', abbr: 'Fractal' },
  { name: 'Anarchy AI (YC W23)', abbr: 'Anarchy' },
  { name: 'TensorFlow UG', abbr: 'TFUG' },
  { name: 'GDSC', abbr: 'GDSC' },
  { name: 'IIT Hyderabad', abbr: 'IITH' },
];

const About = () => {
  return (
    <section id="about" className="relative py-20 text-white">
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-indigo-950/20 to-black/0" />
      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="order-2 md:order-1"
        >
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">About Bilal</h2>
          <p className="mt-4 text-slate-300">
            Experienced in GenAI, Multi-Agent Systems, and Autonomous Agents, I design and deliver production-grade AI systems with measurable business impact. I balance deep technical work with developer advocacy and community leadership.
          </p>
          <ul className="mt-6 space-y-3 text-slate-200">
            <li className="flex items-start gap-3">
              <GraduationCap className="mt-1 h-5 w-5 text-cyan-300" />
              Dual degree in Computer Science (BTech + MTech) from JNTU Hyderabad.
            </li>
            <li className="flex items-start gap-3">
              <Building2 className="mt-1 h-5 w-5 text-cyan-300" />
              Built GenAI platforms, multi-agent orchestration, and enterprise PoCs.
            </li>
            <li className="flex items-start gap-3">
              <Award className="mt-1 h-5 w-5 text-cyan-300" />
              Blend of technical innovation and large-scale community impact.
            </li>
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="order-1 md:order-2"
        >
          <div className="relative mx-auto aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-900/40 to-cyan-900/30 p-1 shadow-2xl">
            <div className="flex h-full w-full items-center justify-center rounded-xl bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.25),transparent_60%)]">
              <div className="text-center">
                <div className="mx-auto mb-4 h-24 w-24 rounded-full bg-white/10 backdrop-blur" />
                <p className="text-lg font-medium">Bilal Aamer</p>
                <p className="text-sm text-slate-300">Sr. AI/ML Engineer · DevRel</p>
              </div>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-3 gap-3 md:grid-cols-6">
            {logos.map((l) => (
              <div key={l.name} className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-center text-xs text-slate-200">
                {l.abbr}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
