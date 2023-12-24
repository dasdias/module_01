(() => {
  const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];

  const getRandomMinMax = (min, max) => {
    if (min > max) {
      [min, max] = [max, min];
    }
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  console.log('getRandomMinMax: ', getRandomMinMax(1, 3));

  const game = () => {
    const result = {
      player: 0,
      computer: 0,
    };
    return function start() {

    };
  };
  window.startGame = game;
})();
