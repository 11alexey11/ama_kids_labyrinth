import React from 'react';

import startPng from '../../assets/start.png';
import rightAnswer from '../../assets/like.png';

import './index.scss';

const Cell = ({ cell, lastLabyrinthCell, startCell, isDisabledCellClick, isEndGame , clickCellHandler }) => {
    return (
        <div disabled={isDisabledCellClick} onClick={ () => clickCellHandler(cell, lastLabyrinthCell) } className={`cell ${isDisabledCellClick ? 'disabled' : ''}`}>
            {
                cell.x === startCell.x && cell.y === startCell.y &&
                    <img src={startPng} className='cell__start' />
            }
            {
                cell.x === lastLabyrinthCell.x && cell.y === lastLabyrinthCell.y && isEndGame &&
                    <img src={rightAnswer} className='cell__right' />
            }
        </div>
    )
};

export default Cell;