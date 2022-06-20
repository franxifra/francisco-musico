import React from "react";
//iconos
import {
  FaSpotify,
  FaInstagram,
  FaYoutube,
  FaApple,
  FaWhatsapp
} from "react-icons/fa";

const RedesSociales = () => {
  return (
    <div>
      <p className="currentlyParagraph">Find me on:</p>
      <div className="iconosContainer">
        <a
          href="https://instagram.com/franxifra"
          target="_BLANK"
          rel="noopener noreferrer"
        >
          <FaInstagram className="icono" />
        </a>
        <a
          href="https://open.spotify.com/artist/6MgxRbMya8hZ7PqXT4wS2o?si=oEJW2uyVTeOmDudg5y6Rcw&dl_branch=1"
          target="_BLANK"
          rel="noreferrer"
        >
          <FaSpotify className="icono" />
        </a>
        <a
          href="https://music.apple.com/ar/artist/francisco-xifra/1573032038"
          target="_BLANK"
          rel="noopener noreferrer"
        >
          <FaApple className="icono" />
        </a>

        <a
          href="https://www.youtube.com/c/FranciscoXifra/featured"
          target="_BLANK"
          rel="noopener noreferrer"
        >
          <FaYoutube className="icono" />
        </a>
        <a
          href="https://wa.me/+5491157520600"
          target="_BLANK"
          rel="noopener noreferrer"
        >
          <FaWhatsapp className="icono" />
        </a>
        
       
        
      </div>
    </div>
  );
};

export default RedesSociales;
