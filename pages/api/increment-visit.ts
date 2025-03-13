import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const counter = await prisma.counter.upsert({
      where: { id: 1 },
      update: { visits: { increment: 1 } },
      create: { id: 1, visits: 1, startedPoll: 0, finishedPoll: 0 },
    });

    res.status(200).json({ visits: counter.visits });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error incrementing visits' });
  }
}
