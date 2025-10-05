const actualVersion = 'Beta 0.1';
const credits = 'Headers por <a href="https://www.artstation.com/artwork/2Bedwx">Nikolai Belokobylski</a>, <a href="https://www.artstation.com/artwork/0lWJPK">Mooncolony</a>, <a href="https://www.artstation.com/artwork/WmAx82">Erick Choy</a>, <a href="https://www.artstation.com/artwork/aonybJ">Elliot Bocxtaele</a>.';
const leftMenuManual = '<aside><h>Jugador</h><ul><li><b data-href="/aetherra/manual/species.html">Especies</b></li></ul><h>Lore</h><ul><li><b data-href="/aetherra/manual/history.html">Historia</b></li><li><b data-href="/aetherra/manual/religion.html">Religión</b></li></ul><h>Ayuda</h><ul><li><b data-href="/aetherra/manual/glossary.html">Glosario</b></li></ul></aside>';

$(function(){
  var header = '<header><h1>Aetherra</h1></header>';
  var navLinks = '<a href="/aetherra/manual/">Manual</a><a href="/aetherra/about.html">Acerca de Aetherra</a><a href="/aetherra/credits.html">Créditos</a>';
  if (window.location.pathname.indexOf('/manual') !== -1) {
    $('body').addClass('manual');
    header = '<header><h1>Manual del Jugador</h1></header>';
    if (window.location.href.indexOf('#') !== -1) {
      var hashtag = window.location.href.split('#')[1].toLowerCase();
    }
  }
  $('body').prepend('<nav><a href="/aetherra/index.html">Aetherra</a><span>'+navLinks+'</span></nav>'+header);
  $('body.manual').prepend(leftMenuManual);
  if ($('body.manual aside').find('b[data-href$="/'+hashtag+'.html"]').length) {
    var self = $('body.manual aside').find('b[data-href$="/'+hashtag+'.html"]');
    var href = $(self).data('href');
    var section = href.split('/manual/')[1].split('.html')[0];
    $(self).addClass('active');
    $(self).parents('aside').find('b.active').not(self).removeClass('active');
    $('body').attr('section', section);
    $.get(href, function(data) {
      $('main').html(data);
    }).fail(function() {
      $('main').html('<p>No se pudo cargar la página.</p>');
    });
  }
    // Click handler for the fake links
  $('aside b[data-href]').on('click', function() {
    var href = $(this).data('href');
    var section = href.split('/manual/')[1].split('.html')[0];
    location.hash = section;
    $(this).addClass('active');
    $(this).parents('aside').find('b.active').not(this).removeClass('active');
    $('body').attr('section', section);
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
    var path = window.location.pathname;
    $.get(path, function(data) {
      var newContent = $(data).find('main').html();
      $('main').html(newContent);
      $('aside b.active').removeClass('active');
      $('body').removeAttr('data-section');
    });
  };

$('b[data-tab]').on('click', function(){
var tab = $(this).data('tab');
$(this).parents('body').find('*:not(b)[data-tab="'+tab+'"]').fadeIn();
$(this).parents('body').find('*:not(b)[data-tab]:not([data-tab="'+tab+'"])').fadeOut();
});

$('*:not(b)[data-tab] .close').on('click', function(){
$(this).parents('[data-tab]').fadeOut();
});

});

$(window).on('load',function(){
  $('html').addClass('loaded');
});
