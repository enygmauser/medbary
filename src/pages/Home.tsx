import Hero from "../components/Hero";
import SpecialtiesStrip from "../components/SpecialtiesStrip";
import About from "../components/About";
import Departments from "../components/Departments";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <SpecialtiesStrip />
      <About />
      <Departments />
      <Contact />
    </>
  );
}
