const mongoose = require('mongoose');

const commentCase = mongoose.Schema({
  email: { type: String, required: true },
  message: { type: String, required: true },
}, { timestamp: true })

// module.exports = mongoose.model('Todo', commentCase)
