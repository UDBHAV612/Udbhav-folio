"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { animate, useReducedMotion } from "motion/react";
import { Menu, X, Copy, Check, Download } from "lucide-react";
import { navigation, portfolio } from "@/lib/portfolio";
export function Navigation() {
  const [open, setOpen] = useState(false);
  const button = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        button.current?.focus();
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [open]);
  return (
    <header className="header">
      <div className="nav-shell">
        <Link className="logo" href="/" aria-label="Udbhav Chabbra home">
          u<span>c</span>
          <span className="logo-dot">.</span>
        </Link>
        <nav aria-label="Main navigation" className="desktop-nav">
          {navigation.map((n) => (
            <a key={n} href={`/#${n.toLowerCase()}`}>
              {n}
            </a>
          ))}
        </nav>
        <a className="nav-resume" href={portfolio.resume} download>
          <Download size={14} /> Resume
        </a>
        <button
          ref={button}
          className="menu-button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open ? (
        <nav
          id="mobile-nav"
          className="mobile-nav"
          aria-label="Mobile navigation"
        >
          {navigation.map((n) => (
            <a
              key={n}
              onClick={() => setOpen(false)}
              href={`/#${n.toLowerCase()}`}
            >
              {n}
            </a>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
export function CopyEmail() {
  const [state, setState] = useState("Copy email");
  async function copy() {
    try {
      await navigator.clipboard.writeText(portfolio.email);
      setState("Copied!");
    } catch {
      setState("Use the email link to connect");
    }
  }
  return (
    <button className="copy-button" onClick={copy}>
      {state === "Copied!" ? <Check size={16} /> : <Copy size={16} />}
      <span aria-live="polite">{state}</span>
    </button>
  );
}
export function RevealEnhancement() {
  const reduce = useReducedMotion();
  useEffect(() => {
    if (reduce) return;
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate(
              entry.target as HTMLElement,
              {
                transform: ["translateY(14px)", "translateY(0px)"],
              },
              { duration: 0.55, ease: "easeOut" },
            );
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [reduce]);
  return null;
}
