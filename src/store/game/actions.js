import { gameActionTypes } from './actionTypes';

export const startNewGameAction = () => ({
    type: gameActionTypes.startNewGame
});

export const setDisabledCellClick = (isDisabledCellClick) => ({
    type: gameActionTypes.setDisabledCellClick,
    payload: isDisabledCellClick
});

export const setIsEndGame = () => ({
    type: gameActionTypes.setIsEndGame
});