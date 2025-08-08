import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import { createBusiness, getBusinesses, getBusinessesAdmin, updateBusinesses } from './controllers/business.controller.js';
import dotenv from 'dotenv';
dotenv.config();
import { sendEmail } from './controllers/email.controller.js';
import { signup, login } from './controllers/auth.controller.js';
import authenticateJWT from './middleware/auth.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.SERVER_PORT;

// MongoDB connection string
const MONGODB_URI = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@barriemosque.kowou.mongodb.net/barrieMosque`

// Use the CORS middleware
app.use(cors());
app.use(express.json());

// Serve static files from the frontend build
app.use(express.static(path.join(__dirname, '../out')));

// API routes
app.get('/api/get-businesses', getBusinesses);
app.get('/api/get-businesses-admin', authenticateJWT, getBusinessesAdmin);
app.put('/api/update-business/:id', authenticateJWT, updateBusinesses);
app.post('/api/add-business', createBusiness);

app.post('/api/signup', signup);
app.post('/api/login', login);

app.post('/api/send-email', sendEmail);

// Handle client-side routing for Next.js static export
app.get('*', (req, res) => {
    // Don't serve HTML for API routes
    if (req.path.startsWith('/api/')) {
        return res.status(404).json({ error: 'API endpoint not found' });
    }
    
    // For Next.js static export, check if the specific HTML file exists
    const requestedPath = req.path === '/' ? '/index.html' : `${req.path}.html`;
    const filePath = path.join(__dirname, '../out', requestedPath);
    
    // Check if the specific HTML file exists
    if (fs.existsSync(filePath)) {
        return res.sendFile(filePath);
    }
    
    // If not found, serve index.html for client-side routing
    res.sendFile(path.join(__dirname, '../out/index.html'));
});

// Connect to MongoDB
mongoose.connect(MONGODB_URI)
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(port, () => {
            console.log(`Server is running on ${port}`);
        });
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err.message);
    });