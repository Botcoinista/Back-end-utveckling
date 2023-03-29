const mongoose = require('mongoose');

const caseSchema = mongoose.Schema({
    email: { type: String, required: true },
    subject: { type: String, required: true },
    message: { type: String, required: true },
    status: {
        id: { type: Number, default: 1 },
        currentStatus: { type: String, default: 'Not done' }
    },
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
}, { timestamps: true });

module.exports = mongoose.model('Case', caseSchema);

