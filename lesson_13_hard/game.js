'use strict';
(() => {
  const FIGURES_ENG = ['rock', 'scissors', 'paper'];
  const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];
  const MSG_ENG = ['Shall we continue the game?', 'The user won', 'Draw',
    'User selected', 'The computer has chosen', 'The computer won'];
  const MSG_RUS = ['Продолжаем игру?', 'Пользователь выиграл', 'Ничья',
    'Пользователь выбрал', 'Компьютер выбрал', 'Компьютер выиграл'];

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

    const magLang = language === 'EN' || language === 'ENG' ?
    MSG_ENG : MSG_RUS;

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
          alert(`${magLang[2]} 
${magLang[3]}: ${lang[userNum]}
${magLang[4]}: ${lang[compNum]}
          `);
          userWalk();
          return;
        }
        // пользователь выиграл
        if (userNum === 0 && compNum === 1 ||
            userNum === 1 && compNum === 2 ||
            userNum === 2 && compNum === 0) {
          result.player += 1;
          alert(`${magLang[1]}!
${magLang[3]}: ${lang[userNum]}
${magLang[4]}: ${lang[compNum]}
          `);
          userWalk();
          return;
        }
        // компьютер выиграл
        if (userNum === 1 && compNum === 0 ||
          userNum === 0 && compNum === 2 ||
          userNum === 2 && compNum === 1) {
          result.computer += 1;
          alert(`${magLang[5]}!
${magLang[3]}: ${lang[userNum]}
${magLang[4]}: ${lang[compNum]}
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
          const checkEndGame = confirm(`${magLang[0]}`);
          if (!checkEndGame) { // пользователь подтверждает, что хочет выйти
            alert(`${magLang[1]}: ${result.player}
${magLang[5]}: ${result.computer} 
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
