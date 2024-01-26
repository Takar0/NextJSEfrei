import { sql } from '@vercel/postgres';
import { NextApiResponse, NextApiRequest } from 'next';

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  try {
    // Récupérer les données à partir des paramètres de requête ou du corps de la requête
    const { name, owner, eventDate, description } = request.method === 'POST' ? request.body : request.query;

    // Vérifier que toutes les données requises sont présentes
    if (!name || !owner || !eventDate) throw new Error('Event name, owner, and event date are required');

    // Insérer le nouvel événement dans la base de données
    const result = await sql`
      INSERT INTO Events (Name, Owner, EventDate, Description)
      VALUES (${name}, ${owner}, ${eventDate}, ${description})
      RETURNING *; // Retourner l'événement inséré
    `;

    // Retourner la réponse avec le nouvel événement inséré
    return response.status(201).json({ event: result });
  } catch (error) {
    // Gérer les erreurs et les retourner en réponse
    console.error(error);
    return response.status(500).json({ error });
  }
}
