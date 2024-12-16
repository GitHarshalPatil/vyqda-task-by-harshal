const Note = require('../model/note');

const noteController = {
    // Add a new note
    addNote: (req, res) => {
        const { note } = req.body;
        if (!note) return res.status(400).send({ message: 'Note content is required' });

        Note.addNote(note, (err, result) => {
            if (err) return res.status(500).send(err);
            res.send({ message: 'Note added', id: result.insertId });
        });
    },

    // Fetch all notes
    getAllNotes: (req, res) => {
        Note.getAllNotes((err, results) => {
            if (err) return res.status(500).send(err);
            res.send(results);
        });
    },


    // Delete a note
    deleteNote: (req, res) => {
        const { id } = req.params;
        if (!id) return res.status(400).send({ message: 'Note ID is required' });

        Note.deleteNote(id, (err, result) => {
            if (err) return res.status(500).send(err);
            res.send({ message: 'Note deleted' });
        });
    },
};

module.exports = noteController;
