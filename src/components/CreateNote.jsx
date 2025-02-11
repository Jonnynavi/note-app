import { useState } from "react";
import CategoriesDropDown from "./CategoriesDropDown";

function CreateNote({setCreateNoteShow, createNote}){

    const [title, setTitle] = useState("");
    const [note, setNote] = useState("");
    const [category, setCategory] = useState("");

    const handleChange = (event) => {
        setTitle(event.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        createNote(title, category, note);
        setCreateNoteShow(true);
    };

    const handleCategory = (category) =>{
        setCategory(category);
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div class="mb-3">
                    <label  class="form-label">Title</label>
                    <input  class="form-control" value={title} onChange={handleChange} />
                </div>
                <div class="mb-3">
                    <CategoriesDropDown handleCategory={handleCategory}/>
                </div>
                <div class="mb-3">
                    <label  class="form-label">Note</label>
                    <textarea class="form-control" value={note} onChange={(e) => setNote(e.target.value)} rows="3"></textarea>
                </div>
                <button className="btn btn-outline-success">Create</button>
            </form>
        </div>
    )
}

export default CreateNote;