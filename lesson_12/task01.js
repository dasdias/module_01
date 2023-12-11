'use strict';

{
  const userNumber = [];
  const getNuberOne = prompt('Игра угадай число \nЗагадано число от 1 до 100 ' +
  '\nПопробуйте угадать число которое загадал компьютер' +
  ' \nВведите минимальное число число :');
  const getNuberTwo = prompt('Игра угадай число ' +
    '\nЗагадано число от 1 до 100 ' +
    '\nПопробуйте угадать число которое загадал компьютер' +
    ' \nВведите максимальное число :');
  userNumber.push(getNuberOne);
  userNumber.push(getNuberTwo);

  const checkNumber = function(userNumber) {
    const [num1, num2] = userNumber;
    Number.isNaN(num1);
    console.log('Number.isNaN(elem): ', Number.isNaN(num1));
    // if (value === null) {
    //   alert('Игра окончена!');
    //   return false;
    // } else if (!+value.trim() || +value.trim() === 0) {
    //   prompt('Введи число! :');
    //   // startGame(value);
    // } else {
    //   userNumber.push(value);
    //   return true;
    // }
  };

  console.log('userNumber: ', userNumber);
  checkNumber(getNuberOne);

  if (checkNumber(getNuberOne)) {
    checkNumber(getNuberTwo);
    if (checkNumber(getNuberTwo)) {
      const gameProp = {
        getRandomMinMax: (min, max) => {
          if (min > max) {
            [min, max] = [max, min];
          }
          gameProp.statusGame = true;
          return Math.floor(Math.random() * (max - min + 1) + min);
        },
      };


      // const number = gameProp.getRandomMinMax(getNuberOne, getNuberTwo);

      // const startGame = (value) => {
      //   if (checkNumber) {
      //     if (+getNuber.trim() > number) {
      //       getNuber = prompt('Меньше! \nВведите новый вариант:');
      //       startGame(getNuber);
      //     } else if (+getNuber.trim() < number) {
      //       getNuber = prompt('Больше! \nВведите новый вариант:');
      //       startGame(getNuber);
      //     } else if (+getNuber.trim() === number) {
      //       alert('Правильно!');
      //     }
      //   }
      // };

      // startGame(getNuber);
    }
  }
}
