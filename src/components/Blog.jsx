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
  },
  {
    slug: "razorpay-payment-gateway-integration",
    category: "Payments",
    title: "Razorpay integration: a complete, secure payment flow",
    date: "October 03, 2026",
    readTime: "12 min read",
    summary: "A practical walkthrough of Razorpay Orders, Checkout, server-side signature checks, webhooks, testing, and going live.",
    intro: "A payment integration is not complete when Checkout opens or when the browser says payment succeeded. The server must create the order, verify the result, and keep payment state in sync even when the customer closes the tab.",
    sections: [
      {
        heading: "1. Set up your Razorpay account and test keys",
        paragraphs: [
          "Create a Razorpay account, complete the account and business verification required for your use case, then open the Dashboard in Test Mode. Generate a Key ID and Key Secret for development. Test credentials are separate from Live credentials.",
          "Keep both values on the server in environment variables. The Key ID can be sent to the browser to initialize Checkout; the Key Secret must never leave your server or be committed to source control."
        ],
        steps: [
          "Add RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET to your server environment.",
          "Install the official server SDK for your backend, or use Razorpay's Orders API directly.",
          "Use a local .env file only for development and ensure it is ignored by Git."
        ]
      },
      {
        heading: "2. Create an order on your server",
        paragraphs: [
          "Your backend should calculate the payable amount from trusted product and cart data, validate inventory and discounts, then create a Razorpay Order. Razorpay amounts use the currency's smallest unit: for INR, ₹500 is 50000 paise. Never accept the final amount from the browser as authoritative.",
          "Save your own pending order and its Razorpay order ID before returning the order details to the client. Use a unique receipt or internal order reference so you can trace the payment later."
        ],
        code: `const Razorpay = require("razorpay");

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

app.post("/api/orders", requireUser, async (req, res) => {
  const cart = await loadCartForUser(req.user.id);
  const amount = calculateTotalInPaise(cart);
  const order = await razorpay.orders.create({
    amount,
    currency: "INR",
    receipt: createUniqueReceipt(req.user.id),
  });

  await savePendingOrder({ userId: req.user.id, amount, razorpayOrderId: order.id });
  res.json({ id: order.id, amount: order.amount, currency: order.currency });
});`
      },
      {
        heading: "3. Open Checkout in the browser",
        paragraphs: [
          "Load Razorpay Checkout using the official Checkout.js integration, then initialize it with the public Key ID and the order returned by your server. Include the order_id; Razorpay uses it to associate the payment with the order you created.",
          "Handle success, dismissal, and errors in the UI, but treat the success callback only as data to verify. It is not proof of payment. Keep the customer informed while your backend confirms the result."
        ],
        code: `const order = await fetch("/api/orders", { method: "POST" }).then(r => r.json());

const checkout = new window.Razorpay({
  key: import.meta.env.VITE_RAZORPAY_KEY_ID,
  amount: order.amount,
  currency: order.currency,
  order_id: order.id,
  handler: async (payment) => {
    await fetch("/api/payments/verify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payment),
    });
  },
});

checkout.open();`
      },
      {
        heading: "4. Verify the Checkout signature on the server",
        paragraphs: [
          "Send razorpay_payment_id, razorpay_order_id, and razorpay_signature from the Checkout callback to an authenticated backend endpoint. Look up the expected order in your database, confirm it belongs to the current customer, and verify its amount and currency before changing its status.",
          "Compute HMAC-SHA256 over the server-stored order ID, a pipe character, and the payment ID, using the Key Secret. Compare the result to the supplied signature with a timing-safe comparison. Only after verification should the order be marked paid or fulfillment begin."
        ],
        code: `const crypto = require("node:crypto");

const expected = crypto
  .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
  .update(storedOrder.razorpayOrderId + "|" + paymentId)
  .digest("hex");

const expectedBuffer = Buffer.from(expected, "utf8");
const providedBuffer = Buffer.from(razorpaySignature, "utf8");
if (
  expectedBuffer.length !== providedBuffer.length ||
  !crypto.timingSafeEqual(expectedBuffer, providedBuffer)
) {
  return res.status(400).json({ error: "Invalid payment signature" });
}

await markOrderVerified(storedOrder.id, paymentId);`
      },
      {
        heading: "5. Add webhooks for reliable payment updates",
        paragraphs: [
          "A customer may close the browser before your verification request completes, or a payment can change state after Checkout returns. Configure a webhook URL in the Razorpay Dashboard and subscribe only to the events your application needs, such as payment.captured, payment.failed, and order.paid.",
          "Verify each webhook using the webhook secret and the exact raw request body; do not parse and re-serialize the JSON before signature verification. Store processed event IDs and make handlers idempotent, since delivery can be retried. A webhook secret is separate from the API Key Secret."
        ],
        steps: [
          "Use HTTPS for the deployed webhook endpoint.",
          "Return a successful response promptly after safely recording the event for processing.",
          "For local testing, expose your development endpoint through a secure tunnel and configure that URL in Test Mode."
        ]
      },
      {
        heading: "6. Test the full payment lifecycle",
        paragraphs: [
          "Run the integration with Test Mode credentials and Razorpay's documented test payment details. Confirm the browser, backend, database, and webhook agree on the final state; testing only the success popup misses most payment bugs."
        ],
        steps: [
          "Successful payment: verify the order ID, amount, currency, signature, and final database status.",
          "Failure and dismissal: keep the order unpaid, show a useful message, and allow a safe retry.",
          "Duplicate callback or webhook: confirm it cannot fulfill or charge the same order twice.",
          "Tampering: change the amount or order ID in a request and confirm the server rejects it.",
          "Delayed delivery: close Checkout before the callback and confirm the webhook can still update the order."
        ]
      },
      {
        heading: "7. Go live with a production checklist",
        paragraphs: [
          "Finish the account activation and payment-method setup required by Razorpay. Configure the production Key ID and Key Secret in your hosting provider's secret manager, switch the frontend to the Live Key ID, and update the webhook URL and webhook secret for production. Never reuse or expose test secrets.",
          "Before enabling real payments, verify HTTPS, allowed origins, authentication, server-side amount calculation, signature checks, webhook idempotency, and monitoring. Record payment IDs and state changes for support and reconciliation, but never log card numbers, CVV, or secrets. Handle refunds through a server-side, authorized workflow and update your records from the resulting API response or webhook."
        ],
        takeaways: [
          "Create every Razorpay Order on the backend using a trusted amount.",
          "Verify Checkout signatures on the server and use webhooks to reconcile final state.",
          "Keep secrets private, make event processing idempotent, and test failure paths before launch."
        ]
      }
    ]
  },
  {
    slug: "deploy-react-vite-app-on-vercel",
    category: "Deployment",
    title: "Deploy a React and Vite app to Vercel, step by step",
    date: "October 03, 2026",
    readTime: "9 min read",
    summary: "A complete path from GitHub to a live Vercel URL, including build settings, React Router rewrites, environment variables, domains, and production checks.",
    intro: "Vercel can build and publish a Vite app automatically whenever you push to Git. A reliable deployment still needs a correct build configuration, safe environment variables, working client-side routes, and a quick production smoke test.",
    sections: [
      {
        heading: "1. Prepare and verify the project locally",
        paragraphs: [
          "Before connecting a deployment platform, confirm the project builds from a clean install and that the generated output is the folder Vercel will publish. For a standard Vite project, the build command is usually npm run build and the output directory is dist.",
          "Commit the app to a Git provider such as GitHub, GitLab, or Bitbucket. Check that generated files, local environment files, and credentials are excluded from version control."
        ],
        code: `npm install
npm run build
git add .
git commit -m "Prepare app for deployment"
git push origin main`
      },
      {
        heading: "2. Import the Git repository into Vercel",
        paragraphs: [
          "Sign in to Vercel, choose Add New Project, connect your Git provider, and import the repository. Vercel detects Vite for most standard projects. Confirm the project root if the app lives in a subfolder of a monorepo.",
          "For a typical Vite app, use npm run build as the build command and dist as the output directory. Keep the install command aligned with the lockfile: npm ci is a good reproducible choice for npm projects that commit package-lock.json. Deploy first with the detected defaults, then fix configuration based on the build log rather than guessing."
        ],
        steps: [
          "Framework preset: Vite.",
          "Build command: npm run build.",
          "Output directory: dist.",
          "Install command: npm ci when using a committed npm lockfile."
        ]
      },
      {
        heading: "3. Configure environment variables safely",
        paragraphs: [
          "Add required variables under the Vercel project's Settings > Environment Variables. Choose whether each value applies to Production, Preview, or Development, and redeploy after changing a value because environment variables are read during a deployment.",
          "Vite replaces variables prefixed with VITE_ into client-side assets. Treat every VITE_ value as public: API URLs and public keys are appropriate, but database passwords, private API keys, and payment secrets are not. Put secret-dependent operations behind a server endpoint or a separately deployed backend."
        ],
        steps: [
          "Set public frontend configuration with VITE_ names only when it is safe for every visitor to see.",
          "Store private credentials without the VITE_ prefix and access them only in server-side code.",
          "Set Preview and Production values deliberately; they may need different API URLs.",
          "After a variable changes, trigger a new deployment and verify the new value is active."
        ]
      },
      {
        heading: "4. Keep React Router links working on refresh",
        paragraphs: [
          "A client-side route such as /blog/deploy-react-vite-app-on-vercel works after navigating from the home page, but a direct browser request may ask the host for a file at that path. For a static Vite SPA, add a Vercel rewrite so app routes serve the built index.html and React Router can render the requested page.",
          "If the project also has API or serverless function routes, make sure the fallback rewrite does not swallow those endpoints. Keep API routes explicitly configured and test both an app deep link and every API path after deployment."
        ],
        code: `{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}`
      },
      {
        heading: "5. Use preview deployments before production",
        paragraphs: [
          "Once Git integration is active, pushes and pull requests create deployments you can review before merging. Open the preview URL and test the actual production build, not only the local development server. Preview deployments can use separate environment variables and test services.",
          "For this app, check the home page, navigation, theme toggle, assets, and nested blog URLs. Also inspect the build output and browser console for missing assets, failed API requests, or environment configuration errors."
        ],
        steps: [
          "Push a small change and confirm Vercel creates a Preview deployment.",
          "Open a nested route directly and refresh the page.",
          "Check mobile layout, browser console, and network failures.",
          "Merge only after the preview matches the expected behavior."
        ]
      },
      {
        heading: "6. Connect a custom domain and publish",
        paragraphs: [
          "Add your domain in the Vercel project's Domains settings. Follow the exact DNS records Vercel provides for your registrar; records differ depending on whether you use an apex domain, a www subdomain, or both. Set a canonical domain and configure the other hostname to redirect to it.",
          "Wait for DNS verification and TLS certificate provisioning, then open the HTTPS domain on desktop and mobile. Merge the release branch or deploy the intended commit to Production, and confirm the production deployment is marked Ready before announcing the URL."
        ]
      },
      {
        heading: "7. Verify, monitor, and roll back when needed",
        paragraphs: [
          "After release, smoke-test the production URL, direct nested routes, forms or API-dependent workflows, and any third-party integration. Review Vercel deployment logs and runtime logs for failed builds, function errors, or unexpected traffic. Keep a known-good deployment available so a bad release can be rolled back quickly.",
          "A deployment is a repeatable workflow, not just a one-time upload: Git history provides traceability, previews provide a review point, and production checks catch configuration problems that local development cannot."
        ],
        takeaways: [
          "For Vite, verify the build command and publish the dist directory.",
          "Add an SPA rewrite for direct React Router routes, and protect API routes from catch-all rules.",
          "Never put private credentials in VITE_ variables; preview and verify before production."
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
                {section.code && <pre className="article-code"><code>{section.code}</code></pre>}
                {section.steps && <ol className="article-steps">{section.steps.map((step) => <li key={step}>{step}</li>)}</ol>}
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
