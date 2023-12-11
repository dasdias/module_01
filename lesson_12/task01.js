'use strict';

{
  const userNumber = [];
  let getNuberOne = prompt('Игра угадай число' +
  '\nКомпьютер загадает число в диапазоне введёных вами двух чисел' +
  '\nПопробуйте угадать число которое загадал компьютер' +
  ' \nВведите минимальное число число :');
  let getNuberTwo = prompt('Игра угадай число ' +
    '\nЗагадано число от 1 до 100 ' +
    '\nПопробуйте угадать число которое загадал компьютер' +
    ' \nВведите максимальное число :');
  userNumber.push(getNuberOne);
  userNumber.push(getNuberTwo);

  // Проверяем максимальное и минимальное число
  const checkStartNumber = function(userNumber) {
    const [num1, num2] = userNumber;

    // если null то пользователь не хочет играть и нажал отмена
    if (num1 === null || num2 === null) {
      alert('Игра окончена!');
    } else if (!+num1.trim() || +num1.trim() === 0) { // проверяем первое число
      getNuberOne = prompt('Введите минимальное число! :');
      userNumber[0] = getNuberOne;
      checkStartNumber(userNumber);
    } else if (!+num2.trim() || +num2.trim() === 0) { // проверяем второе число
      getNuberTwo = prompt('Введите максимальное число! :');
      userNumber[1] = getNuberTwo;
      checkStartNumber(userNumber);
    }
    return userNumber; // возвращаем массив с корректными числами
  };

  // получаем случайное число и чисел введённых пользователем
  const getRandomMinMax = (mass) => {
    let [min = 0, max = 0] = mass;
    min = Number(min);
    max = Number(max);
    if (min > max) {
      [min, max] = [max, min];
    }
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const botNumber = getRandomMinMax(checkStartNumber(userNumber));
  console.log('botNumber: ', botNumber);

  const startGame = () => {
    if (botNumber === 0) {
      return;
    }
  };


  // if (checkNumber(getNuberOne)) {
  //   checkNumber(getNuberTwo);
  //   if (checkNumber(getNuberTwo)) {
  //     const gameProp = {
  //       getRandomMinMax: (min, max) => {
  //         if (min > max) {
  //           [min, max] = [max, min];
  //         }
  //         gameProp.statusGame = true;
  //         return Math.floor(Math.random() * (max - min + 1) + min);
  //       },
  //     };


  //     // const number = gameProp.getRandomMinMax(getNuberOne, getNuberTwo);

  //     // const startGame = (value) => {
  //     //   if (checkNumber) {
  //     //     if (+getNuber.trim() > number) {
  //     //       getNuber = prompt('Меньше! \nВведите новый вариант:');
  //     //       startGame(getNuber);
  //     //     } else if (+getNuber.trim() < number) {
  //     //       getNuber = prompt('Больше! \nВведите новый вариант:');
  //     //       startGame(getNuber);
  //     //     } else if (+getNuber.trim() === number) {
  //     //       alert('Правильно!');
  //     //     }
  //     //   }
  //     // };

  //     // startGame(getNuber);
  //   }
  // }
  startGame();
}
