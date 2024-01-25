// components/LoginModal.js
import React, { useState } from 'react';
import Modal from './Modal';

const LoginModal = ({ isOpen, onClose }) => {
  // Ajoute la logique de login ici

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      {/* Contenu de la fenêtre modale de login */}
      <h2>Login</h2>
      {/* Ajoute les champs pour le pseudo et le mot de passe ici */}
    </Modal>
  );
};

export default LoginModal;
