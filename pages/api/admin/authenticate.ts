import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma';
import bcrypt from 'bcryptjs';

async function authenticateAdmin(username: string, password: string) {
  // Find the admin by username
  const admin = await prisma.admin.findUnique({
    where: { username },
  });

  // If the admin doesn't exist, throw an error
  if (!admin) {
    throw new Error('Admin not found');
  }

  // Compare the hashed password
  const isPasswordCorrect = await bcrypt.compare(password, admin.password);
  if (!isPasswordCorrect) {
    throw new Error('Invalid password');
  }

  return admin;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { username, password } = req.body;

    try {
      const admin = await authenticateAdmin(username, password);

      // Send success response with admin details (You can send a JWT token instead)
      res.status(200).json({ message: 'Authentication successful', admin });
    } catch (error) {
      res.status(401).json({ error:  'Authentication failed'});
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
