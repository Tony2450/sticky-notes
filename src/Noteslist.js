import React from "react";
import Note from "./Note";
import "./index.css"

const NotesList = (props) => {
    const renderNotes = (notes) =>(
        <Note 
            title = {notes.title}
            description = {notes.description}
            doesMatchSearch = {notes.doesMatchSearch}
        />
    )
    const NoteElements = props.notes.map(renderNotes);
    return <ul className="notes-list">{NoteElements}</ul>
}

export default NotesList;