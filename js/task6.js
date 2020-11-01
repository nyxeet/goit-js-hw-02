let numbers = [];
let total = 0;

const numberInput = document.querySelector('input[name="number6"]');
const buttonRef6 = document.querySelector('.submit6');
const buttonCancel6 = document.querySelector('.cancel6');
const alternative6 = document.querySelector('.alternative6');

buttonRef6.addEventListener('click', function () {
  console.log(numberInput.value);
  numbers.push(numberInput.value);
  console.log('Введите следующее число!');
});
buttonCancel6.addEventListener('click', function () {
  console.log('Конец');
  for (let i = 0; i < numbers.length; i += 1) {
    total += Number(numbers[i]);
  } 
  console.log(`Общая сумма чисел равна ${total}`);
  total = 0;
  numbers = [];
});
alternative6.addEventListener('click', function () {
  let input;
  while (input !== null) {
    input = prompt('Введите число');
    if (input === null) {
      break;
    }
    numbers.push(input);
    console.log(input);
    console.log('Введите следующее число!');
  }
  for (let i = 0; i < numbers.length; i += 1) {
    total += Number(numbers[i]);
  }
  console.log('Конец');
  console.log(`Общая сумма чисел равна ${total}`);
  total = 0;
  numbers = [];
});







