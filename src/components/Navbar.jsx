import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <a href="#home" className="logo" onClick={closeMenu}>
        Janmejaya's <span>portfolio</span>
      </a>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <a href="#home" onClick={closeMenu}>Home</a>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#skills" onClick={closeMenu}>Skills</a>
        <a href="#projects" onClick={closeMenu}>Projects</a>
        <a href="#journey" onClick={closeMenu}>Journey</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
      </div>
    </nav>
  );
}
export default Navbar;
