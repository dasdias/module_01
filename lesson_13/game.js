(() => {
  const FIGURES_ENG = ['rock', 'scissors', 'paper'];
  const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];

  const getRandomMinMax = (min, max) => {
    if (min > max) {
      [min, max] = [max, min];
    }
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };


  const game = () => {
    const result = {
      player: 0,
      computer: 0,
    };
    let computerNumber = 0;

    return function start() {
      const userWalk = () => {
        const getUserWalk = prompt(`камень, ножницы, бумага?`);
        if (checkWalk(getUserWalk)) {
          checkWalk(getUserWalk);
          computerNumber = getRandomMinMax(1, 3);
          console.log(computerNumber);
          checkWord(getUserWalk);
        }
      };

      const compare = (userNum, compNum) => {
        if (userNum === compNum) {
          alert('Ничья');
          return;
        }
        if (userNum > compNum) {
          alert('');
          return;
        }
      };

      const checkWord = (userStep) => {
        const step = userStep.toLowerCase().trim();
        if (step !== '') {
          const resWord = FIGURES_RUS.findIndex(item =>
            item.substring(0, step.length) === step);
          console.log('resWord: ', resWord);
          return resWord;
        }
        return -1;
      };

      // проверка хочет ли игрок играть
      const checkWalk = (checkUserWalk) => {
        if (checkUserWalk === null) { // Если пользователь нажал отмена
          const checkEndGame = confirm('Продолжаем игру?');
          if (!checkEndGame) { // пользователь подтверждает, что хочет выйти
            alert(`Игрок выиграл: ${result.player}
            Компьютер выиграл: ${result.player} 
          `);
            return false;
          } else { // пользователь играет дальше
            userWalk();
            return true;
          }
        }
        if (checkWord(checkUserWalk) !== -1) {
          console.log('Играем дальше');

          // return true;
        } else {
          alert('Введите камень, ножницы или бумагу');
          userWalk();
        }
      };

      userWalk();
    };
  };
  window.gameRSP = game;
})();
