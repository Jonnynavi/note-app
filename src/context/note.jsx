import { createContext, useState, useCallback } from "react";
import axios from "axios";

const  NoteContext = createContext();

function Provider({ children }) {

    const [notes, setNotes] = useState([]);
    
    const fetchNotes = useCallback(async () => {
        const response = await axios.get('http://localhost:3001/notes');
        setNotes(response.data);
    }, []);

    const valueToShare = {
        notes,
        fetchNotes
    }

    return(
        <NoteContext.Provider value={valueToShare}>
            {children}
        </NoteContext.Provider>
    );
};

export { Provider };
export default NoteContext;