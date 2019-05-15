import React from 'react';
import './button.scss';

export const Button = props => (
  <button type={props.type || 'button'} {...props}>
    {props.children}
  </button>
);
// [e]
