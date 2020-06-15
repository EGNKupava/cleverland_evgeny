let widthImgContainer = 1024; //Ширина ограничивающего контейнера
let marginImg = 5; 
let widthOfImage;
let numberOfRow;
let numberOfImage;
let imageWidth = [];
let resultwidthOfImage = [];
let i;
let ost = [];

// Задание 5а
widthOfImage = (widthImgContainer-8*marginImg)/4;
alert(`Чтобы в строке поместилось 4 изображения, необходима их ширина: ${widthOfImage}px`);

// Задание 5b 
//Вводим данные
numberOfImage = +prompt('Введите количество изображений');
while ((numberOfImage === null) || (numberOfImage <= 0)) {
  numberOfImage = +prompt('Вы ввели некорректное значение, повторите ввод! Введите количество изображений'); //Проверка на правильность ввода данных
}

for (i = 0; i < numberOfImage; i++){
   imageWidth[i] = +prompt(`Введите ширину ${i+1}-го изображения от 1px до 1014px`);
   while (imageWidth[i] > (widthImgContainer-2*marginImg) || imageWidth[i] <= 0 || imageWidth[i] === null){  //Проверка на правильность ввода данных
    imageWidth[i] = +prompt(`Введено некорректное значение, повторите ввод ширины ${i+1}-го изображения `)
   } 
   resultwidthOfImage[i] = imageWidth[i] + 2*marginImg; //Результирующая ширина изображения с отступами
}

// Вычисляем количество строк, и количество изображений в последей вычисленной строке
let rowNum = 0;
let imgInRow = 0;

for (i = 0; i < numberOfImage; i++) {
  ost[rowNum] = widthImgContainer;
  imgInRow = 0;
  do {
    ost[rowNum] = ost[rowNum]-resultwidthOfImage[i];
    imgInRow++;
    if (ost[rowNum] > resultwidthOfImage[i]) i++;
  }
  while (ost[rowNum] > resultwidthOfImage[i]);
  rowNum++;
}

if (rowNum > 1) {
  alert(`Количество строк с изображениями: ${rowNum};\nИзображений в последней строке: ${imgInRow}`);
} else {
  alert(`Получилась всего одна строка, где ${numberOfImage}  изображений`);
}
