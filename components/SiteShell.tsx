"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import FooterPattern from "./FooterPattern";
import {
  ArrowUp,
  ArrowUpRight,
  Menu,
  X,
  Phone,
  Instagram,
  Mail,
  MapPin,
} from "lucide-react";

const links = [
  ["Explore", "/#explore"],
  ["Our approach", "/#approach"],
  ["Programmes & fees", "/#cohorts"],
  ["FAQs", "/faqs/"],
  ["Contact", "/contact/"],
];
export default function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [pastMiddle, setPastMiddle] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    setMenuOpen(false);
    let frame = 0;
    const update = () => {
      setScrolled(window.scrollY > 48);
      setPastMiddle(
        window.scrollY >
          Math.max(
            300,
            (document.documentElement.scrollHeight - window.innerHeight) / 2,
          ),
      );
      frame = 0;
    };
    const scroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", scroll, { passive: true });
    window.addEventListener("resize", scroll);
    const resize = new ResizeObserver(scroll);
    resize.observe(document.body);
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.08 },
    );
    document.querySelectorAll("[data-reveal]").forEach((el) => {
      if (el.getBoundingClientRect().top > innerHeight)
        el.classList.add("reveal-ready");
      observer.observe(el);
    });
    return () => {
      window.removeEventListener("scroll", scroll);
      window.removeEventListener("resize", scroll);
      cancelAnimationFrame(frame);
      resize.disconnect();
      observer.disconnect();
    };
  }, [pathname]);
  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        document.querySelector<HTMLButtonElement>(".menu-toggle")?.focus();
      }
    };
    if (menuOpen) document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, [menuOpen]);
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header
        className={`site-header ${scrolled ? "is-scrolled" : ""} ${menuOpen ? "menu-is-open" : ""}`}
      >
        <div className="nav-surface">
          <div className="nav-wrap">
            <Link href="/" className="brand" aria-label="Pwani Innovators home">
              <img
                src="/images/logo.webp"
                alt="Pwani Innovators"
                width="700"
                height="253"
              />
            </Link>
            <nav className="desktop-nav" aria-label="Main navigation">
              {links.map(([label, href]) => (
                <Link
                  href={href}
                  key={href}
                  aria-current={
                    pathname !== "/" &&
                    pathname.replace(/\/$/, "") === href.replace(/\/$/, "")
                      ? "page"
                      : undefined
                  }
                >
                  {label}
                </Link>
              ))}
            </nav>
            <Link href="/contact/" className="button button-yellow header-cta">
              Register interest <ArrowUpRight size={17} />
            </Link>
            <button
              className="menu-toggle"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>
          {menuOpen && (
            <nav
              className="mobile-nav"
              id="mobile-navigation"
              aria-label="Mobile navigation"
            >
              {links.map(([label, href]) => (
                <Link key={href} href={href} onClick={() => setMenuOpen(false)}>
                  {label}
                  <ArrowUpRight size={18} />
                </Link>
              ))}
            </nav>
          )}
        </div>
      </header>
      <div className="header-spacer" />
      {children}
      <footer className="site-footer">
        <svg
          className="wave footer-wave"
          viewBox="0 0 1440 90"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0 40C240 120 400-25 680 30s470 70 760-5v65H0Z"
            fill="currentColor"
          />
        </svg>
        <div className="section-shell">
          <div className="footer-top">
            <div className="footer-brand">
              <Link href="/" aria-label="Pwani Innovators home">
                <img
                  src="/images/logo.webp"
                  alt="Pwani Innovators"
                  width="700"
                  height="253"
                />
              </Link>
              <p>
                Learn. Build. <em>Share.</em>
              </p>
              <FooterPattern />
            </div>
            <nav className="footer-links" aria-label="Footer navigation">
              <span className="tiny-label">Explore</span>
              <Link href="/#explore">Learning tracks</Link>
              <Link href="/#approach">Our approach</Link>
              <Link href="/#cohorts">Programmes & fees</Link>
              <Link href="/faqs/">FAQs</Link>
              <Link href="/contact/">Contact</Link>
            </nav>
            <div className="footer-contact">
              <span className="tiny-label">Say hello</span>
              {[
                {
                  href: "tel:+254791532391",
                  label: "Call the team",
                  value: "0791 532 391",
                  icon: Phone,
                },
                {
                  href: "https://www.instagram.com/pwaninnovate/",
                  label: "Find us on Instagram",
                  value: "@pwaninnovate",
                  icon: Instagram,
                },
                {
                  href: "mailto:info@innovate-pwani.co.ke",
                  label: "Email the team",
                  value: "info@innovate-pwani.co.ke",
                  icon: Mail,
                },
              ].map((c) => (
                <a
                  key={c.href}
                  href={c.href}
                  {...(c.href.startsWith("https")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  <span>
                    <c.icon size={19} />
                  </span>
                  <div>
                    <small>{c.label}</small>
                    <strong>{c.value}</strong>
                  </div>
                  <ArrowUpRight size={18} />
                </a>
              ))}
              <div className="footer-address">
                <MapPin size={16} />
                Smartbrains Academy, Mombasa
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2026 Pwani Innovators</span>
          </div>
        </div>
      </footer>
      <button
        className={`floating-top ${pastMiddle ? "is-visible" : ""}`}
        aria-label="Back to top"
        tabIndex={pastMiddle ? 0 : -1}
        aria-hidden={!pastMiddle}
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: window.matchMedia("(prefers-reduced-motion: reduce)")
              .matches
              ? "auto"
              : "smooth",
          })
        }
      >
        <ArrowUp size={22} />
      </button>
    </>
  );
}
