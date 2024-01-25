// components/Modal.js
import React from 'react';
import styles from './Modal.module.css'; // Ajoute des styles pour la fenêtre modale

const Modal = ({ onClose, children }) => {
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>
          X
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
