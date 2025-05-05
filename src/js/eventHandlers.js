import { getMonthAndYear } from './calculations.js';
import { addCross, removeCross } from './crossHandlers.js';
import { getSurname } from './roleHandlers.js';

// Функция обработки событий для кнопки генерации
export const clickHandlerButtonGenerate = () => {
  const buttonGenerate = document.querySelector('.button__generate');
  buttonGenerate.addEventListener('click', () => {
    getMonthAndYear();
  });
};

// Функция обработки событий клика по ячейки
export const clickHandlerCell = () => {
  const cells = document.querySelectorAll('.cell');

  cells.forEach((cell, index) => {
    cell.addEventListener('click', (e) => {
      if (!cell.classList.contains('marked')) {
        addCross(cells, cell, index);
      } else {
        removeCross(cells, cell, index);
      }
    });
  });
};

// Функция обработки событий для кнопки добавления фамилии и роли
export const clickHandlerButtonAdd = () => {
  const buttonAdd = document.querySelector('.button__add');
  buttonAdd.addEventListener('click', () => {
    getSurname();
  });
};