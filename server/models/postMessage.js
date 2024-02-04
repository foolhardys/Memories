const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Must provide title'],
        trim: true,
        maxlength: [40, 'title cannot be more than 40 words']
    },
    message: {
        type: String,
        trim: true
    },
    creator: {
        type: String,
        required: [true, 'Must provide name'],
        trim: true,
        maxlength: [30, 'creator cannot be more than 40 words']
    },
    tags: [String],
    selectedFile: {
        type: String,
        required: [true, 'File needede']
    },
    likeCount: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

module.exports = mongoose.model('PostMessage', postSchema)