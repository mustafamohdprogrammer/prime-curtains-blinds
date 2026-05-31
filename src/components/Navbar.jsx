import { useEffect, useState } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      
      <div className="logo-container">
        <img
          src="/logo-navbar.png"
          alt="Prime Curtains & Blinds"
          className="logo-image"
        />
      </div>

      {/* Desktop Menu */}
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#projects">Gallery</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className={`nav-actions ${scrolled ? "hide-call" : ""}`}>
        <a
          href="tel:9849297191"
          className="call-btn"
        >
          Call Now
        </a>

        {/* <a
          href="https://wa.me/919849297191"
          target="_blank"
          rel="noreferrer"
          className="whatsapp-btn"
        >
          WhatsApp
        </a> */}
      </div>

      {/* Mobile Hamburger */}
      <button
        className="hamburger"
        onClick={() => setMobileMenu(!mobileMenu)}
      >
        ☰
      </button>

      {/* Mobile Menu */}
      <div
        className={`mobile-menu ${
          mobileMenu ? "mobile-menu-open" : ""
        }`}
      >
        <a href="#home">Home</a>
        <a href="#services">Services</a>
        <a href="#projects">Gallery</a>
        <a href="#contact">Contact</a>

        <a
          href="https://wa.me/919849297191"
          target="_blank"
          rel="noreferrer"
          className="mobile-whatsapp"
        >
          WhatsApp
        </a>
      </div>

    </nav>
  );
}

export default Navbar;