import { Cell } from '../classes/Cell';
import { fieldSize } from '../constants/fieldSize';

export const generateField = () => {
    const game = [];
    for (let i = 1; i <= fieldSize.maxCellValue; i += 1) {
        for (let j = 1; j <= fieldSize.maxCellValue; j += 1) {
            const cell = new Cell(i, j);
            game.push(cell);
        }
    }

    return game;
};