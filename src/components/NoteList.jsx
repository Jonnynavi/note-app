import { useState } from "react";
import NoteShow from "./NoteShow";

function NoteList({setCreateNoteShow}){
    
    const handleClick = (event) => {
        setCreateNoteShow(false)
    }

    return(
        <div>
            <NoteShow />
            <NoteShow />
            <NoteShow />
            <button onClick={handleClick}>Add Note</button>
        </div>
    )
}

export default NoteList;
