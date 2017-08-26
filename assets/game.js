$(document).ready(function () {

var $deal = Math.floor((Math.random)() * 13);

var $wins = 0;
var $losses = 0;

var $need = Math.floor((Math.random)() * 121);

var $bs = ['#b1','#b2','#b3','#b4']




$('#need').html('You Need: ', + $need);
console.log($need);

//$.each(button)

/*$('#b1, #b2, #b3, #b4').on('click', function() {
    console.log('clicked');
    var buttons = Math.floor((Math.random)() * 13);
    $('#b1', '#b2', '#b3', '#b4') = buttons;
    console.log('run', test);
    });*/

var $b = $('#buttons');
$.each($bs, function (index, button) {
    console.log('button', index, button);
    var $button = $('<button>');
    $button.html(button);
    $b.append($button);
});

/*var $drinkLists = $('#drink-options');
$.each($drinklist, function (index, drink) {
    console.log('a drink', index, drink);
    var $li = $('<li>');
    $li.html(drink);
    $drinkList.append($li);*/
});
