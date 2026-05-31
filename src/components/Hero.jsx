function Hero() {
  return (
    <section id="home" className="hero">

      <div className="overlay"></div>

      <div className="hero-content">

        {/* <div className="trust-badge">
          ★★★★★ Trusted by 500+ Homeowners
        </div> */}

        {/* <p className="subtitle">
          PREMIUM CURTAINS & BLINDS
        </p> */}

        <h1>
          Transform Your Space
          <span> With Timeless Elegance</span>
        </h1>

        <p className="description">
          Custom Curtains, Zebra Blinds, Roller Blinds &
          Premium Window Solutions For Modern Homes,
          Villas & Commercial Spaces.
        </p>

        <div className="hero-buttons">
          <a
            href="https://wa.me/919849297191"
            target="_blank"
            rel="noreferrer"
          >
            Free Consultation
          </a>

          <a href="#projects">
            View Projects
          </a>
        </div>

        <div className="hero-stats">

          <div>
            <h3>200+</h3>
            <p>Projects</p>
          </div>

          {/* <div>
            <h3>1000+</h3>
            <p>Happy Clients</p>
          </div> */}

          <div>
            <h3>5+</h3>
            <p>Years Experience</p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;