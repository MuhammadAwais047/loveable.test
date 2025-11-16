import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const active = ({ isActive }) =>
  isActive ? 'text-primary' : 'text-white/80 hover:text-white';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 border-b border-white/10">
      <div className="container-xl flex items-center justify-between h-16">
        <Link to="/" className="font-semibold tracking-tight text-white">
          <span className="text-primary">mg</span>eko-like
        </Link>
        <nav className="hidden md:flex gap-6 text-sm">
          <NavLink to="/" className={active} end>Home</NavLink>
          <NavLink to="/projects" className={active}>Projects</NavLink>
          <NavLink to="/blog" className={active}>Blog</NavLink>
          <NavLink to="/about" className={active}>About</NavLink>
        </nav>
        <motion.a
          href="#contact"
          className="px-3 py-1.5 rounded-full bg-white text-black text-sm font-medium hover:opacity-90 transition"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          Contact
        </motion.a>
      </div>
    </header>
  );
}
