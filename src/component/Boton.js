import React from "react";
import iconoBusk from "./busk.svg";

export const BotonTips = () => {
  return (
    <a
      href="https://busk.co/22427/qr"
      alt="Secure payments through busk.co tips"
      className="linkTip"
      target="_BLANK"
      rel="noreferrer"
    >
      <div className="tipMe">
        <div className="tipMeTexto">Tip me! </div>
        <div className="buskIcon">
          <img src={iconoBusk} alt="busk.co icon" width="35" />
        </div>
      </div>
    </a>
  );
};
