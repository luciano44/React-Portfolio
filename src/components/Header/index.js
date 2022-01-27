import React, { useEffect } from "react";
import "./style.scss";
import logo from "../../img/logos/logo.svg";
import homeIcon from "../../img/icons/home-icon.svg";
import wallpaperIcon from "../../img/icons/wallpaper-icon.svg";
import logoIcon from "../../img/icons/logo-icon.svg";
import artIcon from "../../img/icons/art-icon.svg";

import { Link } from "react-router-dom";

function Header() {
  useEffect(() => {
    const txt = document.querySelector(
      ".main-header .main-header__logoText .text"
    );
    const img = document.querySelector(
      ".main-header .main-header__logoText img"
    );

    const logoText = document.querySelector(
      ".main-header .main-header__logoText"
    );
    txt.style.opacity = "1";
    txt.style.top = "0px";
    img.style.opacity = "1";
    img.style.top = "-0px";

    setTimeout(() => {
      logoText.style.transform = "scale(1.1)";
    }, 1150);
    setTimeout(() => {
      logoText.style.transform = "scale(1)";
    }, 1250);
  }, []);

  return (
    <header className="main-header">
      <Link to="/" className="main-header__logoText">
        <img src={logo} />
        <h2 className="text">Luciano Ribeiro</h2>
      </Link>
      <div className="main-header__menu">
        <Link className="btn" to="/">
          <img src={homeIcon} alt="" />
        </Link>
        <Link className="btn" to="/wallpapers">
          <img src={wallpaperIcon} alt="" />
        </Link>
        <Link className="btn" to="/logos">
          <img src={logoIcon} alt="" />
        </Link>
        <Link className="btn" to="/visuals">
          <img src={artIcon} alt="" />
        </Link>
      </div>
    </header>
  );
}

export default Header;
