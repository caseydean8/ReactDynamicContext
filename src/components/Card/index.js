import React from "react";
import CardBody from "../CardBody";
import CardBtn from "../CardBtn";
import CardImg from "../CardImage";
import CardHeading from "../CardHeading";
import "./style.css";
import ContextAPI from "../../utils/ContextAPI";
 

function Card(props) {
  return (
    <div>
      <CardHeading />
      <CardImg />
      <CardBody />
      <ContextAPI>
        {context => (
           <CardBtn
           style={{ opacity: context.user.image ? 1 : 0 }}
           onClick={props.handleBtnClick}
           data-value="back"
         />
        )}
      </ContextAPI>
      <CardBtn
        style={{ opacity: props.image ? 1 : 0 }}
        onClick={props.handleBtnClick}
        data-value="next"
      />
    </div>
  );
}

export default Card;
