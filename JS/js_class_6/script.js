'use strict'
/*Задание 1 
Функция принимает параметр - возраст пользователя. 
Если число больше 16 – то выводим «добро пожаловать», если меньше – “вы еще молоды”.
*/
/*let age = +prompt('Введите ваш возраст!');
function showMessage(a) {
   if (a < 16) alert('Вы еще молоды!')
   else alert('Добро пожаловать!');
}
showMessage(age);
*/
/* Задание 2 
Пользователь вводит числа. Если число больше 10, 
то функция возвращает квадрат числа, если меньше 7 – пишет, что число меньше 7. 
Если 8, 9 – то возвращает соответственно 7 или 8. Реализуйте решение с несколькими return.
*/
/*
let num = +prompt('Введите число');
function getNum(n) {
  let str = ('Число меньше 7');
  if (n >= 10) return n**2;
  if (n <= 7) return str;
  if (n === 8) return n;
  if (n === 9) return n;
}
alert(getNum(num));
*/
// Задание 3 Напишите функцию calcMin(a,b,с), которая возвращает меньшее из  трех чисел a , b,с.

/*
let num =  [];
let min;

for (let i = 0; i < 3; i++) num[i] = +prompt('Введите число');
function calcMin(a,b,c) {
  min = a;
  if (b < a) min = b;
  if (c < b) min = c;
  return min;
}

min = calcMin(num[0],num[1],num[2]);
alert('Наименьшее число: ' + min);
*/
//Задание 4 
// Создайте функцию, которая получает два параметра – число и степень числа. Возведите число в степень и выведите с помощью alert
/*
let number = +prompt('Введите число');
let numberLevel = +prompt('В какую степень возвести?');
function calcLevel(a,b) {
  return a**b;
}
alert(calcLevel(number,numberLevel));
*/
//Задание 5
//Создайте функцию calcLenghtCircle(r), которая получает в качестве аргумента радиус окружности и возвращает её длину.
/*
let circleRadius = +prompt('Введите радиус окружности');
function calcLenghtCircle(r) {
  let lenght = 2*3.1415*r;
  return lenght;
}
alert('Длина окружности равна: '+calcLenghtCircle(circleRadius));
*/

//Задание 6 
//Напишите функцию для вычисления неполного  частного ( целочисленное деление). 
//С её помощью подсчитайте, сколько цифр во введенном числе.

function calcDevideNum() {
  
}