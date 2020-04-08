// Descrizione
// Hamburger menu:
// mostrare / nascondere il menu principale
// ricordate che per vedere l’hamburger in alto a destra dovete
// scendere a risoluzioni tipo tablet o mobile).

var clickToggle = $('.fa-bars');
var clickClose = $('.close');

clickToggle.click(function(){
    $('.hamburger-menu').fadeIn(1000);
  });

clickClose.click(function(){
    $('.hamburger-menu').fadeOut(200);
});
