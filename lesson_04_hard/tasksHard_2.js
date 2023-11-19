'use strict';

{

  const money = +prompt('Укажите ваш доход:');

  if (money) {
    if (money < 15000) {
      console.log(`Сумма Вашего налога составит: ${(money * 0.13)}`);
    } else if (money >= 15000 && money < 50000) {
      const summNalogTo15000 = 15000 * 0.13;
      const summNalogOver20000 = (money - 15000) * 0.20;
      console.log(`Сумма Вашего налога составит: ${summNalogOver20000 + summNalogTo15000}`);
    } else if (money >= 50000) {
      const summNalogTo15000 = 15000 * 0.13;
      const summOver20000 = (money - 15000);
      const summNalogOver20000 = (summOver20000 - 15000) * 0.20;
      const summNalogOver50000 = ((15000 + summOver20000) - money) * 0.30;
      console.log(`Сумма Вашего налога составит: ${summNalogTo15000 + summNalogOver20000 + summNalogOver50000}`);
    }
  } else {
    console.log('Вы ввели некорректные данные');
  }
}