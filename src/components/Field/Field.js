import React from 'react';
import { useSelector } from 'react-redux';

import { fieldSize } from '../../constants/fieldSize';
import { getFieldCells, getStartCell } from '../../store/game/selectors';
import { Cell } from '../Cell';

import './index.scss';

const fieldStyle = {
    width: (2* fieldSize.maxCellValue) * 0.25 + 10 * fieldSize.maxCellValue + 'rem',
    height: (2 * fieldSize.maxCellValue) * 0.25 + 10 * fieldSize.maxCellValue + 'rem'
}

const Field = () => {
    const cells = useSelector(getFieldCells);
    const startCell = useSelector(getStartCell);

    return (
        <div className='field' style={fieldStyle}>
            {
                cells.map((cell, index) => <Cell key={index} cell={cell} startCell={startCell} />)
            }
        </div>
    );
};

export default Field;