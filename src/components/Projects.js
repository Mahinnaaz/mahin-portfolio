import projects from "./data/projects";

function Projects() {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>

      <div className="projects-grid">
        {projects.map((p, index) => (
          <div className="project-card" key={index}>
            <h3>{p.title}</h3>

            <p>{p.desc}</p>

            <span>{p.tech}</span>

            <div className="project-links">

              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn"
              >
                GitHub
              </a>

              {p.demo && (
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-btn"
                >
                  Live Demo
                </a>
              )}

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;