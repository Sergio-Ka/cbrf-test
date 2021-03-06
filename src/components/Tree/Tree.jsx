import React from 'react';
import { block } from 'bem-cn';

import Menu from '../Menu/Menu';
import TreeItem from './TreeItem/TreeItem';

import './Tree.css';

const b = block('tree');

class Tree extends React.Component {

  render() {
    const { initialData: { childrens, id, name }, onItemControlsClick } = this.props;
    const topLevelMenuItemsVisibility = { add: true, delete: false, edit: true };
    const rootName = name ? name : 'unknown';

    return (
      <div className={b()}>
        <div className={b('header')}>
          <div className={b('header-left-side')}>
            {rootName}
          </div>
          <div className={b('header-right-side')}>
            <Menu
              itemsVisibilityMask={topLevelMenuItemsVisibility}
              onItemControlsClick={onItemControlsClick}
              id={id}
            />
          </div>
        </div>
        {childrens.map((child, index) => {
          return (
            <div className={b('content')} key={index}>
              <TreeItem item={child} onItemControlsClick={onItemControlsClick} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default Tree;
