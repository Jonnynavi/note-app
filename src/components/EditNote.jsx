import { useState, useContext } from "react";
import CategoriesDropDown from "./CategoriesDropDown";
import NoteContext from "../context/note";

function EditNote({handleClick, note}){
    const {editNote} = useContext(NoteContext);
    
    const [textArea, setTextArea] = useState(note.noteText);
    const [title, setTitle] = useState(note.title);
    const [category, setCategory] = useState(note.category|| "");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("part 2")
        editNote({
            title,
            category,
            noteText: textArea,
            id: note.id
        });

        handleClick();
    }

    const handleCategory = (category) => {
        setCategory(category);
    }

    return(
        <div className="edit">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label  className="form-label">Title</label>
                    <input  className="form-control" onChange={(e) => setTitle(e.target.value)} value={title} />
                </div>
                <div className="mb-3">
                    <CategoriesDropDown handleCategory={handleCategory} options={["Work", "School", "Books"]}/>
                </div>
                <div className="mb-3">
                    <label  className="form-label">Note</label>
                    <textarea className="form-control" value={textArea} onChange={(e) => setTextArea(e.target.value)} rows="3"></textarea>
                </div>
                <button type="submit" className="btn btn-outline-success">Save</button>
            </form>
        </div>
    )
}

export default EditNote;