import { useState, useEffect, useContext } from 'react';
import './main.css'
import NoteList from './components/NoteList';
import NavBar from "./components/NavBar";
import CreateNote from './components/CreateNote';
import NoteContext from './context/note';

function App(){
    
    const { fetchNotes } = useContext(NoteContext)

    const [createNoteShow, setCreateNoteShow] = useState(true);

    console.log()
    useEffect(() => {
        fetchNotes()
    }, [fetchNotes]);


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
            return <NoteList setCreateNoteShow={setCreateNoteShow} />
        }else{
            return <CreateNote setCreateNoteShow={setCreateNoteShow}  />
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