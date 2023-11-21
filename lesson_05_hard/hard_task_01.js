'use strict';

{
	function gcd(a, b) {
		if (b === 0) {
			return a;
		} else {
			return gcd(b, a % b);
		}
	}
	console.log(gcd(24, 36)); // выводит 12
	console.log(gcd(17, 23)); // выводит 1
}