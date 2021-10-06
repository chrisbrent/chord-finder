import * as constants from '../resources/constants';

export interface IScale {
    name: string;
    rootNote: string;
    description: string;
    intervals: Array<number>;
}

export class MajorScale implements IScale {
    constructor(
        name: string,
        rootNote: string,
        description: string,
    ) {
        this.name = name;
        this.rootNote = rootNote;
        this.description = description;
    }

    name: string;
    rootNote: string;
    description: string;
    intervals = constants.majorScaleIntervals;
}
