import React from "react";
import ContextAPI from "../../utils/ContextAPI";

function CardBody() {
  return (
    <ContextAPI.Consumer>
      {(info) => (
        <div>
          <h4>Favorite language: {info.user.language}</h4>
          <h4>Email: {info.user.email}</h4>
        </div>
      )}
    </ContextAPI.Consumer>
  );
}

export default CardBody;
