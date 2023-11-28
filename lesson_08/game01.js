'use strict';

{
	let getNuber = prompt('Игра угадай число \nЗагадано число от 1 до 100 \nПопробуйте угадать число которое загадал компьютер \nВведите ваше число :');
	// console.log('getNuber: ', getNuber);

	const startGame = (value) => {
		if (value === null) {
			console.log('value: ', value);
			return alert('Игра окончена!');
		} else if (!+value.trim() || +value.trim() === 0) {
			console.log('value: ', +value.trim());
			value = prompt('Введи число! :');
			startGame(value);
		} else {
			console.log('value: ', +value.trim());
		}
	}

	// const getRandomMinMax = (min, max) => {
	// 	if (min > max) {
	// 		[min, max] = [max, min];
	// 	}
	// 	return Math.floor(Math.random() * (max - min + 1) + min);
	// }
	// const number = getRandomMinMax(1, 100);

	// if (getNuber > number) {

	// }
	startGame(getNuber);
}