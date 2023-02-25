import axios from "axios";
import React, { useEffect, useState } from "react";
import NoteForm from "./NoteForm";
import NoteList from "./NoteList";

const Notes = () => {
    const [notes, setnotes] = useState([]);

    async function getNotes(){
        const notesList = await axios.get("http://localhost:5001/notes")
        setnotes(notesList.data);
    }

    useEffect(() => {
        getNotes();
    }, [])

  return (
    <div>Notes
        <NoteForm getNotes={getNotes} />
        <NoteList notes={notes} />
    </div>
  )
}

export default Notes