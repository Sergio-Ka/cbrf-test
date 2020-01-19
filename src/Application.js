import React from 'react';
import { block } from 'bem-cn';

import Tree from './components/Tree/Tree.js';
import { initialData } from './initialData.js';
import './Application.css';

const b = block('application');

class Application extends React.Component {
  state = { tree: initialData };

  render() {
    return (
      <div className={b()}>
        <div className={b('tree')}>
          <Tree rootName={'Мой компьютер'} initialData={initialData} onItemControlsClick={this.handleItemControlsClick} />
        </div>
        <div className={b('output-area')}>
          <textarea className={b('textarea')} readOnly value={JSON.stringify(this.state.tree)} />
        </div>
      </div>
    );
  }

  handleItemControlsClick = (id, action) => {
    switch (action) {
      case 'add':
        console.log('add');
        break;
      case 'delete':
        console.log('delete');
        break;
      case 'edit':
        console.log('edit');
        break;
      default:
        break;
    }
  }
}

export default Application;
