import React from "react";
import { useState } from "react";
import Header from "./Header";
import NotesList from "./Noteslist";
import "./index.css";

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: Date.now(),
      title: "",
      description: "",
      doesMatchSearch: true,
    },
  ]);

  const [searchText, setSearchText] = useState("");

  const removeNote = (clickedId) => {
    const filteredNotes = (_, id) => id !== clickedId;
    const newNotes = notes.filter(filteredNotes);
    setNotes(newNotes);
  };

  notes.forEach(note => {
      note.doesMatchSearch = note.description.includes(searchText.toLowerCase()) || note.title.includes(searchText.toLowerCase());
  });

  const addNote = () => {
    let newNote = {
    id: Date.now(),
    title: "",
    description: "",
    doesMatchSearch: true,
    };
    setNotes([...notes,newNote]);
  }

  return (
    < div className="app" >
      <Header searchText={searchText} setSearchText={setSearchText} addNote={addNote}/>
      <NotesList notes={notes} removeNote={removeNote} searchText={searchText}/>
    </div >
  )
};

export default App;
