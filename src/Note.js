import React from "react";
import "./index.css";

const Note = (props) => {
    const deleteById = () => props.removeNote(props.id)
    const updateTitle = (e) => props.onType(props.id, "title", e.target.value)
    const updateDescription = (e) => props.onType(props.id, "description", e.target.value)
    return (
        <li className="note">
            <input className="note__title" type="text" placeholder="title" value={props.title} onChange={updateTitle}/>
            <textarea className="note__description" placeholder="description" value={props.description} onChange={updateDescription}/>
            <span className="note__delete" onClick={deleteById}>X</span>
        </li>
    )
}

export default Note;