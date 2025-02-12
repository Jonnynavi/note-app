import { useState } from "react";
import CategoriesDropDown from "./CategoriesDropDown";
function EditNote({handleClick}){

    const [textArea, setTextArea] = useState("");
    const [title, setTitle] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleCategory = (e) => {
        e.preventDefault();
    }

    return(
        <div className="edit">
            <form onSubmit={handleSubmit}>
                <div class="mb-3">
                    <label  class="form-label">Title</label>
                    <input  class="form-control" onChange={(e) => setTitle(e.target.value)} value={title} />
                </div>
                <div class="mb-3">
                    <CategoriesDropDown handleCategory={handleCategory}/>
                </div>
                <div class="mb-3">
                    <label  class="form-label">Note</label>
                    <textarea class="form-control" value={textArea} onChange={(e) => setTextArea(e.target.value)} rows="3"></textarea>
                </div>
                <button onClick={handleClick} className="btn btn-outline-success">Edit</button>
            </form>
        </div>
    )
}

export default EditNote;