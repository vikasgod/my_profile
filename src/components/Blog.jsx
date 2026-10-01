import React from "react";
import { ArrowRight } from "lucide-react";

const blogPosts = [
  {
    title: "Building modern dashboards with React and clean UX",
    date: "May 2026",
    summary: "How I design interfaces that combine speed, clarity, and business logic without overwhelming users."
  },
  {
    title: "Why scalable architecture matters in client projects",
    date: "April 2026",
    summary: "A practical look at API structure, role-based access, and maintainable frontend patterns for growing products."
  },
  {
    title: "From product idea to live deployment: my workflow",
    date: "March 2026",
    summary: "A breakdown of planning, implementation, QA, and release strategy for business-driven web applications."
  }
];

function Blog() {
  return (
    <main className="page-shell">
      <div className="page-header">
        <span className="eyebrow">BLOG</span>
        <h1>Ideas, insights, and product thinking.</h1>
        <p>
          Short notes on frontend work, development strategy, and building better digital experiences.
        </p>
      </div>

      <div className="blog-grid">
        {blogPosts.map((post) => (
          <article className="blog-card" key={post.title}>
            <span className="blog-date">{post.date}</span>
            <h3>{post.title}</h3>
            <p>{post.summary}</p>
            <button className="read-more">
              Read article <ArrowRight size={16} />
            </button>
          </article>
        ))}
      </div>
    </main>
  );
}

export default Blog;
