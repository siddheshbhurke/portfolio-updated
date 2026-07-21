import { useEffect, useRef, useState } from "react";
import { FiArrowRight, FiMenu, FiX } from "react-icons/fi";

import { Button, Container } from "../ui";

import "./Navbar.css";

const navigationItems = [
  { label: "Home", href: "#hero", sectionId: "hero" },
  { label: "Projects", href: "#projects", sectionId: "projects" },
  { label: "Experience", href: "#experience", sectionId: "experience" },
  { label: "Skills", href: "#skills", sectionId: "skills" },
  { label: "Contact", href: "#contact", sectionId: "contact" },
];

function NavigationLinks({ activeSection, className, onNavigate }) {
  return (
    <ul className={className}>
      {navigationItems.map(({ href, label, sectionId }) => (
        <li key={sectionId}>
          <a
            href={href}
            aria-current={activeSection === sectionId ? "page" : undefined}
            onClick={onNavigate}
          >
            {label}
          </a>
        </li>
      ))}
    </ul>
  );
}

function Navbar() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const navigationRef = useRef(null);
  const menuButtonRef = useRef(null);

  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const updateScrollState = () => setHasScrolled(window.scrollY > 12);

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });

    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  useEffect(() => {
    const sections = navigationItems
      .map(({ sectionId }) => document.getElementById(sectionId))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const currentSection = entries.find((entry) => entry.isIntersecting);

        if (currentSection) {
          setActiveSection(currentSection.target.id);
        }
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", isMenuOpen);

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeMenu();
        menuButtonRef.current?.focus();
      }
    };

    const handlePointerDown = (event) => {
      if (!navigationRef.current?.contains(event.target)) {
        closeMenu();
      }
    };

    if (isMenuOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.addEventListener("pointerdown", handlePointerDown);
    }

    return () => {
      document.body.classList.remove("menu-open");
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [isMenuOpen]);

  return (
    <header className={`site-header${hasScrolled ? " is-scrolled" : ""}`}>
      <Container as="div" className="navbar" size="xl" ref={navigationRef}>
        <a className="brand" href="#hero" aria-label="Siddhesh Bhurke, back to top">
          SB.
        </a>

        <nav className="desktop-navigation" aria-label="Primary navigation">
          <NavigationLinks activeSection={activeSection} className="navigation-links" />
        </nav>

        <Button as="a" className="navbar-cta" href="#contact">
          Let&apos;s Connect <FiArrowRight aria-hidden="true" />
        </Button>

        <button
          ref={menuButtonRef}
          className="menu-toggle"
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
        </button>

        <nav
          id="mobile-navigation"
          className={`mobile-navigation${isMenuOpen ? " is-open" : ""}`}
          aria-label="Mobile navigation"
          aria-hidden={!isMenuOpen}
        >
          <div className="mobile-navigation-header">
            <span>Menu</span>
            <span>Siddhesh Bhurke</span>
          </div>
          <NavigationLinks
            activeSection={activeSection}
            className="mobile-navigation-links"
            onNavigate={closeMenu}
          />
          <Button as="a" className="mobile-navigation-cta" href="#contact" onClick={closeMenu}>
            Let&apos;s Connect <FiArrowRight aria-hidden="true" />
          </Button>
        </nav>
      </Container>
    </header>
  );
}

export default Navbar;
