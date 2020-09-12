import React from "react";
import CardBody from "../CardBody";
import CardBtn from "../CardBtn";
import CardImg from "../CardImage";
import CardHeading from "../CardHeading";
import "./style.css";

function Card(props) {
  return (
    <div>
      <CardHeading />
      <CardImg />
      <CardBody />
      <CardBtn onClick={props.handleBtnClick} data-value="back" />
      <CardBtn onClick={props.handleBtnClick} data-value="next" />
    </div>
  );
}

export default Card;
