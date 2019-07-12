$(function() {
    'use strict'
//adjust slider height
var winH = $(window).height(),
    upperH   = $('.upper-bar').innerHeight(),
    navH     = $('.navbar').innerHight();
$('.slider').height(winH - (upperH + navH ));
});
