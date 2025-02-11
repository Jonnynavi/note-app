import { useState } from "react";
import CategoriesDropDown from "./CategoriesDropDown";

function CreateNote({setCreateNoteShow}){

    const [title, setTitle] = useState("");
    const [note, setNote] = useState("");

    const handleChange = (event) => {
        setTitle(event.target.value);
    }
    const handleClick = (event) => {
        setCreateNoteShow(true)
    };

    return(
        <div>
            <form>
                <div class="mb-3">
                    <label  class="form-label">Title</label>
                    <input  class="form-control" value={title} onChange={handleChange} />
                </div>
                <div class="mb-3">
                    <CategoriesDropDown />
                </div>
                <div class="mb-3">
                    <label  class="form-label">Example textarea</label>
                    <textarea class="form-control" value={note} onChange={(e) => setNote(e.target.value)} rows="3"></textarea>
                </div>
                <button onClick={handleClick} className="btn btn-outline-success">Create</button>
            </form>
        </div>
    )
}

export default CreateNote;