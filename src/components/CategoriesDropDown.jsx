import { useState } from "react";

function CategoriesDropDown({handleCategory, options}){
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState("Category");

 
    const handleClick = () =>{
        setIsOpen(!isOpen);
    }

    const handleSelect = (option) => {
        setSelected(option);
        setIsOpen(false);
        handleCategory(option)
    }


    function renderOptions(){
        return options.map((option) => (
            <li key={option + Math.random} onClick={() => handleSelect(option)}><a className="dropdown-item" href="#">{option}</a></li>
        ));
    }

    return(
            <div className="dropdown">
                <button className="btn btn-outline-primary dropdown-toggle" type="button"  onClick={handleClick}>
                    {selected}    
                </button>
                <ul className={`dropdown-menu ${isOpen ? 'show':'' }`}>
                    {renderOptions()}
                </ul>   
            </div>
    )
}

export default CategoriesDropDown;