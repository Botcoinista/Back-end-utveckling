const todoModel = require('../models/todoModel') //Importerar från todoModel
const router = require('express').Router()


// Lägger upp CRUD för att enklare hänvisa till de olika delarna

// Create
router.post('/', todoModel.createNewCase)

// Read
router.get('/', todoModel.getAllCases)

// Update


// Delete

module.exports = router;