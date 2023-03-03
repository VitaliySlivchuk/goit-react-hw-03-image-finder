import React, { Component } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  render() {
    return createPortal(
      <div class="overlay">
        <div className="modal">{this.props.children}</div>
      </div>,
      modalRoot
    );
  }
}

export default Modal;
