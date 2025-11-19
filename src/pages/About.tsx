import React from "react";
import AboutHeroSection from "../components/AboutHeroSection";
import WhoWeAreSection from "../components/WhoWeAreSection";
import PhilosophySection from "../components/PhilosophySection";
import DiscretionSection from "../components/DiscretionSection";

import { aboutContent } from "../aboutData";

export default function About() {
  return (
    <>
      <AboutHeroSection />

      <WhoWeAreSection content={aboutContent.whoWeAre} />

      <PhilosophySection content={aboutContent.philosophy} />

      <DiscretionSection content={aboutContent.discretion} />
    </>
  );
}
