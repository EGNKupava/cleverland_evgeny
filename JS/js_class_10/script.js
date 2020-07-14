'use strict'

//Задание 1
//Написать функцию, которая принимает в качестве аргумента диагональ монитора в дюймах и выводит результат  в сантиметрах 
//с двумя знаками после запятой. (1дюйм=2,54 см).
/*
let inch = +prompt('Введите диагональ монитора в дюймах');

 function toSantim(inch) {
 let santim = inch*2.54;
 return (santim.toFixed(2));
}

alert('Диагональ монитора в сантиметрах ' + toSantim(inch));
*/
//Написать функцию,  которая определяет, является введенное предложение вопросительным, восклицательным или повествовательным.
/*
function sentenceDetermenator(sentence) {
  if (sentence.endsWith('.')) alert('Вы ввели повествовательное предложение!')
  else if (sentence.endsWith('?')) alert('Вы ввели вопросительное предложение!')
  else if (sentence.endsWith('!')) alert('Вы ввели восклицательное предложение!')
  else alert('Вы забыли поставить знак в конце предложения!')
}
let message = prompt('Введите предложение', '');
sentenceDetermenator(message);
*/

//Написать функцию, которая подсчитывает количество слов во введенной строке. (Все слова разделены пробелами)
/*
function wordCounter(str) {
  let counter = 1;
  for (let char of str) {
    if (char == ' ') counter++
  }
  alert(`В введенном предложении ${counter} слов!`);
}

let sentence = prompt('Введите предложение!');
wordCounter(sentence);
*/

//Написать функцию, которая принимает в качестве аргумента  строку, в которой записана любая сумма в любой валюте, и возвращает удвоенную сумму в этой же валюте 
/*
function superDeposit(str) {
  let counter = 0;
  for (let char of str) {
    if ((!isNaN(char) || char == '.') && char !== ' ') counter++
    }
  let num = +str.slice(0, counter) * 2;
  str = num + str.slice(counter, str.length);
  return str;
}

let deposit = prompt('Введите сумму депозита с валютой');
alert('Через 100500 лет у вас будет ' + superDeposit(deposit));
*/

/* Задание 5
Написать функцию, которая проверяет может ли введенная строка быть адресом электронной почты.
Если нет, то выводится сообщение о  том, что адрес электронной почты имеет некорректный формат.
В противном случае выводит доменное имя сервера, на котором зарегистрирован электронный почтовый ящик. 
*/
function checkEmail(str) {
  if (str.includes('@')) {
    let domen = str.slice(str.indexOf('@'), str.length);
    alert(`доменное имя ${domen}`);
  } else alert('Некорректный ввод почтового адреса');
}

let email = prompt('Введите email');
checkEmail(email);