// api/server.js
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
dotenv.config();

import { login, signup } from './controllers/auth.controller.js';
import { createBusiness, getBusinesses, getBusinessesAdmin, updateBusinesses } from './controllers/business.controller.js';
import { sendEmail } from './controllers/email.controller.js';
import authenticateJWT from './middleware/auth.js';

const app = express();

// MongoDB connection
const MONGODB_URI = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@barriemosque.unsbsgv.mongodb.net/barrieMosqueDB`;

app.use(cors());
app.use(express.json());

// API routes
app.get('/api/get-businesses', getBusinesses);
app.get('/api/get-businesses-admin', authenticateJWT, getBusinessesAdmin);
app.put('/api/update-business/:id', authenticateJWT, updateBusinesses);
app.post('/api/add-business', createBusiness);

app.post('/api/signup', signup);
app.post('/api/login', login);

app.post('/api/send-email', sendEmail);

app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the Barrie Mosque OK',
    status: 'success'
  });
});




// Connect to MongoDB before exporting app
let isConnected = false;
const connectDB = async () => {
  if (isConnected) return;
  await mongoose.connect(MONGODB_URI);
  console.log('Connected to MongoDB');
  isConnected = true;
};

// Vercel serverless handler
export default async function handler(req, res) {
  await connectDB();
  return app(req, res);
}

// Run Express server when not on Vercel (local development)
if (!process.env.VERCEL) {
  const PORT = process.env.SERVER_PORT || 5100;
  app.listen(PORT, async () => {
    await connectDB();
    console.log(`Server running at http://localhost:${PORT}`);
  });
}
