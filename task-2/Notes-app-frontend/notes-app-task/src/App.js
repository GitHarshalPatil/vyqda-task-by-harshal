import React, { useState, useEffect } from "react";
import axios from "axios";
import NoteInput from "./components/NoteInput";
import NoteList from "./components/NoteList";
import "./App.css";
import Headers from "./components/Headers";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

const BASE_URL = "http://localhost:5050/api/notes";

function App() {
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const response = await axios.get(BASE_URL);
      setNotes(response.data);
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  };


  const addNote = async () => {
    if (!note) return alert("Please enter a note");

    try {
      const response = await axios.post(`${BASE_URL}/add`, { note });
      setNote("");
      setNotes((prevNotes) => [
        ...prevNotes,
        {
          id: response.data.id,
          note: note,
          created_at: new Date().toISOString(),
        },
      ]);
    } catch (error) {
      console.error("Error adding note:", error);
    }
  };


  const deleteNote = async (id) => {
    try {
      await axios.delete(`${BASE_URL}/delete/${id}`);
      fetchNotes();
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };

  return (
    <div className="app">
      <Headers />
      <NoteInput note={note} setNote={setNote} addNote={addNote} />
      <NoteList notes={notes} deleteNote={deleteNote} />
    </div>
  );
}

export default App;
