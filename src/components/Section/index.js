import "./style.scss";
import MainSectionHeader from "../MainSectionHeader";
import SectionText from "../SectionText";
import SectionTechnologies from "../SectionTechnologies";
import SectionProjects from "../SectionProjects";

import React from "react";

function Section() {
  return (
    <>
      <MainSectionHeader />
      <SectionText />
      <SectionTechnologies />
      <SectionProjects />
    </>
  );
}

export default Section;
