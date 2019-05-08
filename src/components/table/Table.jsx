import React from "react";
import { FirstRow, Row } from "./";

export const Table = props => {
  return (
    <div className="table">
      <ul>
        <FirstRow />
        {props.list.map(el => (
          <Row {...el} key={el.id} removeTableItem={props.removeTableItem} />
        ))}
      </ul>
    </div>
  );
};
