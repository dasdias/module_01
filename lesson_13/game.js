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
    let botEvenOdd = 1;
    let userNumber = 1;

    const getUserNumber = () => {
      userNumber =
        prompt(`Загадайте число от 1 до ${resultBalloons.playerBalloons}`);
    };

    const computerNumber = () => {
      botEvenOdd = getRandomMinMax(1, 2);
    };

    const compareNumber = (userNum, compNum) => {
      if (userNum % 2 === 0 && compNum === 2) { // компьютер угадал число
        resultBalloons.playerBalloons -= userNumber;
      } else {
        resultBalloons.computerBalloons -= userNumber;
      }
    };

    return function start() {
      computerNumber();
      getUserNumber();
    };
  };
  window.gameRSP = game;
})();
