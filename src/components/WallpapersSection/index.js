import React, { useEffect } from "react";
import "./style.scss";

import Sunrise from "../../img/wallpapers/sunrise.png";
import Nightsky from "../../img/wallpapers/nightsky.png";

import { fadeToTop } from "../../scripts/fadeToTop";

function WallpapersSection() {
  useEffect(() => {
    fadeToTop(".wallpapers-section");
  }, []);
  return (
    <div className="wallpapers-section">
      <div className="wallpaper">
        <img src={Sunrise} alt="Sunrise " />
        <img src={Nightsky} alt="Nightsky " />
      </div>
    </div>
  );
}

export default WallpapersSection;
