import React from 'react';
import { block } from 'bem-cn';
import ReactModal from 'react-modal';

import { modalStyles } from '../../constants.js';

import './Modal.css';

const b = block('modal');

class Modal extends React.Component {
  render() {
    const { text, isOpen, onInputChange, onModalOKButtonClick, onModalCloseButtonClick } = this.props;

    return (
      <ReactModal
        ariaHideApp={false}
        isOpen={isOpen}
        onRequestClose={onModalCloseButtonClick}
        style={modalStyles}
      >
        <div className={b()}>
          <div className={b('text')}>
            {text}
          </div>
          <div className={b('content')}>
            <input className={b('input')} type="text" onChange={onInputChange} autoFocus={true} />
            <button className={b('button')} onClick={onModalOKButtonClick}>OK</button>
            <button className={b('button')} onClick={onModalCloseButtonClick}>close</button>
          </div>
        </div>
      </ReactModal>
    );
  }
}

export default Modal;
