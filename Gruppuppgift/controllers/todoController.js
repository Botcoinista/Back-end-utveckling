//Importerar från todoModel
const router = require('express').Router()
const { createNewCase, getAllCases, getSingleCase, getSingleCaseAndUpdate } = require('../models/todoModel')
// Lägger upp CRUD för att enklare hänvisa till de olika delarna

// Create
router.post('/', createNewCase)

// Read
router.get('/', getAllCases)
router.get('/:id', getSingleCase)
// Update
router.put('/:id', getSingleCaseAndUpdate)


// Delete


module.exports = router;