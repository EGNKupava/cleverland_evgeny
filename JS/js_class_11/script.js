'use strict'
/*
//а)	Создайте массив fruits = ["Яблоко", "Апельсин", "Слива"];
let fruitsArr = ['Яблоко','Апельсин','Слива'];
//б)	Добавьте в конец массива  элемент «Абрикос» 
fruitsArr.push('Абрикос');
//в)	Добавьте в начало массива два элемента «Нектарин» и «Персик»
fruitsArr.unshift('Нектарин', 'Персик');
console.log(fruitsArr);
//г)	Удалите элементы «Яблоко» и «Апельсин»
fruitsArr.splice(2,2)
console.log(fruitsArr);
//д)	Создайте еще один массив favoriteFruits. 
//е)	Скопируйте в новый массив три первых элемента из массива fruits.
let favoriteFruits = fruitsArr.slice(0,3)
//ж)	Создайте еще один массив berries=[“Барабарис”, “Виноград”, “Годжи”]
let berries = ['Барбарис','Виноград','Годжи',];
//з)	Используя метод  concat, добавьте к массиву  fruits  все элементы массива berries
fruitsArr = fruitsArr.concat(berries);
console.log(fruitsArr);
//и)	Выведите длину массива  fruits
console.log('(fruitsArr.length): ', (fruitsArr.length));
//к)	Используя метод forEach,  выведите  название  индекс каждого элемента массива favoriteFruits
favoriteFruits.forEach((item,index) => {
  alert(`${item} имеет позицию ${index}`);
});
//л)	Определите, какой индекс у элемента «Слива» из массива fruits и содержится ли в этом массиве элемент «Яблоко»
fruitsArr.indexOf('Слива')
console.log('Индек элемента "Слива" в массиве: ', fruitsArr.indexOf('Слива'));
console.log('Содержится ли элемент "Яблоко" в массиве: ', fruitsArr.includes('Яблоко'));
*/
/*
Задание 2 
Выполните задание,  используя методы   find, findIndex, filter, map, sort, reverse, reduce  
*/
//а)	Создайте массив Arr=[2, -15, 12, 83, -29, 111, -6, 22]
let array = [2, -15, 12, 83, -29, 111, -6, 22];

//б)	 Найдите индекс трехзначного элемента
console.log('Индекс трехзначного элемента: ', array.findIndex(item => item > 99));

//в)	Найдите элемент кратный 5
console.log('Элемент кратный 5: ', array.find(item => item%5 == 0));

//г)	Создайте новый массив, содержащий все положительные элементы  из массива Arr
let arrMod = array.filter(item => item > 0);
console.log(arrMod);

//д)	Отсортируйте массив Arr по возрастанию.
array.sort((a, b) => (a - b));
console.log(array);

//е)	Преобразуйте массив Arr , таким образом, чтобы отрицательные значения их элементов были заменены их модулями (Math.abs) , а положительные умножены на 2
array = array.map(item => {
  if (item < 0) return Math.abs(item)
  else return item*2;
});
console.log(array);

//ж)	Отсортируйте массив Arr по убыванию.
array.sort((a, b) => (b - a));
console.log(array);

//з)	Измените порядок элементов в Arr на обратный
console.log('array.reverse: ', array.reverse());

//и)	Найдите произведение элементов массива. 
let res = array.reduce((multiply, item) => multiply * item, 1);
console.log('Произведение всех элементов массива = ', res);

//к)	Вычислите среднее арифметическое элементов массива Arr. 
let sum = array.reduce((sum, item) => sum + item, 0);
console.log('Cреднее арифметическое элементов массива = ', sum / array.length);
