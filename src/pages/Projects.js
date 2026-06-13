import react from "react";
import "../css/project.css";
import gym from "../assets/gym.avif";

const projects = [
  {
    title: "Employee Management System",
    category: "Full Stack Development",
    description:
      "A complete employee management solution with authentication, CRUD operations, dashboard analytics and responsive UI.",
    tech: ["React", "Django", "MySQL"],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f"
  },
  {
    title: "Fitness Gym Website",
    category: "Frontend Development",
    description:
      "Interactive fitness gym website featuring premium UI design.",
    tech: ["React", "CSS3", "JavaScript"],
    image:
      gym
  },
  {
    title: "E-Commerce Platform",
    category: "Web Application",
    description:
      "Modern e-commerce website with product management, cart system and secure checkout experience.",
    tech: ["React", "Django", "REST API"],
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4"
  }
];

function Projects() {
  return (
    <section className="projects-section" id="projects">

      <div className="projects-header">
        <span className="project-tag">My Work</span>

        <h2 className="project-heading">
          Featured Projects
        </h2>

        <p>
          A collection of professional projects showcasing my
          expertise in web development, UI design and modern
          application architecture.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>

            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>

            <div className="project-content">

              <span className="project-category">
                {project.category}
              </span>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="tech-stack">
                {project.tech.map((item, i) => (
                  <span key={i}>{item}</span>
                ))}
              </div>

              <div className="project-buttons">
                <a href="https://ayushpal758.pythonanywhere.com/">Live Demo</a>
                <a href="https://github.com/Aarushpal05/Employee-management-system.git">Github</a>
              </div>

            </div>

          </div>
        ))}
      </div>

    </section>
  );
}

export default Projects;