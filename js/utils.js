'use strict';

window.utils = {
  getRandomElement: function (array) {
    // возвращаем случайный элемент массива
    var random = (Math.random() * (array.length - 1)).toFixed(0);
    return array[random];
  },
  getRandomElementExcept: function (array, arrayElement) {
    // получаем случайный элемент массива
    var randomElement = window.utils.getRandomElement(array);
    // если случайный элемент массива равен эдементу, переданному в функцию, получаем новый случайный
    while (randomElement === arrayElement) {
      randomElement = window.utils.getRandomElement(array);
    }
    // возвращаем случайный элемент массива, не равный переданному в функцию
    return randomElement;
  }
};
