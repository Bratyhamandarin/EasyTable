import React, { Component } from "react";

const Delete = ({ click, name, shown }) => (
  <div className={`delete ${shown ? "open" : ""}`} name={name} onClick={click}>
    Delete
  </div>
);

export class Row extends Component {
  constructor(props) {
    super(props);

    this.state = { deleteActive: false };
  }

  handleClick = () => {
    this.setState({ deleteActive: !this.state.deleteActive });
  };

  handleDelete = () => {
    this.props.removeTableItem(this.props.id);
  };

  render() {
    const { name, age, job, location } = this.props;
    return (
      <li className="table__row" onClick={this.handleClick}>
        <div className="table__row--name">{name}</div>
        <div className="table__row--age">{age}</div>
        <div className="table__row--job">{job}</div>
        <div className="table__row--location">{location}</div>
        <Delete click={this.handleDelete} data="delete" name="delete" shown={this.state.deleteActive} />
      </li>
    );
  }
}
