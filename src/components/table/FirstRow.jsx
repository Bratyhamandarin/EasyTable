import React from "react";

export const FirstRow = () => {
  return (
    <li className="table__row">
      <div className="table__row--name">Full Name</div>
      <div className="table__row--age">Age</div>
      <div className="table__row--job">Job Title</div>
      <div className="table__row--location">Location</div>
    </li>
  );
};
