'use strict';

{
	const calculate = (totalAmount, quantity, promo) => {
		let amountSale = 0;

		if (quantity > 10) {
			amountSale = totalAmount * 0.03;
		}

		if ((totalAmount - amountSale) > 30000) {
			amountSale += (totalAmount - amountSale - 30000) * 0.15;
		}

		if (promo === 'METHED') {
			amountSale += (totalAmount - amountSale) * 0.1;
		} else if (promo === 'G3H2Z1') {

			if ((totalAmount - amountSale) > 2000) {
				amountSale += 500;
			}

		}

		return totalAmount - amountSale;
	}

	console.log(calculate(35000, 11))
	console.log(calculate(30000, 11, 'METHED'))
	console.log(calculate(2100, 10, 'G3H2Z1'))
}