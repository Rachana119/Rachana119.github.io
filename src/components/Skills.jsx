import { motion } from "framer-motion";
import "../styles/Skill.css";

/* ===== JUMBLED BUBBLE SKILLS (REAL LOGOS) ===== */
const bubbleSkills = [
  { name: "Java", icon: "devicon-java-plain", top: "12%", left: "10%" },
  { name: "Python", icon: "devicon-python-plain", top: "35%", left: "22%" },
  { name: "Pandas", icon: "devicon-pandas-plain", top: "10%", left: "75%" },
  { name: "NumPy", icon: "devicon-numpy-plain", top: "50%", left: "88%" },
  { name: "React", icon: "devicon-react-original", top: "18%", left: "45%" },
  { name: "JavaScript", icon: "devicon-javascript-plain", top: "48%", left: "40%" },
  { name: "HTML", icon: "devicon-html5-plain", top: "65%", left: "55%" },
  { name: "CSS", icon: "devicon-css3-plain", top: "30%", left: "70%" },
  { name: "MySQL", icon: "devicon-mysql-plain", top: "55%", left: "75%" },
  { name: "MongoDB", icon: "devicon-mongodb-plain", top: "20%", left: "25%" },
  { name: "Git", icon: "devicon-git-plain", top: "60%", left: "20%" },
  { name: "TensorFlow", icon: "devicon-tensorflow-original", top: "75%", left: "45%" },
  { name: "Scikit", icon: "devicon-scikitlearn-plain", top: "25%", left: "85%" },
  { name: "PyTorch", icon: "devicon-pytorch-original", top: "70%", left: "10%" },
  { name: "OpenCV", icon: "devicon-opencv-plain", top: "40%", left: "60%" },
];

/* ===== CARD SKILLS (BOTTOM) ===== */
const skillGroups = [
  {
    title: "Programming Languages",
    items: ["Python", "Java","SQL", "C", "C++", "JavaScript"],
  },
  {
    title: "Data Science & Analytics",
    items: ["Data Analysis", "Data Cleaning", "Exploratory Data Analysis (EDA)", "Statistical Modeling", "Data Wrangling"],
  },
  {
    title: "Machine Learning & AI",
    items: ["Supervised Learning", "Unsupervised Learning", "Regression, Classification", "Clustering, Neural Networks", "Natural Language Processing (NLP)", "Computer Vision","Deep Learning (ANN, CNN, RNN, LSTM)"],
  },
  {
    title: "Databases & Tools",
    items: ["MySQL", "MongoDB", "Git & Github"],
  },
  {
    title: "Frameworks & Libraries",
    items: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn", "TensorFlow", "Keras", "OpenCV", "React.js"],
  },
  {
    title: "Soft Skills",
    items: ["Communication", "Teamwork", "Problem Solving"],
  },
];

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <h1 className="skills-title">My Skills</h1>
      <p className="skills-subtitle">
        Technical expertise blended with creativity — explore my core competencies.
      </p>

      {/* ===== JUMBLED FLOATING AREA ===== */}
      <div className="skills-jumble-area">
        {bubbleSkills.map((skill, index) => (
          <motion.div
            key={index}
            className="skill-bubble"
            style={{ top: skill.top, left: skill.left }}
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.25 }}
          >
            <i className={skill.icon}></i>
            <span className="bubble-text">{skill.name}</span>
          </motion.div>
        ))}
      </div>

      {/* ===== SKILL CARDS ===== */}
      <div className="skills-card-grid">
        {skillGroups.map((group, index) => (
          <motion.div
            key={index}
            className="skills-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <h2>{group.title}</h2>
            <ul>
              {group.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
