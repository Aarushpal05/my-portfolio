import React from "react";
import "../css/skills.css";


    

function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React JS",
    "Bootstrap",
    "Python",
    "Django",
    "MySQL",
    "Git & GitHub",
    "REST API",
    "Responsive Design",
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-header">
        <span className="skills-tag">My Expertise</span>
        <h2 className="glow-heading">Professional Skills</h2>
        <p>
          Building modern, responsive and high-performance web applications
          with clean code and exceptional user experiences.
        </p>
      </div>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <h3>{skill}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}



export default Skills;