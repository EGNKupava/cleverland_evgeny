'use stright'
//Задание 17
/*let answer = prompt('Какова Официальное название JavaScript?');


if (answer == 'ECMAScript') alert('Верно')
else alert('Не знаете? «ECMAScript»!')*/

//Задание 2

/*
let number = prompt('Введите число')

if (number > 0) alert('Число положительное!')
else if (number < 0) alert('Число отрицательное!')
else alert('Число равно нулю!2')
*/

//Задание 3

/*let date = new Date();
let h = date.getHours();

let userName = prompt('Как вас зовут?');

if (h > 6 && h < 10) alert('Доброе утро '+ userName)
else if ( h >= 10  && h <= 17) alert('Добрый день '+ userName)
else if ( h > 17  && h <= 23) alert('Добрый вечер '+ userName)
else alert('Доброй ночи '+ userName)
*/

// Задание 5
/*
let firstNumber = +prompt('Введите первое число');
let secondNumber = +prompt('Введите второе число');
let thirdNumber = +prompt('Введите третье число');
let maxNumber;

if (firstNumber > secondNumber) maxNumber = firstNumber
else maxNumber = secondNumber;
if (thirdNumber > maxNumber) maxNumber = thirdNumber;
if (firstNumber == secondNumber == thirdNumber) alert('Числа равны!')
else alert('Наибольшее из трех чисел: '+ maxNumber);

//использование функции
let arr = [firstNumber, secondNumber, thirdNumber];
alert('Наибольшее из трех чисел: 'Math.max(...arr));
*/

// Задание 6

let n = prompt('Длина шоколадки');
let m = prompt('Ширина шоколадки');
let k = prompt('Сколько плиток отломить за один раз');

if (k%m == 0 || k%n == 0) alert(`${k} плит3ок можно отломить за один раз`) 
else alert(`${k} плиток нельзя отломить за один раз`)


