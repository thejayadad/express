import axios from "axios";
import React, { useState } from "react";



const NoteForm = ({getNotes}) => {
    const [noteTitle, setNoteTitle] = useState("");
    const [noteContent, setNoteContent] = useState("");

async function saveNote(e){
    e.preventDefault();
    try {
        const noteData = {
            title: noteTitle,
            content: noteContent
        };
        await axios.post("http://localhost:5001/notes", noteData);
        getNotes();
    } catch (error) {
        console.error(error);
    }
}

  return (
    <div>
        <form onSubmit={saveNote}>
            <input
            placeholder='Title'
            type="text"
            value={noteTitle}
            onChange={(e) => {
                setNoteTitle(e.target.value)
            }}
            />
              <input
            placeholder='Content'
            value={noteContent}
            type="text"
            onChange={(e) => {
                setNoteContent(e.target.value)
            }}
            />
            <button type="submit">Save Note</button>
        </form>


    </div>
  )
}

export default NoteForm