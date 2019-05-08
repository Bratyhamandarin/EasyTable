import React, { Component } from "react";
import { Button } from "../../components/button";
import { generateId } from "../../utils/helpers";

export class Modal extends Component {
  state = { name: "", age: 18, job: "", location: "" };

  handleSubmit = () => {
    this.props.addTableItem({
      name: this.state.name ? this.state.name : "Pavel",
      age: this.state.age,
      location: this.state.location ? this.state.location : "Moscow",
      job: this.state.job ? this.state.job : "janitor",
      id: generateId()
    });

    this.setState({ name: "", age: 18, job: "", location: "", modalActive: false });
  };

  handleInputChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    const { name, age, job, location } = this.state;

    return (
      <div className={`modal ${this.state.modalActive ? "" : "hided"}`}>
        <h1>Add new</h1>
        <div className="formArea">
          <label>
            Name
            <br /> <input type="text" name="name" value={name} onChange={this.handleInputChange("name")} />
          </label>
          <label>
            Age
            <br />
            <input type="number" name="age" value={age} onChange={this.handleInputChange("age")} />
          </label>
          <label>
            Job
            <br />
            <input type="text" name="job" value={job} onChange={this.handleInputChange("job")} />
          </label>
          <label>
            Location
            <br />
            <input type="text" name="location" value={location} onChange={this.handleInputChange("location")} />
          </label>
        </div>
        <Button
          className="button done"
          name="submit"
          type="submit"
          click={this.handleSubmit}
          disabled={!(name && age >= 18 && location && job)}
        />
      </div>
    );
  }
}
