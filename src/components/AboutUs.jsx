import React from "react";
import { Code2, Rocket, UserRound } from "lucide-react";

function AboutUs() {
  return (
    <main className="page-shell">
      <div className="page-header">
        <span className="eyebrow">ABOUT US</span>
        <h1>Building digital experiences that solve real business problems.</h1>
        <p>
          I specialize in creating practical, scalable web products that combine strong UX with
          solid backend architecture.
        </p>
      </div>

      <div className="info-grid">
        <div className="info-card">
          <UserRound size={24} />
          <h3>Who I am</h3>
          <p>
            I am a full stack developer focused on helping brands and businesses turn ideas into
            responsive, high-performing web applications.
          </p>
        </div>

        <div className="info-card">
          <Code2 size={24} />
          <h3>What I do</h3>
          <p>
            I design and build frontends, APIs, dashboards, CMS integrations, and user flows that
            are simple, reliable, and scalable.
          </p>
        </div>

        <div className="info-card">
          <Rocket size={24} />
          <h3>How I work</h3>
          <p>
            I focus on clean architecture, reusable components, business clarity, and fast delivery
            without compromising quality.
          </p>
        </div>
      </div>

      <div className="feature-layout">
        <div className="feature-block">
          <h3>My strengths</h3>
          <ul>
            <li>React, Next.js, Node.js and API-driven workflows</li>
            <li>Role-based access control and secure application design</li>
            <li>Responsive UI for product, dashboard, and ecommerce experiences</li>
            <li>CMS and third-party system integration</li>
          </ul>
        </div>

        <div className="feature-block">
          <h3>Professional focus</h3>
          <ul>
            <li>Business-first product thinking</li>
            <li>Performance and maintainability</li>
            <li>Clear communication and implementation quality</li>
            <li>Continuous learning and product iteration</li>
          </ul>
        </div>
      </div>
    </main>
  );
}

export default AboutUs;
