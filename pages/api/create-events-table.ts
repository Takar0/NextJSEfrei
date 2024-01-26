import { NextApiRequest, NextApiResponse } from 'next';
import { sql } from '@vercel/postgres';

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  try {
    // Création d'une table d'événements avec des champs pour l'ID, le nom, la description, la date de début, la date de fin, et l'emplacement
    const result = await sql`
      CREATE TABLE Events (
        EventID SERIAL PRIMARY KEY,
        Name VARCHAR(255) NOT NULL,
        Description TEXT,
        StartDate TIMESTAMP NOT NULL,
        EndDate TIMESTAMP,
        Location VARCHAR(255)
      );
    `;
    return response.status(200).json({ result });
  } catch (error) {
    return response.status(500).json({ error });
  }
}
