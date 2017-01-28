'use strict';

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');

// показываем и прячем окошко setup по клику на иконку и крестик соответственно
toggleSetup(setupOpen, 'remove');
toggleSetup(setupClose, 'add');

// элементу навешиваем и убираем класс .invisible
function toggleSetup(element, action) {
  element.addEventListener('click', function () {
    setup.classList[action]('invisible');
  });
}

var nameField = setup.querySelector('.setup-user-name');

// делаем поле с именем обязательным и ограничиваем длину
nameField.required = true;
nameField.maxLength = 50;

var wizardCoat = setup.querySelector('#wizard-coat');
var wizardEyes = setup.querySelector('#wizard-eyes');
var fireballWrap = setup.querySelector('.setup-fireball-wrap');
var coatColors = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'];
var eyesColors = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'];
var fireballColors = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'];

// навешиваем событие изменения цвета заливки по клику для мантии, глаз и фаербола
changeColor(wizardCoat, 'fill', coatColors);
changeColor(wizardEyes, 'fill', eyesColors);
changeColor(fireballWrap, 'background', fireballColors);

// навешиваем событие изменения цвета элемента по клику
function changeColor(element, attribute, colorArray) {
  element.addEventListener('click', function () {
    var rand = getRandomPosition(colorArray);
    var color = colorArray[rand];
    element.style[attribute] = color;
  });
}

// определяем случайный элемент массива
function getRandomPosition(array) {
  var rand = (Math.random() * (array.length - 1)).toFixed(0);
  return rand;
}
