const actualVersion = 'Beta 0.1';
const leftMenuManual = '<aside><h>Lore</h><ul><li><b data-href="/aetherra/manual/history.html">Historia</b></li><li><b data-href="/aetherra/manual/religion.html">Religión</b></li></aside>';

$(function(){
  $('body').prepend('<nav><a href="/aetherra/index.html">Aetherra</a><span><a href="/aetherra/manual/">Manual</a><a href="/aetherra/about.html">Acerca de Aetherra</a><a href="/aetherra/credits.html">Créditos</a></span></nav><header><h1>Aetherra</h1></header>');
  if (window.location.pathname.indexOf('/manual') !== -1) {
    $('body').addClass('manual');
  }
  $('body.manual').prepend(leftMenuManual);
});

$(window).on('load',function(){
  $('html').addClass('loaded');
});
