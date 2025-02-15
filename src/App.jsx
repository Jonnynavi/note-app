import { useState, useEffect, useContext } from 'react';
import './main.css'
import NoteList from './components/NoteList';
import NavBar from "./components/NavBar";
import CreateNote from './components/CreateNote';
import NoteContext from './context/note';

function App(){
    
    const { fetchNotes } = useContext(NoteContext)
    const [createNoteShow, setCreateNoteShow] = useState(true);

    useEffect(() => {
        fetchNotes()
    }, [fetchNotes]);


    function renderNewNote(){
        if(createNoteShow){
            return <NoteList setCreateNoteShow={setCreateNoteShow} />
        }else{
            return <CreateNote setCreateNoteShow={setCreateNoteShow}  />
        }
    };

    return(
        <div className='content'>
            <NavBar />
            {renderNewNote()}         
        </div>
    )
}

export default App;