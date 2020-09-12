import React from "react";
import ContextAPI from "../../utils/ContextAPI";


function CardTitleText() {
  return (
    <ContextAPI.Consumer>
      {context => (
         <h2>{context.capFirst(context.user.firstname, context.user.lastname)}</h2>
      )}
    </ContextAPI.Consumer>
  );
}

export default CardTitleText;
