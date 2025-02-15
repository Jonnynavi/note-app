import { useState, useContext } from "react";
import CategoriesDropDown from "./CategoriesDropDown";
import NoteContext from "../context/note";


function NavBar({}){

    const {searchFilter, setFilter} =  useContext(NoteContext)
    const [title, setTitle] = useState("")
    const [category, setCategory] = useState("")

    const handleCategory = (category) => {
        if(category === "All"){
            category = ""
        }
        setCategory(category)
        searchFilter({
            title,
            category
        })
    }

    const handleChange = (e) => {
        let title = e.target.value;
        setTitle(e.target.value)
        searchFilter({
            title,
            category
        })
    }



    return(
        <nav class="navbar bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand">Navi Notes</a>
                <form class="d-flex" role="search">
                    <input class="form-control me-2" onChange={handleChange} type="search" placeholder="Search" aria-label="Search" value={title}/>
                    <CategoriesDropDown handleCategory={handleCategory} options={["Work", "School", "Books","All"]}/>
                </form>
            </div>
        </nav>
    )
}

export default NavBar;