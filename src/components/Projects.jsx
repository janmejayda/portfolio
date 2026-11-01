function Projects() {
  return (
    <section className="projects section" id="projects">
      <p className="eyebrow">WHAT I HAVE BUILT</p>

      <h2 className="section-title">
        My <span>Projects</span>
      </h2>

      <div className="projects-grid">
        
<article className="project-card">
  <div className="project-number">01</div>

  <h3>Portfolio Website</h3>

  <p>
    A personal portfolio built with React and CSS to showcase
    my skills, projects, and learning journey.
  </p>

  <div className="project-tags">
    <span>React</span>
    <span>CSS</span>
  </div>

  <div className="project-links">
    <a
      href="https://github.com/janmejayda"
      target="_blank"
      rel="noreferrer"
    >
      GitHub ↗
    </a>

    <a href="#home">
      Live Demo ↗
    </a>
  </div>
</article>


        <article className="project-card">
          <div className="project-number">02</div>
          <h3>Campus OS</h3>
          <p>
            An AI-powered campus management platform concept for
            bringing student and college services together.
          </p>
          <div className="project-tags">
            <span>React</span>
            <span>Node.js</span>
            <span>MongoDB</span>
          </div>
        </article>

        <article className="project-card">
          <div className="project-number">03</div>
          <h3>Coming Soon</h3>
          <p>
            I'm working on more projects and will add them here as
            I continue learning and building.
          </p>
          <div className="project-tags">
            <span>Learning</span>
            <span>Development</span>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Projects;