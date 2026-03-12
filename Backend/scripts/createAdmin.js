import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import User from '../models/user.model.js';

dotenv.config();

const MONGODB_URI = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@barriemosque.unsbsgv.mongodb.net/barrieMosqueDB`;

const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

if (!ADMIN_EMAIL || !ADMIN_PASSWORD) {
  console.error('Please set ADMIN_EMAIL and ADMIN_PASSWORD in your environment before running this script.');
  process.exit(1);
}

async function main() {
  try {
    await mongoose.connect(MONGODB_URI);

    let user = await User.findOne({ email: ADMIN_EMAIL });
    if (user) {
      console.log(`Admin user already exists with email: ${ADMIN_EMAIL}`);
      process.exit(0);
    }

    const hashedPassword = await bcrypt.hash(ADMIN_PASSWORD, 10);
    user = await User.create({
      email: ADMIN_EMAIL,
      password: hashedPassword,
    });

    console.log('Admin user created successfully:');
    console.log(`  id: ${user._id}`);
    console.log(`  email: ${user.email}`);
  } catch (err) {
    console.error('Failed to create admin user:', err);
    process.exitCode = 1;
  } finally {
    await mongoose.disconnect();
  }
}

main();

