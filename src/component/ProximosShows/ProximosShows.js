import React from "react";
import "./ProximosShows.css";

const ProximosShows = ({ data }) => {
  const dataShow = data.feed ? data.feed.entry.slice(3) : [];
  const hayShows = data.feed && data.feed.entry.length > 3 ? true : false ;
  return hayShows ? (
    <>
      <h3>Next shows</h3>
      <div className="show-container">
        {dataShow.map((show, index) => (
          <div className="show" key={index}>{show.content.$t}</div>
        ))}
      </div>
    </>
  ) : (
    <div></div>
  );
};

export default ProximosShows;
