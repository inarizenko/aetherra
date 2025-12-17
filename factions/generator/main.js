$(function(){

const types = {
major: {
population:'2525 (10d100*5)',
initialTreasure:'ERROR: ESTE TIPO DE FACCIÓN NO SE PUEDE CREAR DE FORMA INICIAL',
minorsPerc:15,
adultsPerc:70,
eldersPerc:15,
taxBase:7,
productionPoints:15,
initialLoyalty:60,
initialMoral:60,
initialAuthority:70
},
minor: {
population:'505 (2d100*5)',
initialTreasure:'trigger minorTypes',
minorsPerc:15,
adultsPerc:70,
eldersPerc:15,
taxBase:5,
productionPoints:10,
initialLoyalty:70,
initialMoral:55,
initialAuthority:60
},
minorGov: {
population:'trigger minorGovSize',
initialTreasure:'trigger minorGovTypes',
minorsPerc:15,
adultsPerc:70,
eldersPerc:15,
taxBase:6,
productionPoints:12,
initialLoyalty:60,
initialMoral:65,
initialAuthority:65
},
guild: {
population:'trigger GuildSize',
initialTreasure:150,
minorsPerc:0,
adultsPerc:85,
eldersPerc:15,
taxBase:3,
productionPoints:7,
initialLoyalty:70,
initialMoral:75,
initialAuthority:50
},
group: {
population:'201 (2d100*2)',
initialTreasure:100,
minorsPerc:15,
adultsPerc:70,
eldersPerc:15,
taxBase:2,
productionPoints:5,
initialLoyalty:50,
initialMoral:80,
initialAuthority:50
},
groupBase: {
population:'404 (4d100*2)',
initialTreasure:150,
minorsPerc:15,
adultsPerc:70,
eldersPerc:15,
taxBase:3,
productionPoints:7,
initialLoyalty:60,
initialMoral:50,
initialAuthority:70
}
};

const minorTypes = {
almeryn: {
initialTreasure:500
},
morinth: {
initialTreasure:500
},
daemn: {
initialTreasure:500
},
eldarn_occidental: {
initialTreasure:500
},
valdyr: {
initialTreasure:500
},
eldarn_oriental: {
initialTreasure:'ERROR: NO HAY CASAS MENORES EN ESTE TERRITORIO: SÓLO CASA MENOR GOBERNANTE'
},
rhelan: {
initialTreasure:'ERROR: NO HAY CASAS MENORES EN ESTE TERRITORIO'
},
drimr: {
initialTreasure:300
},
sydd: {
initialTreasure:300
},
cassemer: {
initialTreasure:300
},
ulserah: {
initialTreasure:400
},
thareen: {
initialTreasure:400
},
vahrmoth: {
initialTreasure:600
}
}

const minorGovTypes = {
isla_de_amakiir: {
initialTreasure:300
},
eldarn_oriental: {
initialTreasure:400
}
}

const minorGovSize = {
grande: {
population:'1515 (6d100*5)'
},
mediana: {
population:'1010 (4d100*5)'
},
pequea: {
population:'755 (3d100*5)'
}
}

const guildSize = {
adventurers: {
population:'101 (2d100)'
},
miner: {
population:'151 (3d100)'
},
comercial: {
population:'60 (1d100+10)'
},
other: {
population:'A discutir, entre 1d100+10 / 3d100 dependiendo del tipo.'
}
}

const typeSources = {
  minorGovSize,
  guildSize,
  minorTypes,
  minorGovTypes
};

// LOGO INPUT

$('#logo').on('click', function () {
  $('#logoInput').click();
});

$('#logoInput').on('change', function () {
  const file = this.files[0];
  if (!file) return;

  if (!file.type.startsWith('image/')) return;

  const reader = new FileReader();

  reader.onload = function (e) {
    $('#logo')
      .empty()
      .css({
        'background-image': `url(${e.target.result})`,
        'background-size': 'contain',
        'background-repeat': 'no-repeat',
        'background-position': 'center'
      });
  };

  reader.readAsDataURL(file);
});

// TYPE INFO

$('#type select').on('change', function(){
let value = $(this).find(':selected').val();
var $form = $(this).parents('body');

$(this).closest('#type').find('i.nopc').text($(this).find(':selected').text());

if (types[value]) {

if (types[value].population.includes('trigger')) {
var triggered = types[value].population.split('trigger ')[1];
$form.find('#populationtotal i').text('Esperando selección extra de tipo');
$form.find('#typeExtra').hide();
$form.find('#typeExtra.'+triggered).show();
} else {
$form.find('#typeExtra').hide();
$form.find('#populationtotal i').text(types[value].population);
$form.find('#population .populationtotal i').text(types[value].population);
if (types[value].population.includes('d100')) {
var valueClean = parseInt(types[value].population.split(' (')[0]);
} else {
var valueClean = parseInt($form.find('#populationtotal i').text());
}

var percMinors = types[value].minorsPerc / 100;
var percAdults = types[value].adultsPerc / 100;
var percElders = types[value].eldersPerc / 100;

var cleanMinors = valueClean * percMinors;
var cleanAdults = valueClean * percAdults;
var cleanElders = valueClean * percElders;

var minors = Math.floor(cleanMinors);
var adults = Math.floor(cleanAdults);
var elders = Math.floor(cleanElders);

var totalRounded = minors + adults + elders;
var diff = valueClean - totalRounded;

var fractions = [
    { name: 'minors', value: cleanMinors - minors },
    { name: 'adults', value: cleanAdults - adults },
    { name: 'elders', value: cleanElders - elders }
];

fractions.sort((a, b) => b.value - a.value);

// distribute the remaining difference
for (var i = 0; i < diff; i++) {
    if (fractions[i % 3].name === 'minors') minors++;
    else if (fractions[i % 3].name === 'adults') adults++;
    else if (fractions[i % 3].name === 'elders') elders++;
}

$form.find('#population .populationminors i').attr('data-perc', percMinors).text(minors);
$form.find('#population .populationadults i').attr('data-perc', percAdults).text(adults);
$form.find('#population .populationelders i').attr('data-perc', percElders).text(elders);
}

}
});

// POPULATION INFO UPDATE IF CUSTOM

let typingTimer;
const doneDelay = 500;

$('#populationtotal i').on('input', function () {
var $form = $(this).parents('body');
clearTimeout(typingTimer);
typingTimer = setTimeout(() => {

$form.find('#population .populationtotal i').text($(this).text());

if ($(this).text().includes('d100')) {
var valueClean = parseInt($(this).text().split(' (')[0]);
} else {
var valueClean = parseInt($(this).text());
}

var percMinors = parseFloat($form.find('.populationminors i').data('perc'));
var percAdults = parseFloat($form.find('.populationadults i').data('perc'));
var percElders = parseFloat($form.find('.populationelders i').data('perc'));

var cleanMinors = valueClean * percMinors;
var cleanAdults = valueClean * percAdults;
var cleanElders = valueClean * percElders;

var minors = Math.floor(cleanMinors);
var adults = Math.floor(cleanAdults);
var elders = Math.floor(cleanElders);

var totalRounded = minors + adults + elders;
var diff = valueClean - totalRounded;

var fractions = [
    { name: 'minors', value: cleanMinors - minors },
    { name: 'adults', value: cleanAdults - adults },
    { name: 'elders', value: cleanElders - elders }
];

fractions.sort((a, b) => b.value - a.value);

// distribute the remaining difference
for (var i = 0; i < diff; i++) {
    if (fractions[i % 3].name === 'minors') minors++;
    else if (fractions[i % 3].name === 'adults') adults++;
    else if (fractions[i % 3].name === 'elders') elders++;
}

$form.find('#population .populationminors i').text(minors);
$form.find('#population .populationadults i').text(adults);
$form.find('#population .populationelders i').text(elders);

}, doneDelay);
});

// CORRECTION OF INFO IF SUBTYPE IS SPECIAL

$('#typeExtra select').on('change', function(){
let value = $(this).find(':selected').val();
let claseName = $(this).closest('#typeExtra').attr('class');
let source = typeSources[claseName];
var $form = $(this).parents('body');
$(this).closest('#typeExtra').find('i.nopc').text($(this).find(':selected').text());

if (source && source[value]) {

if ($(this).closest('#typeExtra').is('[data-type="population"]')) {
$form.find('#populationtotal i').text(source[value].population);
}

}
});

});
