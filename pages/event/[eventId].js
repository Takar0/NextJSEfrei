// Import des modules nécessaires
import React from 'react';
import { useRouter } from 'next/router';
import { eventsData } from '../../data';
import EventDetail from '../../components/EventDetail';

// Page de détails de l'événement
const EventDetailPage = () => {
  // Récupérer l'ID de l'événement à partir de l'URL
  const router = useRouter();
  const { eventId } = router.query;

  // Utilisation des données simulées
  const eventDetails = eventsData.find((event) => event.id === eventId);

  return <EventDetail event={eventDetails} />;
};

export default EventDetailPage;
