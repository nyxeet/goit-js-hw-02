const calculateEngravingPrice = function (message, pricePerWord) {
  const messageArray = message.split(' ');
  return messageArray.length * pricePerWord;
};

console.log(
  '1 func',
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    10,
  ),
); // 80
console.log(
  '2 func',
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    20,
  ),
); // 160

console.log(
  '3 func',
  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
); // 240

console.log(
  '4 func',
  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
); // 120
