'use strict';

{

  const rain = Math.round(Math.random())

  if (rain) {
    console.log('Пошёл дождь.Возьмите зонт!');
  } else {
    console.log('Дождя нет!');
  }

}

{

  const quantityPointMathematics = +prompt('Введите кол-во баллов по математике:');
  const quantityPointRusLanguage = +prompt('Введите кол-во баллов по русскому языку:');
  const quantityPointInformatics = +prompt('Введите кол-во баллов по информатике:');

  if ((quantityPointMathematics && quantityPointRusLanguage && quantityPointInformatics) && (quantityPointMathematics + quantityPointRusLanguage + quantityPointInformatics) >= 265) {
    alert('Поздравляю, вы поступили на бюджет!')
  } else if ((quantityPointMathematics && quantityPointRusLanguage && quantityPointInformatics) && (quantityPointMathematics + quantityPointRusLanguage + quantityPointInformatics) < 265) {
    alert('Жаль, но Вы не поступили на бюджет!');
  } else {
    alert('Вы ввели некорректные данные');
  }

}

{

  const getMoney = +prompt('Сколько денег снять?');

  if (getMoney) {
    if (getMoney % 100 === 0) {
      console.log('Вы можете снять такую сумму');
    } else {
      console.log('Вы не можете снять такую сумму');
    }
  } else {
    console.log('Вы ввели некорректную сумму');
  }

}