import React from "react"
import JumpingDots from "../JumpingDots/JumpingDots";

const ReproductorMusica = ({link}) => {
  const urlReproductor =
    `https://w.soundcloud.com/player` +
    //url de la playlist
    `?url=${link}` +
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

  return (
    <div className="reproductor">
      {link ? (
        <iframe
          title="Soundcloud"
          width="100%"
          height="100%"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src={urlReproductor}
        />
      ) : (
        <JumpingDots canciones />
      )}
    </div>
  );
};

export default ReproductorMusica;
