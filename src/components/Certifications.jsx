import { motion } from "framer-motion";
import "../styles/Certifications.css";

function Certifications() {
  const certifications = [
    {
      title: "IBM Data Science Professional Certificate",
      description:
        "Completed IBM Professional Data Science certification covering data analysis, visualization, machine learning and Python.",
      tags: ["Python", "Machine Learning", "Data Analysis"],
      link: "/certificates/ibm-datascience.pdf"
    },
    {
      title: "Full Stack Web Development",
      description:
        "Completed Full Stack Web Development internship at Plasmid Innovation.",
      tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      link: "https://drive.google.com/file/d/1KypEK6l60u_wL29z_Wi6yLcCu-qznsl6/view?usp=drive_link"
    },
    {
      title: "OOP in Python",
      description:
        "Completed Object Oriented Programming in Python at JV Global Services.",
      tags: ["Python", "OOP"],
      link: "https://drive.google.com/file/d/19d1ouG3HG7fxYzHmJzuMndP648OQXf30/view?usp=drive_link"
    },
    {
      title: "JavaScript Certification",
      description: "Completed JavaScript certification from Infosys SpringBoard.",
      tags: ["JavaScript"],
      link: "https://drive.google.com/file/d/1R0P1hRxjMEW00T0Acf82QW8BqRZO6T4C/view?usp=sharing"
    },
    {
      title: "Innovation and Entrepreneurship",
      description: "Completed innovation and entrepreneurship certification from Inventron.",
      tags: ["Innovation","Problem Solving","Leadership"],
      link: "https://drive.google.com/file/d/1w5GLx9ldFmY_uKIUgx5Kaqzcq_j3n-zk/view?usp=sharing"
    },
    {
      title: "Research Paper Publication",
      description:
        "Published research paper on Early Detection of Alzheimer Disease using Deep Learning.",
      tags: ["Deep Learning", "Research"],
      link: "https://drive.google.com/file/d/1CgL2RI2AQdRt3neQTnJPb4lMpF7bUliU/view?usp=sharing"
    }
  ];

  return (
    <section className="certifications-section" id="certifications">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Certifications & Publications
      </motion.h2>

      <div className="certifications-container">
        {certifications.map((cert, index) => (
          <motion.div
            className="cert-card"
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <h3>{cert.title}</h3>
            <p>{cert.description}</p>

            <div className="cert-tags">
              {cert.tags.map((tag, i) => (
                <span key={i}>{tag}</span>
              ))}
            </div>

            {/* View Certificate Button */}
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="cert-btn"
            >
              View Certificate
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;
