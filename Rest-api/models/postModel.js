const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const postSchema = new mongoose.Schema({
    postText: {
        type: String,
        required: true
    },
    userId: {
        type: ObjectId,
        ref: "User"
    },
    carId: {
        type: ObjectId,
        ref: "Car"
    },
}, { timestamps: { createdAt: 'created_at' } });

module.exports = mongoose.model('Post', postSchema);
