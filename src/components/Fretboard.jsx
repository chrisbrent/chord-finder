import React, { useState } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {notes} from '../resources/constants';

function Fretboard (props) {
    const {selectedNotes} = props;

    const strings = {
        0: 'E',
        1: 'A',
        2: 'D',
        3: 'G',
        4: 'B',
        5: 'E',
    }

    const mapNotesToString = (rootNote) => {
        return stringNotes(24, notes.indexOf(rootNote)).map( n => {
            const selected = selectedNotes.indexOf(n) > -1 ? 'selected-note' : 'note';
            return(
                <Col className={selected}>
                    {n}
                </Col>
                );
        })
    }

    const listStrings = Object.entries(strings).reverse().map( ([key, value]) => {
        return (
        <Row>
            <Col>
                <Row>
                    <Col className="string">{key}</Col>
                    {
                        mapNotesToString(value)
                    }
                </Row>
            </Col>
        </Row>
        );
        }
    );

    

    function stringNotes(scaleLength, startNote) {
        const result = [];

        for (let i=startNote; i < scaleLength+startNote; i++){
            result.push(notes[i%notes.length])
        }

        return result;
    }

    return (
        <>
            <style type="text/css">
            {`
            .note {
            background-color: brown;
            color: white;
            }
            .selected-note {
            background-color: green;
            color: white;
            }
            .string {
            background-color: black;
            color: white;
            }
            `}
            </style>

            <Container>
                {listStrings}
            </Container>
        </>
    );
}

export default Fretboard;
