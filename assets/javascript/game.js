$(document).ready(function () {
var $deal = (Math.floor((Math.random)() * 12)+1);
var $wins = 0;
var $losses = 0;
var $need = (Math.floor((Math.random)() * 101)+19);
var $bs = ['assets/images/diamond copy.png', 'assets/images/emrald copy.png', 
           'assets/images/purpleGem.png', 'assets/images/roundRuby.png'];
var $score = 0;

$('#need').html('You Need: ' + $need);
console.log($need);

var $b = $('#buttons');
$.each($bs, function (index, button) {
    var $deal = (Math.floor((Math.random)() * 12)+1);
    console.log('button', index, button, $deal);
    var $button = $('<img>')
    .addClass('btn ' + $bs[index])
    .attr('value', $deal)
    .attr('src', $bs[index]);
    $button.html($deal);
    $b.append($button);
});

$('.btn').on('click', function() {
    var num2 = $(this).text();
    console.log(num2);
    $score = parseFloat($score) + parseFloat(num2);
    $('#score').html('Your Score: ' + $score);
    console.log($score);
    if ($score == $need){
        $wins++;
        $('#wins').html('Wins: ' + $wins);
        $need = (Math.floor((Math.random)() * 101) + 19);
        $('#need').html('You Need: ' + $need);
        $score = 0;
        $('#score').html('Your Score: ' + $score);
        $.each($bs, function (index, button) {
        $deal = (Math.floor((Math.random)() * 12)+1);
        $('.' + $bs[index]).attr('value', $deal);
        });
    }else if ($score > $need){
        $losses++;
        $('#losses').html('Losses: ' + $losses);
        $need = (Math.floor((Math.random)() * 101) + 19);
        $('#need').html('You Need: ' + $need);
        $score = 0;
        $('#score').html('Your Score: ' + $score);
        $.each($bs, function (index, button) {
        $deal = (Math.floor((Math.random)() * 12) + 1);
        $('.' + $bs[index]).attr('value', $deal);
    });
    }
});



/*var $drinkLists = $('#drink-options');
$.each($drinklist, function (index, drink) {
    console.log('a drink', index, drink);
    var $li = $('<li>');
    $li.html(drink);
    $drinkList.append($li);*/
});

/*$.each($bs, function (index, button) {
    var $deal = Math.floor((Math.random)() * 13)
        .attr('value', $deal);
});*/