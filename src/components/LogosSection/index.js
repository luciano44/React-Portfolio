import React, { useEffect } from "react";
import "./style.scss";

import logo1 from "../../img/logos/logo1.svg";
import logo2 from "../../img/logos/logo2.svg";
import logo3 from "../../img/logos/logo3.svg";
import logo4 from "../../img/logos/logo4.svg";
import logo5 from "../../img/logos/logo5.svg";
import logo6 from "../../img/logos/logo6.svg";
import logo7 from "../../img/logos/logo7.svg";
import logo8 from "../../img/logos/logo8.svg";
import logo9 from "../../img/logos/logo9.svg";
import logo10 from "../../img/logos/logo10.svg";

import { fadeToTop } from "../../scripts/fadeToTop";

function LogosSection() {
  useEffect(() => {
    fadeToTop(".logos-section");
  }, []);

  return (
    <div className="logos-section">
      <div className="logo">
        <img src={logo1} alt="" />
      </div>
      <div className="logo">
        <img src={logo2} alt="" />
      </div>
      <div className="logo">
        <img src={logo3} alt="" />
      </div>
      <div className="logo">
        <img src={logo4} alt="" />
      </div>
      <div className="logo">
        <img src={logo5} alt="" />
      </div>
      <div className="logo">
        <img src={logo6} alt="" />
      </div>
      <div className="logo">
        <img src={logo7} alt="" />
      </div>
      <div className="logo">
        <img src={logo8} alt="" />
      </div>
      <div className="logo">
        <img src={logo9} alt="" />
      </div>
      <div className="logo">
        <img src={logo10} alt="" />
      </div>

      {/* FILLERS */}

      <div className="logo filler">
        <img src="" alt="" />
      </div>
      <div className="logo filler">
        <img src="" alt="" />
      </div>
    </div>
  );
}

export default LogosSection;
