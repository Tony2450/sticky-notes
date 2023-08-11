import React, { useEffect, useLayoutEffect } from "react";
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
    const filteredNotes = (note) => note.id !== clickedId;
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
    setNotes([...notes, newNote]);
  };

  const onType = (noteByID, updatedKey, updatedValue) => {
    setNotes(notes.map(note => {
      if (note.id === noteByID) {
        note[updatedKey] = updatedValue;
        return note;
      } else {
        return note;
      }
    }))
  };

  useEffect(() => {
    const stateStringNotes = JSON.stringify(notes);
    localStorage.setItem("stateString", stateStringNotes)
  }, [notes])

  useLayoutEffect(() => {
    const stateStringNotes = localStorage.getItem("stateString")
    if (stateStringNotes) {
      const savedState = JSON.parse(stateStringNotes);
      setNotes(savedState);
    } else {
      return
    }
  }, [])

  return (
    < div className="app" >
      <Header searchText={searchText} setSearchText={setSearchText} addNote={addNote} />
      <NotesList notes={notes} removeNote={removeNote} searchText={searchText} onType={onType} />
    </div >
  )
};

export default App;
