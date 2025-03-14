import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma'; // Ensure this path is correct
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// Secret key for JWT (Store it in an environment variable)
const SECRET_KEY = process.env.JWT_SECRET || 'supersecretkey';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { username, password } = req.body;

  try {
    // Find admin in database
    const admin = await prisma.admin.findUnique({
      where: { username },
    });

    if (!admin) {
      return res.status(401).json({ error: 'Admin not found' });
    }

    // Compare the hashed password
    const isPasswordCorrect = await bcrypt.compare(password, admin.password);
    if (!isPasswordCorrect) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = jwt.sign({ id: admin.id, username: admin.username, role: 'admin' }, SECRET_KEY, {
      expiresIn: '1h',
    });

    res.status(200).json({ message: 'Authentication successful', token });
  } catch {
    res.status(500).json({ error: 'Internal server error' });
  }
}
