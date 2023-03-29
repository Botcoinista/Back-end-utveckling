
const router = require('express').Router()
const { addCommentToCase } = require('../models/commentModel')


router.post('/:id', addCommentToCase);
// Delete


module.exports = router;