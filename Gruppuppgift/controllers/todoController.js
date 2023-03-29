//Importerar från todoModel
const router = require('express').Router()
const { createNewCase, getAllCases, getSingleCase, getSingleCaseAndUpdate, addCommentToCase } = require('../models/todoModel')

// Lägger upp CRUD för att enklare hänvisa till de olika delarna

// Create
router.post('/', createNewCase)

// Read
router.get('/', getAllCases)
router.get('/:id', getSingleCase)


// Update
router.post('/:id', getSingleCaseAndUpdate)
router.post('/:id/comment', addCommentToCase);
// Delete


module.exports = router;