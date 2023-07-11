import React from "react";
import { useState } from "react";
import Header from "./Header";
import NotesList from "./Noteslist";

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

const [searchText, setSearchText] = useState("Search for me");

return (
< div className="app" >
  <Header />
  <NotesList />
</div >
)
};

export default App;
