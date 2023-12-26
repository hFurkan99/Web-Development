function Skill({ skill }) {
  return (
    <div style={{ backgroundColor: skill.color }} className="skill">
      {`${skill.skill} ${
        skill.level === "advanced"
          ? "💪"
          : skill.level === "beginner"
          ? "👶"
          : "👍"
      }`}
    </div>
  );
}

export default Skill;
