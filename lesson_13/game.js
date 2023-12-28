'use strict';
(() => {
  const getRandomMinMax = (min, max) => {
    if (min > max) {
      [min, max] = [max, min];
    }
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const game = () => {
    const resultBalloons = {
      playerBalloons: 5,
      computerBalloons: 5,
    };
    let continueGame = true;
    let botEvenOdd = 0;
    let userNumber = 0;

    const getUserNumber = () => { // получаем число от пользователя
      console.log('resultBalloons: ', resultBalloons);
      userNumber =
      prompt(`Загадайте число от 1 до ${resultBalloons.playerBalloons}`);
      if (continueGame) { // продолжаем игру
        // console.log('checkValidNumber(userNumber): ',
        checkValidNumber(userNumber);
        console.log('userNumber: ', userNumber);
      }
      if (userNumber && botEvenOdd) {
        compareNumber(userNumber, botEvenOdd);
      }
    };

    const computerNumber = () => { // компьютер загадывает чет нечет
      botEvenOdd = getRandomMinMax(1, 2);
    };

    const compareNumber = (userNum, compNum) => { // отгадывает число
      console.log('userNum: ', userNum, 'compNum: ', compNum);
      if (resultBalloons.playerBalloons < 1) {
        return alert(`Вы проиграли у вас не осталось шариков`);
      }
      if (resultBalloons.computerBalloons < 1) {
        return alert(`Компьютер проиграл у него не осталось шариков`);
      }
      if (+userNum % 2 === 0 && +compNum === 2) { // компьютер угадал число
        resultBalloons.playerBalloons -= userNumber;
        resultBalloons.computerBalloons += userNumber;
        alert(`Компьютер угадал число`);
        return getUserNumber();
      }
      if (+userNum % 2 === 1 && +compNum === 1) { // компьютер угадал число
        resultBalloons.playerBalloons -= userNumber;
        resultBalloons.computerBalloons += userNumber;
        alert(`Компьютер угадал число`);
        return getUserNumber();
      } else {
        alert(`Компьютер не угадал число`);
        resultBalloons.computerBalloons -= userNumber;
        resultBalloons.playerBalloons += userNumber;
        return getUserNumber();
      }
    };

    // const checkEndGame = (num) => {
    //   if (num === null) { // Если пользователь нажал отмена
    //     alert('Игра окончена');
    //     return false;
    //   } else {
    //     return true;
    //   }
    // };

    const checkValidNumber = (num) => {
      if (num === null) { // Если пользователь нажал отмена
        continueGame = false;
        alert('Игра окончена');
        return false;
      }
      if (!Number.isNaN(parseInt(num)) && isFinite(num)) {
        if (+num < 1 || +num > resultBalloons.playerBalloons) {
          continueGame = true;
          alert(`Нужно загадать число от 1 до ${
            resultBalloons.playerBalloons}`);
          return getUserNumber();
        } else {
          continueGame = true;
          userNumber = +num;
          return;
        }
      } else {
        continueGame = true;
        alert(`Нужно загадать число от 1 до ${resultBalloons.playerBalloons}`);
        return getUserNumber();
      }
    };

    return function start() {
      computerNumber();
      getUserNumber();
    };
  };
  window.gameRSP = game;
})();
