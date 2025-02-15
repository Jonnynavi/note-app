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

    const valueToShare = {
        notes,
        fetchNotes,
        createNote
    }

    return(
        <NoteContext.Provider value={valueToShare}>
            {children}
        </NoteContext.Provider>
    );
};

export { Provider };
export default NoteContext;