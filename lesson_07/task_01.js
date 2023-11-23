'use strict';

{
	const allStudents = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов'];
	const failedStudents = ['Сидоров', 'Смирнов', 'Попов'];

	const filter = (arr1, arr2) => {
		const newArr = [];
		for (const item of arr1) {
			if (!(arr2.includes(item))) {
				newArr.push(item);
			}
		}
		return newArr;
	}

	console.log(filter(allStudents, failedStudents));
}