"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  ArrowRight,
  ArrowDown,
  MapPin,
  CalendarDays,
  Clock3,
  Code2,
  Smartphone,
  Gamepad2,
  BrainCircuit,
  Bot,
  Sparkles,
  Compass,
  Lightbulb,
  Wrench,
  Award,
  Rocket,
  Users,
  Check,
  Sun,
  Quote,
} from "lucide-react";
import { programme, tracks, cohorts, steps } from "../lib/programme";

import {
  ProductPreview,
  EngineeringPreview,
} from "./ProductPreviews";
import ScrollJourney from "./ScrollJourney";
import HeroArtworkGeometry from "./HeroArtworkGeometry";
const iconMap = {
  code: Code2,
  phone: Smartphone,
  game: Gamepad2,
  brain: BrainCircuit,
  bot: Bot,
  spark: Sparkles,
  compass: Compass,
  bulb: Lightbulb,
  tools: Wrench,
  award: Award,
  rocket: Rocket,
};
function Icon({ name, size = 24 }: { name: string; size?: number }) {
  const Component = iconMap[name as keyof typeof iconMap] || Sparkles;
  return <Component size={size} strokeWidth={1.7} aria-hidden="true" />;
}
function Wave({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`wave ${className}`}
      viewBox="0 0 1440 90"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M0 40C240 120 400-25 680 30s470 70 760-5v65H0Z"
        fill="currentColor"
      />
    </svg>
  );
}
function Star({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`star ${className}`}
      viewBox="0 0 100 100"
      aria-hidden="true"
    >
      <path
        d="m50 0 10 30 25-15-15 25 30 10-30 10 15 25-25-15-10 30-10-30-25 15 15-25L0 50l30-10-15-25 25 15Z"
        fill="currentColor"
      />
    </svg>
  );
}
function Pattern() {
  return (
    <svg
      className="flow-pattern"
      viewBox="0 0 500 500"
      fill="none"
      aria-hidden="true"
    >
      <g stroke="currentColor" strokeWidth="1.5">
        <path d="M-30 140H75q45 0 45-45V0M-30 170h130q50 0 50-50V0M0 270h160q50 0 50-50V130q0-50 50-50h240M0 300h190q50 0 50-50V160q0-50 50-50h210M100 500V400q0-50 50-50h150q50 0 50-50V200q0-45 45-45h105M135 500V430q0-45 45-45h150q50 0 50-50V230q0-45 45-45h75M200 500q0-65 65-65h100q65 0 65-65V275q0-45 45-45h25" />
      </g>
      <g fill="var(--yellow)">
        <circle cx="120" cy="60" r="6" />
        <circle cx="210" cy="200" r="6" />
        <circle cx="350" cy="270" r="6" />
      </g>
    </svg>
  );
}

