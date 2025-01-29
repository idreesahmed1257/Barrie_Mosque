import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import { createBusiness, getBusinesses } from './controllers/business.controller.js';

const app = express();
const port = 5000;

// MongoDB connection string
const MONGODB_URI = 'mongodb+srv://idreesahmef1257:barrie@barriemosque.unsbsgv.mongodb.net/';

// Use the CORS middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(MONGODB_URI)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err.message);
    });

// Define a route handler for the default home page
app.get('/', (req, res) => {
    res.send('Hello World new!');
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
        console.log("boyd", body);
        const business = await createBusiness(body);

        res.json({ status: 200, message: "Business Created Successfully", data: business });
    } catch (err) {
        console.log('err', err.message);
        res.status(500).json({ error: 'Something went wrong' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
