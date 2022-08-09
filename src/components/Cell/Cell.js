import React from 'react';

import startPng from '../../assets/start.png';

import './index.scss';

const Cell = ({ cell, lastLabyrinthCell, startCell, clickCellHandler, isDisabledCellClick }) => {
    return (
        <div disabled={isDisabledCellClick} onClick={ () => clickCellHandler(cell, lastLabyrinthCell) } className={`cell ${isDisabledCellClick ? 'disabled' : ''}`}>
            {
                cell.x === startCell.x && cell.y === startCell.y &&
                (
                    <img src={startPng} className='cell__start' />
                )
            }
        </div>
    )
};

export default Cell;