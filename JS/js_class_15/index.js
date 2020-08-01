/*
Задание 1
Откройте веб-страницу Задание1.HTML
•	Напишите скрипт, который  выводит на экран внутренней HTML код элемента  div и код элемента целиком.
•	Дополните  скрипт, чтобы он изменил текст, добавив  к нему фразу «Простота — залог надежности»
*/
// let firstEl = document.getElementById('paragraph');
// alert(firstEl.innerHTML);
// alert(firstEl.outerHTML);
// firstEl.innerText += ' Простота — залог надежности';

/*Задание 2
•	Используя  DOM-свойство «hidden» , сделайте, чтобы этот список не отображался на странице.
•	Используя  querySelector и textContent,  выведите по отдельности:
1)	Полнофункциональные языки
2)	Перечень языков по отдельному признаку
3)	Неполнофункциональные языки
*/

let listEl = document.getElementById('languages');
listEl.hidden = true;
let langList = listEl.querySelectorAll('ol');
console.log(langList[0].textContent, langList[1].textContent, langList[2].textContent);

/* Задание 3
•	Для элемента  input  задайте значение DOM -свойства  id = "button"
•	Проверьте, создался ли при этом атрибут  id 
•	Для элемента  input  задайте значение DOM -свойства  value = "Жми"
•	Проверьте, создался ли при этом атрибут  value 
•	Создайте для тега  input   атрибут value со значением  "Жми"
•	Выведите значение атрибута  maxlength
•	Еще раз проверьте,  создался ли  атрибут  value 
•	Измените значение атрибута type c text на  button
•	Создайте атрибут 'onclick' со значением 'alert("Привет!!!")'
•	Кликните по элементу на веб-странице, что бы удостоверится  в том,  что атрибут добавлен
•	Удалите атрибут   maxlength
*/

let input = document.querySelector('.third input');
input.id = 'button';
console.log('input.hasAttribute(id): ', input.hasAttribute('id'));
input.value = 'Жми!';
console.log('input.hasAttribute(value): ', input.hasAttribute('value'));
input.setAttribute('value', 'Жми!');
console.log('input.hasAttribute(value): ', input.hasAttribute('value'));
console.log('input.maxlength: ', input.maxLength);
input.type = 'button';

input.setAttribute('onclick', 'alert("Привет!!!")');
input.removeAttribute('maxlength');

console.log('input.hasAttribute(maxlength): ', input.hasAttribute('maxlength'));

/* Задание 4
Откройте веб-страницу Задание4.HTML
•	В таблице допущена ошибка. Строка Петрова А.И…. вставлена в таблицу дважды.( 3 и 4 строка).  Исправьте эту ошибку при помощи метода   node.remove()
•	Вставьте в начале и в конце раздела  tbody  HTML код, чтобы таблица приобрела вид в соответствии с образцом на рисунке
*/

let tableEl = document.getElementById('graphik');

for (let i = 1; i < tableEl.rows.length; i++) {
  for (let j = 0; j < tableEl.rows.length; j++) {
    if ((i !== j) && (tableEl.rows[i].cells[0].textContent == tableEl.rows[j].cells[0].textContent)) {
       tableEl.rows[j].remove();
    }
  }
}

tableEl.tBodies[0].insertAdjacentHTML('afterbegin', '<tr><td colspan="32">График дежурств сотрудников на август 2020 года</td></tr>');
let rowCopy = tableEl.rows[1].cloneNode(true);
tableEl.tBodies[0].append(rowCopy);

