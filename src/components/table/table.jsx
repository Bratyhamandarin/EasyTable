import React from 'react';

import { FirstRow } from './first-row.jsx';
import { Row } from './row.jsx';
import './table.scss';

export const Table = props => {
  return (
    <div className='table'>
      <ul>
        <FirstRow />
        {props.list.map(el => (
          <Row {...el} key={el.id} onDelete={props.onDelete} />
        ))}
      </ul>
    </div>
  );
};
