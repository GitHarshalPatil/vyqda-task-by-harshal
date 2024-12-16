import React from "react";

const NoteCard = ({ note, deleteNote }) => {
    return (
        <div className="note">
            <p>{note.note}</p>
            <small>
                {note.created_at
                    ? new Date(note.created_at).toLocaleString()
                    : "Invalid Date"}
            </small>
            <button onClick={() => deleteNote(note.id)}>🗑️</button>
        </div>
    );
};

export default NoteCard;
