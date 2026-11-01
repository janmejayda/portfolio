import { useState } from "react";
import {
  FaPhoneAlt,
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaMapMarkerAlt,
} from "react-icons/fa";

// Social cards: naya card add karna ho to bas yahan ek object jod de.
const contactLinks = [
  {
    name: "Phone",
    label: "Call me",
    value: "+91 9692278590",
    href: "tel:+919692278590",
    icon: <FaPhoneAlt />,
  },
  {
    name: "LinkedIn",
    label: "Connect with me",
    value: "Janmejaya (Bitu) Das",
    href: "https://www.linkedin.com/in/janmejaya-das-4212ba33a?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    icon: <FaLinkedinIn />,
  },
  {
    name: "Instagram",
    label: "Follow me",
    value: "@dreamy_boy__72",
    href: "https://www.instagram.com/dreamy_boy__72?vrfl=dzNpenVsZHQwaTUy",
    icon: <FaInstagram />,
  },
  {
    name: "Facebook",
    label: "Find me on",
    value: "Janmejaya Das",
    href: "https://www.facebook.com/share/1EC3QpEnCS/",
    icon: <FaFacebookF />,
  },

    {
    name: "Location",
    label: "Based in",
    value: "Your BHADRAK, ODISHA",
    href: "https://www.google.com/maps/search/?api=1&query=ERAM+BHADRAK+ODISHA",
    icon: <FaMapMarkerAlt />,
    wide: true,
  },
];

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSending(true);
    setStatus("");

    const data = new FormData();

    data.append("access_key", "ae455384-790f-42ce-961a-426114382af7");
    data.append("subject", "New Portfolio Contact Message");
    data.append("from_name", "Janmejaya Portfolio");
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("message", formData.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });

      const result = await response.json();

      if (result.success) {
        setStatus("Message sent successfully! Thank you for contacting me.");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        setStatus("Message could not be sent. Please try again.");
      }
    } catch (error) {
      setStatus("Network error. Please check your internet connection.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="contact section" id="contact">
      <p className="eyebrow">LET'S CONNECT</p>

      <div className="availability-badge">
        <span className="availability-dot"></span>
        Open to internships &amp; freelance work
      </div>

      <h2 className="section-title">
        Let's Work <span>Together</span>
      </h2>

      <p className="contact-description">
        Have a project or opportunity in mind? My inbox is Always Open, Feel Free to Connect.
      </p>

      <div className="contact-socials">
        {contactLinks.map((link) => (
          <a
            className="contact-social-card"
            href={link.href}
            key={link.name}
            target={link.name === "Phone" ? undefined : "_blank"}
            rel={link.name === "Phone" ? undefined : "noreferrer"}
          >
            <span className={`social-icon social-${link.name.toLowerCase()}`}>
              {link.icon}
            </span>

            <span className="social-info">
              <span className="social-label">{link.label}</span>
              <span className="social-value">{link.value}</span>
            </span>

            <span className="social-arrow">↗</span>
          </a>
        ))}
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
        />

        <button type="submit" className="btn btn-primary" disabled={isSending}>
          {isSending ? "Sending..." : "Send Message"}
        </button>

        {status && (
          <p className="contact-status" role="status">
            {status}
          </p>
        )}
      </form>
    </section>
  );
}

export default Contact;