import React, { useEffect } from "react";
import "./style.scss";

function SectionHeader({ children, icon }) {
  // animation
  useEffect(() => {
    const txt = document.querySelector(".section-header .text");
    txt.style.marginLeft = "20px";
    return () => {
      txt.style.marginLeft = "0px";
    };
  }, []);

  return (
    <div className="section-header">
      <img src={icon} alt="" />
      <h2 className="text">{children}</h2>
    </div>
  );
}

export default SectionHeader;
