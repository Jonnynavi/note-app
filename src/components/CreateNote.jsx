import { useState, useContext } from "react";
import CategoriesDropDown from "./CategoriesDropDown";
import NoteContext from "../context/note";

function CreateNote({setCreateNoteShow}){

    const { createNote } = useContext(NoteContext)
    const [title, setTitle] = useState("");
    const [noteText, setNoteText] = useState("");
    const [category, setCategory] = useState("");

    const handleChange = (event) => {
        setTitle(event.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        createNote({
            title,
            category,
            noteText
        });
        setCreateNoteShow(true);
    };

    const handleCategory = (category) =>{
        setCategory(category);
    }

    return(
        <div className="create-note">
            <form onSubmit={handleSubmit}>
                <div class="mb-3">
                    <label  class="form-label">Title</label>
                    <input  class="form-control" value={title} onChange={handleChange} />
                </div>
                <div class="mb-3">
                    <CategoriesDropDown handleCategory={handleCategory} options={["Work", "School", "Books"]}/>
                </div>
                <div class="mb-3">
                    <label  class="form-label">Note</label>
                    <textarea class="form-control" value={noteText} onChange={(e) => setNoteText(e.target.value)} rows="3"></textarea>
                </div>
                <button className="btn btn-outline-success" >Create</button>
            </form>
        </div>
    )
}

export default CreateNote;