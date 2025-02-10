import CategoriesDropDown from "./CategoriesDropDown";

function NavBar(){
    return(
        <nav class="navbar bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand">Navi Notes</a>
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-outline-success" type="submit">Search</button>
                    <CategoriesDropDown />
                </form>
            </div>
        </nav>
    )
}

export default NavBar;