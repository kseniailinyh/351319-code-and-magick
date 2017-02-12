'use strict';

window.colorizeElement = function (element, colors, property) {
  // запоминаем текущий цвет
  var currentColor = colors[0];
  function setRandomColor() {
    // получаем новый цвет, не равный текущему; присваиваем его свойству элемента; делаем текущим новый
    var newColor = window.utils.getRandomElementExcept(colors, currentColor);
    element.style[property] = newColor;
    currentColor = newColor;
  }

  // навешиваем событие по клику на элемент
  element.addEventListener('click', function () {
    setRandomColor();
  });

  // навешиваем событие по нажатию enter на элемент
  element.addEventListener('keydown', function (evt) {
    if (window.isEnterEvent(evt)) {
      setRandomColor();
    }
  });
};
