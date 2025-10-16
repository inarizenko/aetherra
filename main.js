const actualVersion = 'Beta 0.1';
const credits = 'Imágenes de <a href="https://www.artstation.com/artwork/2Bedwx">Nikolai Belokobylski</a>, <a href="https://www.artstation.com/artwork/0lWJPK">Mooncolony</a>, <a href="https://www.artstation.com/artwork/WmAx82">Erick Choy</a>, <a href="https://www.artstation.com/artwork/aonybJ">Elliot Bocxtaele</a>, <a href="https://www.artstation.com/artwork/rleDdL">Max Weber</a>, <a href="https://www.artstation.com/artwork/ea5XX3">Clint Cearly</a>, <a href="https://www.artstation.com/artwork/8weWaq">Anastasia</a>, <a href="https://www.artstation.com/artwork/zAYqLD">Brandon Crampton</a>, <a href="https://www.artstation.com/artwork/DvNA5A">Oksana Kerro</a>, <a href="https://www.artstation.com/artwork/KOqPrB">Andrew Rimbo Hanzlik</a>, <a href="https://www.artstation.com/artwork/mzgad9">Kurolines</a>, <a href="https://www.artstation.com/artwork/4XZgwW">Billy Christian</a>, <a href="https://www.artstation.com/artwork/w0B5DZ">Brian Valeza</a>, <a href="https://www.artstation.com/artwork/gJN5YQ">SIXMOREVODKA STUDIO</a>, <a href="https://www.artstation.com/artwork/VdxekX">Jordan Kerbow</a>, <a href="https://www.artstation.com/artwork/3qxgPD">Malveda</a>, <a href="https://www.artstation.com/artwork/VJ9A18">Polina Surygina</a>, <a href="https://www.artstation.com/artwork/zxW642">Javier Charro</a>.';
const leftMenuManual = '<aside><h>Jugador</h><ul><li><b data-href="/aetherra/manual/species.html">Especies</b></li><li><b data-href="/aetherra/manual/classes.html">Clases</b></li><li><b data-href="/aetherra/manual/backgrounds.html">Trasfondos</b></li><li><b data-href="/aetherra/manual/allignment.html">Alineamiento</b></li></ul><h>Universo</h><ul><li><b data-href="/aetherra/manual/history.html">Historia</b></li><li><b data-href="/aetherra/manual/chronology.html">Cronología</b></li><li><b data-href="/aetherra/manual/religion.html">Religión</b></li><li><b data-href="/aetherra/manual/planes.html">Planos</b></li><li><b>Aetherra</b><ul><li><b data-href="/aetherra/manual/geography.html">Geografía</b><ul><li><b data-href="/aetherra/manual/solarthrone.html">Reino del Trono Solar</b></li><li><b data-href="/aetherra/manual/ulserah.html">Ul\'Serah</b></li><li><b data-href="/aetherra/manual/sydd.html">Sydd</b></li><li><b data-href="/aetherra/manual/silentlands.html">Tierras Silentes</b></li><li><b data-href="/aetherra/manual/forgottenlands.html">Tierras Olvidadas</b></li><li><b data-href="/aetherra/manual/freestates.html">Estados Libres</b></li></ul></li><li><b data-href="/aetherra/manual/politics.html">Política</b></li><li><b data-href="/aetherra/manual/factions.html">Facciones</b></li></ul></li><!-- sigue aquí --></ul><h>Lore</h><ul><li><b data-href="/aetherra/manual/arcanism.html">Arcanismo</b></li><li><b data-href="/aetherra/manual/elanthir.html">Élanthir</b></li><li><b data-href="/aetherra/manual/godswounds.html">Heridas de los Dioses</b></li></ul><h>Referencias</h><ul><li><b data-href="/aetherra/manual/spells.html">Hechizos</b></li><li><b data-href="/aetherra/manual/items.html">Objetos</b></li></ul><h>Ayuda</h><ul><li><b data-href="/aetherra/manual/glossary.html">Glosario</b></li></ul></aside>';

