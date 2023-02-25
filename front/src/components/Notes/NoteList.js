import React from 'react'

const NoteList = ({notes}) => {
    function renderNotes(){
        return notes.map((note, i) => {
            return   <li key={i} className='w-80 p-2 bg-red-100 mt-1 m-auto'>
            <h2>{note.title}</h2>
            <p>{note.content}</p>
        </li>
        })
    }
  return (
    <div>
        <h2 className='text-center'>Note List</h2>
        <ul className='m-auto'>
        {renderNotes()}

        </ul>
    </div>
  )
}

export default NoteList