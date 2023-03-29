const router = require('express').Router()
//Importerar från todoModel
const { createNewCase, getAllCases, getSingleCase, getSingleCaseAndUpdate } = require('../models/todoModel')

// Lägger upp CRUD för att enklare hänvisa till de olika delarna

// Create
router.post('/', createNewCase) // släng upp ett

// Read
router.get('/', getAllCases)
router.get('/:id', getSingleCase) //read med ID

// Update
router.put('/:id', getSingleCaseAndUpdate) // uppdatera status 1-3 --> Not done, On going och Done
// Delete


module.exports = router;