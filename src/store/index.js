import { combineReducers, compose, createStore } from 'redux';
import { gameReducer } from './game/reducer';

const reducers = combineReducers({
    game: gameReducer
});

const composeEnhacers = window.__REDUX_DEVTOOLS__EXTENSION__COMPOSE || compose;

export const store = createStore(reducers, composeEnhacers());