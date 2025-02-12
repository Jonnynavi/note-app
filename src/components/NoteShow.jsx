import { useState } from "react";
import EditNote from "./EditNote";

function NoteShow({title, category, noteText}){
    const [showEdit, setShowEdit] = useState(false)

    const handleClick = () =>{
        setShowEdit(!showEdit);
    };

    function renderEdit(){
        if(!showEdit){
            return  <div><h5 className="card-title">{title}</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">{category}</h6>
            <p className="card-text">{noteText}</p>
            <button onClick={handleClick} className="Edit-button btn btn-outline-success">Edit</button>
            </div>
        }else{
            return <EditNote handleClick={handleClick}/>
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