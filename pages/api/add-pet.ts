import { sql } from '@vercel/postgres';
import { NextApiResponse, NextApiRequest } from 'next';

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  try {
    // Changez les noms des variables pour refléter les données d'événement
    const eventName = request.query.eventName as string;
    const eventOwner = request.query.eventOwner as string;

    // Vérifiez que les deux paramètres requis sont présents
    if (!eventName || !eventOwner) throw new Error('Event name and owner names required');

    // Insérez dans la table Events au lieu de Pets
    await sql`INSERT INTO Events (Name, Owner) VALUES (${eventName}, ${eventOwner});`;

    // Sélectionnez et retournez la liste mise à jour des événements
    const events = await sql`SELECT * FROM Events;`;
    return response.status(200).json({ events });
  } catch (error) {
    // Gérez les erreurs en retournant une réponse appropriée
    console.error(error);
    return response.status(500).json({ error });
  }
}
