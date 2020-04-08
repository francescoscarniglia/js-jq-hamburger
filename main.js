// Descrizione
// Hamburger menu:
// mostrare / nascondere il menu principale
// ricordate che per vedere l’hamburger in alto a destra dovete
// scendere a risoluzioni tipo tablet o mobile).

var clickToggle = $('.header-right .fa-bars');
var clickClose = $('.hamburger-menu .close');

clickToggle.click(function(){
    $('.hamburger-menu').fadeIn(600);
  });

clickClose.click(function(){
    $('.hamburger-menu').fadeOut(200);
});
