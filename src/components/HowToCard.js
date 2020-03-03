import React from "react";
import { connect } from "react-redux";

const HowToCard = (props) => {
  const { id, names, description } = props.header;
  return (
    <div className="HowToCard">
      <h2>{id}</h2>
      <div className="names">
        Name: <em>{names}</em>
      </div>
      <div className="description">
        Description: <strong>{description}</strong>
      </div>
      <h3>Actors</h3>

      {console.log(name)}
    </div>
  );
};
