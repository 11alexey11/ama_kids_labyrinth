import { Cell } from "../classes/Cell";
import { fieldSize } from "../constants/fieldSize";

export const generateRandomCell = () => {
    const randomX = Math.floor(Math.random() * fieldSize.maxCellValue) + 1;
    const randomY = Math.floor(Math.random() * fieldSize.maxCellValue) + 1;

    return new Cell(randomX, randomY);
}