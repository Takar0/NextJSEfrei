import { sql } from '@vercel/postgres';
import { NextApiResponse, NextApiRequest } from 'next';

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  try {
    // Convertir les valeurs de requête en chaînes, en prenant le premier élément si c'est un tableau
    const eventName = Array.isArray(request.query.eventName) ? request.query.eventName[0] : request.query.eventName;
    const eventOwner = Array.isArray(request.query.eventOwner) ? request.query.eventOwner[0] : request.query.eventOwner;

    // Vérifier que eventName et eventOwner ne sont pas undefined
    if (!eventName || !eventOwner) {
      throw new Error('Event name and owner are required');
    }

    // Exécuter la requête SQL avec des valeurs garanties comme étant des chaînes
    const events = await sql`
      SELECT * FROM Events
      WHERE Name = ${eventName}
      AND Owner = ${eventOwner};
    `;

    // Retourner les événements trouvés
    return response.status(200).json({ events });
  } catch (error) {
    // Vérifier si 'error' est une instance de 'Error' et ainsi accéder à la propriété 'message'
    if (error instanceof Error) {
      console.error(error);
      return response.status(500).json({ error: error.message });
    } else {
      // Si ce n'est pas une instance de Error, vous pouvez renvoyer une réponse générique
      console.error('An unexpected error occurred');
      return response.status(500).json({ error: 'An unexpected error occurred' });
    }
  }
}
