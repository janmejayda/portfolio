import { useEffect, useRef } from "react";
import { FaCode, FaPython, FaReact, FaRocket } from "react-icons/fa";

// Naya step add karna ho to bas yahan ek object jod de.
// status: "done" | "current" | "next"
const steps = [
  {
    date: "Getting Started",
    title: "Learning Web Development",
    text: "Started learning HTML, CSS, and JavaScript to understand how websites are created.",
    icon: <FaCode />,
    status: "done",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    date: "Along the Way",
    title: "Learning Python Basics",
    text: "Picked up Python fundamentals and problem solving to build a strong programming base.",
    icon: <FaPython />,
    status: "done",
    tags: ["Python", "Logic"],
  },
  {
    date: "Current",
    title: "Building with React",
    text: "Practicing React components, styling, responsive layouts, and building portfolio projects.",
    icon: <FaReact />,
    status: "current",
    tags: ["React", "Vite", "Git"],
  },
  {
    date: "Next Goal",
    title: "Full-Stack Development",
    text: "Learning backend development, APIs, databases, and deployment to build complete applications.",
    icon: <FaRocket />,
    status: "next",
    tags: ["Node.js", "MongoDB", "APIs"],
  },
];

const statusText = {
  done: "Completed",
  current: "In progress",
  next: "Up next",
};

function Journey() {
  const timelineRef = useRef(null);

  // Scroll karte hi har step neeche se fade-in ho
  useEffect(() => {
    const items = timelineRef.current.querySelectorAll(".journey-item");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="journey section" id="journey">
      <p className="eyebrow">MY DEVELOPMENT PATH</p>

      <h2 className="section-title">
        My <span>Journey</span>
      </h2>

      <div className="journey-timeline" ref={timelineRef}>
        {steps.map((step) => (
          <div
            className={`journey-item journey-${step.status}`}
            key={step.title}
          >
            <div className="journey-dot">{step.icon}</div>

            <div className="journey-card">
              <div className="journey-top">
                <span className="journey-date">{step.date}</span>
                <span className={`journey-status status-${step.status}`}>
                  {statusText[step.status]}
                </span>
              </div>

              <h3>{step.title}</h3>
              <p>{step.text}</p>

              <div className="journey-tags">
                {step.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Journey;