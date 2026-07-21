import ProfileImage from "../../assets/profile/photo.jpg";
import { motion, useReducedMotion } from "framer-motion";
import {
  FiArrowRight,
  FiDownload,
  FiFileText,
  FiGithub,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";

import { Badge, Button, Card, Container } from "../ui";

import "./Hero.css";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/siddheshbhurke",
    icon: FiGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/siddheshbhurke/",
    icon: FiLinkedin,
  },
  {
    label: "Email",
    href: "mailto:siddheshbhurke28@gmail.com",
    icon: FiMail,
  },
  {
    label: "Resume",
    href: "/resume.pdf",
    icon: FiFileText,
  },
];

function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const reveal = prefersReducedMotion
    ? {}
    : {
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0 },
      };
  const stagger = prefersReducedMotion
    ? {}
    : {
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.08,
          },
        },
      };

  return (
    <motion.section
      id="hero"
      className="hero-section"
      aria-labelledby="hero-heading"
    >
      <div className="hero-background" aria-hidden="true" />

      <Container
        className="hero-layout"
        size="xl"
        as={motion.div}
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="hero-content" variants={reveal}>
          <Badge tone="terracotta">AI / ML Engineer</Badge>
          <h1 id="hero-heading" className="hero-heading">
            Building AI Solutions That <em>Create Impact.</em>
          </h1>
          <p className="hero-description">
            AI/ML Engineer with hands-on experience in Generative AI, LLMs,
            Computer Vision and building production-ready AI applications.
          </p>

          <div className="hero-actions" aria-label="Hero actions">
            <Button as="a" href="#projects">
              Explore My Work <FiArrowRight aria-hidden="true" />
            </Button>
            <Button
              as="a"
              variant="secondary"
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Download Resume <FiDownload aria-hidden="true" />
            </Button>
          </div>

          <nav className="hero-socials" aria-label="Social links">
            {socialLinks.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") || href.endsWith(".pdf") ? "_blank" : undefined}
                rel={href.startsWith("http") || href.endsWith(".pdf") ? "noreferrer" : undefined}
                aria-label={label}
              >
                <Icon aria-hidden="true" />
              </a>
            ))}
          </nav>
        </motion.div>

        <motion.div
          className="hero-visual"
          variants={reveal}
          initial={prefersReducedMotion ? false : { opacity: 0, x: 32 }}
          animate={prefersReducedMotion ? {} : { opacity: 1, x: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hero-visual-decor hero-visual-decor-dots" aria-hidden="true" />
          <div className="hero-visual-decor hero-visual-decor-ring" aria-hidden="true" />
          <div className="hero-botanical hero-botanical-left" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <div className="hero-botanical hero-botanical-right" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          </motion.div>

          <motion.div
            className="hero-portrait-frame"
            aria-label="Editorial portrait illustration of Siddhesh Bhurke"
            role="img"
            animate={prefersReducedMotion ? {} : { y: [0, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.div
              className="hero-portrait"
              animate={
                prefersReducedMotion
                  ? {}
                  : {
                      y: [0, -12, 0],
                      scale: [1, 1.015, 1],
                    }
              }
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <img
                src={ProfileImage}
                alt="Siddhesh Bhurke"
                className="hero-profile-image"
              />

              <div className="portrait-overlay" />
            </motion.div>

          <Card
            as={motion.aside}
            className="hero-profile-card"
            aria-label="Profile status"
            animate={prefersReducedMotion ? {} : { y: [0, -10, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <strong>Siddhesh Bhurke</strong>
            <span>AI/ML Engineer</span>
            <p><span aria-hidden="true" /> Open to Opportunities</p>
          </Card>
        </motion.div>
      </Container>

      <motion.a
        className="hero-scroll-indicator"
        href="#projects"
        aria-label="Scroll to selected work"
        initial={prefersReducedMotion ? false : { opacity: 0 }}
        animate={prefersReducedMotion ? {} : { opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
      >
        <span>Scroll</span>
        <span
          className="hero-scroll-arrow"
          aria-hidden="true"
        >
          &darr;
        </span>
      </motion.a>
    </motion.section>
  );
}

export default Hero;
