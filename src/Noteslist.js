import React from "react";
import Note from "./Note";
import "./index.css";

const NotesList = (props) => {
    const renderNotes = (notes) =>(
        <Note 
            title = {notes.title}
            description = {notes.description}
            doesMatchSearch = {notes.doesMatchSearch}
            removeNote = {props.removeNote}
            key={notes.id}
            id={notes.id}
            onType={props.onType}
        />
    )
    const filterNotesBySearch = (notes) => notes.doesMatchSearch;
    const filteredNotes = props.notes.filter(filterNotesBySearch)
    const NoteElements = filteredNotes.map(renderNotes);
    return <ul className="notes-list">{NoteElements}</ul>
}

export default NotesList;