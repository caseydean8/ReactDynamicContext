import React from "react";
import "./style.css";
import ContextAPI from "../../utils/ContextAPI";

function CardBtn(props) {
  console.log("props in CardBtn", props);
  return (
    <ContextAPI>
      {(context) => (
        <button
          style={{ opacity: context.user.image ? 1 : 0 }}
          onClick={props.onClick}
          className={`card-btn ${props["data-value"]}`}
          {...props}
        />
      )}
    </ContextAPI>
  );
}

export default CardBtn;
