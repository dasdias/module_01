'use strict';

{
  const divider = (a, b) => {
    if (b === 0) {
      return a;
    } else {
      const num = a % b;

      return divider(b, num);
    }
  }
  console.log(divider(36, 48));
}