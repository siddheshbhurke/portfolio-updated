import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useMemo, useState } from "react";
import {
  FiArrowRight,
  FiBarChart2,
  FiCheckCircle,
  FiCpu,
  FiDownload,
  FiEdit3,
  FiEye,
  FiFileText,
  FiLayers,
  FiMessageSquare,
  FiSmile,
  FiZap,
} from "react-icons/fi";

import { Badge, Button, Card, Container, IconCard, StatStrip, Tag } from "../ui";
import { projects } from "../../data/projects";

import "./Projects.css";

const products = [
  {
    id: "advertisement",
    title: "AI Advertisement Generator",
    shortTitle: "AI Ad Generator",
    description: "Create polished ad concepts with AI-powered copy, image generation and layout refinement.",
    icon: FiMessageSquare,
    tone: "var(--color-olive)",
    features: [
      "Multi-agent architecture",
      "AI copywriting and refinement",
      "Gemini Vision layout analysis",
      "Image generation fallback pipeline",
      "Production-ready API backend",
    ],
    technologies: ["Gemini", "LangChain", "Vertex AI Imagen", "FastAPI", "Docker"],
  },
  {
    id: "infographic",
    title: "AI Infographic Generator",
    shortTitle: "AI Infographic Generator",
    description: "Transform raw content into structured, readable visual infographics.",
    icon: FiBarChart2,
    tone: "var(--color-purple)",
    features: [
      "Content structure planning",
      "Visual hierarchy generation",
      "Chart-ready summaries",
      "Readable layout blocks",
      "Brand-safe composition",
    ],
    technologies: ["Gemini", "FastAPI", "Python", "Pydantic"],
  },
  {
    id: "meme",
    title: "AI Meme Generator",
    shortTitle: "AI Meme Generator",
    description: "Generate witty meme concepts from topics, tones and campaign prompts.",
    icon: FiSmile,
    tone: "var(--color-terracotta)",
    features: [
      "Tone-aware captioning",
      "Template-aware generation",
      "Prompt refinement",
      "Fast campaign iteration",
      "Creative variant output",
    ],
    technologies: ["Gemini", "Python", "FastAPI", "Prompt Engineering"],
  },
  {
    id: "survey",
    title: "AI Survey Generator",
    shortTitle: "AI Survey Generator",
    description: "Create intelligent surveys in multiple formats from natural-language requirements.",
    icon: FiFileText,
    tone: "var(--color-blue)",
    features: [
      "Multiple question formats",
      "Schema validation",
      "Retry-safe API execution",
      "Requirement-to-survey workflow",
      "Structured JSON output",
    ],
    technologies: ["FLAN-T5", "Gemini", "FastAPI", "Pydantic"],
  },
];

const stats = [
  { value: "4+", label: "Products" },
  { value: "20+", label: "AI Models" },
  { value: "6 Months", label: "Development" },
  { value: "Production", label: "Ready Platform" },
];

const architectureSteps = [
  { label: "Prompt", icon: FiEdit3 },
  { label: "Copy Agent", detail: "Gemini 1.5", icon: FiMessageSquare },
  { label: "Critique Agent", detail: "Gemini 1.5", icon: FiCpu },
  { label: "Refinement Agent", detail: "Gemini 1.5", icon: FiZap },
  { label: "Gemini Vision", detail: "Layout Agent", icon: FiEye },
  { label: "Imagen", detail: "Image Generation", icon: FiLayers },
  { label: "Advertisement", icon: FiCheckCircle },
];

function ProductPreview({ product }) {
  return (
    <div className="platform-preview" aria-label={`${product.title} application preview`}>
      <div className="platform-preview-art">
        <div>
          <span>Generated Creative</span>
          <strong>{product.id === "advertisement" ? "Run faster. Go further." : product.shortTitle}</strong>
          <p>Campaign-ready output generated from a structured AI workflow.</p>
        </div>
      </div>

      <div className="platform-preview-thumbs" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>

      <Card as="aside" className="platform-preview-panel">
        <p>Output Details</p>
        <dl>
          <div>
            <dt>Mode</dt>
            <dd>{product.shortTitle}</dd>
          </div>
          <div>
            <dt>Tone</dt>
            <dd>Production Ready</dd>
          </div>
          <div>
            <dt>Size</dt>
            <dd>1080 x 1080</dd>
          </div>
        </dl>
        <Button type="button">
          Download <FiDownload aria-hidden="true" />
        </Button>
      </Card>
    </div>
  );
}

