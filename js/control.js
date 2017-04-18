// Задача. Вам дан массив объектов пользователей. Создайте функцию
// которая принимает этот объект выводит в консоль какое количество пользователей она приняла 
// дальше функция должна нам создать два массива один состоящий из мужчин второй массив состоящий из женщин
// чей возраст попадает в промежуток от 30 - 50. также эти оба массива должны быть отсортированы по возрасту от меньшего к большему.
// массивы вывести в консоль. Всех кто не попадает под указанный промежуток возраста должны быть собраны также в отдельном массиве и отсортированны
// также вывести в консоль количество отдельно женщин и отдельно мужчин  попавших в возростной промежуток и не попавших в него. 
// А сама функция должна вернуть через return  объект состоящий из 3-х ключей содержащие обработанные массивы. Примерно в таком виде
// return {
// 	'man_from_30_to_50': [],
// 	'wooman_from_30_to_50': [],
// 	'not_accept_from_30_to_50': [],
// } 

var users = [
	{
		name: 'Denis',
		age: 28,
		male: 'man'
	},
	{
		name: 'Ira',
		age: 50,
		male: 'wooman'
	},
	{
		name: 'Ivan',
		age: 32,
		male: 'man'
	},
	{
		name: 'Maksim',
		age: 46,
		male: 'man'
	},
	{
		name: 'Olga',
		age: 28,
		male: 'wooman'
	},
	{
		name: 'Oksana',
		age: 53,
		male: 'wooman'
	},
	{
		name: 'Dmitry',
		age: 28,
		male: 'man'
	},
	{
		name: 'Ludmila',
		age: 19,
		male: 'wooman'
	},
	{
		name: 'Larisa',
		age: 28,
		male: 'wooman'
	},
	{
		name: 'Natalia',
		age: 49,
		male: 'wooman'
	},
	{
		name: 'Valera',
		age: 63,
		male: 'man'
	},
	{
		name: 'Andrey',
		age: 33,
		male: 'man'
	},
	{
		name: 'Svetlana',
		age: 26,
		male: 'wooman'
	},
	{
		name: 'Raisa',
		age: 47,
		male: 'wooman'
	},
	{
		name: 'Oksana',
		age: 21,
		male: 'wooman'
	},
	{
		name: 'Elena',
		age: 38,
		male: 'wooman'
	},
	{
		name: 'Pavel',
		age: 32,
		male: 'man'
	},
	{
		name: 'Evgeny',
		age: 33,
		male: 'man'
	},
	{
		name: 'Stas',
		age: 28,
		male: 'man'
	},
	{
		name: 'Katya',
		age: 27,
		male: 'wooman'
	},
	{
		name: 'Valentina',
		age: 24,
		male: 'wooman'
	},
	{
		name: 'Olga',
		age: 17,
		male: 'wooman'
	},
	{
		name: 'Nikolay',
		age: 57,
		male: 'man'
	},
	{
		name: 'Vitaliy',
		age: 28,
		male: 'man'
	},
	{
		name: 'Konstantin',
		age: 30,
		male: 'man'
	}
];

function sortUsersFunc(users, minAge, maxAge) {

	let manArr = [],
		womanArr = [],
		othersArr = [],
		manOutOfRange = 0,
		womanOutOfRange = 0;		

	function sortFoo(user) {
		if (user['age'] >= minAge && user['age'] <= maxAge) {			
			(user['male'] == 'man') ? manArr.push(user) : womanArr.push(user);
			manArr.sort(sortByAge);
			womanArr.sort(sortByAge);
		} else {
			othersArr.push(user);
			othersArr.sort(sortByAge);
			(user['male'] == 'man') ? manOutOfRange++ : womanOutOfRange++;			
		}
	}

	function sortByAge(prev, next) {
		return prev['age'] - next['age'];
	} 
	
	users.forEach(sortFoo);

	console.log(`Общее количество человек: ${users.length}`);
	console.log('Мужчины в выбранном диапазоне:');
	console.log(manArr);
	console.log(`Количество мужчин в диапазоне: ${manArr.length}`);
	console.log('Женщины в выбранном диапазоне:');
	console.log(womanArr);
	console.log(`Количество женщин в диапазоне: ${womanArr.length}`);
	console.log('Список тех, кто не попадает в диапазон:');
	console.log(othersArr);
	console.log(`Количество мужчин ВНЕ диапазона: ${manOutOfRange}`);
	console.log(`Количество женщин ВНЕ диапазона: ${womanOutOfRange}`);
	console.log(' ');

	return {
		'man_from_30_to_50': manArr,
		'wooman_from_30_to_50': womanArr,
		'not_accept_from_30_to_50': othersArr
	} 	
}

var res = sortUsersFunc(users, 30, 50);
console.log(res);