import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';


import { neighboringCells } from '../../constants/neighboringCellsSize';
import { setDisabledCellClick, startNewGameAction } from '../../store/game/actions';
import { getDirections, getIsEndGame, getLabyrinthCells } from '../../store/game/selectors';
import { generateIds } from '../../utils/generateIds';

import './index.scss';

const menuStyle = {
    width: neighboringCells.size * 0.25 + 2.5 * neighboringCells.size + 'rem',
    height: (neighboringCells.size / 5 + 2) * 0.25 + 5 * (neighboringCells.size / 5) + 'rem'
}

const Menu = () => {
    const [ids, setIds] = useState(generateIds());

    const dispatch = useDispatch();

    const labyrinthCells = useSelector(getLabyrinthCells);
    const directions = useSelector(getDirections);
    const isEndGame = useSelector(getIsEndGame);

    useEffect(() => {
        setTimeout(() => dispatch(setDisabledCellClick(false)), 5000);
    }, [labyrinthCells]);

    useEffect(() => {
        setIds(generateIds)
    }, [labyrinthCells]);

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
                                key={ids[index]}>
                            </div>
                        )
                        
                    })
                }
            </div>
            {
                isEndGame && <input className='menu__start' type='button' onClick={ () => newGameHandler() } value='Далее' />
            }
        </div>
    )
};

export default Menu;