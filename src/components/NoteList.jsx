import { useState } from "react";
import NoteShow from "./NoteShow";

function NoteList(){

    return(
        <div>
            <NoteShow />
            <NoteShow />
            <NoteShow />
        </div>
    )
}

export default NoteList;
