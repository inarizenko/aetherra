document.addEventListener("DOMContentLoaded", () => {
  // Sample inventory data — replace or extend.
  const ITEMS = [
    {
      id: 1,
      image: "https://5e.tools/img/items/XDMG/Alchemy%20Jug.webp",
      name: "Alchemy Jug (2)",
      type: "Objeto maravilloso",
      rarity: "Poco Común",
      price: 6000,
      desc:
        "Esta jarra de cerámica parece tener capacidad para un galón de líquido y pesa 12 libras, tanto llena como vacía. Al agitarla, el líquido se mueve, incluso estando vacía.<br/><br/>Puedes realizar una acción mágica y nombrar un líquido de la tabla de Líquidos de la Jarra de Alquimia para que la jarra produzca dicho líquido. Después, puedes destapar la jarra con una acción de Utilizar y verter ese líquido, hasta 2 galones por minuto. La cantidad máxima de líquido que la jarra puede producir depende del líquido que hayas nombrado.<br/><br/>Una vez que la jarra comienza a producir un líquido, no puede producir otro diferente, ni más del que ya ha alcanzado su máximo, hasta el amanecer siguiente.",
      attunement: "",
      tools:"https://5e.tools/items.html#alchemy%20jug_xdmg"
    },
    {
      id: 2,
      image: "https://5e.tools/img/items/XDMG/Broom%20of%20Flying.webp",
      name: "Broom of Flying",
      type: "Objeto maravilloso",
      rarity: "Poco Común",
      price: 8000,
      desc:
        "Esta escoba de madera funciona como una escoba común hasta que te subes a ella y usas un hechizo para hacerla levitar bajo ti, momento en el que puedes volar sobre ella. Tiene una velocidad de vuelo de 15 metros. Puede cargar hasta 180 kilos, pero su velocidad de vuelo se reduce a 9 metros al cargar más de 90 kilos. La escoba deja de levitar al aterrizar o cuando dejas de usarla.<br/><br/>Como acción mágica, puedes enviar la escoba a volar sola a un destino a menos de 1 milla de ti si le indicas el lugar y lo conoces. La escoba regresa a ti cuando realizas una acción mágica y usas una palabra de mando si aún se encuentra a menos de 1 milla de ti.",
      attunement: "requiere sintonización",
      tools:"https://5e.tools/items.html#broom%20of%20flying_xdmg"
    },
    {
      id: 3,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHq4i9vTiri5846kS1QuNZko8sW1RUx6b8ew&s",
      name: "Cap of Water Breathing",
      type: "Objeto maravilloso",
      rarity: "Poco Común",
      price: 1000,
      desc:
        "Mientras llevas puesto este gorro bajo el agua, puedes realizar una acción mágica para crear una burbuja de aire alrededor de tu cabeza. Esta burbuja te permite respirar con normalidad bajo el agua. La burbuja permanece contigo hasta que te quitas el gorro o sales del agua.",
      attunement: "",
      tools:"https://5e.tools/items.html#cap%20of%20water%20breathing_xdmg"
    },
    {
      id: 4,
      image: "https://darkalliance.wiki.fextralife.com/file/Dark-Alliance/lightning_resistance_ring_wulfar_dark_alliance_wiki_guide_180px.png",
      name: "Citrine Ring of Resistance (Lightning)",
      type: "Anillo",
      rarity: "Raro",
      price: 6000,
      desc:
        "Obtienes resistencia a un tipo de daño mientras llevas puesto este anillo. Este anillo tiene un citrino, que da resistencia al daño por Relámpago.",
      attunement: "",
      tools:"https://5e.tools/items.html#ring%20of%20resistance_xdmg"
    },
    {
      id: 5,
      image: "https://5e.tools/img/items/XDMG/Cloak%20of%20Elvenkind.webp",
      name: "Cloak of Elvenkind",
      type: "Objeto maravilloso",
      rarity: "Poco Común",
      price: 5000,
      desc:
        "Mientras uses esta capa, las pruebas de Sabiduría ( Percepción ) que se realicen para percibirte tendrán Desventaja , y tendrás Ventaja en las pruebas de Destreza ( Sigilo ).",
      attunement: "requiere sintonización",
      tools:"https://5e.tools/items.html#cloak%20of%20elvenkind_xdmg"
    },
    {
      id: 6,
      image: "https://www.thievesguild.cc/images/magicitems/crystal-ball.jpg",
      name: "Crystal Ball",
      type: "Objeto maravilloso",
      rarity: "Muy Raro",
      price: 50000,
      desc:
        "La típica bola de cristal, un objeto muy raro, tiene unos 15 centímetros de diámetro. Al tocarla, puedes lanzar el conjuro de Scrying (CD 17).",
      attunement: "requiere sintonización",
      tools:"https://5e.tools/items.html#cloak%20of%20elvenkind_xdmg"
    },
    {
      id: 7,
      image: "https://5e.tools/img/items/XDMG/Daerns%20Instant%20Fortress.webp",
      name: "Daern's Instant Fortress",
      type: "Objeto maravilloso",
      rarity: "Raro",
      price: 75000,
      desc:
        "Como acción mágica , puedes colocar esta estatuilla de adamantio de 2,5 cm en el suelo y, mediante una palabra de mando, hacer que crezca rápidamente hasta convertirse en una torre cuadrada de adamantio. Repetir la palabra de mando hace que la torre vuelva a su forma de estatuilla, lo cual solo funciona si la torre está vacía. Cada criatura en el área donde aparece la torre es empujada a un espacio desocupado fuera de ella, pero junto a ella. Los objetos en el área que no estén siendo usados ​​o llevados también son alejados de la torre.<br/><br/>La torre mide 6 metros de lado y 9 metros de altura, con aspilleras en todos sus lados y una almena en la cima. Su interior está dividido en dos plantas, conectadas por una escalera, rampa o acceso a tu elección. Esta escalera, rampa o acceso termina en una trampilla que conduce al tejado. Al construirse, la torre tiene una única puerta a nivel del suelo en el lado que te da la espalda. La puerta solo se abre a tu orden, la cual puedes emitir como Acción Adicional . Es inmune al conjuro Abrir y magia similar.<br/><br/>La magia impide que la torre se derrumbe. El tejado, la puerta y las paredes tienen CA 20; 100 PV; inmunidad al daño contundente, perforante y cortante, excepto el infligido por maquinaria de asedio; y resistencia a todo otro daño. Reducir la torre a su forma de estatuilla no repara los daños. Solo el conjuro Deseo puede repararla (este uso del conjuro cuenta como replicar un conjuro de nivel 8 o inferior). Cada vez que se lanza Deseo, la torre recupera todos sus puntos de golpe .",
      attunement: "requiere sintonización",
      tools:"https://5e.tools/items.html#daern's%20instant%20fortress_xdmg"
    },
    {
      id: 8,
      image: "https://www.thievesguild.cc/images/magicitems/dust-of-dryness.jpg",
      name: "Dust of Dryness (1 pizca)",
      type: "Objeto maravilloso",
      rarity: "Poco Común",
      price: 120,
      desc:
        "Este pequeño paquete contiene 1 pizca de polvo. Como acción de Utilizar objeto, puedes esparcir una pizca de polvo sobre agua, convirtiendo un cubo de agua de hasta 4,5 metros de lado en una bolita del tamaño de una canica, que flota o se posa cerca de donde se esparció el polvo. El peso de la bolita es insignificante. Una criatura puede usar una acción de Utilizar para golpear la bolita contra una superficie dura, haciendo que se rompa y libere el agua que el polvo absorbió. Al hacerlo, la bolita se destruye y su magia termina.<br/><br/>Como acción de Utilizar un objeto, puedes esparcir una pizca del polvo sobre un Elemental compuesto principalmente de agua (como un Elemental de Agua o un Extraño de Agua ) a 1,5 metros de ti. Dicha criatura expuesta a la pizca del polvo debe realizar una tirada de salvación de Constitución CD 13 , sufriendo 10d6 de daño necrótico si falla o la mitad si tiene éxito.",
      attunement: "",
      tools:"https://5e.tools/items.html#dust%20of%20dryness_xdmg"
    },
    {
      id: 9,
      image: "https://5e.tools/img/items/XDMG/Eyes%20of%20Charming.webp",
      name: "Eyes of Charming",
      type: "Objeto maravilloso",
      rarity: "Poco Común",
      price: 3000,
      desc:
        "Estas lentes de cristal se ajustan a los ojos. Tienen 3 cargas. Mientras las llevas puestas, puedes gastar 1 o más cargas para lanzar Charm Person (CD 13). Con 1 carga, lanzas la versión de nivel 1 del conjuro. Aumentas el nivel del conjuro en uno por cada carga adicional que gastes. Las lentes recuperan todas las cargas gastadas diariamente al amanecer.",
      attunement: "requiere sintonización",
      tools:"https://5e.tools/items.html#eyes%20of%20charming_xdmg"
    },
    {
      id: 10,
      image: "https://5e.tools/img/items/XDMG/Gauntlets%20of%20Ogre%20Power.webp",
      name: "Gauntlets of Ogre Power",
      type: "Objeto maravilloso",
      rarity: "Poco Común",
      price: 8000,
      desc:
        "Tu puntuación de Fuerza es 19 mientras llevas puestos estos guanteletes. No tienen ningún efecto sobre ti si tu Fuerza es 19 o superior sin ellos.",
      attunement: "requiere sintonización",
      tools:"https://5e.tools/items.html#gauntlets%20of%20ogre%20power_xdmg"
    },
    {
      id: 11,
      image: "https://www.thievesguild.cc/images/magicitems/gloves-of-swimming-and-climbing.jpg",
      name: "Gloves of Swimming and Climbing",
      type: "Objeto maravilloso",
      rarity: "Poco Común",
      price: 2000,
      desc:
        "Mientras uses estos guantes, escalar y nadar no te costarán movimiento adicional y obtendrás una bonificación de +5 a las pruebas de Fuerza (Atletismo) realizadas para escalar o nadar.",
      attunement: "requiere sintonización",
      tools:"https://5e.tools/items.html#gloves%20of%20swimming%20and%20climbing_xdmg"
    },
    {
      id: 12,
      image: "https://5e.tools/img/items/XDMG/Headband%20of%20Intellect.webp",
      name: "Headband of Intellect",
      type: "Objeto maravilloso",
      rarity: "Poco Común",
      price: 8000,
      desc:
        "Tu puntuación de inteligencia es de 19 mientras llevas puesta esta diadema. No tiene ningún efecto si tu inteligencia es de 19 o superior sin ella.",
      attunement: "requiere sintonización",
      tools:"https://5e.tools/items.html#headband%20of%20intellect_xdmg"
    },
    {
      id: 13,
      image: "https://5e.tools/img/items/XDMG/Mac-Fuirmidh%20Cittern.webp",
      name: "Instrument of the Bards - Mac-Fuirmidh Cittern",
      type: "Objeto maravilloso",
      rarity: "Poco Común",
      price: 27000,
      desc:
        "Un Instrumento de los Bardos es superior a un instrumento ordinario en todos los aspectos. Existen siete tipos de estos instrumentos, cada uno con el nombre de un colegio de bardos. Una criatura que intente tocar el instrumento sin estar en sintonía con él debe superar una tirada de salvación de Sabiduría CD 15 o sufrir 2d4 puntos de daño psíquico.<br/><br/>Puedes tocar la Cítara Mac-Fuirmidh para lanzar uno de los siguientes conjuros: Fly, Invisibility, Levitate, Protection from Evil and Good, Barkskin, Cure Wounds, and Fog Cloud. Una vez que la Cítara Mac-Fuirmidh se ha usado para lanzar un conjuro, no se podrá volver a usar para lanzar ese mismo conjuro hasta el amanecer siguiente. Los conjuros utilizan tu habilidad de lanzamiento de conjuros y la CD de salvación de conjuros.",
      attunement: "requiere sintonización por un bardo",
      tools:"https://5e.tools/items.html#instrument%20of%20the%20bards%2c%20mac-fuirmidh%20cittern_xdmg"
    },
    {
      id: 14,
      image: "https://5e.tools/img/items/XDMG/Ioun%20Stone.webp",
      name: "Ioun Stone, Fortitude",
      type: "Objeto maravilloso",
      rarity: "Muy Raro",
      price: 3000,
      desc:
        "De un tamaño similar al de las canicas, las Piedras Ioun reciben su nombre de Ioun, un dios del conocimiento y la profecía venerado en algunos mundos. Existen muchos tipos de Piedras Ioun , cada uno con una combinación única de forma y color.<br/><br/>Cuando usas una acción mágica para lanzar una Piedra Ioun al aire, esta orbita tu cabeza a una distancia de 1d3 pies, otorgándote su beneficio mientras lo hace. Puedes tener hasta tres Piedras Ioun orbitando tu cabeza simultáneamente.<br/><br/>Cada Piedra Ioun que orbita tu cabeza se considera un objeto que llevas puesto. La piedra en órbita evita el contacto con otras criaturas y objetos, ajustando su órbita para evitar colisiones y frustrando cualquier intento de otras criaturas por atacarla o arrebatársela.<br/><br/>Como acción de Utilizar , puedes capturar y guardar cualquier número de Piedras Ioun que orbiten alrededor de tu cabeza. Si tu Sintonía con una Piedra Ioun termina mientras orbita alrededor de tu cabeza, la piedra cae como si la hubieras soltado.<br/><br/>Tu Constitución aumenta en 2, hasta un máximo de 20, mientras este romboide rosa orbita tu cabeza.",
      attunement: "requiere sintonización",
      tools:"https://5e.tools/items.html#ioun%20stone%2c%20fortitude_xdmg"
    },
    {
      id: 15,
      image: "https://insomniacnation.wordpress.com/wp-content/uploads/2018/04/jet.jpg",
      name: "Jet Ring of Resistance (Necrotic)",
      type: "Anillo",
      rarity: "Raro",
      price: 6000,
      desc:
        "Obtienes resistencia a un tipo de daño mientras llevas puesto este anillo. Este anillo tiene un jet, que da resistencia al daño Necrótico.",
      attunement: "",
      tools:"https://5e.tools/items.html#ring%20of%20resistance_xdmg"
    },
    {
      id: 16,
      image: "https://5e.tools/img/items/XDMG/Necklace%20of%20Adaptation.webp",
      name: "Necklace of Adaptation",
      type: "Objeto maravilloso",
      rarity: "Poco Común",
      price: 1500,
      desc:
        "Mientras lleves puesto este collar, podrás respirar normalmente en cualquier ambiente y tendrás ventaja en las tiradas de salvación que se realicen para evitar o terminar con la condición de Envenenado.",
      attunement: "requiere sintonización",
      tools:"https://5e.tools/items.html#necklace%20of%20adaptation_xdmg"
    },
    {
      id: 17,
      image: "https://www.thievesguild.cc/images/magicitems/oil-of-slipperiness.jpg",
      name: "Oil of Slipperiness",
      type: "Poción",
      rarity: "Poco Común",
      price: 480,
      desc:
        "Un vial de este aceite puede cubrir a una criatura Mediana o más pequeña, junto con el equipo que lleve puesto y cargue (se requiere un vial adicional por cada categoría de tamaño superior a Mediana). La aplicación del aceite tarda 10 minutos. La criatura afectada obtiene entonces el efecto del conjuro Libertad de Movimiento durante 8 horas.<br/><br/>Alternativamente, el aceite puede verterse en el suelo como una acción mágica , donde cubrirá un cuadrado de 10 pies, duplicando el efecto del hechizo Grasa en esa área durante 8 horas.<br/><br/>Este ungüento negro y pegajoso es espeso y denso, pero fluye rápidamente al verterlo.",
      attunement: "",
      tools:"https://5e.tools/items.html#oil%20of%20slipperiness_xdmg"
    },
    {
      id: 18,
      image: "https://static.wikia.nocookie.net/forgottenrealms/images/b/bd/Potion_of_animal_friendship.png/revision/latest?cb=20240506234252",
      name: "Potion of Animal Friendship",
      type: "Poción",
      rarity: "Poco Común",
      price: 200,
      desc:
        "Cuando bebas esta poción, podrás lanzar la versión de nivel 3 del hechizo Amistad Animal (CD de salvación 13 ).<br/><br/>Al agitar el líquido turbio de esta poción, aparecen pequeños fragmentos a la vista: una escama de pescado, una pluma de colibrí, una garra de gato o un pelo de ardilla.",
      attunement: "",
      tools:"https://5e.tools/items.html#potion%20of%20animal%20friendship_xdmg"
    },
    {
      id: 19,
      image: "https://storage.ko-fi.com/cdn/useruploads/post/323e088a-b3a8-4bc6-a76f-e0f628623fae_rare_potions_002.png",
      name: "Potion of Clairvoyance",
      type: "Poción",
      rarity: "Raro",
      price: 960,
      desc:
        "Al beber esta poción, obtienes el efecto del hechizo Clairvoyance (no se requiere concentración).<br/><br/>Un globo ocular flota en el líquido amarillento de esta poción, pero desaparece al abrirla.",
      attunement: "",
      tools:"https://5e.tools/items.html#potion%20of%20clairvoyance_xdmg"
    },
    {
      id: 20,
      image: "https://5e.tools/img/items/XDMG/Potion%20of%20Climbing.webp",
      name: "Potion of Climbing (3)",
      type: "Poción",
      rarity: "Común",
      price: 180,
      desc:
        "Al beber esta poción, obtienes una Velocidad de Trepar igual a tu Velocidad durante 1 hora. Durante este tiempo, tienes ventaja en las pruebas de Fuerza ( Atletismo ) para trepar.<br/><br/>Esta poción se separa en capas marrones, plateadas y grises que parecen bandas de piedra. Agitar la botella no consigue mezclar los colores.",
      attunement: "",
      tools:"https://5e.tools/items.html#potion%20of%20climbing_xdmg"
    },
    {
      id: 21,
      image: "https://bg3.wiki/w/images/thumb/b/bd/COAT_Oil_of_Diminution_Faded.png/300px-COAT_Oil_of_Diminution_Faded.png",
      name: "Potion of Diminution",
      type: "Poción",
      rarity: "Raro",
      price: 270,
      desc:
        "Al beber esta poción, obtienes el efecto 'reducir' del conjuro Enlarge/Reduce durante 1d4 horas (no se requiere concentración).<br/><br/>El color rojo del líquido de la poción se contrae continuamente formando una diminuta gota que luego se expande tiñendo el líquido transparente que la rodea. Agitar el frasco no interrumpe este proceso.",
      attunement: "",
      tools:"https://5e.tools/items.html#potion%20of%20diminution_xdmg"
    },
    {
      id: 22,
      image: "https://5e.tools/img/items/XDMG/Potion%20of%20Fire%20Breath.webp",
      name: "Potion of Fire Breath",
      type: "Poción",
      rarity: "Poco Común",
      price: 150,
      desc:
        "Tras beber esta poción, puedes usar una acción adicional para exhalar fuego a un objetivo a 9 metros de ti. El objetivo debe realizar una tirada de salvación de Destreza CD 13 , sufriendo 4d6 puntos de daño por fuego si falla o la mitad si tiene éxito. El efecto termina tras exhalar el fuego tres veces o al transcurrir 1 hora.<br/><br/>El líquido naranja de esta poción parpadea, y el humo llena la parte superior del recipiente y se escapa cada vez que se abre.",
      attunement: "",
      tools:"https://5e.tools/items.html#potion%20of%20fire%20breath_xdmg"
    },
    {
      id: 23,
      image: "https://www.worldanvil.com/uploads/images/d635114121f859cfb79477ed5ac49f40.png",
      name: "Potion of Greater Healing (3)",
      type: "Poción",
      rarity: "Poco Común",
      price: 150,
      desc:
        "Al beber esta poción, recuperas 4d4 + 4 puntos de golpe. El líquido rojo de la poción brilla al agitarse.",
      attunement: "",
      tools:"https://5e.tools/items.html#potion%20of%20greater%20healing_xdmg"
    },
    {
      id: 24,
      image: "https://wa-cdn.nyc3.cdn.digitaloceanspaces.com/user-data/production/7f3e0451-16b8-4c47-a40d-bdcaf062124e/uploads/images/8909e01f3c0e67e9cf35d3a72cda7199.webp",
      name: "Potion of Growth (2)",
      type: "Poción",
      rarity: "Poco Común",
      price: 270,
      desc:
        "Al beber esta poción, obtienes el efecto 'agrandar' del hechizo Enlarge/Reduce durante 10 minutos (no se requiere concentración).<br/><br/>El color rojo del líquido de la poción se expande continuamente desde una minúscula gota, tiñendo el líquido transparente que la rodea, para luego contraerse. Agitar el frasco no interrumpe este proceso.",
      attunement: "",
      tools:"https://5e.tools/items.html#potion%20of%20growth_xdmg"
    },
    {
      id: 25,
      image: "https://5e.tools/img/items/XDMG/Potion%20of%20Healing.webp",
      name: "Potion of Healing (4)",
      type: "Poción",
      rarity: "Común",
      price: 50,
      desc:
        "Esta poción es un objeto mágico. Como acción adicional, puedes beberla o administrársela a otra criatura a 1,5 metros de ti. La criatura que bebe el líquido rojo mágico de este vial recupera 2d4 + 2 puntos de golpe. El líquido rojo de la poción brilla al agitarse.",
      attunement: "",
      tools:"https://5e.tools/items.html#potion%20of%20healing_xdmg"
    },
    {
      id: 26,
      image: "https://oldguard-rp.com/wp-content/uploads/2022/06/Potion-of-Heroism.webp",
      name: "Potion of Heroism",
      type: "Poción",
      rarity: "Raro",
      price: 180,
      desc:
        "Al beber esta poción, obtienes 10 puntos de golpe temporales que duran 1 hora. Durante el mismo tiempo, estás bajo el efecto del hechizo Bendición (no se requiere concentración).<br/><br/>El líquido azul de esta poción burbujea y humea como si estuviera hirviendo.",
      attunement: "",
      tools:"https://5e.tools/items.html#potion%20of%20heroism_xdmg"
    },
    {
      id: 27,
      image: "https://img.ttg.club/item_magic/Potion_of_invulnerability.png",
      name: "Potion of Invulnerability",
      type: "Poción",
      rarity: "Raro",
      price: 3840,
      desc:
        "Durante 1 minuto después de beber esta poción, tendrás resistencia a todo daño.<br/><br/>El líquido viscoso de esta poción parece hierro licuado.",
      attunement: "",
      tools:"https://5e.tools/items.html#potion%20of%20invulnerability_xdmg"
    },
    {
      id: 28,
      image: "https://static.wikia.nocookie.net/forgottenrealms/images/f/f5/Potion_of_Mind_Reading.png/revision/latest?cb=20230924074731",
      name: "Potion of Mind Reading",
      type: "Poción",
      rarity: "Raro",
      price: 180,
      desc:
        "Cuando bebas esta poción, obtendrás el efecto del hechizo Detect Thoughts (CD de salvación 13) durante 10 minutos (no se requiere concentración).<br/><br/>El denso líquido púrpura de esta poción contiene una nube ovoide rosa flotando en él.",
      attunement: "",
      tools:"https://5e.tools/items.html#potion%20of%20mind%20reading_xdmg"
    },
    {
      id: 29,
      image: "https://bg3.wiki/w/images/c/c5/ELX_Elixir_of_Poison_Resistance_Unfaded.png",
      name: "Potion of Resistance Against Acid",
      type: "Poción",
      rarity: "Poco Común",
      price: 300,
      desc:
        "Al beber esta poción, obtienes resistencia a un tipo de daño durante 1 hora. Esta poción otorga resistencia contra el daño de Ácido.",
      attunement: "",
      tools:"https://5e.tools/items.html#potion%20of%20resistance_xdmg"
    },
    {
      id: 30,
      image: "https://bg3.wiki/w/images/6/6f/ELX_Elixir_of_Cold_Resistance_Unfaded.png",
      name: "Potion of Resistance Against Cold",
      type: "Poción",
      rarity: "Poco Común",
      price: 300,
      desc:
        "Al beber esta poción, obtienes resistencia a un tipo de daño durante 1 hora. Esta poción otorga resistencia contra el daño de Frío.",
      attunement: "",
      tools:"https://5e.tools/items.html#potion%20of%20resistance_xdmg"
    },
    {
      id: 31,
      image: "https://bg3.wiki/w/images/3/38/ELX_Elixir_of_Fire_Resistance_Unfaded.png",
      name: "Potion of Resistance Against Fire",
      type: "Poción",
      rarity: "Poco Común",
      price: 300,
      desc:
        "Al beber esta poción, obtienes resistencia a un tipo de daño durante 1 hora. Esta poción otorga resistencia contra el daño de Fuego.",
      attunement: "",
      tools:"https://5e.tools/items.html#potion%20of%20resistance_xdmg"
    },
    {
      id: 32,
      image: "https://bg3.wiki/w/images/d/d8/ELX_Elixir_of_Force_Resistance_Unfaded.png",
      name: "Potion of Resistance Against Force",
      type: "Poción",
      rarity: "Poco Común",
      price: 300,
      desc:
        "Al beber esta poción, obtienes resistencia a un tipo de daño durante 1 hora. Esta poción otorga resistencia contra el daño de Fuerza.",
      attunement: "",
      tools:"https://5e.tools/items.html#potion%20of%20resistance_xdmg"
    },
    {
      id: 33,
      image: "https://bg3.wiki/w/images/7/73/POT_Potion_of_Superior_Healing_Unfaded.png",
      name: "Potion of Superior Healing (2)",
      type: "Poción",
      rarity: "Muy Raro",
      price: 450,
      desc:
        "Al beber esta poción, recuperas 8d4 + 8 puntos de golpe. El líquido rojo de la poción brilla al agitarse.",
      attunement: "",
      tools:"https://5e.tools/items.html#potion%20of%20superior%20healing_xdmg"
    },
    {
      id: 34,
      image: "https://bg3.wiki/w/images/7/78/POT_Potion_of_Supreme_Healing_Unfaded.png",
      name: "Potion of Supreme Healing",
      type: "Poción",
      rarity: "Muy Raro",
      price: 1350,
      desc:
        "Al beber esta poción, recuperas 10d4 + 20 puntos de golpe. El líquido rojo de la poción brilla al agitarse.",
      attunement: "",
      tools:"https://5e.tools/items.html#potion%20of%20supreme%20healing_xdmg"
    },
    {
      id: 35,
      image: "https://files.d20.io/images/414423405/sLF_MKcvPZPYd_WYgeAvfQ/original.png",
      name: "Quiver of Ehlonna",
      type: "Objeto maravilloso",
      rarity: "Poco Común",
      price: 1000,
      desc:
        "Cada uno de los tres compartimentos del carcaj se conecta a un espacio extradimensional que le permite contener numerosos objetos sin superar nunca los 900 gramos de peso. El compartimento más pequeño puede albergar hasta 60 flechas , virotes u objetos similares. El compartimento mediano puede contener hasta 18 jabalinas u objetos similares. El compartimento más largo puede albergar hasta 6 objetos largos, como arcos, bastones o lanzas.<br/><br/>Puedes extraer cualquier objeto que contenga el carcaj como si lo hicieras de un carcaj o vaina normal.",
      attunement: "",
      tools:"https://5e.tools/items.html#quiver%20of%20ehlonna_xdmg"
    },
    {
      id: 36,
      image: "https://5e.tools/img/items/XDMG/Ring%20of%20Protection.webp",
      name: "Ring of Protection",
      type: "Objeto maravilloso",
      rarity: "Raro",
      price: 3500,
      desc:
        "Obtienes un bonificador de +1 a la Clase de Armadura y a las tiradas de salvación mientras llevas puesto este anillo.",
      attunement: "requiere sintonización",
      tools:"https://5e.tools/items.html#ring%20of%20protection_xdmg"
    },
    {
      id: 37,
      image: "https://5e.tools/img/items/XDMG/Robe%20of%20Useful%20Items.webp",
      name: "Robe of Useful Items (7 special patches)",
      type: "Objeto maravilloso",
      rarity: "Poco Común",
      price: 20200,
      desc:
        "Esta túnica está cubierta de parches de tela de diversas formas y colores. Mientras la llevas puesta, puedes realizar una acción mágica para desprender uno de los parches, transformándolo en el objeto o criatura que representa. Una vez que se retira el último parche, la túnica se convierte en una prenda común.<br/><br/>La túnica tiene dos parches de cada uno de los siguientes tipos:<br/><br/>- Linterna de ojo de buey (llena y encendida)<br/>- Daga<br/>- Espejo<br/>- Polo<br/>- Cuerda (enrollada)<br/>- Bolsa<br/>Además, la túnica tiene 7 parches adicionales.",
      attunement: "",
      tools:"https://5e.tools/items.html#robe%20of%20useful%20items_xdmg"
    },
    {
      id: 38,
      image: "https://www.thievesguild.cc/images/magicitems/ring-of-resistance-force.jpg",
      name: "Sapphire Ring of Resistance (Force)",
      type: "Anillo",
      rarity: "Raro",
      price: 6000,
      desc:
        "Obtienes resistencia a un tipo de daño mientras llevas puesto este anillo. Este anillo tiene un zafiro, que da resistencia al daño por Fuerza.",
      attunement: "",
      tools:"https://5e.tools/items.html#ring%20of%20resistance_xdmg"
    },
    {
      id: 38,
      image: "https://www.thievesguild.cc/images/magicitems/ring-of-resistance-force.jpg",
      name: "Sapphire Ring of Resistance (Force)",
      type: "Anillo",
      rarity: "Raro",
      price: 6000,
      desc:
        "Obtienes resistencia a un tipo de daño mientras llevas puesto este anillo. Este anillo tiene un zafiro, que da resistencia al daño por Fuerza.",
      attunement: "",
      tools:"https://5e.tools/items.html#ring%20of%20resistance_xdmg"
    },
  ];
  
  // UI state
  let state = {
    items: ITEMS.slice(),
    filters: { type: [], rarity: [] },
    search: "",
    sort: "name_asc",
    priceMin: null,
    priceMax: null,
    cart: []
  };

  // helpers
  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => Array.from(document.querySelectorAll(sel));

  function unique(arr, key) {
    return Array.from(new Set(arr.map((i) => i[key]))).sort();
  }

  // populate filter chips
  function renderFilterChips() {
    const types = unique(state.items, "type");
    const rarities = unique(state.items, "rarity");
    const elType = $("#filterType");
    elType.innerHTML = "";
    const elRarity = $("#filterRarity");
    elRarity.innerHTML = "";
    types.forEach((t) => {
      const b = document.createElement("button");
      b.className = "chip";
      b.textContent = t;
      b.dataset.value = t;
      b.onclick = () => toggleChip("type", t, b);
      elType.appendChild(b);
    });
    rarities.forEach((r) => {
      const b = document.createElement("button");
      b.className = "chip";
      b.textContent = r;
      b.dataset.value = r;
      b.onclick = () => toggleChip("rarity", r, b);
      elRarity.appendChild(b);
    });
  }

  function toggleChip(k, v, btn) {
    const idx = state.filters[k].indexOf(v);
    if (idx > -1)
      state.filters[k].splice(idx, 1), btn.classList.remove("active");
    else state.filters[k].push(v), btn.classList.add("active");
    refresh();
  }

  // main render
  function refresh() {
    let items = state.items.slice();
    // search
    if (state.search) {
      const q = state.search.toLowerCase();
      items = items.filter((it) =>
        (it.name + " " + it.desc + " " + it.type + " " + it.rarity)
          .toLowerCase()
          .includes(q)
      );
    }
    // filters
    if (state.filters.type.length)
      items = items.filter((it) => state.filters.type.includes(it.type));
    if (state.filters.rarity.length)
      items = items.filter((it) => state.filters.rarity.includes(it.rarity));
    // price
    if (state.priceMin !== null && state.priceMin !== "")
      items = items.filter((it) => it.price >= Number(state.priceMin));
    if (state.priceMax !== null && state.priceMax !== "")
      items = items.filter((it) => it.price <= Number(state.priceMax));

    // sort
    switch (state.sort) {
      case "name_asc":
        items.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name_desc":
        items.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "price_asc":
        items.sort((a, b) => a.price - b.price);
        break;
      case "price_desc":
        items.sort((a, b) => b.price - a.price);
        break;
      case "rarity":
        const rarityRank = {
          Común: 1,
          "Poco común": 2,
          Raro: 3,
          "Muy raro": 4,
          Legendario: 5
        };
        items.sort((a, b) => rarityRank[a.rarity] - rarityRank[b.rarity]);
        break;
    }

    renderGrid(items);
    $("#count").textContent = items.length;
  }

  function renderGrid(items) {
    const grid = $("#grid");
    grid.innerHTML = "";
    items.forEach((it) => {
      const c = document.createElement("article");
      c.className = "card";
      c.innerHTML = `
          <div class="meta">
            <div class="avatar"><img src="${it.image}"/></div>
            <div style="flex:1">
              <div class="name">${it.name}</div>
              <div class="desc">${it.type} · <span class="muted">${it.rarity}</span></div>
            </div>
            <div class="price">${it.price} PO</div>
          </div>
          <div class="tags"><span class="tag">${it.type}</span><span class="tag">${it.rarity}</span><span class="tag">${it.attunement}</span></div>
          <div class="actions">
            <a href="${it.tools}" title="Ver página de item en 5e.tools"><img src="https://i.imgur.com/Ym2ZJlQ.png"/></a>
            <button class="btn-ghost" data-id="${it.id}" aria-label="Ver detalles">Detalles</button>
            <button class="btn" data-buy="${it.id}">Añadir</button>
          </div>
        `;
      // click handlers
      c.querySelector("[data-id]").onclick = () => openModal(it.id);
      c.querySelector("[data-buy]").onclick = () => addToCart(it.id);
      grid.appendChild(c);
    });
  }

  // modal
  function openModal(id) {
    const it = state.items.find((x) => x.id == id);
    if (!it) return;
    $("#modalAvatar").innerHTML = `<img src="${it.image}" alt="${it.name}" style="width:100%; height:100%; object-fit:cover; border-radius:8px;"/>`;
    $("#modalType").textContent = `${it.type} • ${it.rarity}`;
    $("#modalName").textContent = it.name;
    $("#modalDesc").textContent = it.desc;
    $("#modalPrice").textContent = `${it.price} PO`;
    $("#modalAdd+a").setAttribute("title", it.tools);
    $("#modalAdd").onclick = () => {
      addToCart(it.id);
      closeModal();
    };
    $("#modalBackdrop").style.display = "flex";
    $("#modalBackdrop").setAttribute("aria-hidden", "false");
  }
  function closeModal() {
    $("#modalBackdrop").style.display = "none";
    $("#modalBackdrop").setAttribute("aria-hidden", "true");
  }
  $("#modalBackdrop").onclick = function (e) {
    if (e.target === this) closeModal();
  };

  // cart
  function addToCart(id) {
    const it = state.items.find((x) => x.id == id);
    if (!it) return;
    const existing = state.cart.find((c) => c.id == id);
    if (existing) existing.qty++;
    else state.cart.push({ id: it.id, name: it.name, price: it.price, qty: 1 });
    renderCart();
  }
  function renderCart() {
    const c = $("#cart");
    const itemsEl = $("#cartItems");
    if (state.cart.length === 0) {
      itemsEl.innerHTML = '<div class="muted">Tu carro está vacío</div>';
      $("#cart").style.display = "none";
      return;
    }
    $("#cart").style.display = "block";
    itemsEl.innerHTML = "";
    state.cart.forEach((it) => {
      const row = document.createElement("div");
      row.style.display = "flex";
      row.style.alignItems = "center";
      row.style.gap = "8px";
      row.innerHTML = `<div style="width:44px;height:44px;border-radius:8px;background:rgba(255,255,255,0.02);display:grid;place-items:center">${
        it.qty
      }×</div>
          <div style="flex:1"><div style="font-weight:700">${
            it.name
          }</div><div class="muted" style="font-size:12px">${
        it.price
      } PO each</div></div>
          <div style="text-align:right">${
            it.price * it.qty
          } PO<br/><button class=\"btn-ghost\" data-remove=\"${
        it.id
      }\">–</button></div>`;
      itemsEl.appendChild(row);
    });
    $("#cartCount").textContent = `${state.cart.reduce(
      (s, i) => s + i.qty,
      0
    )} items`;
    $("#cartTotal").textContent = `${state.cart.reduce(
      (s, i) => s + i.price * i.qty,
      0
    )} PO`;
    // remove handlers
    Array.from(itemsEl.querySelectorAll("[data-remove]")).forEach(
      (b) =>
        (b.onclick = (ev) => {
          const id = Number(b.dataset.remove);
          const idx = state.cart.findIndex((x) => x.id === id);
          if (idx > -1) {
            state.cart[idx].qty--;
            if (state.cart[idx].qty <= 0) state.cart.splice(idx, 1);
            renderCart();
          }
        })
    );
  }

  // exports
  function exportCsv() {
    const rows = [["id", "name", "type", "rarity", "price", "desc"]];
    state.items.forEach((i) =>
      rows.push([i.id, i.name, i.type, i.rarity, i.price, i.desc])
    );
    const csv = rows
      .map((r) =>
        r.map((cell) => '"' + String(cell).replace(/"/g, '""') + '"').join(",")
      )
      .join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "dnd-shop.csv";
    a.click();
    URL.revokeObjectURL(url);
  }

  // UI bindings
  renderFilterChips();
  refresh();
  $("#search").addEventListener("input", (e) => {
    state.search = e.target.value;
    refresh();
  });
  $("#sort").addEventListener("change", (e) => {
    state.sort = e.target.value;
    refresh();
  });
  $("#priceMin").addEventListener("input", (e) => {
    state.priceMin = e.target.value;
    refresh();
  });
  $("#priceMax").addEventListener("input", (e) => {
    state.priceMax = e.target.value;
    refresh();
  });
  $("#clearFilters").addEventListener("click", () => {
    state.filters = { type: [], rarity: [] };
    Array.from(document.querySelectorAll(".chip.active")).forEach((n) =>
      n.classList.remove("active")
    );
    refresh();
  });
  $("#randomize").addEventListener("click", () => {
    // simple shuffle prices
    state.items.forEach(
      (it) =>
        (it.price = Math.max(
          1,
          Math.round(it.price * (0.6 + Math.random() * 1.6))
        ))
    );
    $("#exportCsv").addEventListener("click", exportCsv);
    $("#checkout").addEventListener("click", () =>
      alert("Pretend checkout — export cart to CSV not implemented.")
    );

    // simple keyboard shortcuts
    document.addEventListener("keydown", (e) => {
      if (e.key === "/" && document.activeElement.tagName !== "INPUT") {
        e.preventDefault();
        $("#search").focus();
      }
      if (e.key === "c" && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        renderCart();
      }
    });
  });
});
