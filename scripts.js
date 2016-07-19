function generateRandomColor() {
  var letters = '0123456789ABCDEF'.split('');
  var color = '#';
  for (var i = 0; i < 6; i++ ) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
  if (color == '#FFFFFF')
    return generateRandomColor();
};

function resetColor() {
  $('.layout-body').css('background-color', 'white');
};

function setRandomColor() {
  var randomColor = generateRandomColor();
  $('.layout-body').css('background-color', randomColor);
};

$(document).ready(function() {

  $('.btn-reset').on('click', function() {
    resetColor();
  });

  $('.btn-random').on('click', function() {
    setRandomColor();
  });

});
