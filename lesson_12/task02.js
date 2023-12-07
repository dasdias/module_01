'use strict';

{
  const arr = [];
  const recursiveFunc = (arr) => {
    arr.push(Math.floor(Math.random() * (10 - 0 + 1) + 0));
    const sum = arr.reduce((acc, item) => acc + item, 0);
    if (sum < 50) {
      recursiveFunc(arr);
    }
    return arr;
  };
  console.log(recursiveFunc(arr));
}
