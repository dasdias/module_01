'use strict';

{
	const generator = (count) => {
		let mass = [];
		for (let i = 0; i < count; i++) {
			mass.push(Math.floor(Math.random() * 100) + 1);
		}
		return mass;
	}
	console.log('generator 01: ', generator(5));
}