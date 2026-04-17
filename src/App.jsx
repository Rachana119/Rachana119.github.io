import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Project";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import "devicon/devicon.min.css";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <section id="skills"><Skills /></section>
      <section id="projects"><Projects /></section>
      <section id="certifications"><Certifications /></section>
      <section id="contact"><Contact /></section>
    </>
  );
}

export default App;
