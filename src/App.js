import React from "react";
import {  useState } from "react";
import "./App.css";

//boton
import { BotonTips } from "./component/Boton/Boton";

import ReproductorMusica from "./component/ReproductorMusica/ReproductorMusica";
import RedesSociales from "./component/RedesSociales/RedesSociales";
import Logo from "./component/Logo/Logo";
import BuskingIn from "./component/BuskingIn/BuskingIn";
import ProximosShows from "./component/ProximosShows/ProximosShows";
// import JumpingDots from "./component/JumpingDots/JumpingDots";
import { BotonPatreon } from "./component/Boton/botonPatreon";

function App() {
  // donde estoy en este momento:

  //estados iniciales
  const [busking, setBusking] = useState("Australia");
  const [bandera, setBandera] = useState("aus");
  const [soundcloudLink, setSoundcloudLink] = useState(
    "https://soundcloud.com/franxifra/sets/busking-2023"
  );
  const [tipMeLink, setTipMeLink] = useState("https://busk.co/22427/qr");
  const [dataShows, setDatashows] = useState([]);

  // //sacar datos de Google Sheets
  // async function getDataGoogleSheets() {
  //   try {
  //     let response = await fetch(
  //       "https://spreadsheets.google.com/feeds/cells/1OpuHYSo71Hd7FhGC7AjIG9wzUvKy15_MxM6szDRKSUU/1/public/full?alt=json"
  //     );
  //     let responseJson = await response.json();

  //     let buskingIn = responseJson.feed.entry[5].content.$t;
  //     let bandera = responseJson.feed.entry[6].content.$t;
  //     let soundcloudLink = responseJson.feed.entry[7].content.$t;
  //     let tipMeLink = responseJson.feed.entry[9].content.$t;
  //     setBusking(buskingIn);
  //     setBandera(bandera);
  //     setTipMeLink(tipMeLink);
  //     setSoundcloudLink(encodeURIComponent(soundcloudLink));

  //     return;
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }
  // // sacar datos google sheets shows
  // async function getDataShows() {
  //   try {
  //     let response = await fetch(
  //       "https://spreadsheets.google.com/feeds/cells/1OpuHYSo71Hd7FhGC7AjIG9wzUvKy15_MxM6szDRKSUU/2/public/full?alt=json"
  //     );
  //     let responseJson = await response.json();

  //     return setDatashows(responseJson);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  // useEffect(() => {
  //   //cambiar titulo segun donde estoy en el momento
  //   getDataGoogleSheets();
  //   getDataShows();
  //   document.title = `Francisco Xifra - Musician currently busking in ${busking} ${bandera}`;
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  // //url de reproductor
  // console.log(dataShows);

  return (
    <div className="app">
      <Logo />
      <BuskingIn busking={busking} bandera={bandera} />

      <iframe
        className="video"
        width="100%"
        src="https://www.youtube.com/embed/videoseries?list=PL28qvn4LcCEs_pHWqXy4luX9l6oyyvC58"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <RedesSociales />


  
      

      <ProximosShows data={dataShows} lugar={busking} />
      <BotonTips link={tipMeLink} />
      <ReproductorMusica link={soundcloudLink} /> 
    </div>
  );
}

export default App;
