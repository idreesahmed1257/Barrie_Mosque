// backend/models/Business.js

import mongoose from 'mongoose';

const BusinessSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    website: {
        type: String,
        required: false,
    },
});

export default mongoose.models.Business || mongoose.model('Business', BusinessSchema);
