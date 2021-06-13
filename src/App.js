import { useEffect } from "react";
import logo from "./assets/img/logo.png";
import musicImage from "./assets/img/music.png";
import "./App.css";

//iconos
import {
  FaSpotify,
  FaInstagram,
  FaYoutube,
  FaSoundcloud,
} from "react-icons/fa";

function App() {
  //url de reproductor
  let urlReproductor =
    `https://w.soundcloud.com/player` +
    //url de la playlist
    `?url=https://soundcloud.com/franxifra/sets/busking-2023` +
    //color
    `&color=C98C41` +
    //autoplay
    `&auto_play=false` +
    //esconder relacionados
    `&hide_related=true` +
    //esconder comentarios
    `&show_comments=false` +
    //mostrar usuario
    `&show_user=false` +
    //mostrar reposts
    `&show_reposts=false` +
    //esconder overlay mobile
    `&show_teaser=false` +
    //no mostrar imagen
    `&visual=false`;

  // donde estoy en este momento:
  const busking = "Riva del Garda 🇮🇹";

  useEffect(() => {
    //cambiar titulo segun donde estoy en el momento
    document.title = `Francisco Xifra - Musician currently busking in ${busking}`;
  }, []);

  return (
    <div className="app">
      <div className="appHeader">
        <img
          src={musicImage}
          alt="decorative music icon"
          className="musicIcon"
        />
        <img src={logo} alt="Logo" />
        <div className="locationContainer">
          <p className="currentlyParagraph">Currently busking in:</p>
          <h2 className="buskingCity">{busking}</h2>
        </div>
        <div className="reproductor">
          <iframe
            title="Soundcloud"
            width="100%"
            height="100%"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            src={urlReproductor}
          />
        </div>
        <div className="iconosContainer">
          <a href="https://instagram.com/franxifra">
            <FaInstagram className="icono" />
          </a>
          <a href="#">
            <FaSpotify className="icono" />
          </a>{" "}
          <a href="https://www.youtube.com/user/franxifra/videos">
            <FaYoutube className="icono" />
          </a>
          <a href="https://soundcloud.com/franxifra/">
            <FaSoundcloud className="icono" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
