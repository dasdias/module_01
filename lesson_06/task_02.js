'use strict';

{

	function isPrime(num) {
		if (num < 2) {
			return false;
		}
		for (let i = 2; i < num; i++) {
			if (num % i === 0) {
				return false;
			}
		}
		return true;
	}

	console.log(`Число ${4} НЕ является простым`, isPrime(4));
	console.log(`Число ${5} является простым`, isPrime(5));
	console.log(`Число ${1987} является простым`, isPrime(1987));
}