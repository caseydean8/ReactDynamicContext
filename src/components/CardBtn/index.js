import React from "react";
import "./style.css";

function CardBtn(props) {
  console.log('props in CardBtn', props);
  return (
    <button onClick={props.onClick} className={`card-btn ${props["data-value"]}`} {...props} />
  );
}

export default CardBtn;
