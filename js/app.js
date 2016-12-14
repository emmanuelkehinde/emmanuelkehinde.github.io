
$('.nav li').click(function(){
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
});

new WOW().init();

$('.carousel').carousel({
    interval: 4000,
    pause: "hover"
});

// Tooltips Initialization
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});

$('#collapseEx2 a').smoothScroll({
    offset: -55,
    speed: 600
});

var contactApp=angular.module('contactApp',[]);


