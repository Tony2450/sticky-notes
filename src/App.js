import React from "react";
import { useState } from "react";
import Header from "./Header";
import NotesList from "./Noteslist";
import "./index.css";

const App = () => {
  const [notes, setNotes] = useState([{
    id: 0,
    title: "eat",
    description: "reese peanut butter cups",
    doesMatchSearch: true
  },
  {
    id: 1,
    title: "sleep",
    description: "eight hours",
    doesMatchSearch: true
  },
  {
    id: 2,
    title: "code",
    description: "build an awesome ui",
    doesMatchSearch: true
  }]);

  const [searchText, setSearchText] = useState("");

  const removeNote = (clickedId) => {
    const filteredNotes = (_, id) => id !== clickedId;
    const newNotes = notes.filter(filteredNotes);
    setNotes(newNotes);
  };

  notes.forEach(note => {
      note.doesMatchSearch = note.description.includes(searchText.toLowerCase()) || note.title.includes(searchText.toLowerCase());
  });

  return (
    < div className="app" >
      <Header searchText={searchText} setSearchText={setSearchText}/>
      <NotesList notes={notes} removeNote={removeNote} searchText={searchText}/>
    </div >
  )
};

export default App;
