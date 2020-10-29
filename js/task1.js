const logItemsFirst = ['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong'];
const logItemsNumbers = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

function logItems(logItems) {
  for (let i = 0; i < logItems.length; i += 1) {
    console.log(`${i + 1} - ${logItems[i]}`);
  }
}
console.log('Array number 1');
logItems(logItemsFirst);
console.log('Array number 2');
logItems(logItemsNumbers);

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
