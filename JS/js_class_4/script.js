'use strict'

//Задание 1 Написать цикл для вывода квадратов всех чисел от 1 до 9.
/*
for (let i=1; i < 10; i++ ) {
  console.log('Квадрат' + i +'='+i*i)
}
*/
 
/*Задание 2 Напишите скрипт, который запрашивает число n и выводит на экран n первых четных чисел. 
Затем измените программу таким образом, чтобы числа кратные 5 не выводились на экран. */

/*
let n = +prompt('Введите число','');
for (let i=0; i < n; i++) {
  if (i%5 === 0) continue;
  if (i%2 === 0 ) console.log(i);
}
*/

/*Задание3 (Напишите скрипт, который вычисляет сумму всех введенных пользователем чисел. 
Когда пользователь прекратит вводить числа ( нажмет «Отмена») 
скрипт должен вывести полученную сумму на экран.)*/
/*
let num = 0;
let sum = 0;
do {
  num = prompt('Введите число!');
  if (isNaN(+num) || !num) continue;
  sum+=+num;
} while (num);
console.log(sum);
*/

//Задание 4 Написать скрипт, который запрашивает ввод натурального числа number и выводит сумму всех чисел от 0 до nunber
/*
let sumNumber = 0;
let number = +prompt('Введите целое натуральное число');
for (let i=1; i <= number; i++) {
  sumNumber += i;
}
console.log('Сумма натуральных чисел: ' + sumNumber);
*/

// Задание 5 (Выведите все натуральные делители числа x в порядке возрастания (включая 1 и само число).)

/*
let x = +prompt('Введите целое чило');

for (let i=0; i <= x; i++) {
  if (x%i === 0) console.log(i);
}
*/

//Задание 6 (Вывести на экран все двузначные числа сумма цифр которых делится на  введенное число int.

let e; //Единицы двузначного числа
let d; //десятки двузначного числа
let int = +prompt('Введите число', '');

for (let j = 10;j < 100; j++) {
  e = j%10;
  d = (j-e)/10;
  if ((e+d)%int === 0) console.log(j);
}


