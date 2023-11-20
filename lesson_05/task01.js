'use strict';

{
  const exhangeAmount = (amount) => {

    const exchangeRateUsd = 1.2;
    const exchangeRateRur = 64;
    const amountUsd = amount * exchangeRateUsd;
    const amountRur = amountUsd * exchangeRateRur;
    if (amountRur % 2 !== 0) {
      return +amountRur.toFixed(2);
    }
    return amountRur;
  }

  console.log('exhangeAmount(10): ', exhangeAmount(10));
  console.log('exhangeAmount(12): ', exhangeAmount(12));
}