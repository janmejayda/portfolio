const stats = [
  { number: "3", label: "Projects Built" },
  { number: "5", label: "Technologies" },
  { number: "3", label: "Years Learning" },
  { number: "100+", label: "Cups of Coffee" },
];

function About() {
  return (
    <section className="about section" id="about">
      <p className="eyebrow">GET TO KNOW ME</p>

      <h2 className="section-title">
        About <span>Me</span>
      </h2>

      <p className="about-description">
       
        after completing my <strong>Bachelor of Science in Computer Science (2026)</strong>.
        I'm a passionate and aspiring software developer currently pursuing my <strong>Master of Computer Applications (MCA)</strong>,
 
 With a strong interest in modern web technologies, problem-solving, and software development, I focus on writing clean, efficient code and building responsive digital experiences.
 I'm continuously learning, exploring new technologies, and looking for opportunities to grow as a developer while creating meaningful solutions that make a difference.


      </p>

      <p className="about-description">
        Every project I build is an opportunity to learn something
        new, improve my development skills, and solve real problems
        with practical solutions.
      </p>

      <div className="stats-grid">
        {stats.map((stat) => (
          <div className="stat-card" key={stat.label}>
            <h3>{stat.number}</h3>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;