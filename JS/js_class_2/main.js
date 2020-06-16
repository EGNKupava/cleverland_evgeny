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
while (!numberOfImage || (numberOfImage <= 0)) {
  numberOfImage = +prompt('Вы ввели некорректное значение, повторите ввод! Введите количество изображений'); //Проверка на правильность ввода данных
}

for (i = 0; i < numberOfImage; i++){
   imageWidth[i] = +prompt(`Введите ширину ${i+1}-го изображения от 1px до 1014px`);
   while (imageWidth[i] > (widthImgContainer-2*marginImg) || imageWidth[i] <= 0 || !imageWidth[i]){  //Проверка на правильность ввода данных
    imageWidth[i] = +prompt(`Введено некорректное значение, повторите ввод ширины ${i+1}-го изображения `)
   } 
   resultwidthOfImage[i] = imageWidth[i] + 2*marginImg; //Результирующая ширина изображения с отступами
}

// Вычисляем количество строк, и количество изображений в последей вычисленной строке
let rowNum = 0;
let imgInRow = 0;

for (i = 0; i < numberOfImage; i++) {      //перебираем все изображения
  ost[rowNum] = widthImgContainer;         // начиная новую строку, присваем ей ширину контейнера
  imgInRow = 0;                            //обнуляем счетчик изображений в текущем цикле
  do {
    ost[rowNum] = ost[rowNum]-resultwidthOfImage[i]; //вычисляем остаток ширины контейнера после вставки изображения
    imgInRow++;                                      // добавляем 1 к счетчику изображений в строке
    i++;                                             // Переходим к следующему изображению
    if (ost[rowNum] < resultwidthOfImage[i]) i--;   //проверяем влезет ли изображение в оставшуюся строку, если нет возвращяем счетчик назад
  }
  while (ost[rowNum] >= resultwidthOfImage[i]);      // цикл выполняется, пока оставшееся место позволяет вставить изображение
  rowNum++;                                          // переходим к следующей строке
}

if (rowNum > 1) {
  alert(`Количество строк с изображениями: ${rowNum};\nИзображений в последней строке: ${imgInRow}`);
} else {
  alert(`Получилась всего одна строка, где ${numberOfImage}  изображений`);
}
