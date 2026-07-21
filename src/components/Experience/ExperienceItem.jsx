import { motion } from "framer-motion";

function ExperienceItem({ item }) {
  return (
    <motion.article
      className="experience-item"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6 }}
    >
      <div className="experience-year">
        <time dateTime={item.year}>{item.year}</time>
      </div>

      <div className="experience-content">
        <header>
          <h3>{item.company}</h3>

          <div className="experience-role">
            <p>{item.role}</p>
            <time>{item.duration}</time>
          </div>
        </header>

        <p className="experience-overview">
          {item.overview}
        </p>

        <div className="experience-achievements">
          <h4>Selected Contributions</h4>

          <ul>
            {item.achievements.map((achievement, index) => (
              <motion.li
                key={achievement}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.35,
                  delay: index * 0.08,
                }}
              >
                {achievement}
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="experience-technologies">
          <h4>Technologies</h4>

          <ul>
            {item.technologies.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
        </div>
      </div>
    </motion.article>
  );
}

export default ExperienceItem;