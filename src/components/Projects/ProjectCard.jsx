import { motion } from "framer-motion";
import { FiGithub } from "react-icons/fi";

function ProjectVisual({ project }) {
  return (
    <div
      className={`project-visual project-visual-${project.visualTheme}`}
      role="img"
      aria-label={`${project.title} project visual placeholder`}
    >
      <div className="project-visual-topbar">
        <span />
        <span />
        <span />
      </div>

      <div className="project-visual-body">
        <p>{project.category}</p>

        <strong>{project.title}</strong>

        <div className="project-visual-canvas">
          <span />
          <span />
          <span />
          <span />
        </div>

        <div className="project-visual-lines">
          <span />
          <span />
          <span />
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project, reverse }) {
  return (
    <motion.article
      className={`project-card${reverse ? " project-card-reverse" : ""}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6 }}
    >
      <div className="project-card-layout">
        <motion.div
          className="project-visual-frame"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <ProjectVisual project={project} />
        </motion.div>

        <div className="project-copy">
          <p className="project-number">{project.number}</p>

          <p className="project-category">{project.category}</p>

          <h3>{project.title}</h3>

          <p className="project-summary">{project.summary}</p>

          <dl className="project-details">
            <div>
              <dt>Problem</dt>
              <dd>{project.problem}</dd>
            </div>

            <div>
              <dt>Solution</dt>
              <dd>{project.solution}</dd>
            </div>
          </dl>

          <div className="project-lists">
            <div>
              <h4>Key Features</h4>

              <ul>
                {project.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4>Tech Stack</h4>

              <ul>
                {project.technologies.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="project-actions">
            <motion.a
              className="project-action project-action-primary"
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <FiGithub />
              GitHub
            </motion.a>

            {project.demoUrl && (
              <motion.a
                className="project-action project-action-secondary"
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Live Demo <span aria-hidden="true">&nearr;</span>
              </motion.a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default ProjectCard;
