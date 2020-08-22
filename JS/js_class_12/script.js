'use strict'
/*
Задание 1.
Выполните задание, используя  метод  Object.values  и  цикл for..of.
Объект Experience содержит сведения о стаже работы каждого сотрудника фирмы (свойства и значения задать самостоятельно). Вычислите средний стаж работы сотрудников,  количество сотрудников, чей стаж не превышает 3 года и количество сотрудников со стажем работы 20 лет и более
*/
/*
let experience = {
  kupava: 5,
  ivanonv: 10,
  sidorov: 21,
  petrov: 12,
  nikiforov: 11,
  sibadulin: 1,
  makarov:2,
  filipov: 3,
}

let sum = 0;
let lowExp = 0;
let heightExp = 0;

for (let values of Object.values(experience)) {
  sum += values;
  if (values <= 3) lowExp++;
  if (values >= 20) heightExp++;
}

let averageWorkExperience = sum / Object.values(experience).length;
console.log(`Средний стаж работы ${averageWorkExperience}`);
console.log(`Количество сотрудников, чей стаж не превышает 3 года: ${lowExp}`);
console.log(`Количество сотрудников, со стажем работы 20 лет и более:  ${heightExp}`);
*/
/*
Задание 2.
Выполните задание, используя методы  Object.entries  и Object.fromEntries.
Объект monitors содержит  значения диагонали мониторов в дюймах.
Philips:21,   Asus:19,   Samsung:23.5,   LG24MK: 23.6,   LG27GL: 27
Создайте объект, содержащий значения диагонали этих же мониторов в сантиметрах.
Определите количество моделей мониторов, содержащихся в объекте monitors
*/
/*
let monitors = { 
  Philips: 21,
  Asus: 19,
  Samsung: 23.5,
  LG24MK: 23.6,
  LG27GL: 27,
}

let monirorSantim = Object.fromEntries(
  Object.entries(monitors).map(([key, value]) => [key, value * 2.54])
); 

console.log(monirorSantim);
console.log('Количество моделей мониторов: ' + Object.values(monitors).length);
*/
/* Задание 3 
Напишите деструктурирующее присваивание, которое:
•	свойство display присвоит в переменную display.
•	свойство OS присвоит в переменную OS.
•	свойство browser присвоит в переменную browser (Если нет такого свойства, то “Google chrome” по умолчанию)
*/
/*
let user = {
  display: '1440x900',
  javaScript: 'Yes',
  flash: '32.0',
  os: 'Windows 8',
}

let {display, os, brouser = 'Chrome'} = user;
console.log(display);
console.log(os);
console.log(brouser);
*/
/*
Задание 4
В массиве содержатся результаты  6  замеров скорости входящего интернет соединения.
Напишите деструктурирующее присваивание, которое:
1)	Переменным max1, max2  и max3   присваивает три максимальные по величине значения из этого массива.
2)	В массив rest заносит оставшиеся значения скорости.
*/
let speed=[9.73, 9.68, 9.71, 9.74, 9.72, 9.75];
let [max1, max2, max3, ...rest] = speed.sort((a, b) => (b - a));

console.log('Максимальные значения замеров скорости', max1, max2, max3);