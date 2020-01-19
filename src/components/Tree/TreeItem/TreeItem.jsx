import React from 'react';
import { block } from 'bem-cn';

import Menu from '../../Menu/Menu';

import './TreeItem.css';

const b = block('tree-item');

class TreeItem extends React.Component {

  render() {
    const { item, onItemControlsClick } = this.props;
    const menuItemsVisibility = { add: true, delete: true, edit: true };
    const itemName = item.name ? item.name : 'unknown';

    return (
      <div className={b()}>
        <div className={b('header')}>
          {itemName}
          <Menu
            itemsVisibilityMask={menuItemsVisibility}
            onItemControlsClick={onItemControlsClick}
            id={item.id}
          />
        </div>
        {item.childrens &&
          item.childrens.map((child, index) => {
            return (
              <div className={b('content')} key={index}>
                <TreeItem item={child} onItemControlsClick={onItemControlsClick} />
              </div>
            );
          })
        }

      </div>
    );
  }
}

export default TreeItem;