import { motion } from "framer-motion";
import "../styles/Home.css";
import myPhoto from "../assets/myphoto.jpg";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Home() {
  return (
    <section className="home-hero" id="home">
      <div className="home-container">

        {/* LEFT – PHOTO */}
        <motion.div
          className="home-photo-wrap"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <img src={myPhoto} alt="Rachana H V" />
        </motion.div>

        {/* RIGHT – CONTENT */}
        <motion.div
          className="home-content"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
        >
          <h1>
            Hi, I’m <span>Rachana H V</span>
          </h1>

          <h2>Artificial Intelligence • Data Science Enthusiast</h2>

          <p className="intro">
            Computer Science Engineering graduate passionate about building
            intelligent systems, data-driven solutions, and modern web
            applications that create real-world impact.
          </p>

          {/* CONTACT INFO */}
          <div className="home-contact">
            <p><MdEmail /> rachanahv19@gmail.com</p>
            <p><MdPhone /> +91 84310 05565</p>
            <p><MdLocationOn /> Karnataka, India</p>
          </div>

          {/* ACTION BUTTONS */}
          <div className="home-actions">
            <a href="#contact" className="btn primary">Contact Me</a>
            <a href="/rachanahv resume(2).pdf" download className="btn secondary">
              Download Resume
            </a>
          </div>

          {/* SOCIAL ICONS */}
          <div className="home-socials">
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
             <a href="mailto:rachanahv19@gmail.com" target="_blank" rel="noreferrer">
            <FaEnvelope />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Home;
