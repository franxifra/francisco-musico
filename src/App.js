import { useEffect } from "react";
import musicImage from "./assets/img/musica.svg";
import "./App.css";

//boton
import { BotonTips } from "./component/Boton";
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
  const busking = "Riva del Garda";
  const bandera = "🇮🇹";
  const googleMapsLink = `https://www.google.com/maps/search/${busking}/`

  useEffect(() => {
    //cambiar titulo segun donde estoy en el momento
    document.title = `Francisco Xifra - Musician currently busking in ${busking} ${bandera}`;
  }, []);

  return (
    <div className="app">
      <div className="appHeader">
        <img
          src={musicImage}
          alt="decorative music icon"
          className="musicIcon"
        />
        <h1 className="logo">
          <span className="logoFrancisco">Francisco</span> <br/>
          <span className="logoXifra">Xifra</span>
        </h1>
        <div className="locationContainer">
          <p className="currentlyParagraph">Currently busking in:</p>
          <h2 className="buskingCity"><a href={googleMapsLink} target="_BLANK" className="mapsLink" rel="noreferrer">{busking} {bandera}</a></h2>
        </div>
        <BotonTips />
        <div className="reproductor">
          <iframe
            title="Soundcloud"
            width="100%"
            height="100%"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src={urlReproductor}
          />
        </div>
        
         
        <p className="currentlyParagraph">Find me on:</p>
        <div className="iconosContainer">
          <a href="https://instagram.com/franxifra" target="_BLANK" rel="noreferrer">
            <FaInstagram className="icono" />
          </a>
          <a href="#S" target="_BLANK" rel="noreferrer">
            <FaSpotify className="icono" />
          </a>{" "}
          <a href="https://www.youtube.com/user/franxifra/videos" target="_BLANK" rel="noreferrer">
            <FaYoutube className="icono" />
          </a>
          <a href="https://soundcloud.com/franxifra/" target="_BLANK" rel="noreferrer">
            <FaSoundcloud className="icono" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
