import React from 'react';
import { useSelector } from 'react-redux';
import { neighboringCells } from '../../constants/neighboringCellsSize';

import { getDirections, getLabyrinthCells, getStartCell } from '../../store/game/selectors';

import './index.scss';

const menuStyle = {
    width: neighboringCells.size * 0.25 + 2.5 * neighboringCells.size + 'rem',
    height: (neighboringCells.size / 5 + 2) * 0.25 + 5 * (neighboringCells.size / 5) + 'rem'
}

const Menu = () => {
    const labyrinthCells = useSelector(getLabyrinthCells);
    const startCell = useSelector(getStartCell);
    const directions = useSelector(getDirections);
    console.log(labyrinthCells);
    console.log(directions);

    return (
        <div className='menu'>
            <div style={menuStyle} className='menu__labyrinth'>
                {
                    labyrinthCells.map((labyrinthCell, index) => {
                        return (
                            <div 
                                className={`menu__labyrinth__cell ${directions[index]}`} 
                                key={index}>
                            </div>
                        )
                        
                    })
                }
            </div>
            <input type='button' value='Далее' />
        </div>
    )
};

export default Menu;