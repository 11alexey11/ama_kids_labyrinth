import { neighboringCells } from '../constants/neighboringCellsSize';
import { generateNeighboringRandomCell } from './generateNeighboringRandomCell';

export const generateLabyrinthCells = (startCell) => {
    const labyrinthCells = [];
    const directions = [];
    let neighboringRandomCell = generateNeighboringRandomCell(startCell);
    let direction = startCell.defineDirectionNeighboringCell(neighboringRandomCell);

    labyrinthCells.push(neighboringRandomCell);
    directions.push(direction);

    for (let i = 0; i < neighboringCells.size - 1; i += 1) {
        const tempCell = neighboringRandomCell;
        neighboringRandomCell = generateNeighboringRandomCell(neighboringRandomCell);
        direction = tempCell.defineDirectionNeighboringCell(neighboringRandomCell);
        labyrinthCells.push(neighboringRandomCell);
        directions.push(direction);
    }

    return [labyrinthCells, directions];
};