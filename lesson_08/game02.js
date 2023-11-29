'use strict';

{
	let getNuberOne = prompt('Игра угадай число \nКомпьютер загадывает число в диапазоне введённых вами двух чисел \nПопробуйте угадать число которое загадал компьютер \nВведите первое число :');
	let getNuberTwo = prompt('Игра угадай число \nКомпьютер загадывает число в диапазоне введённых вами двух чисел \nПопробуйте угадать число которое загадал компьютер \nВведите второе число :');

	let flagGetRandomNumber = true;
	let botNumber
	let numOne = 0;
	let numTwo = 0;
	const gameProp = {
		statusGame: false,
		getRandomMinMax: (min, max) => {
			if (flagGetRandomNumber) {
				if (min > max) {
					[min, max] = [max, min];
				}
				gameProp.statusGame = true;
				return Math.floor(Math.random() * (max - min + 1) + min);
			}
		}
	}



	const startGame = (value) => {
		if (value === null) {
			return alert('Игра окончена!');
		} else if (!+value.trim() || +value.trim() === 0) {
			value = prompt('Введи число! :');
			startGame(value);
		} else {
			if (numOne !== 0 && numTwo !== 0) {
				botNumber = gameProp.getRandomMinMax(numOne, numTwo);
				if (+getNuber.trim() > botNumber) {
					getNuber = prompt('Меньше! \nВведите новый вариант:')
					startGame(getNuber)
				} else if (+getNuber.trim() < botNumber) {
					getNuber = prompt('Больше! \nВведите новый вариант:')
					startGame(getNuber)
				} else if (+getNuber.trim() === botNumber) {
					alert('Правильно!')
				}
			}
		}
	}

	startGame(getNuberOne);
	startGame(getNuberTwo);
}