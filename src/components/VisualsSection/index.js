import React, { useEffect } from "react";
import "./style.scss";

import Cards from "../../img/visuals/cards.png";
import Discussion from "../../img/visuals/discussion.png";

import { fadeToTop } from "../../scripts/fadeToTop";

function VisualsSection() {
  useEffect(() => {
    fadeToTop(".visuals-section");
  }, []);

  return (
    <div className="visuals-section">
      <div className="visual">
        <img src={Discussion} alt="Discussion " />
      </div>
      <div className="visual">
        <img src={Cards} alt="Cards " />
      </div>
    </div>
  );
}

export default VisualsSection;