export default function Home() {
  const [activeTrack, setActiveTrack] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const [monthly, setMonthly] = useState(false);
  const track = tracks[activeTrack];
  function chooseCohort(id: string) {
    window.location.href = `/contact/?cohort=${id}`;
  }
  return (
    <main id="main" className="home-journey">
      <ScrollJourney />
      <section className="hero section-shell">
        <svg className="hero-swell" viewBox="0 0 1440 800" preserveAspectRatio="none" aria-hidden="true" focusable="false">
          <defs>
            <linearGradient id="hero-swell-fade" x1="0" y1="0" x2="1" y2="0.75">
              <stop offset="0" stopColor="#d0edff" />
              <stop offset="0.6" stopColor="#d9f0ff" />
              <stop offset="1" stopColor="#eaf3fc" stopOpacity="0.45" />
            </linearGradient>
            <linearGradient id="hero-wave-light" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="#c4e8fc" stopOpacity="0" />
              <stop offset="0.25" stopColor="#b6e0fa" />
              <stop offset="0.7" stopColor="#8bcdf5" />
              <stop offset="1" stopColor="#d4ecfb" />
            </linearGradient>
            <linearGradient id="hero-wave-blue" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="#6bbcf0" stopOpacity="0" />
              <stop offset="0.3" stopColor="#50aae5" />
              <stop offset="0.72" stopColor="#2786c9" />
              <stop offset="1" stopColor="#a3d8f6" />
            </linearGradient>
          </defs>
          <path className="hero-arch" d="M350 800C525 730 550 245 790 92C945-7 1070-8 1210 73C1330 142 1370 137 1440 30V800Z" fill="url(#hero-swell-fade)" />
          <path className="hero-shore-wave" d="M140 800C330 800 440 707 620 684C830 657 967 766 1160 724C1290 696 1350 638 1440 631V800Z" fill="url(#hero-wave-light)" />
          <path d="M310 800C472 793 532 717 700 724C885 732 981 800 1168 762C1294 736 1370 680 1440 686V800Z" fill="url(#hero-wave-blue)" />
          <path d="M0 800C274 800 429 775 582 767C772 756 924 809 1114 791C1270 776 1340 729 1440 744V800Z" fill="var(--blue)" />
        </svg>
        <div className="hero-copy">
          <h1>
            Big ideas.
            <br />
            <em>Start here.</em>
            <svg
              className="headline-underline"
              viewBox="0 0 400 20"
              aria-hidden="true"
            >
              <path
                d="M5 13Q190-4 395 9"
                fill="none"
                stroke="currentColor"
                strokeWidth="7"
                strokeLinecap="round"
              />
            </svg>
          </h1>
          <p className="hero-lead">
            This holiday, build something
            <br className="desktop-break" /> you’re proud of.
          </p>
          <p className="hero-description">
            Create a game. Build an app. Bring an idea to life. A hands-on tech
            adventure for curious minds aged 8 and above, right here in Mombasa.
          </p>
          <div className="hero-actions">
            <a className="button button-blue" href="/contact/">
              Find your spark <ArrowUpRight size={19} />
            </a>
            <a className="text-link" href="#explore">
              See what you can build <ArrowDown size={17} />
            </a>
          </div>
          <span className="hero-location">
            <MapPin size={16} /> Smartbrains Academy, Mombasa
          </span>
        </div>
        <div className="hero-art">
          <div className="hero-orbit" />
          <div className="hero-photo">
            <div className="hero-photo-surface">
              <img
                src="/images/learner.webp"
                alt="A smiling learner wearing headphones and working on a laptop"
                width="1000"
                height="1250"
                fetchPriority="high"
              />
              <div className="photo-tint" />
            </div>
          </div>
          <div className="hero-object hero-dhow" role="img" aria-label="Wooden dhow with ivory and blue sails">
            <img src="/images/hero-robot-dhow.webp" width="1774" height="887" alt="" />
          </div>
          <div className="hero-keepsake">
            <div className="hero-object hero-robot" role="img" aria-label="Blue and yellow IoT robot with a raised gripper arm">
              <img src="/images/hero-robot-dhow.webp" width="1774" height="887" alt="" />
            </div>
            <div className="hero-note">
              <span className="note-icon">
                <Code2 size={24} />
              </span>
              <div>
                From “what if…”
                <br />
                <strong>to “look what I made!”</strong>
              </div>
            </div>
          </div>
          <div className="hero-caption">
            <span className="handwritten hero-scribble">
              A little curiosity
              <br />
              goes a long way.
            </span>
          </div>
          <HeroArtworkGeometry />
        </div>
      </section>
      <section className="welcome-chapter">
        <div className="quick-facts section-shell">
          <div>
            <CalendarDays />
            <p>
              <small>THE NEXT ADVENTURE</small>
              <strong>9 November 2026</strong>
            </p>
          </div>
          <div>
            <Clock3 />
            <p>
              <small>TIME TO MAKE THINGS</small>
              <strong>4 hours a day</strong>
            </p>
          </div>
          <div data-journey="left">
            <Sun />
            <p>
              <small>A HOLIDAY WELL SPENT</small>
              <strong>Monday–Saturday</strong>
            </p>
          </div>
          <div>
            <Sparkles />
            <p>
              <small>BIG IDEAS, SMALL START</small>
              <strong>From KSh {cohorts[0].weeklyPrice.toLocaleString("en-KE")} / week</strong>
            </p>
          </div>
        </div>
        <section className="intro section-shell" data-reveal>
          <div className="intro-heading">
            <h2>
              Less “what if”.
              <br />
              <em>More “I made this”.</em>
            </h2>
          </div>
          <div className="intro-body">
            <p>
              There’s a creator in every curious mind. Sometimes, all it takes
              is a little guidance, the right tools and people to build with.
            </p>
            <p>
              At Pwani Innovators, school holidays become a space to explore
              technology, solve real problems and make something of your own.
              Come with curiosity. Leave with a project, a certificate and a
              reason to keep going.
            </p>
          </div>
        </section>
        <div
          className="word-ribbon"
          aria-label="Imagine, experiment, make, collaborate, discover"
        >
          <div className="ribbon-track" aria-hidden="true">
            {[0, 1].map((n) => (
              <div className="ribbon-copy" key={n}>
                {[
                  "Imagine",
                  "Experiment",
                  "Make",
                  "Collaborate",
                  "Discover",
                ].map((word) => (
                  <span key={word}>
                    {word}
                    <span className="ribbon-spark">✦</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="explore" className="explore section-shell" data-reveal>
        <div className="section-top">
          <div>
            <h2>
              What will <em>you create?</em>
            </h2>
          </div>
        </div>
        <div
          className="track-tabs"
          role="tablist"
          aria-label="Explore learning tracks"
        >
          {tracks.map((t, i) => (
            <button
              role="tab"
              id={`track-tab-${t.id}`}
              aria-selected={i === activeTrack}
              aria-controls="track-panel"
              tabIndex={i === activeTrack ? 0 : -1}
              key={t.id}
              onClick={() => setActiveTrack(i)}
              onKeyDown={(e) => {
                if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
                  e.preventDefault();
                  const next =
                    (i + (e.key === "ArrowRight" ? 1 : -1) + tracks.length) %
                    tracks.length;
                  setActiveTrack(next);
                  document
                    .getElementById(`track-tab-${tracks[next].id}`)
                    ?.focus();
                }
              }}
              className={i === activeTrack ? "active" : ""}
            >
              <Icon name={t.icon} size={20} />
              {t.label}
            </button>
          ))}
        </div>
        <div
          key={track.id}
          className="track-panel"
          data-journey="right"
          id="track-panel"
          role="tabpanel"
          tabIndex={0}
          aria-labelledby={`track-tab-${track.id}`}
        >
          <div className="track-copy">
            <h3>{track.title}</h3>
            <p>{track.description}</p>
            <div className="skill-tags">
              {track.skills.map((s) => (
                <span key={s}>{s}</span>
              ))}
            </div>
            <div className="project-idea">
              <span className="tiny-label">YOUR PROJECT COULD BE</span>
              <h4>{track.project}</h4>
              <p>{track.example}</p>
            </div>
            <button
              className="text-link"
              onClick={() => {
                window.location.href = `/contact/?track=${encodeURIComponent(track.label)}`;
              }}
            >
              This sounds like me <ArrowUpRight size={18} />
            </button>
          </div>
          <ProductPreview track={track.id} />
        </div>
        <div className="soft-skills">
          <Users size={23} />
          <p>
            <strong>Good ideas grow together.</strong> Teamwork, communication,
            creative thinking and presenting are part of every learning journey.
          </p>
          <span>
            Skills beyond the screen <ArrowUpRight size={16} />
          </span>
        </div>
      </section>

      <section className="maker-banner">
        <div className="section-shell maker-inner">
          <div className="maker-copy">
            <h2>
              Coastal roots.
              <br />
              <em>Extraordinary ideas.</em>
            </h2>
            <p>
              From a school-day challenge to a neighbourhood idea, inspiration
              is all around us. Let’s see what you can make of it.
            </p>
            <a className="text-link" href="#approach">
              How we turn ideas into projects <ArrowRight size={18} />
            </a>
          </div>
          <img
            src="/images/maker-scene.webp"
            alt="Blue and yellow robot, wooden dhow and microcontroller in a coastal-inspired setting"
            width="1400"
            height="933"
            loading="lazy"
          />
        </div>
      </section>

      <section id="approach" className="approach section-shell" data-reveal>
        <div className="section-top">
          <div>
            <h2>
              Learn it. Make it.
              <br />
              <em>Make it yours.</em>
            </h2>
          </div>
          <p>
            A clear path from your first question
            <br />
            to something you can proudly share.
          </p>
        </div>
        <div className="journey">
          <div className="journey-steps" aria-label="The learning journey">
            {steps.map((s, i) => (
              <button
                key={s.title}
                aria-pressed={activeStep === i}
                className={activeStep === i ? "active" : ""}
                onClick={() => setActiveStep(i)}
              >
                <span className="step-number">0{i + 1}</span>
                <span>{s.title}</span>
                <ArrowUpRight size={18} />
              </button>
            ))}
          </div>
          <div className="journey-detail" aria-live="polite" data-journey="right">
            <Pattern />
            <span className="journey-big-number">0{activeStep + 1}</span>
            <div className="journey-icon">
              <Icon name={steps[activeStep].icon} size={42} />
            </div>
            <h3>{steps[activeStep].short}</h3>
            <p>{steps[activeStep].description}</p>
            <div className="journey-dots">
              {steps.map((s, i) => (
                <button
                  key={s.title}
                  aria-label={`Step ${i + 1}: ${s.title}`}
                  aria-pressed={activeStep === i}
                  className={activeStep === i ? "active" : ""}
                  onClick={() => setActiveStep(i)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="kjsea">
        <div className="section-shell kjsea-inner">
          <div className="kjsea-badge">
            <Award size={33} />
            <span>
              YOUR NEXT
              <br />
              CHAPTER
            </span>
          </div>
          <div>
            <h2>
              Your future has
              <br />
              <em>room to grow.</em>
            </h2>
          </div>
          <div className="kjsea-copy">
            <p>
              Before Senior Secondary, take a little time to discover what
              excites you. Explore coding, AI and practical problem-solving
              while building confidence for a STEM pathway.
            </p>
            <p className="small-copy">
              Especially for recent Junior Secondary graduates. Open to every
              curious mind.
            </p>
            <a className="button button-blue" href="#cohorts">
              Meet the Teen Builders <ArrowUpRight size={18} />
            </a>
          </div>
          <Star className="kjsea-star" />
        </div>
      </section>

      <section id="cohorts" className="cohorts section-shell" data-reveal>
        <div className="section-top">
          <div>
            <h2>
              Different ages.
              <br />
              <em>The same spark.</em>
            </h2>
          </div>
          <div className="cohort-heading-right">
            <p>
              A little structure. A lot of possibility.
              <br />A cohort that grows with you.
            </p>
            <div className="price-toggle" aria-label="Price display">
              <button
                aria-pressed={!monthly}
                className={!monthly ? "active" : ""}
                onClick={() => setMonthly(false)}
              >
                Weekly
              </button>
              <button
                aria-pressed={monthly}
                className={monthly ? "active" : ""}
                onClick={() => setMonthly(true)}
              >
                Monthly
              </button>
            </div>
          </div>
        </div>
        <div className="cohort-grid">
          {cohorts.map((c, i) => (
            <article
              key={c.id}
              className={`cohort-card ${i === 1 ? "featured" : ""}`}
              data-journey={i === 1 ? "left" : undefined}
            >
              <div className="cohort-card-top">
                <span className="cohort-icon">
                  <Icon name={c.icon} size={27} />
                </span>
                <span className="tiny-label">AGES {c.ages}</span>
              </div>
              <h3>{c.name}</h3>
              <p>{c.description}</p>
              <div className="price" aria-live="polite">
                <span>KSh</span>{" "}
                {(monthly ? c.monthlyPrice : c.weeklyPrice).toLocaleString("en-KE")}
                <small> / {monthly ? "month" : "week"}</small>
              </div>
              <ul>
                {c.skills.map((s) => (
                  <li key={s}>
                    <Check size={16} />
                    {s}
                  </li>
                ))}
              </ul>
              <button
                className={`button ${i === 1 ? "button-yellow" : "button-outline"}`}
                onClick={() => chooseCohort(c.id)}
              >
                Let’s {c.word.toLowerCase()} <ArrowUpRight size={19} />
              </button>
            </article>
          ))}
        </div>
        <p className="cohort-footnote">
          <Clock3 size={16} /> Four hours daily per cohort · Monday–Saturday ·
          Every school holiday
        </p>
        <p className="price-note">
          Weekly = 6 sessions. Monthly = 4 weeks (24 sessions).
          Calendar-month attendance may vary. Confirm
          arrangements with the team.
        </p>
      </section>

      <section className="day-section">
        <div className="section-shell day-inner" data-reveal>
          <div>
            <h2>
              A little learning.
              <br />
              <em>A lot of doing.</em>
            </h2>
            <p>
              A typical session balances guided discovery with time to try,
              build and share. The pace and activities adapt to each cohort.
            </p>
          </div>
          <div className="day-flow" data-journey="right">
            {[
              [
                "Get curious",
                "A new idea, a question or a small challenge.",
                "01",
              ],
              [
                "Get making",
                "Guided practice and time on your own project.",
                "02",
              ],
              [
                "Get together",
                "Test, collaborate and learn from each other.",
                "03",
              ],
              [
                "Look back. Look ahead.",
                "Share a discovery and plan your next step.",
                "04",
              ],
            ].map(([title, desc, num]) => (
              <div key={title}>
                <span>{num}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="instructor section-shell" data-reveal>
        <EngineeringPreview />
        <div>
          <h2>
            Learn with someone
            <br />
            <em>who builds.</em>
          </h2>
          <p>
            Your instructor is an innovator with experience across these
            technology fields, including building government, corporate and
            consumer systems.
          </p>
          <p>
            That experience comes into the learning space through practical
            guidance: how to approach a problem, choose a useful idea, test your
            work and explain what you’ve built.
          </p>
          <a href="/contact/" className="text-link">
            Get to know the programme <ArrowUpRight size={18} />
          </a>
        </div>
      </section>

      <section className="beyond">
        <Wave className="beyond-wave" />
        <div className="section-shell beyond-content" data-reveal>
          <h2>
            A certificate.
            <br />A creation.
            <br />
            <em>A whole new horizon.</em>
          </h2>
          <div className="beyond-grid">
            <div>
              <span className="round-icon">
                <Users />
              </span>
              <h3>Find your community</h3>
              <p>
                Meet like-minded techies and discover communities where you can
                keep learning, sharing and building.
              </p>
              <a
                href="https://hackclub.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore Hack Club <ArrowUpRight size={17} />
              </a>
            </div>
            <div data-journey="left">
              <span className="round-icon">
                <Rocket />
              </span>
              <h3>Try your next challenge</h3>
              <p>
                Get introduced to suitable coding competitions and technology
                programmes that open up new opportunities to practise.
              </p>
              <a href="/contact/">
                Ask about opportunities <ArrowUpRight size={17} />
              </a>
            </div>
            <div>
              <span className="round-icon">
                <Sun />
              </span>
              <h3>Come back, go further</h3>
              <p>
                Every school holiday brings another chance to explore. Return
                with a new question, a bigger idea or a project to improve.
              </p>
              <a href="/contact/">
                Be part of the next chapter <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
          <p className="beyond-note">
            External programmes have their own eligibility and availability.
            References do not imply a formal partnership.
          </p>
        </div>
      </section>

      <section className="testimonials" data-reveal>
        <div className="section-shell testimonial-heading">
          <h2>
            Big futures need
            <br />
            <em>space to begin.</em>
          </h2>
        </div>
        <div className="testimonial-stage">
          <div className="testimonial-ghost" aria-hidden="true">
            <span className="ghost-quote">“</span>
            <i />
            <i />
            <i />
            <i />
            <div className="ghost-person" />
          </div>
          <article className="testimonial-main" data-journey="right">
            <Quote size={38} />
            <h3>
              A word from
              <br />
              Smartbrains Academy
            </h3>
            <blockquote>{programme.director.quote}</blockquote>
            <div className="testimonial-person">
              <img
                className="testimonial-portrait"
                src={programme.director.image}
                alt="Lennox Mtengo"
                width={64}
                height={64}
                loading="lazy"
              />
              <div>
                <strong>{programme.director.name}</strong>
                <small>Director</small>
                <small>Smartbrains Academy, Mombasa</small>
              </div>
            </div>
          </article>
          <div className="testimonial-ghost" aria-hidden="true">
            <span className="ghost-quote">“</span>
            <i />
            <i />
            <i />
            <i />
            <div className="ghost-person" />
          </div>
        </div>
      </section>
      <section className="collaborate section-shell" data-journey="left">
        <span className="collaborate-icon">
          <Users size={29} />
        </span>
        <div>
          <h3>Have something to share?</h3>
          <p>
            Mentors, makers, schools and collaborators: let’s help young ideas
            grow.
          </p>
        </div>
        <a className="text-link" href="/contact/">
          Start a conversation <ArrowUpRight size={18} />
        </a>
      </section>
    </main>
  );
}
