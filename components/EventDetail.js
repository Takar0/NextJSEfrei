
import React from 'react';

const EventDetail = ({ event }) => {
  return (
    <div
      style={{
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '16px',
        backgroundColor: '#fff',
        marginBottom: '16px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      }}
    >
      <h1 style={{ marginBottom: '16px' }}>{event.name}</h1>
      <p style={{ margin: 0 }}>Date: {event.date}</p>
      <p style={{ margin: 0 }}>Heure: {event.time}</p>
      <p style={{ margin: 0 }}>Description: {event.description}</p>
      <p style={{ margin: 0 }}>Intervenants: {event.speakers.join(', ')}</p>
      <p style={{ margin: 0 }}>Lieu: {event.location}</p>
    </div>
  );
};

export default EventDetail;
