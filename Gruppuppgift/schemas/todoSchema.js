const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
    email: { type: String, required: true },
    subject: { type: String, required: true },
    message: { type: String, required: true },
    status: { type: Number, default: 1 }
}, { timestamps: true })

module.exports = mongoose.model('Todo', todoSchema)