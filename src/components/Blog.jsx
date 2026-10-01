import React from "react";
import { ArrowLeft, ArrowRight, Clock3, Layers3 } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";

const blogPosts = [
  {
    slug: "modern-dashboards-with-react",
    category: "Frontend",
    title: "Building modern dashboards with React and clean UX",
    date: "May 18, 2026",
    readTime: "6 min read",
    summary: "A practical approach to turning dense business data into interfaces people can scan, understand, and use confidently.",
    intro: "A dashboard is not successful because it contains every metric. It succeeds when people can quickly understand what needs their attention and take the right next step.",
    sections: [
      {
        heading: "Start with decisions, not widgets",
        paragraphs: [
          "Before choosing charts or cards, identify the decisions the dashboard should support. A support lead may need to spot unresolved tickets, while a finance manager needs to understand cash flow and exceptions. Those jobs should shape the page hierarchy.",
          "I group information by workflow and importance. A small set of high-signal summaries belongs near the top; supporting trends and detailed records can follow below. This keeps the first view useful without making it noisy."
        ]
      },
      {
        heading: "Make the interface easy to scan",
        paragraphs: [
          "Consistent spacing, clear labels, and restrained color help users compare values without repeatedly relearning the interface. Color should communicate meaning, such as a status or change, rather than decorate every surface.",
          "Tables still matter in operational products. Give them readable density, useful sorting, and obvious empty and loading states. On smaller screens, preserve the most important columns and move secondary details into a deliberate responsive view."
        ]
      },
      {
        heading: "Keep the React structure maintainable",
        paragraphs: [
          "I build dashboard screens from components that represent stable responsibilities: filters, metric summaries, charts, and data tables. Shared components keep visual behavior consistent, while page-level composition keeps each workflow understandable.",
          "Data loading and error states deserve the same attention as the success state. A clear retry action and a useful explanation are much better than a blank panel when a request fails."
        ],
        takeaways: [
          "Design around the decisions users need to make.",
          "Use hierarchy and consistent patterns to improve scanning.",
          "Treat loading, empty, and error states as part of the product."
        ]
      }
    ]
  },
  {
    slug: "scalable-architecture-for-client-projects",
    category: "Engineering",
    title: "Why scalable architecture matters in client projects",
    date: "April 12, 2026",
    readTime: "7 min read",
    summary: "How thoughtful API boundaries, authorization, and frontend organization help a product grow without slowing every change.",
    intro: "Scalable architecture is less about predicting the future and more about making today's decisions easy to change when the product learns something new.",
    sections: [
      {
        heading: "Build around clear responsibilities",
        paragraphs: [
          "A codebase becomes difficult to change when unrelated responsibilities are tangled together. I prefer clear boundaries between the user interface, business rules, and data access so each can evolve with less accidental impact.",
          "For APIs, predictable resource names and consistent response shapes reduce special cases for every client. Validation should happen at the boundary, and failures should communicate what went wrong without exposing internal implementation details."
        ]
      },
      {
        heading: "Treat authorization as a server-side rule",
        paragraphs: [
          "Role-based access control is not just a collection of hidden buttons. The server must verify who is making a request and whether that person can perform the requested action on the specific resource.",
          "The frontend can reflect permissions to make the experience clearer, but it cannot be the security boundary. Keeping permission checks explicit and testable helps prevent inconsistent access behavior as features grow."
        ]
      },
      {
        heading: "Choose structure that fits the product",
        paragraphs: [
          "A small product does not need a maze of abstractions. Start with the simplest structure that makes ownership clear, then extract shared patterns when real duplication or complexity appears.",
          "Useful architecture leaves room for change: focused modules, explicit interfaces, and automated checks around important behavior. The goal is not more layers; it is safer, more understandable changes."
        ],
        takeaways: [
          "Separate responsibilities where it reduces coupling.",
          "Enforce permissions on the server for every protected action.",
          "Let actual product complexity guide abstractions."
        ]
      }
    ]
  },
  {
    slug: "idea-to-live-deployment-workflow",
    category: "Workflow",
    title: "From product idea to live deployment: my workflow",
    date: "March 06, 2026",
    readTime: "5 min read",
    summary: "A clear delivery process for moving from an early product idea to a dependable release, with fewer surprises along the way.",
    intro: "A smooth launch is usually the result of many small, clear decisions made before the final deployment button is pressed.",
    sections: [
      {
        heading: "Turn the idea into a shared plan",
        paragraphs: [
          "I begin by clarifying the target user, the problem being solved, and what a successful first release should make possible. A focused first version creates room to learn instead of delaying feedback behind an oversized scope.",
          "I capture the main user journeys, content needs, constraints, and open questions. This creates a practical reference for design and implementation and helps surface assumptions early."
        ]
      },
      {
        heading: "Build in visible, testable steps",
        paragraphs: [
          "I break work into small slices that can be reviewed as they become usable. This makes progress easier to discuss and gives stakeholders a chance to correct direction while changes are still inexpensive.",
          "Quality checks should follow the risk: validate the important user flows, check responsive layouts, review accessibility basics, and verify that errors and empty states make sense."
        ]
      },
      {
        heading: "Release with a feedback loop",
        paragraphs: [
          "Before launch, I verify production configuration, build output, routing, and the core paths users depend on. A release checklist keeps these steps repeatable instead of relying on memory.",
          "After launch, observe how people use the product and collect the issues that matter most. A good workflow continues after deployment: feedback becomes the next small, deliberate improvement."
        ],
        takeaways: [
          "Agree on the first release outcome before expanding scope.",
          "Ship small increments that people can review and test.",
          "Plan for production checks and post-launch learning."
        ]
      }
    ]
  }
];

