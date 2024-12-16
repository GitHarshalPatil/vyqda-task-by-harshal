import React from "react";
import NoteCard from "./NoteCard";

const NoteList = ({ notes, deleteNote }) => {
    return (
        <div className="notes-container">
            {notes.map((note) => (
                <NoteCard key={note.id} note={note} deleteNote={deleteNote} />
            ))}
        </div>
    );
};

export default NoteList;
