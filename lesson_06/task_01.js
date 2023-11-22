'use strict';

{
	const tableDegrees = (num) => {
		for (let i = 1; i <= num; i++) {
			console.log('=====================');
			for (let y = 1; y <= num; y++) {
				console.log(`${i} ** ${y} = ${i ** y}`);
			}
		}
	}

	tableDegrees(10);
}