import { generateField } from '../../utils/generateNewGame';
import { gameActionTypes } from './actionTypes';

const initialState = {
    cells: generateField()
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