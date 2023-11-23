'use strict';

{
	const names = ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];

	const addPrefix = (arr, pref) => {
		const newArr = [];
		for (const item of arr) {
			newArr.push(`${pref} ${item}`)
		}
		return newArr;
	}

	console.log(addPrefix(names, "Mr"));
}