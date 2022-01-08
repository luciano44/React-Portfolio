import React from "react";
import "./style.scss";

import footerLogo from "../../img/logos/footer-logo.png";

function Footer() {
  return (
    <div className="footer">
      <img src={footerLogo} alt="footer logo" />
    </div>
  );
}

export default Footer;
