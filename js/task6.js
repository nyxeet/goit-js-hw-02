const numbers = [];
let total = 0;
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
console.log(numbers);
console.log(total);
