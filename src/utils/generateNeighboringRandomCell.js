export const generateNeighboringRandomCell = (startCell) => {
    const neighboringCells = startCell.generateNeighboringCells(startCell);
    const randomNeighboringCellIndex = Math.floor(Math.random() * neighboringCells.length);

    return neighboringCells[randomNeighboringCellIndex];
};