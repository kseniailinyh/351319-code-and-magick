'use strict';

window.utils = {
  getRandomElement: function (array) {
    return (Math.random() * (array.length - 1)).toFixed(0);
  },
  getRandomElementExcept: function (array, arrayElement) {
    var rand = window.utils.getRandomElement(array);
    while (array[rand] === arrayElement) {
      rand = window.utils.getRandomElement(array);
    }
    return rand;
  }
};
