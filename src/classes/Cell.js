import { direction } from '../constants/direction';
import { fieldSize } from '../constants/fieldSize';

export class Cell {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    #isHasLeftCell() {
        return this.y - 1 >= fieldSize.minCellValue;
    }

    #isHasRightCell() {
        return this.y + 1 <= fieldSize.maxCellValue;
    }

    #isHasTopCell() {
        return this.x - 1 >= fieldSize.minCellValue;
    }

    #isHasBottomCell() {
        return this.x + 1 <= fieldSize.maxCellValue;
    }

    generateLeftCell() {
        if (this.#isHasLeftCell()) {
            return new Cell(this.x, this.y - 1);
        }

        return null;
    }

    generateRightCell() {
        if (this.#isHasRightCell()) {
            return new Cell(this.x, this.y + 1);
        }

        return null;
    }

    generateTopCell() {
        if (this.#isHasTopCell()) {
            return new Cell(this.x - 1, this.y);
        }

        return null;
    }

    generateBottomCell() {
        if (this.#isHasBottomCell()) {
            return new Cell(this.x + 1, this.y);
        }

        return null;
    }

    generateNeighboringCells() {
        const neighboringCells = [this.generateTopCell(), this.generateRightCell(), this.generateBottomCell(), this.generateLeftCell()];
        return neighboringCells.filter((neighboringCell) => neighboringCell);
    }

    defineDirectionNeighboringCell(neighboringCell) {
        const diffX = neighboringCell.x - this.x;
        const diffY = neighboringCell.y - this.y;

        if (diffX === 0 && diffY === 1) {
            return direction.right;
        } else

        if (diffX === 0 && diffY === -1) {
            return direction.left;
        }

        if (diffX === 1 && diffY === 0) {
            return direction.bottom;
        }

        if (diffX === -1 && diffY === 0) {
            return direction.top;
        }
    }
}