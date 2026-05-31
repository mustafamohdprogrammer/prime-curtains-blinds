function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-brand">

          <img
            src="/logo-navbar.png"
            alt="Prime Curtains & Blinds"
            className="footer-logo"
          />

          <p>
            Premium Curtains, Blinds &
            Custom Window Solutions
            For Modern Homes & Villas.
          </p>

        </div>

        <div className="footer-links">

          <h4>Quick Links</h4>

          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#projects">Gallery</a>
          <a href="#contact">Contact</a>

        </div>

        <div className="footer-contact">

          <h4>Contact</h4>

          <a href="tel:9849297191">
            📞 9849297191
          </a>

          <a
            href="https://wa.me/919849297191"
            target="_blank"
            rel="noreferrer"
          >
            💬 WhatsApp
          </a>

          <a
            href="https://instagram.com/primecurtainsblinds"
            target="_blank"
            rel="noreferrer"
          >
            📷 Instagram
          </a>

        </div>

      </div>

      <div className="footer-bottom">
        © 2026 Prime Curtains & Blinds. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;