import { useState } from "react";
import NoteShow from "./NoteShow";

function NoteList({setCreateNoteShow, noteList, editNote, deleteNote}){
    
    const handleClick = () => {
        setCreateNoteShow(false);
    };

    function renderNotes(){
        return noteList.map((note, index) => (
            <NoteShow 
                note={note}
                key={index}
                editNote={editNote}
                deleteNote={deleteNote}
            />
        ));
    }

    return(
        <div className="note-list">
            {renderNotes()}
            <button onClick={handleClick}>Add Note</button>
        </div>
    )
}

export default NoteList;
