
import { useEffect, useState } from "react";
import profileImage from "../assets/my poto proff.jpeg";

function Hero() {
  const titles = [
    "Frontend Developer",
    "React Developer",
    "Creative Builder",
    "Backend Developer",
    "UI/UX Designer",
  ];

  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[titleIndex];
    let delay = deleting ? 50 : 100;

    // Pause briefly after completing a word
    if (!deleting && displayText === currentTitle) {
      delay = 1000;
    }

    const timer = setTimeout(() => {
      if (!deleting) {
        if (displayText.length < currentTitle.length) {
          setDisplayText(currentTitle.substring(0, displayText.length + 1));
        } else {
          setDeleting(true);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(currentTitle.substring(0, displayText.length - 1));
        } else {
          setDeleting(false);
          setTitleIndex((previous) => (previous + 1) % titles.length);
        }
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [displayText, deleting, titleIndex]);

  return (
    <section className="hero section" id="home">
      <div className="hero-content">
        <p className="eyebrow">WELCOME TO MY PORTFOLIO</p>

        <h1>
          Hi, I'm <span>Janmejaya</span> Das
        </h1>

        <h2 className="typing-heading">
          I'm a <span className="typing-text">{displayText}</span>
          <span className="typing-cursor">|</span>
        </h2>

        <p className="hero-description">
          I enjoy building modern, responsive websites and learning new
          technologies. I turn ideas into interactive digital experiences.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn">
            View My Work
          </a>

          <a href="/resume/resume.pdf" className="btn btn-outline" download>
            Download Resume
          </a>
        </div>
      </div>

      <div className="hero-image">
        <div className="circle-glow">
          <img src={profileImage} alt="Janmejaya profile" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
