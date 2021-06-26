import React from "react";
import "./JumpingDots.css";

const JumpingDots = ({canciones}) => {
  return (
    <div>
    {canciones && <p>Loading Songs</p> }
      <span className="dots-cont">
        {" "}
        <span className="dot dot-1"></span> <span className="dot dot-2"></span>{" "}
        <span className="dot dot-3"></span>{" "}
      </span>
    </div>
  );
};

export default JumpingDots;
