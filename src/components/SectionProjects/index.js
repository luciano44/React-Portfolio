import React from "react";
import "./style.scss";
import personIcon from "../../img/icons/projects/person-icon.svg";
import pawIcon from "../../img/icons/projects/paw-icon.png";
import brushtoolIcon from "../../img/icons/projects/brushtool-icon.svg";
import watchIcon from "../../img/icons/projects/watch-icon.svg";

export default function SectionProjects() {
  return (
    <div className="section-projects">
      <p className="text">Projetos</p>
      <a
        href="https://luciano44.github.io/userlist/"
        target="_blank"
        className="project"
      >
        <img src={personIcon} alt="person icon" />
        <p className="project__text">Listagem de usuários</p>
      </a>
      <a
        href="https://luciano44.github.io/PET-photos/"
        target="_blank"
        className="project"
      >
        <img src={pawIcon} alt="paw icon" />
        <p className="project__text">Imagem Aleatória de Animais</p>
      </a>
      <a
        href="https://luciano44.github.io/drawing-app/"
        target="_blank"
        className="project"
      >
        <img src={brushtoolIcon} alt="brushtool icon" />
        <p className="project__text">App de Desenho</p>
      </a>
      <a
        href="https://luciano44.github.io/Analog-Clock/"
        target="_blank"
        className="project"
      >
        <img src={watchIcon} alt="watch icon" />
        <p className="project__text">Relógio Analogico</p>
      </a>
    </div>
  );
}
