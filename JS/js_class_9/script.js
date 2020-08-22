'use strict'

/*const square = {
 width: 100,
 height: 200,
 area() {
   return (this.width*this.height);
 },
 perimetr() {
   return (2*this.width+2*this.height)
 },
}
console.log(square.area());
console.log(square.perimetr());
*/
//Задание 2  Напишите функцию - конструктор, которая создает объект, свойствами которого являются  марка автомобиля, объем двигателя и год выпуска.
/*function Car(label) {
  this.brand = label;
  this.ValueOfEngine = prompt('Введите объем двигателя');
  this.vear = prompt('Введите год выпуска');
}
let bmw = new Car('bmw');
*/
//Задание 3
//a.	Напишите функцию - конструктор, которая создает объект, свойствами которого являются радиус сектора и градусная мера соответствующего ему центрального угла. Значения свойств берутся из аргументов функции - конструктора.
/*
 function Circle(r, deg) {
  this.radius = r;
  this.sector = deg;
  this.square = function() {    //добавил метод ,  который , вычисляющий  площадь сектора
    let squar = 3.14*r**2*deg/360;
    return squar;
  }
 }
 let circle = new Circle(prompt('Введите радиус'),prompt('Введите угол сектора'));
 alert ('Площадь сектора= '+ circle.square());
*/
 // Задание 4
//a.	Создайте объект salary в котором хранятся зарплаты нескольких работников (Количество работников может изменяться). Ключами являются их фамилии, а значениями-размеры зарплат.

let salary = {
  sidorov: 1223,
  filipov: 911,
  petrov: 878,
}

//b.	Для объекта salary  создайте метод, который вычисляет среднюю зарплату.
salary.averageSalary = function() {
  let sumSalary = 0; 
  let quantity = 0;
  for (let z in salary) {
    if (!isNaN(salary[z])) {
      sumSalary += salary[z];
      quantity++;
    }
  }
  return sumSalary/quantity; 
}

//c.	Для объекта salary   создайте метод, который находит минимальную зарплату.
salary.minSalary = function() {
  let minSalary = 100000;
  for (let z in salary) {
    if (!isNaN(salary[z]) &&  salary[z] < minSalary) {
    minSalary = salary[z];
    }
  }
  return minSalary;
}

// d.	Для объекта salary   создайте метод, который находит максимальную  зарплату.
salary.maxSalary = function() {
  let maxSalary = 0;
  for (let z in salary) {
    if (!isNaN(salary[z]) && salary[z] > maxSalary) {
    maxSalary = salary[z];
    }
  }
  return maxSalary;
}
//Выводим результаты!
console.log('Минимальная ЗП= ' + salary.minSalary());
console.log('Максимальная ЗП= ' + salary.maxSalary());
console.log('Средняя ЗП= ' + salary.averageSalary());
