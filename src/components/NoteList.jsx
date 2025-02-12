import { useState } from "react";
import NoteShow from "./NoteShow";

function NoteList({setCreateNoteShow, noteList}){
    
    const handleClick = (event) => {
        setCreateNoteShow(false);
    };

    function renderNotes(){
        return noteList.map((note, index) => (
            <NoteShow 
                title={note.title} 
                category={note.category} 
                noteText={note.noteText} 
                key={index}
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
