'use strict';
{
  const userStartNum = []; // массив с двумя числами от 1 до 100
  const userCurrentNum = []; // массив с числами пользователя
  let resultAttempt = 0; // количество попыток
  let getCurrentNum = ''; // получаем число от пользователя
  let botNumber = 0; // число загаданное ботом
  let checkStartGame = true;
  let getNuberOne = prompt('Игра угадай число' +
    '\nКомпьютер загадает число в диапазоне введёных вами двух' +
    ' чисел от 1 до 100' +
    '\nПопробуйте угадать число которое загадал компьютер' +
    ' \nВведите минимальное число число :');
  let getNuberTwo = prompt('Введите максимальное число от 1 до 100 :');

  // проверяем условия игры

  const checkVariant = (userMass) => {
    const lastNum = userMass[userMass.length - 1];
    if (lastNum > botNumber) {
      getCurrentNum = prompt('Меньше \nВдите новый вариант! :');
      return getUserNumber(getCurrentNum);
    }
    if (lastNum < botNumber) {
      getCurrentNum = prompt('Больше \nВдите новый вариант! :');
      return getUserNumber(getCurrentNum);
    }
    if (lastNum === botNumber) {
      return alert('Правильно \nИгра окончена!');
    }
  };

  userStartNum.push(getNuberOne);
  userStartNum.push(getNuberTwo);


  // Проверяем максимальное и минимальное число
  const checkStartNumber = function (userStartNum) {
    const [num1, num2] = userStartNum;

    // если null то пользователь не хочет играть и нажал отмена
    if (num1 === null || num2 === null) {
      checkStartGame = false;
      return alert('Игра окончена!');
    } else if (!+num1.trim() || +num1.trim() === 0) { // проверяем первое число
      getNuberOne = prompt('Введите минимальное число! :');
      userStartNum[0] = getNuberOne;
      checkStartNumber(userStartNum);
    } else if (!+num2.trim() || +num2.trim() === 0) { // проверяем второе число
      getNuberTwo = prompt('Введите максимальное число! :');
      userStartNum[1] = getNuberTwo;
      checkStartNumber(userStartNum);
    } else if (+num1.trim() < 1 || +num1.trim() > 100) {
      getNuberOne = prompt('Вы ввели число выходящее из' +
        ' разрешённого диапазона' +
        '\nВведите минимальное число от 1 до 100 :');
      userStartNum[0] = getNuberOne;
      checkStartNumber(userStartNum);
    } else if (+num2.trim() < 1 || +num2.trim() > 100) {
      getNuberTwo = prompt('Вы ввели число выходящее из' +
        ' разрешённого диапазона' +
        '\nВведите максимальное число от 1 до 100 :');
      userStartNum[1] = getNuberTwo;
      checkStartNumber(userStartNum);
    }
    return userStartNum; // возвращаем массив с корректными числами
  };

  // получаем случайное число и чисел введённых пользователем
  const getRandomMinMax = (mass = []) => {
    let [min = 0, max = 0] = mass;
    min = Number(min);
    max = Number(max);
    if (min > max) {
      [min, max] = [max, min];
    }
    return Math.ceil(Math.random() * (max - min + 1) + min);
  };

  // число загаданное ботом
  botNumber = getRandomMinMax(checkStartNumber(userStartNum));

  // функция получения попыток
  const getAttempt = ([numOne, numTwo]) => {
    if (numOne > numTwo) {
      [numOne, numTwo] = [numTwo, numOne];
    }
    const attempt = numTwo - numOne;
    if (attempt >= 50 && attempt <= 100) {
      return 15;
    }
    return Math.round((numTwo - numOne) / 100 * 30);
  };

  // получаем от пользователя число и проверяем его
  const getUserNumber = (val) => {
    // если null то пользователь не хочет играть и нажал отмена
    if (val === null) {
      checkStartGame = false;
      return alert('Игра окончена!');
    } else if (!+val.trim() || +val.trim() === 0) {
      getCurrentNum = prompt('Введи число! :');
      return getUserNumber(getCurrentNum);
    }
    if (userCurrentNum.includes(+val)) {
      getCurrentNum = prompt('Это число вы уже вводили!' +
        '\nВведите другое число :');
      return getUserNumber(getCurrentNum);
    }
    if (resultAttempt <= 1) {
      return alert('Игра окончена!\nЗакончились попытки' +
        '\nЗагаданное число было ' + botNumber);
    }
    resultAttempt -= 1;
    userCurrentNum.push(+val);
    checkVariant(userCurrentNum);
  };

  const startGame = () => {
    if (botNumber === 0 || !checkStartGame) {
      return;
    }
    // количество попыток
    resultAttempt = getAttempt(userStartNum);
    getCurrentNum = prompt('Угадайте загаданное число :');
    getUserNumber(getCurrentNum);
  };

  startGame();
}
