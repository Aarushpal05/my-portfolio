import "../css/skills.css";

import html from "../assets/icons/html.png";
import css from "../assets/icons/css2.webp";
import js from "../assets/icons/javascripts.png";
import react from "../assets/icons/react.webp";
import python from "../assets/icons/python.png";
import django from "../assets/icons/django.png";
import mysql from "../assets/icons/mysql.png";
import git from "../assets/icons/git.png";
import github from "../assets/icons/github.png";
import bootstrap from "../assets/icons/bootstrap.jpg";
import mongodb from "../assets/icons/mongodb.png";


const skills = [
  { name: "HTML5", icon: html },
  { name: "CSS3", icon: css },
  { name: "JavaScript", icon: js },
  { name: "React", icon: react },
  { name: "Python", icon: python },
  { name: "Django", icon: django },
  { name: "MySQL", icon: mysql },
  { name: "Git", icon: git },
  { name: "GitHub", icon: github },
  { name: "Bootstrap", icon: bootstrap },
  { name: "MongoDB", icon: mongodb },
];

const data = [...skills, ...skills];

export default function Skills() {
  return (
    <section className="skills-section">

      <h2 className="section-title">
        My <span>Skills</span>
      </h2>

      <div className="marquee">

        <div className="marquee-track">

          {data.map((skill, index) => (

            <div className="skill-card" key={index}>

              <img src={skill.icon} alt={skill.name} />

              <h4>{skill.name}</h4>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

