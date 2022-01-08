import "./style.scss";
import React from "react";
import gitIcon from "../../img/icons/technologies/git-icon.png";
import htmlIcon from "../../img/icons/technologies/html-icon.png";
import sassIcon from "../../img/icons/technologies/sass-icon.png";
import tsIcon from "../../img/icons/technologies/ts-icon.png";
import reactIcon from "../../img/icons/technologies/react-icon.png";
import nodeIcon from "../../img/icons/technologies/node-icon.png";
import mongoIcon from "../../img/icons/technologies/mongo-icon.png";

function SectionTechnologies() {
  return (
    <div className="section-technologies">
      <p className="text">Experiência com: </p>
      <ul className="technologies">
        <li className="technology">
          <img src={gitIcon} alt="git icon" title="Git" />
        </li>
        <li className="technology">
          <img src={htmlIcon} alt="html icon" title="Html" />
        </li>
        <li className="technology">
          <img src={sassIcon} alt="sass icon" title="Sass" />
        </li>
        <li className="technology">
          <img src={tsIcon} alt="typescript icon" title="Typescript" />
        </li>
        <li className="technology">
          <img src={reactIcon} alt="react icon" title="React" />
        </li>
        <li className="technology">
          <img src={nodeIcon} alt="node icon" title="Node" />
        </li>
        <li className="technology">
          <img src={mongoIcon} alt="mongo icon" title="MongoDB" />
        </li>
        <li className="filler">
          <p></p>
        </li>
      </ul>
    </div>
  );
}

export default SectionTechnologies;
