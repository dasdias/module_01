'use strict';

{
	let getNuber = prompt('Игра угадай число \nКомпьютер загадает число в диапазоне введённых вами двух чисел \nПопробуйте угадать число которое загадал компьютер \nВведите два числа через запятую :');

	const gameProp = {
		getUserNumberRange: false,
		startGame: false,
		userNumber: [],
		getRandomMinMax: (min, max) => {
			if (min > max) {
				[min, max] = [max, min];
			}
			gameProp.startGame = true;
			gameProp.getUserNumberRange = true;
			return Math.floor(Math.random() * (max - min + 1) + min);
		}
	}

	startGame(getNuber); // проверяем не нажата ли кнопка отменить

	// console.log('numbers: ', gameProp.userNumber);

	function startGame(numbers) {
		if (numbers === null) {
			return alert('Игра окончена!');
		} else {
			gameProp.startGame = true;
			gameProp.userNumber = numbers?.split(',');
			checkNumber(gameProp.userNumber);
		}
	}



	const number = gameProp.getRandomMinMax(1, 100);

	function checkNumber(massNumbers) {
		let [num1, num2] = massNumbers;
		// num1 = +num1.trim();
		// num2 = +num2.trim();
		// console.log('gameProp.startGame: ', gameProp.startGame);
		if (gameProp.getUserNumberRange && (!+num1?.trim() || +num1?.trim() === 0) || gameProp.getUserNumberRange && (!+num2?.trim() || +num2?.trim() === 0)) {
			getNuber = prompt('Введите два числа через запятую :');
			startGame(getNuber);
			console.log('неверное число');
			// checkNumber(value);
		} else if (!gameProp.getUserNumberRange && (!+num1?.trim() || +num1?.trim() === 0) || !gameProp.getUserNumberRange && (!+num2?.trim() || +num2?.trim() === 0)) {
			gameProp.getUserNumberRange = false;

		} else {
			console.log('num1: ', num1);
			console.log('num2: ', num2);
			// gameProp.userNumber.push(+num1?.trim());
			// gameProp.userNumber.push(+num2?.trim());
		}
	}

	const processGame = (value) => {
		console.log('Тело игры');

		if (+getNuber.trim() > number) {
			getNuber = prompt('Меньше! \nВведите новый вариант:')
			// checkNumber(getNuber)
		} else if (+getNuber.trim() < number) {
			getNuber = prompt('Больше! \nВведите новый вариант:')
			// checkNumber(getNuber)
		} else if (+getNuber.trim() === number) {
			alert('Правильно!')
		}
	}


}