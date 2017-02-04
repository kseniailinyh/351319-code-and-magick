'use strict';

function drawRect(ctx, rect) {
  // рисуем прямоугольник. Сначала залитый, потом с обводкой, если она есть
  ctx.fillStyle = rect.fillColor;
  ctx.fillRect(rect.x, rect.y, rect.width, rect.height);
  if (rect.strokeColor) {
    ctx.strokeStyle = rect.strokeColor;
    ctx.strokeRect(rect.x, rect.y, rect.width, rect.height);
  }
}

function getMaxValue(times) {
  // находим в массиве максимальное значение
  var max = -Infinity;
  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
    }
  }
  return max;
}

function getRandomColor() {
  var randomBlue = (Math.random() * 255).toFixed(0);
  var randomOpacity = (Math.random()).toFixed(1);
  // если прозрачность 0, делаем ее не такой случайной (чтобы прямоугольник не был прозрачным)
  if (randomOpacity === 0) {
    return 'rgba(0,0,' + randomBlue + ',0.2)';
  } else {
    return 'rgba(0,0,' + randomBlue + ',' + randomOpacity + ')';
  }
}

function getIndentX(histoX, columnIndent, i) {
  // вычисляем смещение по X, чтобы между столбиками был отступ
  return histoX + columnIndent * i;
}

function getIndentY(histoY, histoHeight, height) {
  // вычисляем смещение по Y, так как хотим, чтобы столбики росли снизу вверх
  return histoY + histoHeight - height;
}

window.renderStatistics = function (ctx, names, times) {
  // рисуем подложку из двух прямоугольников
  drawRect(ctx, {
    x: 110,
    y: 20,
    width: 420,
    height: 270,
    fillColor: 'rgba(0,0,0,0.7)'
  });
  drawRect(ctx, {
    x: 100,
    y: 10,
    width: 420,
    height: 270,
    fillColor: 'white',
    strokeColor: 'rgba(0,0,0,0.7)'
  });

  // рисуем заголовок
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

  // объявляем параметры гистограммы
  var histoHeight = 150;
  var histoX = 120;
  var histoY = 100;
  var step = histoHeight / getMaxValue(times);
  var columnIndent = 90;

  // идем по массивам
  for (var i = 0; i < times.length; i++) {
    var name = names[i];
    var time = times[i];
    var height = step * (time);

    // вычисляем смещение по X и Y
    var indentX = getIndentX(histoX, columnIndent, i);
    var indentY = getIndentY(histoY, histoHeight, height);

    // рисуем время игрока. Оно должно рисоваться выше столбика на 10px
    ctx.fillText(time.toFixed(0), indentX, indentY - 10);

    // объявляем столбик
    var column = {
      x: indentX,
      y: indentY,
      width: 40,
      height: height
    };

    // если «Вы», делаем столбик красного цвета и рисуем его
    if (name === 'Вы') {
      column.fillColor = 'rgba(255, 0, 0, 1)';
      drawRect(ctx, column);
    } else {   // иначе у столбика случайный цвет
      column.fillColor = getRandomColor();
      drawRect(ctx, column);
    }

    // рисуем имя игрока
    ctx.fillStyle = '#000';
    ctx.fillText(name, indentX, histoHeight + 120);
  }
};
