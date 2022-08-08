import { generateField } from '../../utils/generateField';
import { generateLabyrinthCells } from '../../utils/generateLabyrinthCells';
import { generateRandomCell } from '../../utils/generateRandomCell';
import { gameActionTypes } from './actionTypes';

const startCell = generateRandomCell();
const [labyrinthCells, directions] = generateLabyrinthCells(startCell);

const initialState = {
    cells: generateField(),
    startCell: startCell,
    labyrinthCells: labyrinthCells,
    directions: directions
};

export const gameReducer = (state = initialState, action) => {
    switch (action.type) {
        case gameActionTypes.startNewGame: {
            return {
                ...state
            }
        }
        default:
            return state
    }
};