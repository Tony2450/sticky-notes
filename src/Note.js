import React from "react";

const Note = (props) => (
    <li className="note">
        <input className="note__title" type="text" placeholder={props.title} />
        <textarea className="note__description" placeholder={props.description} />
        <span className="note__delete">X</span>
    </li>
)

export default Note;