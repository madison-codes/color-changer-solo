var letters = '0123456789ABCDEF'.split('');
var color = '#';
var randomColor = getRandomColor();

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

$(document).ready(function() {

  $('.btn-reset').on('click', function() {
    $('.layout-body').css('background-color', 'white');
  });

  $('.btn-random').on('click', function() {
    var randomColor = getRandomColor();
    $('.layout-body').css('background-color', randomColor);
  });
});
