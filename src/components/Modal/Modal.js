import React, { Component } from 'react';
import { createPortal } from 'react-dom';

import { OverlayCss, ModalCss } from './Modal.styled';

export const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };
  handleBackDrop = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <OverlayCss className="overlay" onClick={this.handleBackDrop}>
        <ModalCss className="modal">{this.props.children}</ModalCss>
      </OverlayCss>,
      modalRoot
    );
  }
}

export default Modal;
