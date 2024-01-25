// pages/index.js
import React from 'react';
import Sidebar from '../components/Sidebar';

const HomePage = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ padding: '20px', flexGrow: 1 }}>
        <h1 style={{ marginBottom: '20px' }}>Page d'Accueil</h1>
        {/* Contenu de la page d'accueil */}
      </div>
    </div>
  );
};

export default HomePage;
