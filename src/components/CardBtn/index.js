import React from "react";
import "./style.css";
import ContextAPI from "../../utils/ContextAPI";

function CardBtn(props) {
  console.log("context in CardBtn", ContextAPI);
  return (
    <ContextAPI.Consumer>
      {(context) => (
        <button
          style={{ opacity: context.user.image ? 1 : 0 }}
          onClick={context.handleBtnClick}
          className={`card-btn ${props["data-value"]}`}
          {...props}
        />
      )}
    </ContextAPI.Consumer>
  );
}

export default CardBtn;
