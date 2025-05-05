import { addInactiveClassHorizontally, addInactiveClassVertical, removeInactiveClass } from './inactiveHandlers.js';

// Функция добавления крестика
export const addCross = (cells, cell, index) => {
  if (!cell.classList.contains('inactive')) {
    cell.classList.add('marked');
    addInactiveClassHorizontally(cells, index);
    addInactiveClassVertical(cells, cell, index);
  }
};

// Функция удаления крестика
export const removeCross = (cells, cell, index) => {
  cell.classList.remove('marked');
  removeInactiveClass(cells, index);
};