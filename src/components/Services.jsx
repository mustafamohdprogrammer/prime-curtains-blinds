function Services() {
  const services = [
    {
      title: "Premium Curtains",
      image: "/services/curtains.png",
      description: "Elegant fabrics tailored for modern interiors."
    },
    {
      title: "Zebra Blinds",
      image: "/services/zebra.png",
      description: "Perfect balance of privacy and natural light."
    },
    {
      title: "Roller Blinds",
      image: "/services/roller.png",
      description: "Minimalist solutions for modern spaces."
    },
    {
      title: "Roman Blinds",
      image: "/services/roman.png",
      description: "Soft luxury with timeless sophistication."
    },
    {
      title: "Wooden Blinds",
      image: "/services/wooden.png",
      description: "Natural textures and premium finishes."
    },
    {
    title: "And Many More",
    image: "/services/more.png",         
    description: "Custom window solutions designed exclusively for your home, office, or commercial space."
     }
  ];

  return (
    <section id="services" className="services">

      <div className="container">

        <p className="section-subtitle">
          OUR SERVICES
        </p>

        <h2>
          Crafted For Every Window
        </h2>

        <div className="services-grid">

          {services.map((service, index) => (
            <div className="service-card" key={index}>

              <div className="service-image">
                <img
                  src={service.image}
                  alt={service.title}
                />
              </div>

              <div className="service-content">

                <h3>{service.title}</h3>

                <p>{service.description}</p>

                {/* <button>
                  View Collection →
                </button> */}

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Services;