const items = [
{
name:'Amuleto de Salud Recuperada',
image:'https://i.imgur.com/hjWdEUK.png',
type:'Objeto maravilloso',
rarity:'Común',
weight:'0.3 libras',
price:'400PO',
desc:'Este amuleto tiene un grabado de un corazón.<br/><br/>Una vez al día, el portador puede activar su poder para recuperar 1d4 puntos de vida al pasar un turno descansando.',
source:'Creado por Rafa.'
},
{
name:'Moneda de la muerte',
image:'https://i.imgur.com/T7r9wdA.png',
type:'Objeto maravilloso',
rarity:'Común',
weight:'0.3 libras',
price:'80PO',
desc:'Esta antigua moneda de bronce parece estar hecha como señal de respeto hacia los muertos.<br/><br/>Si se lanza al aire, cae de canto y queda flotando en el aire unos segundos antes de volver a caer. Si alguien muere cerca de esta moneda, su cara sonriente se convierte en una calavera.',
source:'Creado por Rafa.'
},
{
name:'Vela del Destino',
image:'https://i.imgur.com/31uTJoD.png',
type:'Objeto maravilloso',
rarity:'Común',
weight:'0.5 libras',
price:'200PO',
desc:'Una vela negra que emite una luz fría.<br/><br/>Si se enciende y se coloca junto a una persona dormida, la vela mostrará, al consumirse, una pequeña visión de algo relacionado con su futuro cercano (usualmente críptico o confuso). 1 sólo uso.',
source:'Creado por Rafa.'
},
{
name:'Anillo del susurro',
image:'https://i.imgur.com/UclhQDN.png',
type:'Objeto maravilloso, requiere sintonización',
rarity:'Poco común',
weight:'0.3 libras',
price:'1000PO',
desc:'Este anillo de plata permite a su portador susurrar un mensaje que será escuchado por otra persona en un radio de 60 pies, sin importar barreras físicas entre ellos. El mensaje suena como un eco fantasmal en la mente del receptor.',
source:'Creado por Rafa, inspirado en el Pendiente de Mensaje, CRCotN (Critical Role - Call of the Netherdeep), página 212.'
},
{
name:'Bastón del Bosque Sombrío',
image:'https://i.imgur.com/0DL4Ql7.png',
type:'Arma simple (Bastón) - Arma CaC, 1d6 contundente, versátil (1d8)',
rarity:'Poco común',
weight:'4 libras',
price:'2000PO',
desc:'Un bastón de madera oscura, cubierto de musgo y corteza vieja. Este bastón permite al portador lanzar el hechizo Pasos sin Huella (Pass Without a Trace) una vez al día.<br/><br/><b>Versátil.</b> Esta arma se puede utilizar con una o dos manos. Junto a la propiedad aparece un valor de daño entre paréntesis: el daño cuando el arma se utiliza con dos manos para realizar un ataque cuerpo a cuerpo.',
source:'Creado por Rafa.'
},
{
name:'Collar Elemental',
image:'https://i.imgur.com/TyEwEyQ.png',
type:'Objeto maravilloso, requiere sintonización',
rarity:'Poco común',
weight:'1 libra',
price:'200PO',
desc:'Un delicado collar con un pequeño colgante de cristal bicolor que arde suavemente con un brillo rojizo o azul helado. Al sintonizarse con él, el portador puede canalizar una pequeña cantidad de energía elemental.<br/><br/>Una vez sintonizado, el usuario puede lanzar uno de los siguientes trucos (a elección durante la sintonización): Produce Flame, Ray of Frost, Sapping Sting o Gust.<br/><br/>El truco puede lanzarse sin componentes materiales y una vez por turno. El modificador de lanzamiento de hechizos es Carisma si el usuario no tiene habilidad en magia.',
source:'Creado por Rafa.'
},
{
name:'Espada larga de los caídos',
image:'https://i.imgur.com/vRYtVa5.png',
type:'Arma marcial (Espada larga) - Arma CaC, 1d8 contundente, versátil (1d10)',
rarity:'Poco común',
weight:'3 libras',
price:'2000PO',
desc:'Esta espada larga oxidada emite un tenue resplandor verde al desenvainarse en presencia de no muertos. Otorga un +1 al ataque y daño contra criaturas no muertas.<br/><br/><b>Versátil.</b> Esta arma se puede utilizar con una o dos manos. Junto a la propiedad aparece un valor de daño entre paréntesis: el daño cuando el arma se utiliza con dos manos para realizar un ataque cuerpo a cuerpo.',
source:'Creado por Rafa.'
},
{
name:'Insignia de Protección',
image:'https://i.imgur.com/s4wdpud.png',
type:'Objeto maravilloso, requiere sintonización',
rarity:'Poco común',
weight:'0,5 libras',
price:'350PO',
desc:'Una pequeña insignia dorada con filigranas de plata, entregada a los participantes que demuestran habilidad y trabajo en equipo. Al llevarla puesta, el portador siente un incremento en su resistencia frente a desafíos y peligros.<br/><br/>Una vez al día, el portador puede aumentar todas sus tiradas de salvación en +1 durante 1 minuto. Este efecto se activa automáticamente en la primera salvación que el portador deba hacer desde el último amanecer. La insignia se recarga al amanecer.',
source:'Creado por Rafa.'
},
{
name:'Manto de Protección contra el frío',
image:'https://i.imgur.com/jCd3ol0.png',
type:'Objeto maravilloso',
rarity:'Poco común',
weight:'20 libras',
price:'5000PO',
desc:'Un manto raído que parece muy simple, pero otorga resistencia al daño por frío. Al tocarlo, sientes una calidez que contrasta con su apariencia vieja y desgastada.',
source:'Creado por Rafa.'
},
{
name:'Medallón de las almas perdidas',
image:'https://i.imgur.com/zfQQSBs.png',
type:'Objeto maravilloso, requiere sintonización',
rarity:'Poco común',
weight:'0,3 libras',
price:'6000PO',
desc:'Un medallón que contiene un grabado de un rostro lloroso. El portador puede invocar una visión del pasado, revelando lo que ocurrió en ese lugar en un momento trágico, una vez al día.',
source:'Creado por Rafa.'
},
{
name:'Piedra del Destierro Efímero',
image:'https://i.imgur.com/NoPL21W.png',
type:'Objeto maravilloso',
rarity:'Poco común',
weight:'1 libra',
price:'450PO',
desc:'Una gema translúcida y etérea, tallada en forma de lágrima, que palpita con un brillo interno. La piedra puede almacenar temporalmente la esencia de una criatura en un estado de estasis antes de liberarla en un estallido de energía.<br/><br/>Como acción, el usuario puede tocar a una criatura mediante un ataque cuerpo a cuerpo y obligarla a realizar una tirada de salvación de Constitución (DC 15). La criatura puede elegir fallar esta salvación. Si falla, la criatura es absorbida por la piedra y queda en un estado de estasis durante 1 minuto. Durante este tiempo:<ul><li>La criatura no sufre daño.</li><li>No puede actuar ni interactuar con el exterior.</li></ul>Tras 1 minuto o si la piedra es destruida, la criatura es expulsada de la gema y aparece en un espacio adyacente a la piedra, recibiendo 2d8 de daño de fuerza al ser lanzada fuera. La piedra se recarga al amanecer.',
source:'Creado por Rafa.'
},
{
name:'Guantelete de Sombras',
image:'https://i.imgur.com/MNLZM3f.png',
type:'Objeto maravilloso, requiere sintonización',
rarity:'Raro',
weight:'10 libras',
price:'1500PO',
desc:'Un guantelete de cuero negro con runas plateadas que parecen moverse como sombras cuando se observa de reojo. Al sintonizarse con él, el usuario obtiene la capacidad de manipular las sombras a su alrededor.<br/><br/>Mientras esté equipado, el portador puede lanzar Arms of Hadar y Darkness una vez al día. Ambos hechizos se lanzan sin gastar componentes y utilizan la CD de Salvación 15. Adicionalmente, el guantelete otorga Ventaja en Destreza (Sigilo) si el portador se encuentra en áreas de penumbra o oscuridad.',
source:'Creado por Rafa.'
},
{
name:'Fragmento del Reflejo',
image:'https://i.imgur.com/UOOAugZ.png',
type:'Objeto maravilloso, requiere sintonización',
rarity:'Raro',
weight:'0,5 libras',
price:'4500PO',
desc:'Una gema mágica y prismática que refleja la luz con un brillo único, como si la realidad misma estuviera siendo duplicada en su interior. El portador siente una ligera resonancia con el fragmento al usarlo, como si le ayudara a alcanzar su máximo potencial.<br/><br/>Una vez al día, el portador puede duplicar su bonificador en una tirada de habilidad, ataque o salvación. Esta decisión se toma antes de realizar la tirada. El fragmento se recarga al amanecer.',
source:'Creado por Rafa.'
},
{
name:'Ojo del Abismo',
image:'https://i.imgur.com/AJ5wMl9.png',
type:'Objeto maravilloso (Foco arcano de invocador), requiere sintonización',
rarity:'Rareza variable',
rarityTxt:'Poco común (+1), raro (+2), muy raro (+3)',
weight:'0,5 libras',
price:'1000 PO (+1), 4000 PO (+2), 40000 PO (+3)',
desc:'<i>“Si miras fijamente al abismo, el abismo te devuelve la mirada.”</i><br/><br/>Mientras sostienes esta gema morada que parece contener un abismo interminable en su interior, puedes usarla como foco para el lanzamiento de tus conjuros de Invocador, y obtiene un bonificador de +1 a las tiradas de ataque de conjuros y a la CD de las tiradas de salvación de tus conjuros de Invocador.<br/><br/>Además, mientras poseas este foco arcano las fuerzas del abismo en su interior te ayudarán a controlar tu habilidad de manera más eficaz, aumentando tu total de puntos de invocador actual en 2.',
source:'Creado por Adri, inspirado en los otros objetos especiales de clase para spellcasters.'
}
];

