'use strict'

// Задание 1

let person = {
  name: 'Василий', 
  surename: 'Пешеходный',
  'middle name': 'Петрович',
}
person.dateOfBircth = '12.02.1988';
person.profession = 'инженер';
person.position = 'слесарь-убощик';
person.experience = 20;

//delete person['middle name'];
/*
if (person['middle name'] == undefined) {
  alert('Такого значения нет!')
} else alert(person['middle name']);

let numberOfkey = 0;
for (let index in person) {
numberOfkey++;
}

alert('Количество свойств у объекта '+ numberOfkey);

let number = 0;
for (let index in person) {
  if (!isNaN(person[index])) number++;
  }
  alert('Число свойств с цифрами '+number);
*/

// Задание 2
//a.	Создайте объект salary в котором хранятся зарплаты 10 работников. (Ключами являются их фамилии а значениями-размеры зарплат) 
let salary = {
  davidenko: 800,
  kirienko: 700,
  vasilyev: 780,
  vtylkin: 820,
  mishin: 870,
  makarevich: 600,
  pihostin: 900,
  shislo: 1200,
  bezrykov: 885,
  filipov: 890,
}
//b.	Создайте клон этого объекта.
let salary1 = {};
Object.assign(salary1, salary);

//c.	Вычислите среднюю  зарплату. Добавьте в объект salary свойство, содержащее информацию о средней зарплате.
let sumSalary = 0;
let i = 0;
for (let z in salary) {
  sumSalary += salary[z];
  i++;
}
//c.	Вычислите среднюю  зарплату. Добавьте в объект salary свойство, содержащее информацию о средней зарплате.
let middleSalary = sumSalary/i;
console.log('Средняя зарплата= ' + middleSalary);
salary.middleSalary = middleSalary;

//d.	Посчитайте сколько человек  получают зарплату не меньше средней.  Добавьте в объект salary свойство, содержащее эту информацию.
  let richPeople = 0;
for (let z in salary) {
  if (salary[z] >= middleSalary) richPeople++;
}
salary.richPeople = richPeople;

console.log('Количество людей получающих зарплату не меньше средней: '+ richPeople);

//Используя результат выполнения предыдущего задания, определите у кого из работников самая большая зарплата. 
//Выведите фамилию этого работника и размер его зарплаты
let maxSalary = 0;
let maxSalaryLastName;
for (let z in salary) {
  if (salary[z] > maxSalary) {
    maxSalary = salary[z];
    maxSalaryLastName = z;
  }
}
console.log(`Самый эффективный работник ${maxSalaryLastName} получает зарплату ${maxSalary} рублей`);
