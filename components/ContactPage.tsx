import {
  ArrowUpRight,
  MapPin,
  CalendarDays,
  Phone,
  Instagram,
  Heart,
  Mail,
} from "lucide-react";
import TypeformEmbed from "./TypeformEmbed";

export default function ContactPage() {
  return (
    <main id="main">
      <section id="join" className="join-section contact-page">
        <div className="section-shell join-inner">
          <div className="join-copy">
            <h1>
              Bring your curiosity.
              <br />
              <em>
                We’ll take it
                <br /> from there.
              </em>
            </h1>
            <p>
              Tell us a little about the learner and what interests them. We’ll
              help with the right cohort, timings and the next steps.
            </p>
            <div className="contact-direct">
              <a href="tel:+254791532391">
                <Phone size={20} />
                <span>
                  <small>Give us a call</small>0791 532 391
                </span>
                <ArrowUpRight size={18} />
              </a>
              <a href="mailto:info@innovate-pwani.co.ke">
                <Mail size={20} />
                <span>
                  <small>Drop us a line</small>info@innovate-pwani.co.ke
                </span>
                <ArrowUpRight size={18} />
              </a>
              <a
                href="https://www.instagram.com/pwaninnovate/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={20} />
                <span>
                  <small>Follow the journey</small>@pwaninnovate
                </span>
                <ArrowUpRight size={18} />
              </a>
            </div>
            <div className="join-details">
              <span>
                <MapPin size={18} /> Smartbrains Academy, Mombasa
              </span>
              <span>
                <CalendarDays size={18} /> Begins 9 November 2026
              </span>
              <span>
                <Heart size={18} /> Beginners and big imaginations welcome
              </span>
            </div>
          </div>
          <TypeformEmbed />
        </div>
      </section>
    </main>
  );
}
