'use strict';

{
	let num1 = +prompt("Введите первое число: ");
	let num2 = +prompt("Введите второе число: ");

	function minNumber(a, b) {
		return a > b || a === b ? b : a;
	}
	console.log(minNumber(num1, num2));
}