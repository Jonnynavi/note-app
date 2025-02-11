import { useState } from "react";

function CategoriesDropDown(){
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState("");

    const handleClick = () =>{
        setIsOpen(!isOpen);
    }

    const handleSelect = (option) => {
        setSelected(option);
    }

    const options = ["Work", "School", "Books", "All"]

    function renderOptions(){
        return options.map((option) => (
            <li><a className="dropdown-item" href="#">{option}</a></li>
        ));
    }

    return(
            <div className="dropdown">
                <button className="btn btn-outline-primary dropdown-toggle" type="button"  onClick={handleClick}>
                    Category    
                </button>
                <ul className={`dropdown-menu ${isOpen ? 'show':'' }`}>
                    {renderOptions()}
                </ul>   
            </div>
    )
}

export default CategoriesDropDown;