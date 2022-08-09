import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';

import { neighboringCells } from '../../constants/neighboringCellsSize';
import { setDisabledCellClick, startNewGameAction } from '../../store/game/actions';
import { getDirections, getLabyrinthCells } from '../../store/game/selectors';

import './index.scss';

const menuStyle = {
    width: neighboringCells.size * 0.25 + 2.5 * neighboringCells.size + 'rem',
    height: (neighboringCells.size / 5 + 2) * 0.25 + 5 * (neighboringCells.size / 5) + 'rem'
}

const Menu = () => {
    const dispatch = useDispatch();

    const labyrinthCells = useSelector(getLabyrinthCells);
    const directions = useSelector(getDirections);

    useEffect(() => {
        setTimeout(() => dispatch(setDisabledCellClick(false)), 5000);
    }, [labyrinthCells]);

    const getId = () => {
        return nanoid();
    }

    const newGameHandler = () => {
        dispatch(setDisabledCellClick(true));
        dispatch(startNewGameAction());
    };

    return (
        <div className='menu'>
            <div style={menuStyle} className='menu__labyrinth'>
                {
                    labyrinthCells.map((_, index) => {
                        return (
                            <div
                                style={{
                                    animationDelay: `${index * 0.5}s`
                                }}
                                className={`menu__labyrinth__cell ${directions[index]}`} 
                                key={getId()}>
                            </div>
                        )
                        
                    })
                }
            </div>
            <input className='menu__start' type='button' onClick={ () => newGameHandler() } value='Далее' />
        </div>
    )
};

export default Menu;