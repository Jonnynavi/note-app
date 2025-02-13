import { useState, useEffect } from 'react';
import NoteList from './components/NoteList';
import NavBar from "./components/NavBar";
import CreateNote from './components/CreateNote';

function App(){

    const noteText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    const [notes, setNotes] = useState([
        {
            title: "harry",
            category: "Work",
            noteText,
            id: 0
        },
        {
            title: "Ice",
            category: "Work",
            noteText,
            id: 1
        },
        {
            title: "money",
            category: "School",
            noteText,
            id: 2
        },
        {
            title: "ho",
            category: "Work",
            noteText,
            id: 3
        },
        {
            title: "lucif",
            category: "Books",
            noteText,
            id: 4
        }
    ]);
    const [filteredSearch, setFilteredSearch] = useState(notes);
    const [createNoteShow, setCreateNoteShow] = useState(true);

    useEffect(() => {
        setFilteredSearch((prevFilteredNotes) => {
            return notes.filter(note =>
                prevFilteredNotes.some(filteredNote => filteredNote.id === note.id)
            );
        });
    }, [notes]);

    const createNote = (title, category, noteText) => {
        let newNote ={
            title,
            category,
            noteText,
            id: Math.random() * 10 * Math.random()
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

    const searchFilter = (filter) => {
        let results = notes;
        if(filter.category !== ""){
            results = results.filter((note) => {
                return  note.category.toLowerCase() === filter.category.toLowerCase();
            });
        }
        if(filter.title !== ""){
            results = results.filter((note) => {
                return  note.title.toLowerCase().startsWith(filter.title.toLowerCase())
            });
        }
        setFilteredSearch(results);
    }
    
    function renderNewNote(){
        if(createNoteShow){
            return <NoteList setCreateNoteShow={setCreateNoteShow} noteList={filteredSearch} editNote={editNote} deleteNote={deleteNote}/>
        }else{
            return <CreateNote setCreateNoteShow={setCreateNoteShow} createNote={createNote} />
        }
    };

    return(
        <div className='content'>
            <NavBar searchFilter={searchFilter} />
            {renderNewNote()}         
        </div>
    )
}

export default App;