$(function(){
  var header = '<header><h1>Aetherra</h1></header>';
  var navLinks = '<a href="/aetherra/manual/">Manual</a><a href="/aetherra/map.html">Mapa</a><a href="/aetherra/gallery/">Galería</a><a href="/aetherra/about.html">Acerca de Aetherra</a><a href="/aetherra/credits.html">Créditos</a>';
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
    $(self).parents('aside').find('b[data-href]').removeClass('active');
    $(self).addClass('active');
    $('body').attr('section', section);
    $.get(href, function(data) {
      $('main').html(data);

/*Species*/
$('*:not(b)[data-tab]').hide();

$('.tabbed>.section').each(function(){
var title = $(this).data('title');
$(this).parent('.tabbed').parent('.tabs-body').find('>.tabs').append('<b data-tabbed="'+title+'">'+title+'</div>');
$(this).hide();
});

$('.tabbed>.section:first-of-type').show();
$('.tabs>b:first-of-type').addClass('active');

$('.species-list li, .classes-list li').on('click', function(){
var tab = $(this).find('>b[data-tab]').data('tab');
$(this).parents('body').find('*:not(b)[data-tab="'+tab+'"]').fadeIn();
$(this).parents('body').find('*:not(b)[data-tab]:not([data-tab="'+tab+'"])').fadeOut();
});

$('*:not(b)[data-tab] .close').on('click', function(){
$(this).parents('[data-tab]').fadeOut();
});

$('.tabs>b').on('click', function(){
var title = $(this).data('tabbed');
$(this).addClass('active');
$(this).siblings().removeClass('active');
$(this).parent('.tabs').parent('.tabs-body').find('>.tabbed>.section[data-title="'+title+'"]').slideDown();
$(this).parent('.tabs').parent('.tabs-body').find('>.tabbed>.section:not([data-title="'+title+'"])').slideUp();
});
/*Species*/
      
    }).fail(function() {
      $('main').html('<p>No se pudo cargar la página.</p>');
    });
  }
    // Click handler for the fake links
  $('aside b[data-href]').on('click', function() {
    var href = $(this).data('href');
    var section = href.split('/manual/')[1].split('.html')[0];
    $(this).parents('aside').find('b').removeClass('active');
    $(this).addClass('active');
    $('body').attr('section', section);
    location.hash = section;
    // Optional: show loading state
    $('main').html('<p>Cargando...</p>');

    // Load the new content via AJAX
    $.get(href, function(data) {
      $('main').html(data);
/*Species*/
$('*:not(b)[data-tab]').hide();

$('.tabbed>.section').each(function(){
var title = $(this).data('title');
$(this).parent('.tabbed').parent('.tabs-body').find('>.tabs').append('<b data-tabbed="'+title+'">'+title+'</div>');
$(this).hide();
});

$('.tabbed>.section:first-of-type').show();
$('.tabs>b:first-of-type').addClass('active');

$('.species-list li, .classes-list li').on('click', function(){
var tab = $(this).find('>b[data-tab]').data('tab');
$(this).parents('body').find('*:not(b)[data-tab="'+tab+'"]').fadeIn();
$(this).parents('body').find('*:not(b)[data-tab]:not([data-tab="'+tab+'"])').fadeOut();
});

$('*:not(b)[data-tab] .close').on('click', function(){
$(this).parents('[data-tab]').fadeOut();
});

$('.tabs>b').on('click', function(){
var title = $(this).data('tabbed');
$(this).addClass('active');
$(this).siblings().removeClass('active');
$(this).parent('.tabs').parent('.tabs-body').find('>.tabbed>.section[data-title="'+title+'"]').slideDown();
$(this).parent('.tabs').parent('.tabs-body').find('>.tabbed>.section:not([data-title="'+title+'"])').slideUp();
});
/*Species*/
      
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

});

$(window).on('load',function(){

$('*:not(b)[data-tab]').hide();

$('.tabbed>.section').each(function(){
var title = $(this).data('title');
$(this).parent('.tabbed').parent('.tabs-body').find('>.tabs').append('<b data-tabbed="'+title+'">'+title+'</div>');
$(this).hide();
});

$('.tabbed>.section:first-of-type').show();
$('.tabs>b:first-of-type').addClass('active');
  
    $('html').addClass('loaded');

$('.species-list li, .classes-list li').on('click', function(){
var tab = $(this).find('>b[data-tab]').data('tab');
$(this).parents('body').find('*:not(b)[data-tab="'+tab+'"]').fadeIn();
$(this).parents('body').find('*:not(b)[data-tab]:not([data-tab="'+tab+'"])').fadeOut();
});

$('*:not(b)[data-tab] .close').on('click', function(){
$(this).parents('[data-tab]').fadeOut();
});

$('.tabs>b').on('click', function(){
var title = $(this).data('tabbed');
$(this).addClass('active');
$(this).siblings().removeClass('active');
$(this).parent('.tabs').parent('.tabs-body').find('>.tabbed>.section[data-title="'+title+'"]').slideDown();
$(this).parent('.tabs').parent('.tabs-body').find('>.tabbed>.section:not([data-title="'+title+'"])').slideUp();
});

$('mapatabs b').click(function(){
var overlay = $(this).data('overlay-tab');
$(this).parent().next('mapa').find('img:not([data-overlay]').show();
$(this).parent().next('mapa').find('img[data-overlay]:not([data-overlay="'+overlay+'"])').hide();
$(this).parent().next('mapa').find('img[data-overlay="'+overlay+'"]').show();
$(this).addClass('active');
$(this).siblings().removeClass('active');
if ($(this).is('[data-hide-base]')){
$(this).parent().next('mapa').find('img:not([data-overlay]').hide();
}
});

$(function() {
  $('mapa').each(function() {
    const $mapa = $(this);
    const $img = $mapa.find('img');
    let zoomActive = false;
    const zoomLevel = 2.5;

    // Style setup
    $mapa.css({
      overflow: 'hidden',
      cursor: 'zoom-in'
    });

    $img.css({
      width: '100%',
      height: 'auto',
      transition: 'transform 0.25s ease-out',
      transformOrigin: 'center center',
      willChange: 'transform'
    });

    // Toggle zoom on click
    $mapa.on('click', function(e) {
      zoomActive = !zoomActive;
      $mapa.css('cursor', zoomActive ? 'zoom-out' : 'zoom-in');

      if (!zoomActive) {
        $img.css('transform', 'scale(1)');
      } else {
        updateZoom(e);
      }
    });

    // Move zoom center with mouse
    $mapa.on('mousemove', function(e) {
      if (!zoomActive) return;
      updateZoom(e);
    });

    function updateZoom(e) {
      const rect = $mapa[0].getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const originX = (x / rect.width) * 100;
      const originY = (y / rect.height) * 100;

      $img.css({
        transformOrigin: `${originX}% ${originY}%`,
        transform: `scale(${zoomLevel})`
      });
    }
  });
});

});
