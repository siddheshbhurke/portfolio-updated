import { motion, useReducedMotion } from "framer-motion";
import { experience } from "../../data/experience";
import ExperienceItem from "./ExperienceItem";

import "./Experience.css";

function Experience() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="experience" className="experience-section" aria-labelledby="experience-heading">
      <div className="container">
        <motion.header
          className="experience-header"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="section-label">Experience</p>
          <h2 id="experience-heading">Building production AI systems through industry experience.</h2>
          <p>My focus is taking AI solutions from research prototypes to deployable products: designing resilient workflows, shipping practical APIs and learning from real operating constraints.</p>
        </motion.header>

        <div className="experience-timeline">
          {experience.map((item) => <ExperienceItem key={`${item.company}-${item.duration}`} item={item} />)}
        </div>
      </div>
    </section>
  );
}

export default Experience;
