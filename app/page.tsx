"use client";

import About from "./components/About";
import Contacts from "./components/Contacts";
import Hero from "./components/Hero";
import Myexperiance from "./components/Myexperiance";
import Navbar from "./components/Navbar";
import ParticleBackground from "./components/ParticleBackground";
import Preloader from "./components/placeloader";
import Projects from "./components/Projects";
import ScrollProgress from "./components/ScrollProgress";
import Services from "./components/Services";
import Testmonial from "./components/Testmonial";

export default function HomePage() {
  return (
    <main className="bg-black text-white">
      <ScrollProgress />
      <ParticleBackground />
      <Preloader />
      <Navbar />
      <Hero />
      <About />
      <Myexperiance />
      <Projects />
      <Services />
      <Contacts />
    </main>
  );
}
