import { motion } from "framer-motion";
import { fadeUp, stagger } from "../animation";
import "../styles/Project.css";

const projects = [
  {
    title: "Library Management System",
    desc: "A web-based Library Management System that allows admins to manage books and students to request book borrowing, with approval control and one-book-at-a-time restriction.",
    tech: ["HTML", "CSS", "Javascript", "MySql", "php", "XAMPP"]
  },
  {
    title: "Early Detection of Alzheimers Disease",
    desc: "Deep learning–based Alzheimer’s disease classification using OCTA image feature extraction.",
    tech: ["Python", "Deep Learning", "Image Processing", "opencv"]
  },
  {
    title: "Fake News Detection",
    desc: "NLP-based Fake News Detection using Machine Learning and Explainable AI",
    tech: ["Machine Learning", "NPL", "Text Classification"]
  },
  {
    title: "Stock Crypto Forecast",
    desc: "Stock & crypto market visualization and ML-based price forecasting app built with Streamlit, yfinance, scikit-learn, and Plotly",
    tech: ["Machine Learning", "Data Science", "yfinance", "plotly"]
  },{
    title: "customer-churn-ai-dashboard",
    desc: "An end-to-end Machine Learning project that predicts customer churn using XGBoost with real-time and bulk prediction capabilities.",
    tech: ["Python", "Python", "XGBoost", "LightGBM", "SHAP", "Streamlit", "Plotly"]
  }

];

function Projects() {
  return (
    <div className="glass-card">
      <motion.h2
        className="section-title"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>

      <motion.div
        className="projects-grid"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {projects.map((p, i) => (
          <motion.div
            key={i}
            className="project-card"
            variants={fadeUp}
          >
            <h3>{p.title}</h3>
            <p>{p.desc}</p>

            <div className="tags">
              {p.tech.map((t, j) => (
                <span key={j}>{t}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Projects;
