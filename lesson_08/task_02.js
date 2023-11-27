'use strict';


{
	const generator = (count, n, m) => {

		if (n > m) {
			[n, m] = [m, n];
		}

		let mass = [];
		for (let i = 0; i < count; i++) {
			mass.push(Math.floor(Math.random() * (m - n + 1) + n));
		}
		return mass;
	}
	console.log('generator: ', generator(50, 3, 5));
}