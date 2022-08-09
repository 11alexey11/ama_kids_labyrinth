import React from 'react';
import { useSelector } from 'react-redux';

import { fieldSize } from '../../constants/fieldSize';
import { getFieldCells, getLabyrinthCells, getStartCell } from '../../store/game/selectors';
import { Cell } from '../Cell';

import './index.scss';

const fieldStyle = {
    width: (2* fieldSize.maxCellValue) * 0.25 + 10 * fieldSize.maxCellValue + 'rem',
    height: (2 * fieldSize.maxCellValue) * 0.25 + 10 * fieldSize.maxCellValue + 'rem'
}

const Field = () => {
    const cells = useSelector(getFieldCells);
    const startCell = useSelector(getStartCell);
    const labyrinthCells = useSelector(getLabyrinthCells);
    const lastLabyrinthCell = labyrinthCells[labyrinthCells.length - 1];

    const clickCellHandler = (cell) => {
        console.log(cell);
    }

    return (
        <div className='field' style={fieldStyle}>
            {
                cells.map((cell, index) => <Cell key={index} cell={cell} startCell={startCell} clickCellHandler={ clickCellHandler } />)
            }
        </div>
    );
};

export default Field;