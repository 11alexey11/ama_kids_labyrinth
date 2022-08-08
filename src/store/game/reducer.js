import { generateField } from '../../utils/generateField';
import { generateRandomCell } from '../../utils/generateRandomCell';
import { gameActionTypes } from './actionTypes';

const initialState = {
    cells: generateField(),
    startCell: generateRandomCell()
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