const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const carSchema = new mongoose.Schema({
    carName: {
        type: String,
        required: true
    },
    carBrand: {
        type: String,
        required: true
    },
    fuel: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    mileage: {
        type: Number,
        required: true
    },
    engineSize: {
        type: Number,
        required: true
    },
    power: {
        type: Number,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    subscribers: [{
        type: ObjectId,
        ref: "User"
    }],
    userId: {
        type: ObjectId,
        ref: "User"
    },
    posts: [{
        type: ObjectId,
        ref: "Post"
    }],
}, { timestamps: { createdAt: 'created_at' } });

module.exports = mongoose.model('Car', carSchema);
