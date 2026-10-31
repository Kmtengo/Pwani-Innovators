"use client";

import { useState } from "react";
import { ArrowUpRight, X, Plus, Minus, Search, Download } from "lucide-react";
import { faqs } from "../lib/programme";

export default function FaqPage() {
  const [faqCategory, setFaqCategory] = useState("All questions");
  const [faqSearch, setFaqSearch] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  function visitFaq(i: number) {
    setOpenFaq(openFaq === i ? null : i);
  }
  return (
    <main id="main">
      {" "}
      <section id="faqs" className="faqs section-shell faq-page">
        <div className="faq-intro">
          <h1>
            A little clarity,
            <br />
            <em>before you begin.</em>
          </h1>
          <p>
            For the curious learners.
            <br />
            And their equally curious parents.
          </p>
          <a href="tel:+254791532391" className="text-link">
            Talk to the team <ArrowUpRight size={17} />
          </a>
          <a
            href="/images/programme-poster.png"
            download="Pwani-Innovators-Poster.png"
            className="download-link"
          >
            <Download size={18} /> Download the programme poster
          </a>
        </div>
        <div className="faq-list">
          <div className="faq-search">
            <Search size={18} />
            <input
              aria-label="Search frequently asked questions"
              placeholder="Find your question…"
              value={faqSearch}
              onChange={(e) => setFaqSearch(e.target.value)}
            />
            {faqSearch && (
              <button
                aria-label="Clear search"
                onClick={() => setFaqSearch("")}
              >
                <X size={16} />
              </button>
            )}
          </div>
          <div className="faq-filters">
            {["All questions", "Joining", "Learning", "Practical details"].map(
              (c) => (
                <button
                  className={c === faqCategory ? "active" : ""}
                  key={c}
                  aria-pressed={c === faqCategory}
                  onClick={() => setFaqCategory(c)}
                >
                  {c}
                </button>
              ),
            )}
          </div>
          {faqs
            .map((f, i) => ({ f, i }))
            .filter(
              ({ f }) =>
                (faqCategory === "All questions" ||
                  f.category === faqCategory) &&
                `${f.q} ${f.a}`.toLowerCase().includes(faqSearch.toLowerCase()),
            )
            .map(({ f, i }) => (
              <div
                className={`faq-item ${openFaq === i ? "open" : ""}`}
                key={f.q}
              >
                <h3>
                  <button
                    onClick={() => visitFaq(i)}
                    aria-expanded={openFaq === i}
                    aria-controls={`answer-${i}`}
                    id={`question-${i}`}
                  >
                    {f.q}
                    {openFaq === i ? <Minus size={18} /> : <Plus size={18} />}
                  </button>
                </h3>
                <div
                  id={`answer-${i}`}
                  role="region"
                  aria-labelledby={`question-${i}`}
                  hidden={openFaq !== i}
                >
                  <p>{f.a}</p>
                </div>
              </div>
            ))}
          {!faqs.some(
            (f) =>
              (faqCategory === "All questions" || f.category === faqCategory) &&
              `${f.q} ${f.a}`.toLowerCase().includes(faqSearch.toLowerCase()),
          ) && (
            <p className="empty-faq">
              No matching questions. Try a different word, or{" "}
              <a href="tel:+254791532391">call the team</a>.
            </p>
          )}
        </div>
      </section>
      <div className="page-bottom-cta section-shell">
        <h2>Still have a question?</h2>
        <a className="button button-blue" href="/contact/">
          Let’s talk <ArrowUpRight size={18} />
        </a>
      </div>
    </main>
  );
}
