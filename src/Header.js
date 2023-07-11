import React from "react";
import "./index.css";

const Header = (props) => {
  const input = function(e){
    const searchInput = e.target.value;
    props.setSearchText(searchInput);
  }

  
    return(
    <header>
      <h1 className="app-header__title">Super Sticky Notes</h1>
      <aside className="app-header__controls">
        <button className="add-new">+ New Note</button>
        <input
          className="search"
          type="text"
          value={props.searchText}
          placeholder={"Search for notes here..."}
          onChange={input}
        />
      </aside>
    </header>
)}

export default Header;