import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown, ArrowUpRight, BriefcaseBusiness, Code2, Download,
  Github, GraduationCap, Mail, MapPin, Menu, Moon, Phone,
  Rocket, Sparkles, Sun, X, Linkedin
} from "lucide-react";
import { skills, experience, projects, education } from "./data/portfolioData";

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  show: { opacity: 1, y: 0, transition: { duration: .65 } }
};

function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="section">
      <motion.div
        className="section-head"
        initial="hidden" whileInView="show" viewport={{ once: true, amount: .25 }}
        variants={fadeUp}
      >
        <span className="eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
      </motion.div>
      {children}
    </section>
  );
}

function App() {
  const [menu, setMenu] = useState(false);
  const [light, setLight] = useState(true);

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenu(false);
  };

  return (
    <div className={light ? "app light" : "app"}>
      <div className="noise" />
      <header className="nav-wrap">
        <nav className="nav">
          <button className="logo" onClick={() => go("home")}>
            VG<span>.</span>
          </button>

          <div className={menu ? "nav-links open" : "nav-links"}>
            {["about","skills","experience","projects","education","contact"].map(x =>
              <button key={x} onClick={() => go(x)}>{x}</button>
            )}
          </div>

          <div className="nav-actions">
            <button className="icon-btn" onClick={() => setLight(!light)} aria-label="Toggle theme">
              {light ? <Moon size={18}/> : <Sun size={18}/>}
            </button>
            <button className="menu-btn" onClick={() => setMenu(!menu)}>
              {menu ? <X/> : <Menu/>}
            </button>
          </div>
        </nav>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-grid" />
          <motion.div className="hero-content"
            initial="hidden" animate="show"
            variants={{ hidden:{opacity:0}, show:{opacity:1,transition:{staggerChildren:.12}} }}>
            <motion.div className="status" variants={fadeUp}>
              <span className="pulse"/> Available for opportunities
            </motion.div>

            <motion.p className="hero-kicker" variants={fadeUp}>HELLO, I'M</motion.p>
            <motion.h1 variants={fadeUp}>Vikas G <span>God.</span></motion.h1>
            <motion.h3 variants={fadeUp}>Full Stack Developer</motion.h3>
            <motion.p className="hero-text" variants={fadeUp}>
              4+ years of experience building scalable web applications with
              React.js, Next.js, Node.js, MongoDB and MySQL.
            </motion.p>

            <motion.div className="hero-buttons" variants={fadeUp}>
              <button className="primary" onClick={() => go("projects")}>
                Explore My Work <ArrowDown size={17}/>
              </button>
              <a className="secondary" href="/resume.pdf" download>
                <Download size={17}/> Download Resume
              </a>
            </motion.div>

            <motion.div className="quick-links" variants={fadeUp}>
              <a href="mailto:godvikas2468@gmail.com"><Mail size={17}/> Email</a>
              <span><MapPin size={17}/> Mumbai, India</span>
            </motion.div>
          </motion.div>

          <motion.div className="hero-orbit"
            animate={{ y:[0,-12,0], rotate:[0,2,0] }}
            transition={{ duration:5, repeat:Infinity, ease:"easeInOut" }}>
            <div className="orbit-ring ring-one"/>
            <div className="orbit-ring ring-two"/>
            <div className="code-card">
              <div className="code-top"><span/><span/><span/></div>
              <pre>{`const developer = {
  name: "Vikas G God",
  role: "Full Stack Developer",
  experience: "4+ years",
  stack: [
    "React", "Next.js",
    "Node.js", "MongoDB"
  ],
  passion: "Building products"
};`}</pre>
            </div>
          </motion.div>
        </section>

        <Section id="about" eyebrow="01 — ABOUT" title="A little about me">
          <div className="about-grid">
            <motion.div className="about-copy" initial="hidden" whileInView="show" viewport={{once:true}} variants={fadeUp}>
              <p className="lead">
                I build business-focused web applications with a strong focus on
                clean UI, reliable APIs and scalable architecture.
              </p>
              <p>
                My experience includes authentication, RBAC, e-commerce platforms,
                admin dashboards, CMS integrations, third-party APIs and responsive
                frontend development.
              </p>
              <p>
                I enjoy turning requirements into practical, maintainable products
                and learning new technologies along the way.
              </p>
            </motion.div>
            <motion.div className="about-stats" initial="hidden" whileInView="show" viewport={{once:true}} variants={fadeUp}>
              <div className="stat"><strong>4+</strong><span>Years Experience</span></div>
              <div className="stat"><strong>8+</strong><span>Featured Projects</span></div>
              <div className="stat"><strong>15+</strong><span>Core Technologies</span></div>
              <div className="stat"><strong>3</strong><span>Languages</span></div>
            </motion.div>
          </div>
        </Section>

        <Section id="skills" eyebrow="02 — TOOLBOX" title="Skills & technologies">
          <div className="skills-grid">
            {skills.map(([name, group], i) =>
              <motion.div className="skill" key={name}
                initial={{opacity:0, y:20}} whileInView={{opacity:1,y:0}}
                viewport={{once:true}} transition={{delay:i*.035}}>
                <Code2 size={17}/>
                <div><strong>{name}</strong><small>{group}</small></div>
              </motion.div>
            )}
          </div>
        </Section>

        <Section id="experience" eyebrow="03 — EXPERIENCE" title="Where I've worked">
          <div className="timeline">
            {experience.map((item, i) =>
              <motion.article className="timeline-item" key={item.company}
                initial="hidden" whileInView="show" viewport={{once:true}} variants={fadeUp}>
                <div className="timeline-dot">{i+1}</div>
                <div className="timeline-card">
                  <div className="card-top">
                    <div><span className="mini-label">{item.period}</span><h3>{item.role}</h3><h4>{item.company}</h4></div>
                    <BriefcaseBusiness size={22}/>
                  </div>
                  <ul>{item.points.map(p => <li key={p}>{p}</li>)}</ul>
                </div>
              </motion.article>
            )}
          </div>
        </Section>

        <Section id="projects" eyebrow="04 — SELECTED WORK" title="Projects I've built">
          <div className="projects-grid">
            {projects.map((p, i) =>
              <motion.article className="project-card" key={p.title}
                initial="hidden" whileInView="show" viewport={{once:true}}
                variants={fadeUp} transition={{delay:i*.05}}>
                <div className="project-number">0{i+1}</div>
                <div className="project-icon"><Rocket size={21}/></div>
                <h3>{p.title}</h3>
                <span className="stack">{p.stack}</span>
                <p>{p.description}</p>
                <div className="project-link">View project details <ArrowUpRight size={17}/></div>
              </motion.article>
            )}
          </div>
        </Section>

        <Section id="education" eyebrow="05 — EDUCATION" title="Education">
          <div className="education-grid">
            {education.map(([degree, place, year]) =>
              <motion.div className="edu-card" key={degree} initial="hidden" whileInView="show" viewport={{once:true}} variants={fadeUp}>
                <GraduationCap size={25}/>
                <span>{year}</span>
                <h3>{degree}</h3>
                <p>{place}</p>
              </motion.div>
            )}
          </div>
          <div className="languages"><Sparkles size={18}/> English · Hindi · Marathi</div>
        </Section>

        <section id="contact" className="contact-section">
          <motion.div className="contact-box" initial="hidden" whileInView="show" viewport={{once:true}} variants={fadeUp}>
            <span className="eyebrow">06 — CONTACT</span>
            <h2>Let's build something<br/><span>meaningful together.</span></h2>
            <p>Have a project, opportunity or just want to connect? Feel free to reach out.</p>
            <div className="contact-actions">
              <a className="primary" href="mailto:godvikas2468@gmail.com"><Mail size={17}/> Send an Email</a>
              <a className="secondary" href="tel:8268683550"><Phone size={17}/> 8268683550</a>
            </div>
            <div className="socials">
              <a href="https://github.com/" target="_blank" rel="noreferrer"><Github/></a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><Linkedin/></a>
            </div>
          </motion.div>
        </section>
      </main>

      <footer>
        <span>© {new Date().getFullYear()} Vikas G God</span>
        <button onClick={() => go("home")}><ArrowUp size={16}/> Back to top</button>
      </footer>
    </div>
  );
}

export default App;