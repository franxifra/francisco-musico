import React from "react"
import JumpingDots from "../JumpingDots/JumpingDots";

const BuskingIn = ({ busking, bandera }) => {
  //convertir codigo pais a Emoji Bandera
  function getFlagEmoji(countryCode) {
    const codePoints = countryCode
      .toUpperCase()
      .split("")
      .map((char) => 127397 + char.charCodeAt());
    return String.fromCodePoint(...codePoints);
  }

  //links de google maps
  const googleMapsLink = `https://www.google.com/maps/search/${busking} ${bandera}/`;

  return (
    <div className="locationContainer">
      <p className="currentlyParagraph">Currently busking in:</p>
      {busking ? (
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
      ) : (
        <JumpingDots />
      )}
    </div>
  );
};

export default BuskingIn;
