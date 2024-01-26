import { sql } from '@vercel/postgres';
import { NextApiResponse, NextApiRequest } from 'next';

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  try {
    // Remplacer 'petName' par 'eventName' et 'ownerName' par, par exemple, 'eventOwner'
    const eventName = request.query.eventName as string;
    const eventOwner = request.query.eventOwner as string;

    // Vérifier que les paramètres 'eventName' et 'eventOwner' sont fournis
    if (!eventName || !eventOwner) throw new Error('Event name and owner names required');

    // Modifier la requête pour sélectionner les événements plutôt que les animaux domestiques
    const events = await sql`SELECT * FROM Events WHERE Name = ${eventName} AND Owner = ${eventOwner};`;

    // Retourner les événements trouvés
    return response.status(200).json({ events });
  } catch (error) {
    // Attraper les erreurs et les retourner en réponse
    console.error(error);
    return response.status(500).json({ error });
  }
}
