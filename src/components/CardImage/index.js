import React from "react";
import ContextAPI from "../../utils/ContextAPI";

function CardImg() {
  return (
    <ContextAPI.Consumer>
      {({user}) => (
        <div>
          <img className="card-img" src={user.image} alt="user thumbnail" />
          {!user.image && (
            <i className="fa fa-spinner fa-spin" aria-hidden="true" />
          )}
        </div>
      )}
    </ContextAPI.Consumer>
  );
}

export default CardImg;
