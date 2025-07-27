import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import { createBusiness, getBusinesses, getBusinessesAdmin, updateBusinesses } from './controllers/business.controller.js';
import dotenv from 'dotenv';
dotenv.config();
import { sendEmail } from './controllers/email.controller.js';
import { signup, login } from './controllers/auth.controller.js';
import authenticateJWT from './middleware/auth.js';


const app = express();
const port = process.env.SERVER_PORT;

// MongoDB connection string
const MONGODB_URI = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@barriemosque.kowou.mongodb.net/barrieMosque`

// Use the CORS middleware
app.use(cors());
app.use(express.json());

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

// Define a route handler for the default home page
app.get('/', (req, res) => {
    res.send('Hello World v2');
});

app.get('/get-businesses', getBusinesses);
app.get('/get-businesses-admin', authenticateJWT, getBusinessesAdmin);
app.put('/update-business/:id', authenticateJWT, updateBusinesses);
app.post('/add-business', createBusiness);

app.post('/signup', signup);
app.post('/login', login);

app.post('/send-email', sendEmail);