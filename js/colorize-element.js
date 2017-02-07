'use strict';

window.colorizeElement = function (element, colors, property) {

  function setRandomColor() {
    var currentColor = element.style[property];
    var newColor = window.utils.getRandomElementExcept(colors, currentColor);
    element.style[property] = newColor;
  }

  element.addEventListener('click', function () {
    setRandomColor();
  });

  element.addEventListener('keydown', function (evt) {
    if (window.isEnterEvent(evt)) {
      setRandomColor();
    }
  });
};
