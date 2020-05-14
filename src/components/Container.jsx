import React, { useState } from 'react';
import Fretboard from './Fretboard';
import NotePicker from './NotePicker';

function Container() {
    const [selectedNote, setSelectedNote] = useState(-1);

    const onSelectNote = (note) =>{
        setSelectedNote(note);
    }

    return (
        <>
            <Fretboard selectedNote={selectedNote}/>
            <NotePicker onSelectNote={onSelectNote}/>
        </>
    );
}

export default Container;
