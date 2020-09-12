import React from "react";
import ContextAPI from "../../utils/ContextAPI";

function CardImg() {
  return (
    <ContextAPI.Consumer>
      {image => (
        <div>
        <img className="card-img" src={image.user.image} alt="user thumbnail" />
        {!image.user.image && <i className="fa fa-spinner fa-spin" aria-hidden="true" />}
      </div>
      )}
    </ContextAPI.Consumer>
  );
}

export default CardImg;