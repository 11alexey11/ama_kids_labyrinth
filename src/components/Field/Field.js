import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fieldSize } from '../../constants/fieldSize';
import { setDisabledCellClick, setIsEndGame } from '../../store/game/actions';
import { getFieldCells, getIsDisabledCellClick, getLabyrinthCells, getStartCell } from '../../store/game/selectors';
import { Cell } from '../Cell';

import './index.scss';

const fieldStyle = {
    width: (2* fieldSize.maxCellValue) * 0.25 + 10 * fieldSize.maxCellValue + 'rem',
    height: (2 * fieldSize.maxCellValue) * 0.25 + 10 * fieldSize.maxCellValue + 'rem'
}

const Field = () => {
    const dispatch = useDispatch();

    const cells = useSelector(getFieldCells);
    const startCell = useSelector(getStartCell);
    const labyrinthCells = useSelector(getLabyrinthCells);
    const lastLabyrinthCell = labyrinthCells[labyrinthCells.length - 1];
    const isDisabledCellClick = useSelector(getIsDisabledCellClick);

    const clickCellHandler = (cell, lastLabyrinthCell) => {
        dispatch(setDisabledCellClick(true));
        dispatch(setIsEndGame());
        if (cell.x === lastLabyrinthCell.x && cell.y === lastLabyrinthCell.y) {
            console.log(true)
        }
    }

    return (
        <div className='field' style={fieldStyle}>
            {
                cells.map((cell, index) => 
                    <Cell 
                        key={index}
                        isDisabledCellClick={isDisabledCellClick}
                        lastLabyrinthCell={lastLabyrinthCell}
                        cell={cell}
                        startCell={startCell}
                        clickCellHandler={ clickCellHandler } 
                    />
                )
            }
        </div>
    );
};

export default Field;