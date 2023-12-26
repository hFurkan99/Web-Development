import Skill from "./Skill";

function SkillList({ data }) {
  return (
    <div className="skill-list">
      {data.skills.map((skill) => (
        <Skill key={skill.skill} skill={skill} />
      ))}
    </div>
  );
}

export default SkillList;
