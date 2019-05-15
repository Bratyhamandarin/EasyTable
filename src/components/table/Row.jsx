import React, { Component } from 'react';

import { Button } from '../button';

const Delete = ({ click, name, shown }) => (
  <div className={`delete ${shown ? 'open' : ''}`} name={name} onClick={click}>
    Delete
  </div>
);

export class Row extends Component {
  state = { deleteActive: false };

  handleClick = () => this.setState({ deleteActive: !this.state.deleteActive });

  handleDelete = () => this.props.onDelete(this.props.id);

  render() {
    const { name, age, job, location } = this.props;
    return (
      <li className='table__row' onClick={this.handleClick}>
        <div className='table__row--name'>{name}</div>
        <div className='table__row--age'>{age}</div>
        <div className='table__row--job'>{job}</div>
        <div className='table__row--location'>{location}</div>
        {/* <Delete click={this.handleDelete} data='delete' name='delete' shown={this.state.deleteActive} /> */}
        <Button onClick={this.handleDelete} className={`button delete ${this.state.deleteActive ? 'open' : ''}`}>
          delete
        </Button>
      </li>
    );
  }
}
