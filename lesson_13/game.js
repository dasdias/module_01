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
    const userWalk = () => {
      const getUserWalk = prompt(`камень, ножницы, бумага?`);
      checkWalk(getUserWalk);
    };

    // проверка хочет ли игрок играть
    const checkWalk = (checkUserWalk) => {
      if (checkUserWalk === null) {
        const checkEndGame = confirm('Продолжаем игру?');
        console.log('checkEndGame: ', checkEndGame);
        if (!checkEndGame) {
          return alert(`Игрок выиграл: ${result.player}
            Компьютер выиграл: ${result.player} 
          `);
        } else {
          return userWalk();
        }
      } else {
        userWalk();
      }
    };

    return function start() {
      userWalk();
      console.log('getRandomMinMax: ', getRandomMinMax(1, 3));
    };
  };
  window.gameRSP = game;
})();
