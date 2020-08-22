'use strict'
// Задание 1 Cделайте цвет диагональных  ячеек таблицы красным.
let crossTableEl = document.getElementById('cross-table');
let colorizeTableButton = document.getElementById('colorize-table-button')

colorizeTableButton.addEventListener('click', tableColorizer);

function tableColorizer() {
for (let i = 0; i < crossTableEl.rows.length; i++) {
  crossTableEl.rows[i].cells[i].style.background = '#FF0000';
  crossTableEl.rows[i].cells[crossTableEl.rows.length-1-i].style.background = '#FF0000';
};
}

//Задание 2
// •	Измените фоновый цвет блока с идентификатором first на красный.
// •	Измените фоновый цвет блока с идентификатором second на  синий.
// •	Найдите все элементы с классом yellow. Для первого и последнего из них задайте  желтый цвет фона.
// •	Найдите все  элементы div на странице. Для четвертого div’a сделайте  зеленый фон.

let FirstEl = document.getElementById('first');
let secondEl = document.getElementById('second');
let yellowElements = document.querySelectorAll('.yellow');
let divElements = document.querySelectorAll('.exercice_2 div');
let colorizeButton = document.getElementById('colorize-button')

colorizeButton.addEventListener('click', onColorizerButton);

function colorizer(element, color) {
  element.style.background = color;
}

function onColorizerButton() {
  colorizer(FirstEl, 'red');
  colorizer(secondEl, 'blue');
  colorizer(yellowElements[0], 'yellow');
  colorizer(yellowElements[yellowElements.length-1], 'yellow');
  colorizer(divElements[3], 'green');
}

// задание 3 Закрасить элементы списка в соответствии с картинкой)
let listEl = document.querySelectorAll('.exercice_3 ul > li')

colorizer(listEl[0], 'aqua');
colorizer(listEl[1], 'green');
colorizer(listEl[2], 'yellow');
colorizer(listEl[3], 'orange');


