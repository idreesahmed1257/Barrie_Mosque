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
const MONGODB_URI = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@barriemosque.kowou.mongodb.net/barrieMosque`;

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
        message: 'Welcome to the Barrie Mosque API 🚀',
        status: 'success'
    });
});




// Connect to MongoDB before exporting app
let isConnected = false;
const connectDB = async () => {
    if (isConnected) return;
    await mongoose.connect(MONGODB_URI);
    isConnected = true;
};

export default async function handler(req, res) {
    await connectDB();
    return app(req, res);
}
