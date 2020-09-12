import React from "react";
import CardTitle from "../CardTitle";
import "./style.css";
import ContextAPI from "../../utils/ContextAPI";

console.log(ContextAPI);

function CardHeading() {
  return (
    <ContextAPI.Consumer>
      {(title) => (
        <div>
          <CardTitle title={title.capFirst(title.user.firstname, title.user.lastname)} />
          {/* <CardTitle title={props.title} /> */}
        </div>
      )}
    </ContextAPI.Consumer>
  );
}

export default CardHeading;
