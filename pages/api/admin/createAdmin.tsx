// Example Script to Add Admin (/scripts/createAdmin.ts):

import bcrypt from 'bcryptjs';
import prisma from '../../../lib/prisma'; // Import Prisma client

async function createAdmin(username: string, password: string) {
  const hashedPassword = await bcrypt.hash(password, 10); // Hash password with bcrypt

  await prisma.admin.create({
    data: {
      username,
      password: hashedPassword, // Store the hashed password
    },
  });

  console.log('Admin created');
}

createAdmin('admin', 'fanti'); // Replace with your desired username and password

// Run the script like this:
// npx tsx createAdmin.tsx   = =>this command work
// ts-node scripts/createAdmin.ts
