import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { neighboringCells } from '../../constants/neighboringCellsSize';
import { startNewGameAction } from '../../store/game/actions';
import { getDirections, getLabyrinthCells, getStartCell } from '../../store/game/selectors';

import './index.scss';

const menuStyle = {
    width: neighboringCells.size * 0.25 + 2.5 * neighboringCells.size + 'rem',
    height: (neighboringCells.size / 5 + 2) * 0.25 + 5 * (neighboringCells.size / 5) + 'rem'
}

const Menu = () => {
    const dispatch = useDispatch();

    const labyrinthCells = useSelector(getLabyrinthCells);
    const directions = useSelector(getDirections);

    const newGameHandler = () => {
        dispatch(startNewGameAction());
    };

    return (
        <div className='menu'>
            <div style={menuStyle} className='menu__labyrinth'>
                {
                    labyrinthCells.map((_, index) => {
                        return (
                            <div 
                                className={`menu__labyrinth__cell ${directions[index]}`} 
                                key={index}>
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