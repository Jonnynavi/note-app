import { useState } from "react";
import EditNote from "./EditNote";

function NoteShow({editNote, note, deleteNote}){
    const [showEdit, setShowEdit] = useState(false)

    const handleClick = () =>{
        setShowEdit(!showEdit);
    };

    const handleDelete = () =>{
        deleteNote(note.id);
    };

    function renderEdit(){
        if(!showEdit){
            return  <div><h5 className="card-title">{note.title}</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">{note.category}</h6>
            <p className="card-text">{note.noteText}</p>
            <button onClick={handleClick} className="mx-2 btn btn-outline-success">Edit</button>
            <button className="btn btn-outline-danger " onClick={handleDelete}>Delete</button>
            </div>
        }else{
            return <EditNote editNote={editNote} note={note} handleClick={handleClick}/>
        }
    }

    return(
            <div className="card">
                <div className="card-body">
                   {renderEdit()}
                </div>
            </div>
    )
}

export default NoteShow;