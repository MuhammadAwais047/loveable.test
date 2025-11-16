import React from 'react';
import { motion } from 'framer-motion';

export default function Card({ title, description, badge, href }) {
  return (
    <motion.a
      href={href ?? '#'}
      className="block rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 p-6 hover:-translate-y-1 transition will-change-transform"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-medium text-white">{title}</h3>
        {badge && (
          <span className="text-xs px-2 py-0.5 rounded-full bg-primary/20 text-primary border border-primary/30">
            {badge}
          </span>
        )}
      </div>
      <p className="text-white/70 text-sm leading-relaxed">{description}</p>
    </motion.a>
  );
}
