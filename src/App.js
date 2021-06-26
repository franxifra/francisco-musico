import React from "react"
import { useEffect, useState } from "react"
import "./App.css";

//boton
import { BotonTips } from "./component/Boton/Boton"

import ReproductorMusica from "./component/ReproductorMusica/ReproductorMusica"
import RedesSociales from "./component/RedesSociales/RedesSociales"
import Logo from "./component/Logo/Logo"
import BuskingIn from './component/BuskingIn/BuskingIn'

function App() {
  // donde estoy en este momento:

  //estados iniciales
  const [busking, setBusking] = useState("");
  const [bandera, setBandera] = useState("");
  const [live, setLive] = useState(false);
  const [soundcloudLink, setSoundcloudLink] = useState(false);
  const [tipMeLink, setTipMeLink] = useState("");
  console.log(live);


 

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

  return (
    <div className="app">
      <Logo/>
      <BuskingIn busking={busking} bandera={bandera}/>
      <BotonTips link={tipMeLink} />
      <ReproductorMusica link={soundcloudLink} />
      <RedesSociales />
    </div>
  );
}

export default App;
