import { useState } from "react";
import CategoriesDropDown from "./CategoriesDropDown";

function NavBar({searchFilter}){

    const [term, setTerm] = useState("")

    const handleChange = (e) => {
        let title = e.target.value;
        let isEmpty = true
        setTerm(e.target.value)
        if(e.target.value !== ""){
            isEmpty = false;
        };

        searchFilter({
            title,
            isEmpty
        })
    }


    return(
        <nav class="navbar bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand">Navi Notes</a>
                <form class="d-flex" role="search">
                    <input class="form-control me-2" onChange={handleChange} type="search" placeholder="Search" aria-label="Search" value={term}/>
                    <CategoriesDropDown />
                </form>
            </div>
        </nav>
    )
}

export default NavBar;