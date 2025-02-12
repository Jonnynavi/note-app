import { useState } from 'react';
import NoteList from './components/NoteList';
import NavBar from "./components/NavBar";
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

    const editNote = (editedNote) => {
        console.log("part 1")
        setNotes((oldNotes) =>
            oldNotes.map((note) =>
                note.id === editedNote.id ? {...note, ...editedNote} :  note
            )
        );
    };

    const deleteNote = (noteId) => {
        setNotes((oldNotes) => oldNotes.filter((note) => note.id !== noteId));
    };




    function renderNewNote(){
        if(createNoteShow){
            return <NoteList setCreateNoteShow={setCreateNoteShow} noteList={notes} editNote={editNote} deleteNote={deleteNote}/>
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