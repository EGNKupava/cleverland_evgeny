'use strict'
/*Задание 1
•	Создайте объект, свойствами которого являются ф.и.о человека, его возраст и отметка о прохождении медосмотра (false или true).
•	Преобразуйте этот объект в JSON.
•	Выведите полученную строку.
•	Преобразуйте полученный JSON в новый объект.
•	При помощи цикла for.. in выведите все свойства нового  объекта и их значения.
*/
/*
let human = {
  name: 'Григорий',
  lastName: 'Хитроколовратов',
  middleName: 'Петрович',
  medicalEnsurance: true,
}

let jsonHuman = JSON.stringify(human);
console.log(jsonHuman);

let human1 = JSON.parse(jsonHuman);
console.log(human1);
*/

/*
Задание 2
•	Напишите скрипт, который определяет,  в какой день недели вы родились, и выводит название этого дня недели.
•	Дополните скрипт, чтобы он определял,  на какой день недели выпадает ваш день рождения в этом году.
•	Дополните скрипт, чтобы он определял ваш возраст на данный момент (Количество полных лет).
•	Дополните скрипт,  таким образом, чтобы он вычислял, сколько дней осталось до вашего дня рождения в этом(или следующем) году.
*/

let weekDays = ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'];
let myBithday = new Date(prompt('Введите год, месяц, число своего рождения через пробел').split(' '));

console.log('Я родился в ' + weekDays[myBithday.getDay()]);

let todayDate = new Date();
let bithInThisYear = new Date(todayDate.getFullYear(), myBithday.getMonth(), myBithday.getDate());
console.log('В этом году ДР выпало на: ' + weekDays[bithInThisYear.getDay()]);

let bithYear = myBithday.getFullYear();
let nowYear = todayDate.getFullYear();
let yearsOld = myBithday.getMonth() < todayDate.getMonth() ? (nowYear - bithYear) : (nowYear - bithYear - 1);

console.log('Мне сейчас: ' + yearsOld);

let nextBith = new Date(myBithday.getFullYear(), myBithday.getMonth(), myBithday.getDate());

nextBith.setFullYear(myBithday.getMonth() < todayDate.getMonth() ? (todayDate.getFullYear()+1) : (todayDate.getFullYear()));
let daysToNextBith = (nextBith.getTime() - todayDate.getTime())/(1000*3600*24);

console.log('Осталось дней до моего следующего ДР: ' + Math.floor(daysToNextBith));

//Задание 3
//При помощи метода  Date.now(), определите сколько времени уйдет на вычисление суммы натуральных чисел от 1 до 1 000 000.

let firstDate = Date.now();

let sum = 0;
for (let i = 0; i <= 1000000; i++) sum += i;

let secondDate = Date.now();
let difference = secondDate - firstDate;
console.log('Компьютер вычислил сумму натуральных чисел от 1 до 100000 за: ' + difference + ' мсек');

//Задание 4 (По желанию)
//Напишите функцию, которая принимает в качестве параметра количество дней и возвращает какие  будут год, месяц и число через это количество дней.

let date = new Date();
let numberOfDay = +prompt('Введите количество дней!');
date.setDate(date.getDate() + numberOfDay);
console.log(`Через ${numberOfDay} дней будет ${date.getFullYear()} год ${date.getMonth()+1} месяц и ${date.getDay()} число`);
