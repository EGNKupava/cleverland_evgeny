'use strict'

// Задание 1	
//Напишите функцию, которая принимает в качестве аргумента значение угла в градусах,
// и возвращает  значение этого же угла в радианах.
/*
function gradToRad(grad) {
  let rad = grad*3.14/180;
  return rad;
}

let grad = +prompt('Введите значение угла в градусах!');
alert('Угол в радианах = ' + gradToRad(grad));
*/

//Напишите функцию,  которая принимает в качестве аргумента два  натуральных числа  ( a и b) 
//и возвращает сумму всех чисел от  a до b
/*
function sumNumber(a, b) {
  let sum = 0;
  for (let i = a; i <= b; i++) {
    sum += i;
  }
  return sum;
}
console.log(sumNumber(+prompt('первое число'), +prompt('второе число')));
*/
//Напишите функцию,  которая принимает в качестве аргумента   натуральное  число  возвращает его факториал. 
/*
 function factorial(num) {
   let factorial = 1;
   for (let i = 1; i <=num ; i++) {
    factorial *= i;
   }
   return factorial;
 }
 console.log('Факториал введенного числа', factorial(+prompt('Введите натуральное число')));
*/

/*Задание 4	
Используя Функции-«колбэки», создайте  функцию, которая в качестве аргумента получает два числа:  
стоимость покупки и сумму внесенную  в кассу. 
А возвращает сумму сдачи с покупки или  сообщение “ Недостаточная сумма для оплаты ”
*/
/*
function purchase(cost, cash) {
  if (cost <= cash) change(cost, cash)
  else lowCash()
}
function change(cost, cash) {
  let ost = cash-cost;
  alert('Ваша сдача: ' + ost);
}
function lowCash() {
  alert('Мало денег!!!');
}
purchase(+prompt('Стоимость покупки?'), +prompt('Сколько у вас денег?'));
*/