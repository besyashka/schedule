let countAssistant = 0;
let countDuty = 0;

// Функция получает введенную пользователем фамилию
export const getSurname = () => {
  const surnameInput = document.querySelector('.surname');
  const surname = surnameInput.value.trim();
  chooseRole(surname);
};

// Функция проверяет какая роль выбрана
const chooseRole = (surname) => {
  const checkedInput = document.querySelector('input[name="role"]:checked');
  const role = checkedInput.value;

  if (countAssistant >= 4) { countAssistant = 0; }
  if (countDuty >= 4) { countDuty = 0; }

  if (role === 'duty') {
    addSurnameToTable(surname, '.schedule__cell_duty', countAssistant);
    countAssistant++;
  } else if (role === 'assistant') {
    addSurnameToTable(surname, '.schedule__cell_assistant', countDuty);
    countDuty++;
  }
};

// Функция добавляет фамилию в указанную таблицу
const addSurnameToTable = (surname, className, index) => {
  const elements = document.querySelectorAll(className);
  elements[index].textContent = surname;
};