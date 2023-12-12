'use strict';

{
  const userStartNum = [];
  const userCurrentNum = [];
  let getCurrentNum = '';
  let getNuberOne = prompt('Игра угадай число' +
  '\nКомпьютер загадает число в диапазоне введёных вами двух чисел' +
  '\nПопробуйте угадать число которое загадал компьютер' +
  ' \nВведите минимальное число число :');
  let getNuberTwo = prompt('Игра угадай число ' +
    '\nЗагадано число от 1 до 100 ' +
    '\nПопробуйте угадать число которое загадал компьютер' +
    ' \nВведите максимальное число :');
  userStartNum.push(getNuberOne);
  userStartNum.push(getNuberTwo);

  // Проверяем максимальное и минимальное число
  const checkStartNumber = function(userStartNum) {
    const [num1, num2] = userStartNum;

    // если null то пользователь не хочет играть и нажал отмена
    if (num1 === null || num2 === null) {
      alert('Игра окончена!');
    } else if (!+num1.trim() || +num1.trim() === 0) { // проверяем первое число
      getNuberOne = prompt('Введите минимальное число! :');
      userStartNum[0] = getNuberOne;
      checkStartNumber(userStartNum);
    } else if (!+num2.trim() || +num2.trim() === 0) { // проверяем второе число
      getNuberTwo = prompt('Введите максимальное число! :');
      userStartNum[1] = getNuberTwo;
      checkStartNumber(userStartNum);
    }
    return userStartNum; // возвращаем массив с корректными числами
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

  // число загаданное ботом
  const botNumber = getRandomMinMax(checkStartNumber(userStartNum));
  console.log('botNumber: ', botNumber);

  // функция получения попыток
  const getAttempt = ([numOne, numTwo]) => {
    if (numOne > numTwo) {
      [numOne, numTwo] = [numTwo, numOne];
    }
    return (numTwo - numOne) / 100 * 30;
  };

  // проверяем условия игры
  const checkVariant = (userMass) => {
    const lastNum = userMass[userMass.length - 1];
    if (lastNum > botNumber) {
      getCurrentNum = prompt('Меньше \nВдите новый вариант! :');
      return getUserNumber(getCurrentNum);
    } else if (lastNum < botNumber) {
      getCurrentNum = prompt('Больше \nВдите новый вариант! :');
      return getUserNumber(getCurrentNum);
    } else if (lastNum === botNumber) {
      return alert('Правильно \nИгра окончена!');
    }
  };

  // получаем от пользователя число и проверяем его
  const getUserNumber = (val) => {
    // если null то пользователь не хочет играть и нажал отмена
    if (val === null) {
      return alert('Игра окончена!');
    } else if (!+val.trim() || +val.trim() === 0) { // проверяем первое число
      getCurrentNum = prompt('Введи число! :');
      return getUserNumber(getCurrentNum);
    } else if (userCurrentNum.includes(+val)) {
      getCurrentNum = prompt('Это число вы уже вводили!' +
      '\nВведите другое число :');
      return getUserNumber(getCurrentNum);
    }
    userCurrentNum.push(+val);
    checkVariant(userCurrentNum);
  };


  // количество попыток
  const resultAttempt = getAttempt(userStartNum);

  const startGame = () => {
    if (botNumber === 0) {
      return;
    }
    getCurrentNum = prompt('Угадайте загаданное число :');
    getUserNumber(getCurrentNum);
    // checkVariant(userCurrentNum);
  };

  startGame();
}
