'use strict'
// Задание 1 - Дан номер месяца (1 – январь, 2 – февраль, ...). Вывести название соответствующего времени года
/*
let mounthNumber = +prompt('Введите номер месяца');
switch(mounthNumber) {
  case 1:
  case 2:
  case 12: alert('Сейчас Зима!');
  break;
  case 3:
  case 4:
  case 5: alert('Сейчас Весна!');
  break;
  case 6:
  case 7:
  case 8: alert('Сейчас Лето!');
  break;
  case 9:
  case 10:
  case 11: alert('Сейчас Осень!');
  break;
  default: alert('Такого месяца нет!')
}
*/

// Задание 2 - Дано целое число в диапазоне от 0 до 9. Вывести строку – название соотвествующей цифры на русском языке
/*
let number = +prompt('Введите число цифрами от 1 до 9');

switch(number) {
  case 1: alert('Один');
  break;
  case 2: alert('Два');
  break;
  case 3: alert('Три');
  break;
  case 4: alert('Четыре');
  break;
  case 5: alert('Пять');
  break;
  case 6: alert('Шесть');
  break;
  case 7: alert('Семь');
  break;
  case 8: alert('Восемь');
  break;
  case 9: alert('Девять');
  break;
  default: alert('Ввели неправильный номер!');
}
*/

// Задание 3 Составьте скрипт, который спрашивает имя пользователя и приветствует его  по-разному,  в зависимости от времени суток.
/*
let date = new Date();
let hours = date.getHours();

if (hours > 5 && hours < 10) alert('Доброе утро ')
else if ( hours >= 10  && hours <= 17) alert('Добрый день ')
else if ( hours > 17  && hours <= 23) alert('Добрый вечер ')
else alert('Доброй ночи ');
*/

// Задание 4 - Дано целое число в диапазоне от 1 до 5. Вывести строку – словесное описание соответствующей оценки (1 – «плохо», 2 – «неудовлетворительно», 3 – «удовлетворительно», 4 – «хорошо», 5 – «отлично»)
/*
let num = +prompt('Введите число от 1 до 5');

switch(num) {
  case 1: alert('Плохо');
  break;
  case 2: alert('Неудовлетворительно');
  break;
  case 3: alert('Удовлетворительно');
  break;
  case 4: alert('Хорошо');
  break;
  case 5: alert('Отлично');
  break;
  default: alert('Введена неправильная оценка');
}
*/
// Задание 5 - Единицы длины пронумерованы следующим образом: 1 – дециметр, 2 – километр, 3 – метр, 4 – миллиметр, 5 – сантиметр. Дан номер единицы длины N и длина отрезка L в этих единицах (вещественное число). Вывести длину данного отрезка в метрах
/*
let numberLenght = +prompt('Введите номер длинны: \n1-дециметр\n2-километр\n3-метр\n4-миллиметр\n5-сантиметр');
let lenght = +prompt('Введите длинну в выбранных единицах');
let newLenght;
switch(numberLenght) {
  case 1: newLenght = lenght*10;
  break;
  case 2: newLenght = lenght*1000;
  break;
  case 3: newLenght = lenght;
  break;
  case 4: newLenght = lenght/1000;
  break;
  case 5: newLenght = lenght/100;
  break;
}
alert('Введенная вами длинна = '+newLenght+' метров');
*/

//Задание 6 Составить программу, которая печатает номера дней в месяце, если вводится день недели. Считаем, что 1–е число месяца – понедельник, в месяце 30 дней.
/*
let dayOfMounth = prompt ('Введите день недели').toLowerCase();
switch(dayOfMounth) {
  case 'понедельник': alert('Числа месяца: 1, 8, 15, 22, 29');
  break;
  case 'вторник': alert('Числа месяца: 2, 9, 16, 23, 30');
  break;
  case 'среда': alert('Числа месяца: 3, 10, 17, 24');
  break;
  case 'четверг': alert('Числа месяца: 4, 11, 18, 25');
  break;
  case 'пятница': alert('Числа месяца: 5, 12, 19, 26');
  break;
  case 'суббота': alert('Числа месяца: 6, 13, 20, 27');
  break;
  case 'воскресенье': alert('Числа месяца: 7, 14, 21, 28');
  break;
  default: alert('Такого дня не существует!)');
}
*/

//Задание 7 - Дано целое число в диапазоне от 100 до 999. Вывести строку – словесное описание данного числа

let number = +prompt('Введите целое число от 100 до 999');

let ones = (number%100)%10;
let tens = ((number%100)-ones)/10;
let hundreds = (number-tens*10-ones)/100;

let hundredsWord = ['','сто','двести','тристо','четыреста','пятьсот','шестьсот','семьсот','восемсот','девятсот'];
let tensWord = ['','десять','двадцать','тридцать','сорок','пятьдесят','шестьдесят','семьдесят','восемдесят','девяносто'];
let tensOnesWord = ['','одиннадцать','двенадцать','четырнадцать','пятнадцать','шестнадцать','семнадцать','восемнадцать','девятнадцать'];
let onesWord = ['','один','два','три','четыре','пять','шесть','семь','восемь','девять'];

let fullWord;
if (number%100 === 0) fullWord = hundredsWord[hundreds]
  else if (number%10 === 0) fullWord = hundredsWord[hundreds]+' '+tensWord[tens]
  else if (tens === 1 && ones>0) fullWord = hundredsWord[hundreds]+' '+tensOnesWord[ones]
  else fullWord = hundredsWord[hundreds]+' '+tensWord[tens]+' '+onesWord[ones];

alert(fullWord);