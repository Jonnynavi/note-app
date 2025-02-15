import { useState, useContext } from "react";
import EditNote from "./EditNote";
import NoteContext from "../context/note";

function NoteShow({note}){
    const { deleteNote} = useContext(NoteContext);
    const [showEdit, setShowEdit] = useState(false);

    const {title, category, noteText} = note;
    const handleClick = () =>{
        setShowEdit(!showEdit);
    };

    const handleDelete = () =>{
        deleteNote(note.id);
    };

    function renderEdit(){
        if(!showEdit){
            return  <div><h5 className="card-title">{title}</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">{category}</h6>
            <p className="card-text">{noteText}</p>
            <button onClick={handleClick} className="mx-2 btn btn-outline-success">Edit</button>
            <button className="btn btn-outline-danger " onClick={handleDelete}>Delete</button>
            </div>
        }else{
            return <EditNote note={note} handleClick={handleClick}/>
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