import React from 'react';
import { block } from 'bem-cn';

import './Menu.css';

const b = block('menu');

class Menu extends React.PureComponent {

  render() {
    const { itemsVisibilityMask } = this.props;

    return (
      <div className={b()}>
        <button className={b('item', { invisible: !itemsVisibilityMask.add })} onClick={this.handleAddButtonClick}>
          {'add'}
        </button>
        <button className={b('item', { invisible: !itemsVisibilityMask.delete })} onClick={this.handleDeleteButtonClick}>
          {'delete'}
        </button>
        <button className={b('item', { invisible: !itemsVisibilityMask.edit })} onClick={this.handleEditButtonClick}>
          {'edit'}
        </button>
      </div>
    );
  }

  handleAddButtonClick = () => {
    const { onItemControlsClick, id } = this.props;
    onItemControlsClick(id, 'add');
  }

  handleDeleteButtonClick = () => {
    const { onItemControlsClick, id } = this.props;
    onItemControlsClick(id, 'delete');
  }

  handleEditButtonClick = () => {
    const { onItemControlsClick, id } = this.props;
    onItemControlsClick(id, 'edit');
  }
}

export default Menu;
