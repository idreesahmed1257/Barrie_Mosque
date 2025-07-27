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
        required: false
    },
    website: {
        type: String,
        required: false,
    },
    category: {
        type: String,
        required: false,
    },
    state: {
        type: Boolean,
        required: true,
    }
}, { timestamps: true });

export default mongoose.models.Business || mongoose.model('Business', BusinessSchema);
