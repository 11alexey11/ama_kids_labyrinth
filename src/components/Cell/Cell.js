import React from 'react';

import startPng from '../../assets/start.png';

import './index.scss';

const Cell = ({ cell, startCell }) => {
    return (
        <div className='cell'>
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