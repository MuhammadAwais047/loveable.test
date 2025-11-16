import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="container-xl py-8 text-sm text-white/60 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>
          © {new Date().getFullYear()} Your Name. Built with React + Tailwind.
        </p>
        <div className="flex items-center gap-4">
          <a className="hover:text-white" href="#">Twitter</a>
          <a className="hover:text-white" href="#">GitHub</a>
          <a className="hover:text-white" href="#">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
