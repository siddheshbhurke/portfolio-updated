import { motion, useReducedMotion } from "framer-motion";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import AttendImage from "../../assets/projects/attend-ai.png";
import SalaryImage from "../../assets/projects/salary-predictor.png";
import CreditImage from "../../assets/projects/credit-score.png";
import MimesisImage from "../../assets/projects/mimesis.png;
import {
  Badge,
  Button,
  Card,
  Container,
  Tag,
} from "../ui";

import "./SelectedWork.css";

const works = [
  {
    id: "attend",
    featured: true,
    image: AttendImage,
    category: "AI PLATFORM",
    title: "ATTEND AI",
    subtitle: "Face & Voice Recognition Attendance System",

    description:
      "AI-powered attendance platform combining facial recognition, speaker verification and real-time analytics for educational institutions.",

    tags: [
      "FastAPI",
      "Supabase",
      "OpenCV",
      "Resemblyzer",
      "Streamlit",
    ],

    metrics: [
      { label: "Recognition", value: "96%" },
      
      { label: "Realtime", value: "Yes" },
    ],

    github: "https://github.com/siddheshbhurke/attend-ai",
    
  },
  {
  id: "mimesis",

  featured: true,

  image: MimesisImage,

  category: "Deep Learning",

  title: "Mimesis",

  subtitle: "Real-Time Neural Style Transfer",

  description:
    "Deep learning-powered web application that transforms content images into artistic creations using Adaptive Instance Normalization (AdaIN). Built with PyTorch and Flask, it supports fast neural style transfer through a pretrained encoder-decoder architecture.",

  tags: [
    "PyTorch",
    "Flask",
    "AdaIN",
    "OpenCV",
    "Python",
  ],

  metrics: [
    { label: "Inference", value: "<1s" },
    { label: "Device", value: "CPU/GPU" },
  ],

  github: "https://github.com/siddheshbhurke/mimesis",
},

  {
    id: "salary",

    image: SalaryImage,

    category: "Machine Learning",

    title: "Glassdoor Salary Prediction",

    subtitle: "Salary Prediction using XGBoost",

    description:
      "Machine learning application that predicts salary ranges using historical Glassdoor data and multiple regression models.",

    tags: [
      "Python",
      "XGBoost",
      "Pandas",
      "Scikit-Learn",
    ],

    metrics: [
      { label: "Accuracy", value: "91%" },
      { label: "Dataset", value: "50K+" },
    ],

    github: "https://github.com/siddheshbhurke/Glass-Door-salary-prediction",

    
  },

  {
    id: "credit",

    image: CreditImage,

    category: "Machine Learning",

    title: "Credit Score Classification",

    subtitle: "Credit Risk Prediction",

    description:
      "Classification model for predicting customer credit score categories using financial behaviour and historical records.",

    tags: [
      "Python",
      "Scikit-Learn",
      "Pandas",
      "Matplotlib",
    ],

    metrics: [
      { label: "Accuracy", value: "94%" },
      { label: "Classes", value: "3" },
    ],

    github: "https://github.com/siddheshbhurke/Paisa-Bazaar-Credit-Score-Category-Predictor",

    
  },
];





function WorkCard({ project, index }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.article
      className={`work-card ${
        project.featured ? "featured" : ""
      }`}
      initial={
        prefersReducedMotion
          ? false
          : {
              opacity: 0,
              y: 24,
            }
      }
      whileInView={
        prefersReducedMotion
          ? {}
          : {
              opacity: 1,
              y: 0,
            }
      }
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.55,
        delay: index * 0.08,
      }}
    >
      <Card className="work-shell">
  <div className="project-image">
  <img
    src={project.image}
    alt={project.title}
    loading="lazy"
  />
</div>

  <div className="work-content">
    <Badge tone="terracotta">
      {project.category}
    </Badge>

    <h3>{project.title}</h3>

    <p className="work-subtitle">
      {project.subtitle}
    </p>

    <p className="work-description">
      {project.description}
    </p>

    <div className="work-metrics">
      {project.metrics.map((metric) => (
        <div
          key={metric.label}
          className="metric-item"
        >
          <strong>{metric.value}</strong>
          <span>{metric.label}</span>
        </div>
      ))}
    </div>

    <div className="work-tags">
      {project.tags.map((tag) => (
        <Tag key={tag} tone="olive">
          {tag}
        </Tag>
      ))}
    </div>

    <div className="work-actions">
      <Button
        as="a"
        href={project.github}
        target="_blank"
        rel="noreferrer"
      >
        GitHub
        <FiGithub />
      </Button>

      
    </div>
  </div>
</Card>
    </motion.article>
  );
}

function SelectedWork() {
  return (
    <section
      className="selected-work"
      id="selected-work"
      aria-labelledby="selected-work-heading"
    >
      <Container size="xl">
        <div className="selected-header">
          <Badge tone="olive">Selected Work</Badge>

          <h2 id="selected-work-heading">
            AI Systems Built
            <br />
            From Idea to Deployment.
          </h2>

          <p>
            A collection of AI platforms, machine learning applications,
            and intelligent systems built during internships and personal
            engineering projects.
          </p>
        </div>

        <div className="projects-grid">
          {works.map((project, index) => (
            <WorkCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default SelectedWork;
