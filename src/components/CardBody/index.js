import React from "react";
import ContextAPI from "../../utils/ContextAPI";

function CardBody() {
  return (
    <ContextAPI.Consumer>
      {({user}) => (
        <div>
          <h4>Favorite language: {user.language}</h4>
          <h4>Email: {user.email}</h4>
        </div>
      )}
    </ContextAPI.Consumer>
  );
}

export default CardBody;
