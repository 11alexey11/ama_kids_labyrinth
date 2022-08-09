import { nanoid } from 'nanoid';

import { neighboringCells } from '../constants/neighboringCellsSize';

export const generateIds = () => {
    const ids = [];

    for (let i = 0; i < neighboringCells.size; i += 1) {
        ids.push(nanoid());
    }

    return ids;
};