import React from 'react';
import { motion } from 'framer-motion';
import Card from '../components/Card.jsx';
import Marquee from '../components/Marquee.jsx';

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="section">
        <div className="container-xl">
          <div className="text-center max-w-3xl mx-auto">
            <motion.h1
              className="text-4xl sm:text-6xl font-semibold tracking-tight leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Creative developer crafting delightful experiences
            </motion.h1>
            <motion.p
              className="mt-5 text-white/70 text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              I build fast, accessible, and visually engaging web apps.
            </motion.p>
            <motion.div
              className="mt-8 flex justify-center gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <a href="#contact" className="px-4 py-2 rounded-full bg-white text-black font-medium">Hire me</a>
              <a href="/projects" className="px-4 py-2 rounded-full border border-white/20 hover:border-white/40">Projects</a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <Marquee items={[
        'React', 'TypeScript', 'Node.js', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Vite', 'REST', 'GraphQL', 'UI/UX'
      ]} />

      {/* Highlights */}
      <section className="section">
        <div className="container-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card title="Performance" description="Lighthouse-optimized, lazy-loaded, and responsive by default." badge="Core" />
          <Card title="Animation" description="Smooth micro-interactions using Framer Motion with 60fps targets." badge="UX" />
          <Card title="Accessibility" description="Semantic HTML and WCAG-friendly color contrasts." badge="A11y" />
          <Card title="Tooling" description="Vite, ESLint-ready, Tailwind, and component-first architecture." />
          <Card title="Content" description="Blog-ready routing and Markdown-friendly structure." />
          <Card title="Deploy" description="Static export or adapter-ready for Netlify, Vercel, or Cloudflare." />
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="section">
        <div className="container-xl">
          <div className="rounded-3xl p-8 md:p-12 border border-white/10 bg-gradient-to-br from-white/5 to-white/0 glow">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-semibold">Let’s build something great</h2>
              <p className="text-white/70 mt-2">Tell me about your project and timeline. I’ll reply within 1 business day.</p>
              <form className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input placeholder="Your name" className="bg-black/40 border border-white/10 rounded-lg px-3 py-2 outline-none focus:border-white/30" />
                <input placeholder="Email" type="email" className="bg-black/40 border border-white/10 rounded-lg px-3 py-2 outline-none focus:border-white/30" />
                <input placeholder="Company" className="bg-black/40 border border-white/10 rounded-lg px-3 py-2 outline-none focus:border-white/30 sm:col-span-2" />
                <textarea placeholder="Project details" rows="5" className="bg-black/40 border border-white/10 rounded-lg px-3 py-2 outline-none focus:border-white/30 sm:col-span-2"></textarea>
                <button className="justify-self-start px-4 py-2 rounded-full bg-white text-black font-medium">Send</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
