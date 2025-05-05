// Функция созданет заголовки для дней месяца в таблице
export const createDays = (daysInMonth) => {
  const daysHeader = document.querySelectorAll('.schedule__header');

  daysHeader.forEach((day) => {
    for (let i = 1; i <= daysInMonth; i++) {
      const td = document.createElement('td');
      td.classList.add('day');
      td.textContent = i;
      day.appendChild(td);
    }
  });
};

// Функция созданет ячейки с днями в таблице
export const createCells = (daysInMonth) => {
  const cells = document.querySelectorAll('.schedule__cell');

  cells.forEach((cell) => {
    for (let i = 1; i <= daysInMonth; i++) {
      const td = document.createElement('td');
      td.classList.add('cell');
      cell.appendChild(td);
    }
  });
};

// Функция удаляет ячейки с днями в таблице
export const removeDaysAndCells = () => {
  const items = document.querySelectorAll('.day, .cell');
  items.forEach((item) => item.remove());
};