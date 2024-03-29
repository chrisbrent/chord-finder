import React, { useState } from 'react';
import {DropdownButton, Dropdown, Container} from 'react-bootstrap';
import {notes} from '../resources/constants';

interface IScalePickerProps {
    onSelectScale: Function;
}

function ScalePicker(props: IScalePickerProps) {
    const [currentScale, setCurrentScale] = useState('Pick a scale');

    const handleClick = (key: string) => {
        const {onSelectScale} = props;
        setCurrentScale(key);
        onSelectScale(key);
    }

    const scaleOptions = notes.map( n =>
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
                    id="scale-dropdown-button"
                    title={currentScale}
                    onSelect = {handleClick}
                >
                    {scaleOptions}
                </DropdownButton>
            </Container>
        </>
    );
}

export default ScalePicker;
