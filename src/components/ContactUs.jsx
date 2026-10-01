import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";

function ContactUs() {
  return (
    <main className="page-shell">
      <div className="page-header">
        <span className="eyebrow">CONTACT US</span>
        <h1>Let’s create something meaningful together.</h1>
        <p>
          Whether it is a product idea, redesign, or development partnership, I am available for
          new opportunities and collaborations.
        </p>
      </div>

      <div className="contact-grid">
        <div className="contact-panel">
          <h3>Contact information</h3>
          <div className="contact-item">
            <Mail size={18} />
            <a href="mailto:godvikas2468@gmail.com">godvikas2468@gmail.com</a>
          </div>
          <div className="contact-item">
            <Phone size={18} />
            <a href="tel:8268683550">8268683550</a>
          </div>
          <div className="contact-item">
            <MapPin size={18} />
            <span>Mumbai, India</span>
          </div>
        </div>

        <div className="contact-panel form-panel">
          <h3>Send a message</h3>
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Your name" />
            <input type="email" placeholder="Email address" />
            <textarea rows="5" placeholder="Tell me about your project" />
            <button type="submit" className="primary">Send Message</button>
          </form>
        </div>
      </div>
    </main>
  );
}

export default ContactUs;
