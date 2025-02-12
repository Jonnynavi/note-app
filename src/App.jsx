import { useState } from 'react'
import NoteList from "./components/Notelist"
import NavBar from "./components/NavBar"
import CreateNote from './components/CreateNote';

function App(){
    const [notes, setNotes] = useState([
        {
            title: "harry",
            category: "Work",
            noteText: "sup",
            id: 0
        }
    ]);

    const [createNoteShow, setCreateNoteShow] = useState(true);

    const createNote = (title, category, noteText) => {
        let newNote ={
            title,
            category,
            noteText,
            id: Math.random() * 10
        };

        setNotes([...notes, newNote]);
    };


    function renderNewNote(){
        if(createNoteShow){
            return <NoteList setCreateNoteShow={setCreateNoteShow} noteList={notes} />
        }else{
            return <CreateNote setCreateNoteShow={setCreateNoteShow} createNote={createNote} />
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