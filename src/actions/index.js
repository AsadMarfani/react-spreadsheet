import {UPDATE_CELL_VALUE} from './types';

export const updateCellValue = (cellIndex) => {
  return {
    type: UPDATE_CELL_VALUE,
    cellIndex
  }
}