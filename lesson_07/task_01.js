'use strict';

{
  const allСashbox = [
    [12, 4500],
    [7, 3210],
    [4, 650],
    [3, 1250],
    [9, 7830],
    [1, 990],
    [6, 13900],
    [1, 370],
  ];

  const getAveragePriceGoods = (arr) => {
    let count = 0;
    let sum = 0;
    for (const item of arr) {
      if (Array.isArray(item)) {
        const [x, y] = item;
        count += x;
        sum += y;
      }
    }
    return Math.floor(sum / count)
  }

  console.log(getAveragePriceGoods(allСashbox));
}