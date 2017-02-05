'use strict';

window.colorizeElement = function (element, colors, property) {

  function setRandomColor() {
    var currentColor = element.style[property];

    console.log(currentColor + ' - currentColor');

    var newColor = colors[window.utils.getRandomElementExcept(colors, currentColor)];
    element.style[property] = newColor;

    console.log(newColor + ' - newColor');
    console.log('-----------');
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
