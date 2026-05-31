import { useState } from "react";

function Projects() {
  const [activeTab, setActiveTab] = useState("curtains");

  const portfolioData = {
    curtains: [
      "/portfolio/curtains/curtain-1.jpeg",
      "/portfolio/curtains/curtain-2.jpeg",
      "/portfolio/curtains/curtain-3.jpeg",
      "/portfolio/curtains/curtain-4.jpeg",
      "/portfolio/curtains/curtain-5.jpeg",
    ],

    roman: [
      "/portfolio/roman/roman-1.jpeg",
      "/portfolio/roman/roman-2.jpeg",
    ],

    roller: [
      "/portfolio/roller/roller-1.jpeg",
      "/portfolio/roller/roller-2.jpeg",
    ],

    // zebra: [
    //   "/portfolio/zebra/zebra-1.jpeg",
    // ],
  };

  return (
    <section id="projects" className="projects">

      <div className="container">

        <p className="projects-subtitle">
          OUR WORK
        </p>

        <h2>
          Real Installations Across Homes & Villas
        </h2>

        <p className="projects-description">
          Explore some of our recent curtain and blind
          installations completed for homeowners.
        </p>

        <div className="portfolio-tabs">

          <button
            className={activeTab === "curtains" ? "active" : ""}
            onClick={() => setActiveTab("curtains")}
          >
            Curtains
          </button>

          <button
            className={activeTab === "roman" ? "active" : ""}
            onClick={() => setActiveTab("roman")}
          >
            Roman Blinds
          </button>

          <button
            className={activeTab === "roller" ? "active" : ""}
            onClick={() => setActiveTab("roller")}
          >
            Roller Blinds
          </button>

          {/* <button
            className={activeTab === "zebra" ? "active" : ""}
            onClick={() => setActiveTab("zebra")}
          >
            Zebra Blinds
          </button> */}

        </div>

        <div className="gallery-grid">

          {portfolioData[activeTab].map((image, index) => (
            <div className="gallery-card" key={index}>
              <img src={image} alt="" />
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Projects;