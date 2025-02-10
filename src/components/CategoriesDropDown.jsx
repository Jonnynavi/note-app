
function CategoriesDropDown(){
    return(
        <div>
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                    Dropdown button
                </button>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Work</a></li>
                    <li><a className="dropdown-item" href="#">School</a></li>
                    <li><a className="dropdown-item" href="#">Books</a></li>
                    <li><a className="dropdown-item" href="#">All</a></li>
                </ul>   
            </div>
        </div>
    )
}

export default CategoriesDropDown;