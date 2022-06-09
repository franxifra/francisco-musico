import React from "react";
import { FaPatreon } from "react-icons/fa";

export const BotonPatreon = () => {
  return (
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
  );
};
