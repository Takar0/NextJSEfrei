
import React from 'react';

const EventCard = ({ event, onClick }) => {
  return (
    <div 
      style={{
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '16px',
        marginBottom: '16px',
        cursor: 'pointer',
        backgroundColor: '#fff',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        transition: 'background-color 0.3s ease',
      }}
      onClick={onClick}
    >
      <h3 style={{ margin: 0 }}>{event.name}</h3>
    </div>
  );
};

export default EventCard;

