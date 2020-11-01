const findLongestWord = function (string) {
  let longestWord = '';
  const stringArray = string.split(' ');
  for (let i = 0; i < stringArray.length; i += 1) {
    if (stringArray[i].length > longestWord.length) {
      longestWord = stringArray[i];
    }
  }
  return longestWord;
};
console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
console.log(findLongestWord('Google do a roll'));
console.log(findLongestWord('May the force be with you'));
