import React from 'react';
import Card from '../components/Card.jsx';

export default function Projects() {
  const items = [
    { title: 'Portfolio UI', description: 'Minimal, animated landing page with rich micro-interactions.', badge: 'Featured' },
    { title: 'Docs Site', description: 'Content-focused docs with search and MDX.', badge: 'Open Source' },
    { title: 'E-commerce', description: 'Headless storefront with blazing performance.', badge: 'Client' },
  ];

  return (
    <section className="section">
      <div className="container-xl">
        <h1 className="text-3xl font-semibold mb-6">Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((p, i) => (
            <Card key={i} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
