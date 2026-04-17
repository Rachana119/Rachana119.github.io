import "../styles/Contact.css";

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <h2>Contact Me</h2>

        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>

        <div className="contact-social">
          <a href="https://linkedin.com" target="_blank">LinkedIn</a>
          <a href="https://github.com" target="_blank">GitHub</a>
          <a href="mailto:rachanahv19@gmail.com">Email</a>
        </div>
      </div>
    </section>
  );
}

export default Contact;