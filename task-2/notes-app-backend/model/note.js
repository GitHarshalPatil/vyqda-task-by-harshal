const db = require('../db/connection');

const Note = {
    // Add a new note
    addNote: (note, callback) => {
        const query = 'INSERT INTO notes (note) VALUES (?)';
        db.query(query, [note], callback);
    },

    // Fetch all notes
    // getAllNotes: (callback) => {
    //     const query = 'SELECT * FROM notes';
    //     db.query(query, callback);
    // },
    getAllNotes: (callback) => {
        const query = 'SELECT id, note, created_at FROM notes ORDER BY created_at DESC';
        db.query(query, callback);
    },

    // Delete a note
    deleteNote: (id, callback) => {
        const query = 'DELETE FROM notes WHERE id = ?';
        db.query(query, [id], callback);
    },
};

module.exports = Note;
