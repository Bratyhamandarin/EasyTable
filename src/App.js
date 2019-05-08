import React, { Component } from "react";
import "./App.scss";
import "./components/modal/Modal.scss";
import "./components/button/Button.scss";
import "./components/table/Table.scss";
import { Button } from "./components/button";
import { Table } from "./components/table";
import { Modal } from "./components/modal";
import { removeById, addNewItem } from "./utils/helpers";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
      modalActive: false
    };
  }

  componentWillMount = () => {
    let list = JSON.parse(localStorage.getItem("list"));
    if (list) this.setState({ list });
  };

  handlerShowModal = () => {
    this.setState({ modalActive: true });
  };

  addTableItem = formValues => {
    this.setState({ modalActive: false });
    const newList = addNewItem(this.state.list, formValues);
    this.updateData(newList);
  };

  removeTableItem = id => {
    const newList = removeById(this.state.list, id);
    this.updateData(newList);
  };

  updateData = value => {
    let list = JSON.stringify(value);
    try {
      localStorage.setItem("list", list);
    } catch (e) {
      if (e === "QUOTA_EXCEEDED_ERR") {
        alert("Превышен лимит");
      }
    }
    this.setState({ list: value });
  };

  render() {
    return (
      <div className="App">
        <Button className="button add" name="Add new" click={this.handlerShowModal} />
        <Table list={this.state.list} removeTableItem={this.removeTableItem} />
        {this.state.modalActive ? <Modal addTableItem={this.addTableItem} /> : null}
      </div>
    );
  }
}

export default App;
