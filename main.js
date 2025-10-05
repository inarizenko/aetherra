const actualVersion = 'Beta 0.1';
const leftMenuManual = '<aside><h>Lore</h><ul><li><b data-href="/aetherra/manual/history.html">Historia</b></li><li><b data-href="/aetherra/manual/religion.html">Religión</b></li></aside>';

$(function(){
  var header = '<header><h1>Aetherra</h1></header>';
  var navLinks = '<a href="/aetherra/manual/">Manual</a><a href="/aetherra/about.html">Acerca de Aetherra</a><a href="/aetherra/credits.html">Créditos</a>';
  if (window.location.pathname.indexOf('/manual') !== -1) {
    $('body').addClass('manual');
    header = '<header><h1>Manual del Jugador</h1></header>';
  }
  $('body').prepend('<nav><a href="/aetherra/index.html">Aetherra</a><span>'+navLinks+'</span></nav>'+header);
  $('body.manual').prepend(leftMenuManual);
    // Click handler for the fake links
  $('aside b[data-href]').on('click', function() {
    const href = $(this).data('href');
    $(this).addClass('active');
    $(this).parents('aside').find('b.active').not(this).removeClass('active');
    // Optional: show loading state
    $('main').html('<p>Cargando...</p>');

    // Load the new content via AJAX
    $.get(href, function(data) {
      $('main').html(data);
    }).fail(function() {
      $('main').html('<p>No se pudo cargar la página.</p>');
    });
  });

  // Handle back/forward browser buttons
  window.onpopstate = function() {
    const path = window.location.pathname;
    $.get(path, function(data) {
      const newContent = $(data).find('main').html();
      $('main').html(newContent);
      $('aside b.active').removeClass('active');
    });
  };
});

$(window).on('load',function(){
  $('html').addClass('loaded');
});
