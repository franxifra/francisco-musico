import React from "react";
import { useEffect, useState } from "react";
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
  

  // donde estoy en este momento:

  //estados iniciales
  const [busking, setBusking] = useState("...");
  const [bandera, setBandera] = useState("");
  const [live, setLive] = useState(false);
  const [soundcloudLink, setSoundcloudLink] = useState(false);
  const [tipMeLink, setTipMeLink] = useState("");
  console.log(live);



  const googleMapsLink = `https://www.google.com/maps/search/${busking} ${bandera}/`;

  //convertir codigo pais a Emoji Bandera
  function getFlagEmoji(countryCode) {
    const codePoints = countryCode
      .toUpperCase()
      .split('')
      .map(char =>  127397 + char.charCodeAt());
    return String.fromCodePoint(...codePoints);
  }

  //sacar datos de Google Sheets
  async function getDataGoogleSheets() {
    try {
      let response = await fetch(
        "https://spreadsheets.google.com/feeds/cells/1OpuHYSo71Hd7FhGC7AjIG9wzUvKy15_MxM6szDRKSUU/1/public/full?alt=json"
      );
      let responseJson = await response.json();

      
      let buskingIn = responseJson.feed.entry[5].content.$t;
      let bandera = responseJson.feed.entry[6].content.$t;
      let soundcloudLink = responseJson.feed.entry[7].content.$t;
      let liveIn = responseJson.feed.entry[8].content.$t;
      let tipMeLink = responseJson.feed.entry[9].content.$t;
      setBusking(buskingIn);
      setBandera(bandera);
      setLive(liveIn);
      setTipMeLink(tipMeLink);
      setSoundcloudLink(encodeURIComponent(soundcloudLink));

      return;
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    //cambiar titulo segun donde estoy en el momento
    getDataGoogleSheets();
    document.title = `Francisco Xifra - Musician currently busking in ${busking} ${bandera}`;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //url de reproductor
  let urlReproductor =
    `https://w.soundcloud.com/player` +
    //url de la playlist
    `?url=${soundcloudLink}` +
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
console.log(urlReproductor)
  return (
    <div className="app">
      <div className="appHeader">
        <img
          src={musicImage}
          alt="decorative music icon"
          className="musicIcon"
        />
        <h1 className="logo">
          <span className="logoFrancisco">Francisco</span> <br />
          <span className="logoXifra">Xifra</span>
        </h1>
        <div className="locationContainer">
          <p className="currentlyParagraph">Currently busking in:</p>
          <h2 className="buskingCity">
            <a
              href={googleMapsLink}
              target="_BLANK"
              className="mapsLink"
              rel="noreferrer"
            >
              {busking} {getFlagEmoji(bandera)}
            </a>
          </h2>
        </div>
        <BotonTips link={tipMeLink}/>
        <div className="reproductor">
          <iframe
            title="Soundcloud"
            width="100%"
            height="100%"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src={soundcloudLink ? urlReproductor : ""}
          />
        </div>

        <p className="currentlyParagraph">Find me on:</p>
        <div className="iconosContainer">
          <a
            href="https://instagram.com/franxifra"
            target="_BLANK"
            rel="noopener noreferrer"
          >
            <FaInstagram className="icono" />
          </a>
          <a href="https://open.spotify.com/artist/6MgxRbMya8hZ7PqXT4wS2o?si=oEJW2uyVTeOmDudg5y6Rcw&dl_branch=1" target="_BLANK" rel="noreferrer">
            <FaSpotify className="icono" />
          </a>{" "}
          <a
            href="https://www.youtube.com/c/FranciscoXifra/featured"
            target="_BLANK"
            rel="noopener noreferrer"
          >
            <FaYoutube className="icono" />
          </a>
          <a
            href="https://soundcloud.com/franxifra/"
            target="_BLANK"
            rel="noopener noreferrer"
          >
            <FaSoundcloud className="icono" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
