import { NextApiRequest, NextApiResponse } from 'next';
import { sql } from '@vercel/postgres';

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  try {
    // Remplacer la définition de la table pour créer une table `Events`
    const result = await sql`
      CREATE TABLE IF NOT EXISTS Events (
        EventID SERIAL PRIMARY KEY,
        Name VARCHAR(255) NOT NULL,
        Owner VARCHAR(255) NOT NULL,
        EventDate DATE NOT NULL,
        Description TEXT
      );
    `;
    return response.status(200).json({ result });
  } catch (error) {
    console.error(error);
    return response.status(500).json({ error });
  }
}
