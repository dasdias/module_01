'use strict';
(() => {
  const FIGURES_ENG = ['rock', 'scissors', 'paper'];
  const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];
  const langObj = {
    en: {
      continueGame: 'Shall we continue the game?',
      userWon: 'The user won',
      draw: 'Draw',
      userSelected: 'User selected',
      computerСhosen: 'The computer has chosen',
      computerWon: 'The computer won',
    },
    ru: {
      continueGame: 'Продолжаем игру?',
      userWon: 'Пользователь выиграл',
      draw: 'Ничья',
      userSelected: 'Пользователь выбрал',
      computerСhosen: 'Компьютер выбрал',
      computerWon: 'Компьютер выиграл',
    },
  };

  const getRandomMinMax = (min, max) => {
    if (min > max) {
      [min, max] = [max, min];
    }
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const game = (language) => {
    const result = {
      player: 0,
      computer: 0,
    };
    let computerNumber = 0;
    let flagContinueGame = false;

    const lang = language === 'EN' || language === 'ENG' ?
    FIGURES_ENG : FIGURES_RUS;

    const msgLang = language === 'EN' || language === 'ENG' ?
    langObj.en : langObj.ru;

    return function start() {
      const userWalk = () => { // Пользователь вводит вариант ответа
        computerNumber = getRandomMinMax(0, 2);
        const getUserWalk = prompt(`${lang[0]}, ${lang[1]}, ${lang[2]}?`);
        checkWalk(getUserWalk);
        if (flagContinueGame) {
          checkWord(getUserWalk);
        }
      };

      const compare = (userNum, compNum) => { // сравниваем загаданные числа
        if (userNum === compNum) { // ничья
          alert(`${msgLang.draw} 
${msgLang.userSelected}: ${lang[userNum]}
${msgLang.computerСhosen}: ${lang[compNum]}
          `);
          userWalk();
          return;
        }
        // пользователь выиграл
        if (userNum === 0 && compNum === 1 ||
            userNum === 1 && compNum === 2 ||
            userNum === 2 && compNum === 0) {
          result.player += 1;
          alert(`${msgLang.userWon}!
${msgLang.userSelected}: ${lang[userNum]}
${msgLang.computerСhosen}: ${lang[compNum]}
          `);
          userWalk();
          return;
        } else { // компьютер выиграл
          result.computer += 1;
          alert(`${msgLang.computerWon}!
${msgLang.userSelected}: ${lang[userNum]}
${msgLang.computerСhosen}: ${lang[compNum]}
          `);
          userWalk();
          return;
        }
      };

      const checkWord = (userStep) => { // проверяем введёное слово
        const step = userStep.toLowerCase().trim();
        if (step !== '') {
          const resWord = lang.findIndex(item =>
            item.substring(0, step.length) === step);
          return resWord;
        }
        return -1;
      };

      // проверка хочет ли игрок играть
      const checkWalk = (checkUserWalk) => {
        if (checkUserWalk === null) { // Если пользователь нажал отмена
          const checkEndGame = confirm(`${msgLang.continueGame}`);
          if (!checkEndGame) { // пользователь подтверждает, что хочет выйти
            alert(`${msgLang.userWon}: ${result.player}
${msgLang.computerWon}: ${result.computer} 
          `);
            flagContinueGame = false;
            return;
          } else { // пользователь играет дальше
            userWalk();
            flagContinueGame = false;
            return;
          }
        }
        if (checkWord(checkUserWalk) !== -1) { // всё хорошо, играем
          compare(checkWord(checkUserWalk), computerNumber);
          flagContinueGame = false;
          return;
        } else { // неправильный ввод слова
          alert(`${language === 'EN' || language === 'ENG' ? 'Enter' :
            'Введите'} ${lang[0]}, ${lang[1]} ${language === 'EN' ||
            language === 'ENG' ? 'else' : 'или'} ${lang[2]}`);
          userWalk();
          flagContinueGame = false;
          return;
        }
      };

      userWalk();
    };
  };
  window.gameRSP = game;
})();
