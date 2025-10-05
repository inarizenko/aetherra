$(function(){
  $('body').prepend('<nav><a href="/aetherra/index.html">Aetherra</a><span><a href="/aetherra/manual/">Manual</a><a href="/aetherra/about.html">Acerca de Aetherra</a><a href="/aetherra/license.md">Licencia</a></span></nav><header><h1>Aetherra</h1></header>');
});

$(window).on('load',function(){
  $('html').addClass('loaded');
});
