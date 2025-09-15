// src/pages/Home.tsx
import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import CV from "../components/CV";
import { useState } from "react";
const Home: React.FC = () => {
   const [cvOpen, setCvOpen] = useState(false);
  return (
    <>
      <section id="home">
        <Hero />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>
      <section id="CV">
       <CV isOpen={cvOpen} onClose={() => setCvOpen(false)} />
      </section>
    </>
  );
};


export default Home;
