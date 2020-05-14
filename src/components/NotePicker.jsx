import React, { useState } from 'react';
import {DropdownButton, Dropdown, Container, Row, Col} from 'react-bootstrap';
import {notes} from '../resources/constants';

function NotePicker(props) {
    const [currentNote, setCurrentNote] = useState('Pick a note');

    const handleClick = (key, e) => {
        const {onSelectNote} = props;
        setCurrentNote(key);
        onSelectNote(key);
    }

    const noteOptions = notes.map( n =>
            <Dropdown.Item
                as="button"
                eventKey={n}
            >
                {n}
            </Dropdown.Item>
        );

    return(
        <>
            <Container>
                <DropdownButton
                    id="note-dropdown-button"
                    title={currentNote}
                    onSelect = {handleClick}
                >
                    {noteOptions}
                </DropdownButton>
            </Container>
        </>
    );
}

export default NotePicker;
