import React from "react";
import CardBody from "../CardBody";
import CardBtn from "../CardBtn";
import CardImg from "../CardImage";
import CardHeading from "../CardHeading";
import "./style.css";

function Card() {
  return (
    <div>
      <CardHeading />
      <CardImg />
      <CardBody />
      <CardBtn data-value="back" />
      <CardBtn data-value="next" />
    </div>
  );
}

export default Card;
