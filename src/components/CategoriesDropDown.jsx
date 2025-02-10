
function CategoriesDropDown(){
    return(
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                    Categories
                </button>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Work</a></li>
                    <li><a className="dropdown-item" href="#">School</a></li>
                    <li><a className="dropdown-item" href="#">Books</a></li>
                    <li><a className="dropdown-item" href="#">All</a></li>
                </ul>   
            </div>
    )
}

export default CategoriesDropDown;