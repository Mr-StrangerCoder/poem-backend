const mongoose = require('mongoose');

const poemSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    poem: {
        type: String,
        required: true,
        trim: true
    },
    dedicate: {
        type: String,
        required: true,
        trim: true
    },
    author: {
        type: String,
        required: true,
        trim: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Poem', poemSchema);

