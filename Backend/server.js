import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import { createBusiness, getBusinesses } from './controllers/business.controller.js';
import dotenv from 'dotenv';
dotenv.config();
import { sendEmail } from './controllers/email.controller.js';


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

// Define a route to get tour places
app.get('/get-businesses', async (req, res) => {
    try {
        const business = await getBusinesses(req, res);
        res.json({ status: 200, message: "Business Fetched Successfully", data: business });
    } catch (err) {
        console.log('err', err.message);
        res.status(500).json({ error: 'Something went wrong' });
    }
});

app.post('/add-business', async (req, res) => {
    try {
        const body = req.body;
        const business = await createBusiness(body);

        res.json({ status: 200, message: "Business Created Successfully", data: business });
    } catch (err) {
        console.log('err', err.message);
        res.status(500).json({ error: 'Something went wrong' });
    }
});


app.post('/send-email', sendEmail);