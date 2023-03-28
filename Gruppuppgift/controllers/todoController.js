//Importerar från todoModel
const router = require('express').Router()
const { createNewCase, getAllCases } = require('../models/todoModel')
// Lägger upp CRUD för att enklare hänvisa till de olika delarna

// Create
router.post('/', createNewCase)

// Read
router.get('/', getAllCases)

// Update


// Delete


module.exports = router;