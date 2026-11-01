import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
  FaGitAlt,
} from "react-icons/fa";

const skills = [
  { name: "HTML", level: 90, icon: <FaHtml5 /> },
  { name: "CSS", level: 85, icon: <FaCss3Alt /> },
  { name: "JavaScript", level: 70, icon: <FaJs /> },
  { name: "React", level: 50, icon: <FaReact /> },
  { name: "Python", level: 75, icon: <FaPython /> },
  { name: "Git & GitHub", level: 60, icon: <FaGitAlt /> },
];

function Skills() {
  return (
    <section className="skills section" id="skills">
      <p className="eyebrow">WHAT I AM LEARNING</p>

      <h2 className="section-title">
        My <span>Skills</span>
      </h2>

      <div className="skills-grid">
        {skills.map((skill) => (
          <div className="skill-card" key={skill.name}>
            <div className="skill-info">
              <span className="skill-name">
                <span className="skill-icon">{skill.icon}</span>
                {skill.name}
              </span>
              <span>{skill.level}%</span>
            </div>

            <div className="skill-bar">
              <div
                className="skill-progress"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;