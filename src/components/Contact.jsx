import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    location: "",
    requirement: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `
Name: ${form.name}
Phone: ${form.phone}
Location: ${form.location}
Requirement: ${form.requirement}
`;

    window.open(
      `https://wa.me/919849297191?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section id="contact" className="contact">

      <div className="container contact-container">

        <div className="contact-left">

          <p className="contact-subtitle">
            CONTACT US
          </p>

          <h2>
            Get A Free Consultation
          </h2>

          <p>
            Looking for premium curtains, blinds or
            customized window solutions? Tell us about
            your project and we'll get back to you.
          </p>

          <div className="contact-info">

            <div>
              <h4>📞 Call Us</h4>
              <p>9849297191</p>
            </div>

            <div>
              <h4>💬 WhatsApp</h4>
              <p>Available Everyday</p>
            </div>

            <div>
              <h4>📍 Service Area</h4>
              <p>Hyderabad & Nearby Areas</p>
            </div>

          </div>

        </div>

        <div className="contact-right">

          <form onSubmit={handleSubmit}>

            <input
              type="text"
              placeholder="Your Name"
              required
              onChange={(e) =>
                setForm({
                  ...form,
                  name: e.target.value,
                })
              }
            />

            <input
              type="tel"
              placeholder="Phone Number"
              required
              onChange={(e) =>
                setForm({
                  ...form,
                  phone: e.target.value,
                })
              }
            />

            <input
              type="text"
              placeholder="Location"
              onChange={(e) =>
                setForm({
                  ...form,
                  location: e.target.value,
                })
              }
            />

            <textarea
              rows="5"
              placeholder="Tell Us Your Requirement"
              onChange={(e) =>
                setForm({
                  ...form,
                  requirement: e.target.value,
                })
              }
            />

            <button type="submit">
              Request Free Quote
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}

export default Contact;