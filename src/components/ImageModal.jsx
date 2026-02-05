import React from 'react';

const ImageModal = ({ show, imageSrc, onClose }) => {
  return (
    <div id="imageModal" className={`modal ${show ? 'show' : ''}`} onClick={onClose}>
      {show && (
        <>
           <span className="close" onClick={onClose}>&times;</span>
           <img className="modal-content" id="modalImage" src={imageSrc} onClick={(e) => e.stopPropagation()} />
        </>
      )}
    </div>
  );
};

export default ImageModal;
