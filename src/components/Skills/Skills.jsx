import { motion, useReducedMotion } from "framer-motion";

import { skillGroups } from "../../data/skills";
import SkillGroup from "./SkillGroup";

import "./Skills.css";

function Skills() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.section
      id="skills"
      className="skills-section"
      aria-labelledby="skills-heading"
      initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
      whileInView={
        prefersReducedMotion
          ? {}
          : { opacity: 1, y: 0 }
      }
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <motion.header
          className="skills-header"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={
            prefersReducedMotion
              ? {}
              : { opacity: 1, y: 0 }
          }
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">
            Technical Expertise
          </p>

          <h2 id="skills-heading">
            Tools, frameworks and technologies I use to build modern AI
            systems.
          </h2>
        </motion.header>

        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={
                prefersReducedMotion
                  ? false
                  : { opacity: 0, y: 25 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
            >
              <SkillGroup group={group} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Skills;