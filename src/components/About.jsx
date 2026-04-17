
import { motion } from "framer-motion";
import "../styles/About.css";

const About = () => {
  return (
    <section className="about-section" id="about">
      
      <motion.h1
        className="aspiration"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Aspiring Data Science & AI
      </motion.h1>

      <motion.p
        className="description"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Passionate about leading technology projects and integrating AI solutions
        to create impactful and innovative digital experiences.
      </motion.p>

      <div className="info-boxes">
        <motion.div
          className="info-box"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Education 🎓</h2>
          <p><strong>Bachelor of Engineering</strong></p>
          <p>Computer Science & Engineering</p>
          <p>Malnad College of Engineering</p>
          <p>CGPA: 8.1/10</p>
          <p>2021 - 2025</p>
        </motion.div>

        <motion.div
          className="info-box"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Currently Focus ✨</h2>
          <ul>
            <li>Data Science & ML</li>
            <li>Deep Learning</li>
            <li>Machine Learning</li>
            <li>Python</li>
            <li>AI Systems</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
