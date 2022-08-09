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
    directions: directions,
    isDisabledCellClick: true,
    isEndGame: false
};

export const gameReducer = (state = initialState, action) => {
    switch (action.type) {
        case gameActionTypes.startNewGame: {
            const newStartCell = generateRandomCell();
            const [newLabyrinthCells, newDirections] = generateLabyrinthCells(newStartCell);
            return {
                ...state,
                startCell: newStartCell,
                labyrinthCells: newLabyrinthCells,
                directions: newDirections,
                isEndGame: false
            }
        }
        case gameActionTypes.setDisabledCellClick: {
            return {
                ...state,
                isDisabledCellClick: action.payload
            }
        }
        case gameActionTypes.setIsEndGame: {
            return {
                ...state,
                isEndGame: true
            }
        }
        default:
            return state
    }
};