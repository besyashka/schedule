import { createDays, createCells, removeDaysAndCells } from './tableHandlers.js';

// Функция получает выбранный пользователем месяц и год
export const getMonthAndYear = () => {
  const month = parseInt(document.querySelector('.schedule__month').value);
  const year = parseInt(document.querySelector('.schedule__year').value);

  calcDaysInMonth(month, year);
};

// Функция вычисляет количество дней в указанном месяце
const calcDaysInMonth = (month, year) => {
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  removeDaysAndCells();
  createDays(daysInMonth);
  createCells(daysInMonth);
};

// Функция вычисляет количество ячеек в строке и общее количество ячеек в таблице
export const calcNumberOfCells = (cells) => {
  const row = 4;
  const cellsPerRow = Math.ceil(cells.length / 2 / row);
  const cellsInTable = cellsPerRow * row;
  return { cellsPerRow, cellsInTable };
};

// Функция вычисляет начало и конец строки
export const calcStarAndEndOfRow = (index, cellsPerRow) => {
  const startOfRow = Math.floor(index / cellsPerRow) * cellsPerRow;
  const endOfRow = startOfRow + cellsPerRow - 1;
  return { startOfRow, endOfRow };
};