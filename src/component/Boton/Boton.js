import React from "react";
import iconoBusk from "./busk.svg";
import { FaPatreon } from "react-icons/fa";
import "./Boton.css";


export const BotonTips = ({link}) => {
  return (
    <div className="buttonContainer">
    <a
      href={link}
      alt="Secure payments through busk.co tips"
      className="linkTip"
      target="_BLANK"
      rel="noreferrer"
    >
      <div className="tipMe">
        <div className="tipMeTexto">Give a donation! </div>
        <div className="buskIcon">
          <img src={iconoBusk} alt="busk.co icon" width="35" />
        </div>
      </div>
    </a>
    <a
      href="https://www.patreon.com/franxifra"
      alt="Secure payments through busk.co tips"
      className="linkTip"
      target="_BLANK"
      rel="noreferrer"
    >
      <div className="tipMe patreon">
        <div className="tipMeTexto">Become a Patron </div>
        <div className="buskIcon">
        <FaPatreon className="iconoPatreon" />
        </div>
      </div>
    </a>
    </div>
  );
};
