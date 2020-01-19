import React from 'react';
import { block } from 'bem-cn';

import Menu from '../../Menu/Menu.js';
import './TreeItem.css';

const b = block('tree-item');

class TreeItem extends React.Component {

  render() {
    const { item, onItemControlsClick } = this.props;
    const menuItemsVisibility = { add: true, delete: true, edit: true };

    return (
      <div className={b()}>
        <div className={b('header')}>
          <div className={b('header-left-side')}>
            {item.name}
          </div>
          <div className={b('header-right-side')}>
            <Menu
              itemsVisibilityMask={menuItemsVisibility}
              onItemControlsClick={onItemControlsClick}
              id={item.id}
            />
          </div>
        </div>
        {item.childrens &&
          item.childrens.map((child, index) => {
            return (
              <div className={b('content')} key={index}>
                <TreeItem item={child} onItemControlsClick={onItemControlsClick}/>
              </div>
            );
          })
        }
        
      </div>
    );
  }
}

export default TreeItem;