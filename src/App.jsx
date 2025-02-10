import NoteList from "./components/Notelist"

function App(){

    return(
        <div>
            <div className="app">
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <span className="navbar-brand mb-0 h1">Navi Notes</span>
                </div>
            </nav>
                <NoteList />
                <div>Note</div>
                <input type="text" placeholder="search" />
            </div>
        </div>
    )
}

export default App