function Blog() {
  const { slug } = useParams();
  const post = blogPosts.find((item) => item.slug === slug);

  if (slug && !post) {
    return (
      <main className="page-shell blog-not-found">
        <span className="eyebrow">ARTICLE NOT FOUND</span>
        <h1>This story isn't here.</h1>
        <p>The article may have moved, or the link may be incorrect.</p>
        <Link className="secondary" to="/blog"><ArrowLeft size={16} /> Back to all articles</Link>
      </main>
    );
  }

  if (post) {
    return (
      <main className="page-shell article-shell">
        <Link className="article-back" to="/blog"><ArrowLeft size={16} /> All articles</Link>
        <motion.article
          className="article-detail"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <header className="article-heading">
            <div className="article-meta-top">
              <span className="article-category"><Layers3 size={14} /> {post.category}</span>
              <span>{post.date}</span>
              <span className="article-reading"><Clock3 size={14} /> {post.readTime}</span>
            </div>
            <h1>{post.title}</h1>
            <p className="article-deck">{post.summary}</p>
          </header>

          <div className="article-art" aria-hidden="true">
            <span className="article-art-index">FIELD NOTES / {String(blogPosts.indexOf(post) + 1).padStart(2, "0")}</span>
            <div className="article-art-lines"><i /><i /><i /><i /></div>
            <span className="article-art-word">{post.category}</span>
          </div>

          <div className="article-body">
            <p className="article-intro">{post.intro}</p>
            {post.sections.map((section) => (
              <section className="article-section" key={section.heading}>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.takeaways && (
                  <aside className="article-takeaways">
                    <span className="eyebrow">KEY TAKEAWAYS</span>
                    <ul>{section.takeaways.map((item) => <li key={item}>{item}</li>)}</ul>
                  </aside>
                )}
              </section>
            ))}
            <Link className="article-next" to="/blog">
              <span><small>KEEP EXPLORING</small><strong>Read more articles</strong></span>
              <ArrowRight size={19} />
            </Link>
          </div>
        </motion.article>
      </main>
    );
  }

  return (
    <main className="page-shell">
      <div className="page-header">
        <span className="eyebrow">FIELD NOTES / 2026</span>
        <h1>Ideas, insights, and product thinking.</h1>
        <p>Practical notes from building interfaces, shaping application architecture, and delivering useful software.</p>
      </div>

      <div className="blog-grid">
        {blogPosts.map((item, index) => (
          <motion.article
            className="blog-card"
            key={item.slug}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.08, ease: "easeOut" }}
          >
            <Link className="blog-card-link" to={`/blog/${item.slug}`} aria-label={`Read ${item.title}`}>
              <div className={`blog-cover blog-cover-${index + 1}`}>
                <span>FIELD NOTES / 0{index + 1}</span>
                <div className="blog-cover-mark">{String(index + 1).padStart(2, "0")}</div>
              </div>
              <div className="blog-card-content">
                <div className="blog-card-meta"><span className="blog-date">{item.category}</span><span>{item.date}</span></div>
                <h2>{item.title}</h2>
                <p>{item.summary}</p>
                <div className="blog-card-footer"><span><Clock3 size={14} /> {item.readTime}</span><span className="read-more">Read article <ArrowRight size={16} /></span></div>
              </div>
            </Link>
          </motion.article>
        ))}
      </div>
    </main>
  );
}

export default Blog;
