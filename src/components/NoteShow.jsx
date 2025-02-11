function NoteShow({title, category, noteText}){

    return(
        <div>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">{category}</h6>
                    <p className="card-text">{noteText}</p>
                    <a href="#" className="card-link">Expand</a>
                </div>
            </div>
        </div>
    )
}

export default NoteShow;