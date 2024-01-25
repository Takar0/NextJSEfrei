// components/Sidebar.js
import React from 'react';
import { useRouter } from 'next/router';

const Sidebar = () => {
  const router = useRouter();

  const handleNavigation = (path) => {
    router.push(path);
  };

  return (
    <div
      style={{
        width: '200px',
        backgroundColor: '#333',
        padding: '10px',
        height: '100vh',
        boxShadow: '2px 0 4px rgba(0, 0, 0, 0.1)',
      }}
    >
      <h2 style={{ color: '#fff', marginBottom: '20px' }}>Menu</h2>
      <button
        style={{
          display: 'block',
          marginBottom: '10px',
          color: '#fff',
          backgroundColor: '#555',
          border: 'none',
          padding: '8px 16px',
          cursor: 'pointer',
          width: '100%',
        }}
        onClick={() => handleNavigation('/')}
      >
        Accueil
      </button>
      <button
        style={{
          display: 'block',
          marginBottom: '10px',
          color: '#fff',
          backgroundColor: '#555',
          border: 'none',
          padding: '8px 16px',
          cursor: 'pointer',
          width: '100%',
        }}
        onClick={() => handleNavigation('/events')}
      >
        Événements
      </button>
      {/* Ajoute d'autres boutons pour les sections supplémentaires */}
    </div>
  );
};

export default Sidebar;
