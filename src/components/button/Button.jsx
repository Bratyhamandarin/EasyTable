import React from "react";

export const Button = props => {
  return (
    <button type={props.type} className={props.className} onClick={props.click} disabled={props.disabled}>
      {props.name}
    </button>
  );
};
