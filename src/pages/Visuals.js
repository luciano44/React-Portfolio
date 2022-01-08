import React from "react";
import SectionHeader from "../components/SectionHeader";
import VisualsIcon from "../img/icons/art-icon.svg";
import VisualsSection from "../components/VisualsSection";

function Visuals() {
  return (
    <>
      <SectionHeader icon={VisualsIcon}>Visuals</SectionHeader>
      <VisualsSection />
    </>
  );
}

export default Visuals;
