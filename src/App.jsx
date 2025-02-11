import { useState } from 'react'
import NoteList from "./components/Notelist"
import NavBar from "./components/NavBar"
import CreateNote from './components/CreateNote';

function App(){
    const [note, setNote] = useState([]);

    const [createNoteShow, setCreateNoteShow] = useState(true);

    function renderNewNote(){
        if(createNoteShow){
            return <NoteList setCreateNoteShow={setCreateNoteShow} />
        }else{
            return <CreateNote setCreateNoteShow={setCreateNoteShow} />
        }
    }

    return(
        <div>
            <NavBar />
            {renderNewNote()}         
        </div>
    )
}

export default App