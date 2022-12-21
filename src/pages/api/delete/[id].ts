import type { NextApiRequest, NextApiResponse } from 'next';

import { connectDB } from '@/app/database/connectionDB';
import { deleteTableCell } from '@/app/server/deleteCellTable/deleteTableCell';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'DELETE') {
    res.status(405).json({ message: 'Method not supported' });
  }

  connectDB().catch((err) => {
    console.log(err);
  });

  const { id } = req.query;

  const deleteCell = await deleteTableCell(id);
  console.log(deleteCell);

  res.status(200).json({ deleteCell });
}
