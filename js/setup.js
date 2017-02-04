'use strict';

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupOpenIcon = setupOpen.querySelector('.setup-open-icon');
var setupClose = setup.querySelector('.setup-close');
var nameField = setup.querySelector('.setup-user-name');
var wizardCoat = setup.querySelector('#wizard-coat');
var wizardEyes = setup.querySelector('#wizard-eyes');
var fireballWrap = setup.querySelector('.setup-fireball-wrap');
var setupSubmit = setup.querySelector('.setup-submit');
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
var ENTER_KEY_CODE = 13;
var ESC_KEY_CODE = 27;

// проверяем, было ли нажатие на enter
function isEnterEvent(evt) {
  return evt.keyCode === ENTER_KEY_CODE;
}

// если было нажатие на esc, прячем setup
function setupKeydownHandler(evt) {
  if (evt.keyCode === ESC_KEY_CODE) {
    hideSetup();
  }
}

// показываем setup, убирая класс invisible
function showSetup() {
  setup.classList.remove('invisible');
  document.addEventListener('keydown', setupKeydownHandler);
  togglePressed();
}

// прячем setup, добавляя класс invisible, и перестаем слушать нажатия на esc
function hideSetup() {
  setup.classList.add('invisible');
  document.removeEventListener('keydown', setupKeydownHandler);
  togglePressed();
}

// переключаем атрибут aria-pressed
function togglePressed() {
  var pressed = (setupOpenIcon.getAttribute('aria-pressed') === 'true');
  setupOpenIcon.setAttribute('aria-pressed', !pressed);
}

// показываем setup по клику на иконку
setupOpen.addEventListener('click', function (evt) {
  showSetup();
});

// показываем setup по нажатию Enter, если фокус на иконке
setupOpen.addEventListener('keydown', function (evt) {
  if (isEnterEvent(evt)) {
    showSetup();
  }
});

// прячем setup по клику на крестик
setupClose.addEventListener('click', function () {
  hideSetup();
});

// прячем setup по нажатию Enter, если фокус на крестике
setupClose.addEventListener('keydown', function (evt) {
  if (isEnterEvent(evt)) {
    hideSetup();
  }
});

// прячем setup по нажатию на Enter, если фокус на кнопке сохранить
setupSubmit.addEventListener('keydown', function (evt) {
  if (isEnterEvent(evt)) {
    hideSetup();
  }
});

// делаем поле с именем обязательным и ограничиваем длину
nameField.required = true;
nameField.maxLength = 50;

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
