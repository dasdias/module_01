'use strict';

{
	const getRandomMinMax = (min, max) => {
		if (min > max) {
			[min, max] = [max, min];
		}
		return Math.floor(Math.random() * (max - min + 1) + min);
	}

	const generator = (count, n, m, str = false) => {
		let mass = [];

		if (str == 'even') {
			for (; mass.length < count;) {
				const num = getRandomMinMax(n, m);
				if (num % 2 === 0) {
					mass.push(num)
				}
			}
		}
		if (str == 'odd') {
			for (; mass.length < count;) {
				const num = getRandomMinMax(n, m);
				if (num % 2 !== 0) {
					mass.push(num)
				}
			}
		}
		if (str === false) {
			for (let i = 0; i < count; i++) {
				mass.push(getRandomMinMax(n, m));
			}
		}
		return mass;
	}
	console.log('generator even: ', generator(5, 1, 10, 'even'));
	console.log('generator odd: ', generator(5, 15, -10, 'odd'));
	console.log('generator all: ', generator(5, 1, 10));
}