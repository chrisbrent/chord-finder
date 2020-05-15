import React, { useState } from 'react';
import {Container, Row} from 'react-bootstrap';
import Fretboard from './Fretboard';
import NotePicker from './NotePicker';
import ScalePicker from './ScalePicker';
import {notes, majorScaleIntervals} from '../resources/constants';

function Content() {
    const [selectedNotes, setSelectedNotes] = useState([]);

    const onSelectNote = (note) =>{
        setSelectedNotes([note]);
    }

    const onSelectScale = (rootNote) =>{
        setSelectedNotes([]);
        majorScaleIntervals.forEach( i => {
            const offset= notes.indexOf(rootNote);
            const idx = (offset+i) % notes.length;
            setSelectedNotes(selectedNotes => [...selectedNotes, notes[idx]]);
        });
    }

    return (
        <>
            <Container>
                <Row>
                    <Fretboard selectedNotes={selectedNotes}/>
                </Row>
                <Row className="margin-top">
                    <NotePicker onSelectNote={onSelectNote}/>
                </Row>
                <Row className="margin-top">
                    <ScalePicker onSelectScale={onSelectScale}/>
                </Row>
            </Container>
        </>
    );
}

export default Content;