function ArchitectureFlow() {
  return (
    <ol className="platform-flow" aria-label="Architecture flow">
      {architectureSteps.map(({ detail, icon: Icon, label }) => (
        <li key={label}>
          <Card className="platform-flow-card">
            <Icon aria-hidden="true" />
            <span>{label}</span>
            {detail && <small>{detail}</small>}
          </Card>
        </li>
      ))}
    </ol>
  );
}

function Projects() {
  const [activeProductId, setActiveProductId] = useState(products[0].id);
  const prefersReducedMotion = useReducedMotion();

  const visualCraftProject = useMemo(
    () => projects.find((project) => project.title === "VisualCraft AI") ?? projects[1],
    [],
  );
  const activeProduct = products.find((product) => product.id === activeProductId) ?? products[0];
  const ActiveIcon = activeProduct.icon;

  return (
    <motion.section
      id="projects"
      className="projects-section platform-section"
      aria-labelledby="projects-heading"
      initial={prefersReducedMotion ? false : { opacity: 0, y: 32 }}
      whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      <Container size="xl">
        <div className="platform-intro-grid">
          <header className="platform-intro">
            <Badge tone="terracotta">Featured Platform</Badge>
            <h2 id="projects-heading">
              VisualCraft <span>AI</span>
            </h2>
            <p className="platform-subtitle">Enterprise AI Content Creation Platform</p>
            <p className="platform-description">
              {visualCraftProject.summary} Built as an enterprise-grade creative workflow for
              transforming campaign briefs into production-ready marketing assets.
            </p>
            <Button as="a" href="#platform-showcase">
              Explore Platform <FiArrowRight aria-hidden="true" />
            </Button>
          </header>

          <div className="platform-product-grid" aria-label="VisualCraft AI products">
            {products.map((product, index) => {
              const Icon = product.icon;
              const isActive = product.id === activeProductId;

              return (
                <motion.button
                  key={product.id}
                  className={`platform-product-button${isActive ? " is-active" : ""}`}
                  type="button"
                  onClick={() => setActiveProductId(product.id)}
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
                  whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  aria-pressed={isActive}
                >
                  <IconCard
                    as="div"
                    icon={<Icon aria-hidden="true" />}
                    title={product.shortTitle}
                    description={product.description}
                    tone={product.tone}
                  >
                    <span className="platform-card-action">
                      Explore <FiArrowRight aria-hidden="true" />
                    </span>
                  </IconCard>
                </motion.button>
              );
            })}
          </div>
        </div>

        <StatStrip className="platform-stats" stats={stats} labelledBy="projects-heading" />

        <div id="platform-showcase" className="platform-showcase">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProduct.id}
              className="platform-showcase-grid"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
              animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
              exit={prefersReducedMotion ? {} : { opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="platform-showcase-copy">
                <div className="platform-showcase-number">
                  {String(products.findIndex((product) => product.id === activeProduct.id) + 1).padStart(2, "0")}
                </div>
                <Badge tone="olive">VisualCraft AI Module</Badge>
                <h3>{activeProduct.title}</h3>
                <p>{activeProduct.description}</p>

                <ul className="platform-feature-list">
                  {activeProduct.features.map((feature) => (
                    <li key={feature}>
                      <FiCheckCircle aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="platform-tags" aria-label="Technologies">
                  {activeProduct.technologies.map((technology) => (
                    <Tag key={technology} tone="olive">
                      {technology}
                    </Tag>
                  ))}
                </div>

                <div className="platform-showcase-actions">
                  <Button as="a" href={visualCraftProject.githubUrl} target="_blank" rel="noreferrer">
                    View Project <FiArrowRight aria-hidden="true" />
                  </Button>
                  <Button as="a" variant="ghost" href="#platform-showcase">
                    View Architecture <FiArrowRight aria-hidden="true" />
                  </Button>
                </div>
              </div>

              <ArchitectureFlow />

              <div className="platform-preview-wrap">
                <span className="platform-preview-icon" style={{ "--preview-tone": activeProduct.tone }}>
                  <ActiveIcon aria-hidden="true" />
                </span>
                <ProductPreview product={activeProduct} />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </motion.section>
  );
}

export default Projects;
