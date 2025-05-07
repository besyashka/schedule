import { calcNumberOfCells, calcStarAndEndOfRow } from './calculations.js';

// Функция добавляет класс 'неактивный' к ячейкам по горизонтали
export const addInactiveClassHorizontally = (cells, index) => {
  const { cellsPerRow } = calcNumberOfCells(cells);
  const { startOfRow, endOfRow } = calcStarAndEndOfRow(index, cellsPerRow);

  for (let i = index + 1; i <= index + 2; i++) {
    if (i > endOfRow) break;
    cells[i].classList.add('inactive');
  }

  for (let i = index - 1; i >= index - 2; i--) {
    if (i < startOfRow) break;
    cells[i].classList.add('inactive');
  }
};

// Функция добавляет класс 'неактивный' к ячейкам по вертикали
export const addInactiveClassVertical = (cells, cell, index) => {
  const tableDuty = cell.closest('.duty');
  const { cellsPerRow, cellsInTable } = calcNumberOfCells(cells);

  const startIndex = tableDuty ? 0 : cellsInTable;
  const endIndex = tableDuty ? cellsInTable : cellsInTable * 2;

  for (let i = startIndex; i < endIndex; i++) {
    const columnIndex = i % cellsPerRow;
    const clickedColumnIndex = index % cellsPerRow;

    if (columnIndex === clickedColumnIndex) {
      cells[i].classList.add('inactive');
    }
  }
};

// Функция для удаления класса 'неактивный' с ячеек
export const removeInactiveClass = (cells, index) => {
  removeInactiveFromNeighborCells(cells, index);
  removeInactiveFromColumn(cells, index);
  updateInactiveCells();
};

// Функция для удаления класса 'неактивный' из соседних ячеек
const removeInactiveFromNeighborCells = (cells, index) => {
  for (let i = index + 1; i <= index + 2; i++) {
    if (i < cells.length) {
      cells[i].classList.remove('inactive');
    }
  }

  for (let i = index - 1; i >= index - 2; i--) {
    if (i >= 0) {
      cells[i].classList.remove('inactive');
    }
  }
};

// Функция для удаления класса 'неактивный' с ячеек в той же колонке
const removeInactiveFromColumn = (cells, index) => {
  const { cellsPerRow } = calcNumberOfCells(cells);
  const clickedColumnIndex = index % cellsPerRow;

  for (let i = 0; i < cells.length; i++) {
    const columnIndex = i % cellsPerRow;
    if (columnIndex === clickedColumnIndex) {
      cells[i].classList.remove('inactive');
    }
  }
};

// Функция обновляет состояние неактивных ячеек при удалении маркера (крестика)
const updateInactiveCells = () => {
  const cells = document.querySelectorAll('.cell');

  cells.forEach((cell, index) => {
    if (cell.classList.contains('marked')) {
      addInactiveClassVertical(cells, cell, index);
      addInactiveClassHorizontally(cells, index);
    }
  });
};