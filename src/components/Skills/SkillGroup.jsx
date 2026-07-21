function SkillGroup({ group }) {
  return (
    <section className="skill-group">
      <h3>{group.title}</h3>

      <div className="skill-list">
        {group.skills.map((skill) => (
          <span
            key={skill}
            className="skill-pill"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

export default SkillGroup;