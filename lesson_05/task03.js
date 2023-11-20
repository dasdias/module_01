'use strict';

{
  const lineCapitalize = (word) => {
    const reverseWord = word.split('').reverse().join('');
    return reverseWord;
  }
  console.log(lineCapitalize("Привет мир"));
}