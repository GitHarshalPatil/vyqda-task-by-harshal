import React from "react";

const NoteInput = ({ note, setNote, addNote }) => {
    return (
        <div className="input-container">
            <input
                type="text"
                placeholder="Take a note..."
                value={note}
                onChange={(e) => setNote(e.target.value)}
            />
            <button onClick={addNote}>Add Note</button>
        </div>
    );
};

export default NoteInput;
