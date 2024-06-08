import React from 'react'
import '../css/modal.css';

const Modal = ({show, onClose, children}) => {
    if (!show){
        return null;
    }
    
  return (
    <div className="modal" onClick={onClose}>
    <div className="modal-content" onClick={e => e.stopPropagation()}>
      <div className="modal-header">
        <h4 className="modal-title">Modal Title</h4>
      </div>
      <div className="modal-body">
        {children}
      </div>
      <div className="modal-footer">
        <button onClick={onClose} className="button">Close</button>
      </div>
    </div>
  </div>
  )
}

export default Modal