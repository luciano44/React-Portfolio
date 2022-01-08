import "./style.scss";

import React, { useEffect } from "react";

function MainSectionHeader() {
  // zoom animation
  useEffect(() => {
    const txt = document.querySelector(".main-section-header .text");
    txt.style.transform = "scale(1)";
    return () => {
      txt.style.transform = "scale(0.7)";
    };
  }, []);

  return (
    <div className="main-section-header">
      <h2 className="text">
        <span className="code">{"< "}</span>
        <span className="main">Desenvolvedor Full Stack </span>
        <span className="bold">{"MERN"}</span>
        <span className="code">{" />"}</span>
      </h2>
    </div>
  );
}

export default MainSectionHeader;
