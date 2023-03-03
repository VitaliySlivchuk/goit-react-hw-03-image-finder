import React from 'react';
import Modal from './Modal';

function ImageGalleryItem({ id, smalImg, bigImg, onFind, showModal }) {
  return (
    <li className="gallery-item" onClick={onFind}>
      <img src={smalImg} alt={id} width={100} />
      {showModal && (
        <Modal>
          <img src={bigImg} alt="" />
        </Modal>
      )}
    </li>
  );
}

export default ImageGalleryItem;
