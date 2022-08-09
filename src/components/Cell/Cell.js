import React from 'react';

import startPng from '../../assets/start.png';

import './index.scss';

const Cell = ({ cell, startCell, clickCellHandler }) => {
    


    return (
        <div onClick={ () => clickCellHandler(cell) } className='cell'>
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