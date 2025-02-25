import { useState, useContext } from "react";
import NoteShow from "./NoteShow";
import NoteContext from "../context/note";

function NoteList({setCreateNoteShow, editNote, deleteNote}){
    
    const {filteredNotes} = useContext(NoteContext)

    const handleClick = () => {
        setCreateNoteShow(false);
    };

    function renderNotes(){
        return filteredNotes.map((note, index) => (
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
            <button className="btn btn-outline-primary btn-lg btn-block " style={{width: `100%`}} onClick={handleClick}>Add Note</button>
        </div>
    )
}

export default NoteList;
