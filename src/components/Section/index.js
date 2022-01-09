import "./style.scss";
import MainSectionHeader from "../MainSectionHeader";
import SectionText from "../SectionText";
import SectionTechnologies from "../SectionTechnologies";
import SectionProjects from "../SectionProjects";
import { fadeToTop } from "../../scripts/fadeToTop";

import React, { useEffect } from "react";

function Section() {
  useEffect(() => {
    fadeToTop(".main-section");
  }, []);

  return (
    <>
      <MainSectionHeader />
      <div className="main-section">
        <SectionText />
        <SectionTechnologies />
        <SectionProjects />
      </div>
    </>
  );
}

export default Section;
