import React from 'react';

export default function About() {
  return (
    <section className="section">
      <div className="container-xl prose prose-invert max-w-3xl">
        <h1>About</h1>
        <p>
          This is a lightweight portfolio template inspired by the aesthetic of mgeko.cc.
          Replace this content with your own bio, services, and experience.
        </p>
        <h3>Stack</h3>
        <ul>
          <li>React + Vite</li>
          <li>Tailwind CSS</li>
          <li>Framer Motion</li>
          <li>React Router</li>
        </ul>
      </div>
    </section>
  );
}
