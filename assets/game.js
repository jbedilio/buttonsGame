$(document).ready(function () {
var $deal = Math.floor((Math.random)() * 13);
var $wins = 0;
var $losses = 0;
var $need = (Math.floor((Math.random)() * 101)+19);
var $bs = ['#b1','#b2','#b3','#b4']
var $score = 0;

$('#need').html('You Need: ' + $need);
console.log($need);

var $b = $('#buttons');
$.each($bs, function (index, button) {
    var $deal = Math.floor((Math.random)() * 13);
    console.log('button', index, button);
    var $button = $('<button>')
    .addClass('btn')
    .attr('value', $deal);
    $button.html(button);
    $b.append($button);
});



$('.btn').on('click', function() {
    var num2 = $(this).val();
    $score = parseFloat($score) + parseFloat(num2);
    $('#score').html('Your Score: ' + $score);
    if ($score == $need){
        $wins++;
        $('#wins').html('Wins:' + $wins);
        $need = (Math.floor((Math.random)() * 101) + 19);
        $('#need').html('You Need:' + $need);

    }

})



/*var $drinkLists = $('#drink-options');
$.each($drinklist, function (index, drink) {
    console.log('a drink', index, drink);
    var $li = $('<li>');
    $li.html(drink);
    $drinkList.append($li);*/
});
