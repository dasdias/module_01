'use strict';

{

  const money = +prompt('Укажите ваш доход:');

  if (money) {
    if (money < 15000) {
      console.log(`Сумма Вашего налога составит: ${(money * 0.13)}`);
    } else if (money >= 15000 && money < 50000) {
      console.log(`Сумма Вашего налога составит: ${(money * 0.20)}`);
    } else if (money >= 50000) {
      console.log(`Сумма Вашего налога составит: ${(money * 0.30)}`);
    }
  } else {
    console.log('Вы ввели некорректные данные');
  }
}