import React from "react";
import "./index.css";

const Note = (props) => {
    const deleteById = () => props.removeNote(props.id)

    return (
        <li className="note">
            <input className="note__title" type="text" placeholder="title" value={props.title} />
            <textarea className="note__description" placeholder="description" value={props.description} />
            <span className="note__delete" onClick={deleteById}>X</span>
        </li>
    )
}

export default Note;