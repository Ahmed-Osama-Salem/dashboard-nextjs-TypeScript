import type { NextApiRequest, NextApiResponse } from 'next';

import { connectDB } from '@/app/database/connectionDB';
import { updateCell } from '@/app/server/updateCell/updateCell';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'PUT') {
    res.status(405).json({ message: 'Method not supported' });
  }

  connectDB().catch((err) => {
    console.log(err);
  });

  const { id } = req.query;
  const {
    newConstrDate,
    dateNowUpdate,
    rkmElw7daUpdate,
    elbndUpdate,
    techNumberUpdate,
    mosadNumberUpdate,
    noteAddUpdate,
    kmiatMonUpdate,
    tnfizStateUpdate,
    angazUpdate,
    notesUpdate,
  } = req.body;

  const updateOfCells = await updateCell(
    id,
    newConstrDate,
    dateNowUpdate,
    rkmElw7daUpdate,
    elbndUpdate,
    techNumberUpdate,
    mosadNumberUpdate,
    noteAddUpdate,
    kmiatMonUpdate,
    tnfizStateUpdate,
    angazUpdate,
    notesUpdate
  );
  console.log(updateOfCells);

  res.status(200).json({ updateOfCells });
}
