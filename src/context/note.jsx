import { createContext, useState, useCallback, useEffect } from "react";
import axios from "axios";

const  NoteContext = createContext();

const url = "https://note-app-0zsm.onrender.com/notes"
function Provider({ children }) {

    const [notes, setNotes] = useState([]);
    const [filteredNotes, setfilteredNotes] = useState([]);
    const [filter, setFilter] = useState({
        title: "",
        category: ""
    })

 
    const fetchNotes = useCallback(async () => {
        const response = await axios.get(url);
        setNotes(response.data);
        setfilteredNotes(response.data)
    }, []);

    const applyFilter = (filter) => {
        setFilter(filter);
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
        setfilteredNotes(results);
    }
    
    //Anytime filter or notes change it will reapply the filters
    useEffect(() => {
        applyFilter(filter)
    }, [filter, notes]);

    const createNote = async (newNote) => {
        const response = await axios.post(url, newNote);

        const updatedNotes = [...notes, response.data];
        setNotes(updatedNotes);
    }

    const deleteNote = async (id) => {
        const response = await axios.delete(`${url}/${id}`);
        
        const updatedNotes = notes.filter((note => {
            return note.id !== id;
        }));

        setNotes(updatedNotes);
    }

    const editNote = async (note) => {
        const response = await axios.put(`${url}/${note.id}`, note);

        const updatedNotes = notes.map((updatedNote) => {
            if(note.id === updatedNote.id ){
                return {...updatedNote, ...response.data};
            }

            return updatedNote;
        })

        setNotes(updatedNotes);
    }

    const searchFilter = (newFilter) => {
        setFilter(newFilter);
    }

    const valueToShare = {
        filteredNotes,
        fetchNotes,
        createNote, 
        deleteNote,
        editNote,
        searchFilter
    }

    return(
        <NoteContext.Provider value={valueToShare}>
            {children}
        </NoteContext.Provider>
    );
};

export { Provider };
export default NoteContext;