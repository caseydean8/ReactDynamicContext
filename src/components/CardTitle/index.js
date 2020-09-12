import React from "react";
import "./style.css";
import CardTitleText from "../CardTitleText";

function CardTitle() {
  // console.log('props in CardTitle', props);
  return (
    <div className="blue text-center">
      <CardTitleText />
    </div>
  );
}

export default CardTitle;
