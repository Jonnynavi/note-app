import { useState } from "react";
import NoteShow from "./NoteShow";

function NoteList({setCreateNoteShow, noteList, editNote}){
    
    const handleClick = (event) => {
        setCreateNoteShow(false);
    };

    function renderNotes(){
        return noteList.map((note, index) => (
            <NoteShow 
                note={note}
                key={index}
                editNote={editNote}
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
