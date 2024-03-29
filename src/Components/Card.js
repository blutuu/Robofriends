import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="robocard tc pa3 ma2 br3 shadow-5 bg-light-green grow dib pointer">
      <img
        src={"https://robohash.org/" + props.id + "?size=200x200"}
        alt={`robot ${props.id}`}
        width="200"
        height="200"
      />
      <div>
        <h2 className="f5">{props.name}</h2>
        <span>{props.email}</span>
      </div>
    </div>
  );
};

export default Card;
