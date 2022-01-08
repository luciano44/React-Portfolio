import React from "react";
import SectionHeader from "../components/SectionHeader";
import LogosSection from "../components/LogosSection";
import LogoIcon from "../img/icons/logo-icon.svg";

function Logos() {
  return (
    <>
      <SectionHeader icon={LogoIcon}>Logos</SectionHeader>
      <LogosSection />
    </>
  );
}

export default Logos;
