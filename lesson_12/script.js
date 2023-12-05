'use strict';

{
  // const pow = (n, power) => {
  //   if (power === 1) {
  //     return n;
  //   } else {
  //     return pow(n, power - 1) * n;
  //   }
  // };

  // console.log(pow(2, 4));

  const factorial = n => {
    if (n === 0) {
      return 1;
    } else {
      return factorial(n - 1) * n;
    }
  };

  console.log(factorial(5));

  //   let getNuber = prompt('Игра угадай число \nЗагадано число от 1 до 100 ' +
  // '\nПопробуйте угадать число которое загадал компьютер' +
  // ' \nВведите ваше число :');

  //   const gameProp = {
  //     statusGame: false,
  //     getRandomMinMax: (min, max) => {
  //       if (min > max) {
  //         [min, max] = [max, min];
  //       }
  //       gameProp.statusGame = true;
  //       return Math.floor(Math.random() * (max - min + 1) + min);
  //     },
  //   };

  //   const number = gameProp.getRandomMinMax(1, 100);

  //   const startGame = (value) => {
  //     if (value === null) {
  //       return alert('Игра окончена!');
  //     } else if (!+value.trim() || +value.trim() === 0) {
  //       value = prompt('Введи число! :');
  //       startGame(value);
  //     } else {
  //       if (+getNuber.trim() > number) {
  //         getNuber = prompt('Меньше! \nВведите новый вариант:');
  //         startGame(getNuber);
  //       } else if (+getNuber.trim() < number) {
  //         getNuber = prompt('Больше! \nВведите новый вариант:');
  //         startGame(getNuber);
  //       } else if (+getNuber.trim() === number) {
  //         alert('Правильно!');
  //       }
  //     }
  //   };

//   startGame(getNuber);
}
