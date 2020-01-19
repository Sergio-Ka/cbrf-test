import React from 'react';
import { block } from 'bem-cn';
import uuid from 'uuid';

import Tree from './components/Tree/Tree';
import Modal from './components/Modal/Modal';
import { initialData } from './constants.js';
import './Application.css';

const b = block('application');

class Application extends React.Component {
  state = {
    tree: initialData,
    isModalOpen: false,
    currentID: null,
    currentInputValue: '',
    currentAct: '',
  };

  render() {
    const { isModalOpen } = this.state;

    return (
      <div className={b()}>
        <div className={b('tree')}>
          <Tree initialData={this.state.tree} onItemControlsClick={this.handleItemControlsClick} />
        </div>
        <div className={b('output-area')}>
          <textarea className={b('textarea')} readOnly value={JSON.stringify(this.state.tree)} />
        </div>
        <Modal
          text="Enter new item name: "
          isOpen={isModalOpen}
          onInputChange={this.handleInputChange}
          onModalOKButtonClick={this.handleOKButtonClick}
          onModalCloseButtonClick={this.handleCloseButtonClick}
        />
      </div>
    );
  }

  handleItemControlsClick = (id, action) => {
    switch (action) {
      case 'add':
        this.showModal(id, 'add');
        break;
      case 'delete':
        this.deleteItem(id);
        break;
      case 'edit':
        this.showModal(id, 'edit');
        break;
      default:
        break;
    }
  }

  handleInputChange = (event) => {
    this.setState({ currentInputValue: event.target.value });
  }

  handleOKButtonClick = () => {
    const { currentID, currentInputValue, currentAct } = this.state;
    if (currentID !== null && currentInputValue && currentAct) {
      if (currentAct === 'add') {
        this.addItem(currentID, currentInputValue);
      } else if (currentAct === 'edit') {
        this.editItem(currentID, currentInputValue);
      }
      this.setState({ isModalOpen: false, currentID: null, currentInputValue: '', currentAct: '' });
    }
  }

  handleCloseButtonClick = () => {
    this.setState({ isModalOpen: false, currentID: null, currentInputValue: '', currentAct: '' });
  }

  showModal(id, type) {
    this.setState({ isModalOpen: true, currentID: id, currentAct: type });
  }

  addItem(id, name) {
    const { tree } = this.state;
    if (id === tree.id) {
      this.setState({ tree: { ...tree, childrens: [...tree.childrens, { id: uuid(), name, childrens: [] }] } });
    } else {
      const newChildrens = this.addItemByRecursion(id, name, tree.childrens);
      this.setState({ tree: { ...tree, childrens: newChildrens } });
    }
  }

  addItemByRecursion(id, name, childrens) {
    return childrens.reduce((acc, value) => {
      if (value.id === id) {
        return [...acc, { ...value, childrens: [...value.childrens, { id: uuid(), name, childrens: [] }] }];
      } else if (value.id !== id && !value.childrens) {
        return [...acc, value];
      } else if (value.id !== id && value.childrens) {
        return [...acc, { ...value, childrens: this.addItemByRecursion(id, name, value.childrens) }];
      }
      return acc;
    }, []);
  }

  deleteItem(id) {
    const { tree } = this.state;
    const newChildrens = this.deleteItemByRecursion(id, tree.childrens);
    this.setState({ tree: { ...tree, childrens: newChildrens } });
  }

  deleteItemByRecursion(id, childrens) {
    return childrens.reduce((acc, value) => {
      if (value.id === id) {
        return acc;
      } else if (value.id !== id && !value.childrens) {
        return [...acc, value];
      } else if (value.id !== id && value.childrens) {
        return [...acc, { ...value, childrens: this.deleteItemByRecursion(id, value.childrens) }];
      }
      return acc;
    }, []);
  }

  editItem(id, name) {
    const { tree } = this.state;
    if (id === tree.id) {
      this.setState({ tree: { ...tree, name } });
    } else {
      const newChildrens = this.editItemByRecursion(id, name, tree.childrens);
      this.setState({ tree: { ...tree, childrens: newChildrens } });
    }
  }

  editItemByRecursion(id, name, childrens) {
    return childrens.reduce((acc, value) => {
      if (value.id === id) {
        return [...acc, { ...value, name }];
      } else if (value.id !== id && !value.childrens) {
        return [...acc, value];
      } else if (value.id !== id && value.childrens) {
        return [...acc, { ...value, childrens: this.editItemByRecursion(id, name, value.childrens) }];
      }
      return acc;
    }, []);
  }
}

export default Application;
