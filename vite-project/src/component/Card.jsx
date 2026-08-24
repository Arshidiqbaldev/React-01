import "./Card.css";

import React from "react";

function Card(props) {
  return (
    <div className="card-cont" style={props.style}>
      <h1 className="h-1">{props.name}</h1>
      <img src={props.image} alt={props.name} className="size-1" />
      <p className="p-1">{props.desc}</p>
      <a href={props.link} target="_blank" className="btn-1">
        Contact
      </a>
    </div>
  );
}

export default Card;
