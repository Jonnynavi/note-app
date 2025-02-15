import { createContext, useState, useCallback } from "react";
import axios from "axios";

const  NoteContext = createContext();

function Provider({ children }) {

    const [notes, setNotes] = useState([]);
    
    const fetchNotes = useCallback(async () => {
        const response = await axios.get('http://localhost:3001/notes');
        setNotes(response.data);
    }, []);

    const createNote = async (newNote) => {
        const response = await axios.post('http://localhost:3001/notes', newNote);

        const updatedNotes = [...notes, response.data];
        setNotes(updatedNotes);
    }

    const deleteNote = async (id) => {
        const response = await axios.delete(`http://localhost:3001/notes/${id}`);
        
        const updatedNotes = notes.filter((note => {
            return note.id !== id;
        }));

        setNotes(updatedNotes);
    }

    const editNote = async (note) => {
        const response = await axios.put(`http://localhost:3001/notes/${note.id}`, note);

        const updatedNotes = notes.map((updatedNote) => {
            if(note.id === updatedNote.id ){
                return {...updatedNote, ...response.data};
            }

            return updatedNote;
        })

        setNotes(updatedNotes);
    }
    const valueToShare = {
        notes,
        fetchNotes,
        createNote, 
        deleteNote,
        editNote
    }

    return(
        <NoteContext.Provider value={valueToShare}>
            {children}
        </NoteContext.Provider>
    );
};

export { Provider };
export default NoteContext;