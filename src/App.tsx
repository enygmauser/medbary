import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Departments from "./components/Departments";
import InfoStrip from "./components/InfoStrip";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <InfoStrip /> */}
      <About />
      <Departments />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
