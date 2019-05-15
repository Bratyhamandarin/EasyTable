import React, { Component } from 'react';

import './App.scss';
import { Button } from './components/button';
import { Table } from './components/table';
import { Modal } from './components/modal';
import { removeById, addNewItem, generateId } from './utils';

class App extends Component {
  state = {
    list: JSON.parse(localStorage.getItem('list')),
    modalActive: false
  };

  openModal = () => this.setState({ modalActive: true });

  addTableItem = formValues => {
    formValues.id = generateId();
    this.setState({ modalActive: false });
    const newList = addNewItem(this.state.list, formValues);
    this.updateData(newList);
  };

  removeTableItem = id => {
    const newList = removeById(this.state.list, id);
    this.updateData(newList);
  };

  updateData = list => {
    let newList = JSON.stringify(list);
    try {
      localStorage.setItem('list', newList);
    } catch (e) {
      if (e === 'QUOTA_EXCEEDED_ERR') {
        alert('Превышен лимит');
      }
    }
    this.setState({ list });
  };

  render() {
    return (
      <div className='App'>
        <Button className='button add' onClick={this.openModal}>
          Add new
        </Button>
        <Table list={this.state.list} onDelete={this.removeTableItem} />
        {this.state.modalActive ? <Modal onSubmit={this.addTableItem} /> : null}
      </div>
    );
  }
}

export default App;
