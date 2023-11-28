'use strict';

{

	const leapYear = (n, m) => {
		if (n > m) {
			[n, m] = [m, n];
		}
		const mass = [];
		for (let i = n; i <= m; i++) {
			const year = i;
			if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
				mass.push(year);
			}
		}

		return mass;
	}

	console.log('leapYear: ', leapYear(2132, 1764));
}