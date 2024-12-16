const express = require('express');
const router = express.Router();
const noteController = require('../controller/controller');

// Add a new note
router.post('/add', noteController.addNote);

// Fetch all notes
router.get('/', noteController.getAllNotes);

// Delete a note
router.delete('/delete/:id', noteController.deleteNote);

module.exports = router;
