'use strict';

{
  const lineCapitalize = (word) => {
    return word[0].toUpperCase() + word.slice(1, word.length).toLowerCase();
  }
  console.log(lineCapitalize("строка Начинается с БольШой буквы"));
}