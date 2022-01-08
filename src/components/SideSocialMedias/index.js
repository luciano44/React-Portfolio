import React, { useEffect } from "react";
import "./style.scss";

import gitIcon from "../../img/icons/social-medias/git-icon.png";
import linkedinIcon from "../../img/icons/social-medias/linkedin-icon.png";
import emailIcon from "../../img/icons/social-medias/email-icon.png";

export default function SideSocialmedias() {
  return (
    <>
      <div className="side-social-medias">
        <a
          href="https://github.com/luciano44"
          target="_blank"
          className="social-media"
        >
          <img src={gitIcon} alt="" />
        </a>
        <a
          href="https://www.linkedin.com/in/luciano-ar/"
          target="_blank"
          className="social-media"
        >
          <img src={linkedinIcon} alt="" />
        </a>
        <a
          href="mailto:luciano.ar6dev@gmail.com"
          target="_blank"
          className="social-media"
        >
          <img src={emailIcon} alt="" />
        </a>
      </div>
    </>
  );
}
