// backend/models/Business.js

import mongoose from 'mongoose';

const BusinessSchema = new mongoose.Schema({
    name: {
        type: String,
        required: false,
    },
    details: {
        type: String,
        required: false,
    },
    phone: {
        type: String,
        required: false,
    },
    email: {
        type: String,
        required: false,
        unique: true,
    },
    website: {
        type: String,
        required: false,
    },
    category: {
        type: String,
        required: false,
    },
});

export default mongoose.models.Business || mongoose.model('Business', BusinessSchema);
