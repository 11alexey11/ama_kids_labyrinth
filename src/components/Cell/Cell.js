import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types'

import { setDisabledCellClick, setIsEndGame, setIsRightAnswer } from '../../store/game/actions';
import { getLabyrinthCells } from '../../store/game/selectors';

import startPng from '../../assets/start.png';
import rightAnswer from '../../assets/like.png';
import falsyAnswer from '../../assets/dislike.png';

import './index.scss';

const Cell = ({ cell, lastLabyrinthCell, startCell, isDisabledCellClick, isEndGame, isRightAnswer }) => {
    const dispatch = useDispatch();

    const [isClickedCell, setIsClickedCell] = useState(false);

    const labyrinthCells = useSelector(getLabyrinthCells);

    useEffect(() => {
        return () => {
            setIsClickedCell(false);         
        }
    }, [labyrinthCells]);

    const clickCellHandler = (cell, lastLabyrinthCell) => {
        setIsClickedCell(true);
        dispatch(setDisabledCellClick(true));
        dispatch(setIsEndGame());

        if (cell.x === lastLabyrinthCell.x && cell.y === lastLabyrinthCell.y) {
            dispatch(setIsRightAnswer(true));
        } else {
            dispatch(setIsRightAnswer(false));
        }
    }

    return (
        <div onClick={ () => clickCellHandler(cell, lastLabyrinthCell) } className={`cell ${isDisabledCellClick ? 'disabled' : ''}`}>
            {
                cell.x === startCell.x && cell.y === startCell.y &&
                    <img src={startPng} className='cell__start' />
            }
            {
                cell.x === lastLabyrinthCell.x && cell.y === lastLabyrinthCell.y && isEndGame &&
                    <img src={rightAnswer} className='cell__right' />
            }
            {
                isClickedCell && !isRightAnswer && isEndGame &&
                    <img src={falsyAnswer} className='cell__falsy' />
            }
        </div>
    )
};

Cell.propTypes = {
    cell: PropTypes.object,
    lastLabyrinthCell: PropTypes.object,
    startCell: PropTypes.object,
    isDisabledCellClick: PropTypes.bool,
    isEndGame: PropTypes.bool,
    isRightAnswer: PropTypes.bool
}

export default Cell;