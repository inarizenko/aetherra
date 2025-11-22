document.addEventListener("DOMContentLoaded", () => {
  // Sample inventory data — replace or extend.
  const ITEMS = [
    {
      id: 1,
      image: "https://5e.tools/img/items/XDMG/Alchemy%20Jug.webp",
      name: "Alchemy Jug",
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
      image: "https://5e.tools/img/items/XDMG/Boots%20of%20Striding%20and%20Springing.webp",
      name: "Boots of Striding and Springing",
      type: "Objeto maravilloso",
      rarity: "Poco Común",
      price: 5000,
      desc:
        "Mientras uses estas botas, tu Velocidad se convierte en 30 pies a menos que tu Velocidad sea mayor, y tu Velocidad no se reduce por llevar un peso superior a tu capacidad de carga o por llevar armadura pesada.<br/><br/>Una vez en cada uno de tus turnos, puedes saltar hasta 30 pies gastando solo 10 pies de movimiento.",
      attunement: "requiere sintonización",
      tools:"https://5e.tools/items.html#boots%20of%20striding%20and%20springing_xdmg"
    },
    {
      id: 3,
      image: "https://5e.tools/img/items/XDMG/Bracers%20of%20Archery.webp",
      name: "Bracers of Archery",
      type: "Objeto maravilloso",
      rarity: "Poco Común",
      price: 1500,
      desc:
        "Mientras uses estos brazales, tendrás competencia con el arco largo y el arco corto, y obtendrás una bonificación de +2 a las tiradas de daño realizadas con dichas armas.",
      attunement: "requiere sintonización",
      tools:"https://5e.tools/items.html#bracers%20of%20archery_xdmg"
    },
    {
      id: 4,
      image: "https://5e.tools/img/items/XDMG/Brazier%20of%20Commanding%20Fire%20Elementals.webp",
      name: "Brazier of Commanding Fire Elementals",
      type: "Objeto maravilloso",
      rarity: "Raro",
      price: 8000,
      desc:
        "Mientras estés a 1,5 metros de este brasero, puedes usar una acción mágica para invocar a un elemental de fuego. El elemental aparece en un espacio desocupado lo más cerca posible del brasero, entiende tus idiomas, obedece tus órdenes y actúa inmediatamente después de ti en tu turno de iniciativa. El elemental desaparece después de 1 hora, cuando muere o cuando lo despides como acción adicional. El brasero no se puede volver a usar de esta manera hasta el amanecer siguiente.",
      attunement: "",
      tools:"https://5e.tools/items.html#brazier%20of%20commanding%20fire%20elementals_xdmg"
    },
    {
      id: 5,
      image: "https://5e.tools/img/items/XDMG/Circlet%20of%20Blasting.webp",
      name: "Circlet of Blasting",
      type: "Objeto maravilloso",
      rarity: "Poco Común",
      price: 1500,
      desc:
        "Mientras llevas puesta esta diadema, puedes lanzar Rayo abrasador con ella (+5 al ataque). La diadema no puede volver a lanzar este hechizo hasta el amanecer siguiente.",
      attunement: "",
      tools:"https://5e.tools/items.html#circlet%20of%20blasting_xdmg"
    },
    {
      id: 6,
      image: "https://5e.tools/img/items/XDMG/Dimensional%20Shackles.webp",
      name: "Dimensional Shackles",
      type: "Objeto maravilloso",
      rarity: "Raro",
      price: 3000,
      desc:
        "Puedes usar la acción Utilizar para colocar estos grilletes a una criatura con la condición Incapacitada . Los grilletes se ajustan a criaturas de tamaño Pequeño a Grande. Impiden que la criatura atada utilice cualquier método de movimiento extradimensional, incluyendo la teletransportación o los viajes a otro plano de existencia. Sin embargo, no le impiden atravesar un portal interdimensional.<br/><br/>Tanto tú como la criatura que designes al usar los grilletes podéis usar una acción de Utilizar para quitároslos. Una vez cada 30 días, la criatura atada puede realizar una prueba de Fuerza ( Atletismo ) CD 30. Si la supera, se libera y destruye los grilletes.",
      attunement: "",
      tools:"https://5e.tools/items.html#dimensional%20shackles_xdmg"
    },
    {
      id: 7,
      image: "https://5e.tools/img/items/XDMG/Eyes%20of%20Charming.webp",
      name: "Eyes of Charming",
      type: "Objeto maravilloso",
      rarity: "Poco Común",
      price: 3000,
      desc:
        "Estas lentes de cristal se ajustan a los ojos. Tienen 3 cargas. Mientras las usas, puedes gastar 1 o más cargas para lanzar Hechizar Persona (CD de salvación 13). Por 1 carga, lanzas la versión de nivel 1 del hechizo. Aumentas el nivel del hechizo en uno por cada carga adicional que gastes. Las lentes recuperan todas las cargas gastadas diariamente al amanecer.",
      attunement: "",
      tools:"https://5e.tools/items.html#eyes%20of%20charming_xdmg"
    },
    {
      id: 8,
      image: "https://5e.tools/img/items/XDMG/Helm%20of%20Comprehending%20Languages.webp",
      name: "Helm of Comprehending Languages",
      type: "Objeto maravilloso",
      rarity: "Poco Común",
      price: 500,
      desc:
        "Mientras uses este yelmo, puedes lanzar Comprehend Languages desde él.",
      attunement: "",
      tools:"https://5e.tools/items.html#helm%20of%20comprehending%20languages_xdmg"
    },
    {
      id: 9,
      image: "https://5e.tools/img/items/XDMG/Hewards%20Handy%20Haversack.webp",
      name: "Heward's Handy Haversack",
      type: "Objeto maravilloso",
      rarity: "Raro",
      price: 2000,
      desc:
        "Esta mochila tiene un bolsillo central y dos bolsillos laterales, cada uno de los cuales es un espacio extradimensional. Cada bolsillo lateral puede contener hasta 200 libras de material, sin exceder un volumen de 25 pies cúbicos. El bolsillo central puede contener hasta 500 libras de material, sin exceder un volumen de 64 pies cúbicos. La mochila siempre pesa 5 libras, independientemente de su contenido<br/><br/>Para sacar un objeto de la mochila se requiere una acción de Utilizar o una Acción Adicional (a tu elección). Cuando buscas un objeto específico en la mochila, este siempre aparece mágicamente encima.<br/><br/>Si alguno de sus bolsillos se sobrecarga, se perfora o se rasga, la mochila se rompe y se destruye. Si la mochila se destruye, su contenido se pierde para siempre, aunque siempre aparece un artefacto en algún lugar. Si la mochila se da la vuelta, su contenido se derrama intacto, y la mochila debe enderezarse antes de poder usarse de nuevo.<br/><br/>Cada bolsa de la mochila contiene suficiente aire para 10 minutos de respiración, dividido por el número de criaturas que respiran en su interior.<br/><br/>Al colocar la mochila dentro de un espacio extradimensional creado por una Bolsa de Contención , un Agujero Portátil o un objeto similar, ambos objetos se destruyen instantáneamente y se abre un portal al Plano Astral. El portal se origina en el punto donde se colocó un objeto dentro del otro. Cualquier criatura que se encuentre a menos de 3 metros del portal y que no esté protegida por Cobertura Total es absorbida y depositada en una ubicación aleatoria del Plano Astral. El portal se cierra entonces. Es unidireccional y no se puede volver a abrir.",
      attunement: "",
      tools:"https://5e.tools/items.html#helm%20of%20comprehending%20languages_xdmg"
    },
    {
      id: 10,
      image: "https://5e.tools/img/items/XDMG/Doss%20Lute.webp",
      name: "Instrument of the Bards - Doss Lute",
      type: "Objeto maravilloso",
      rarity: "Raro",
      price: 28500,
      desc:
        "Un Instrumento de los Bardos es superior a un instrumento ordinario en todos los sentidos. Existen siete tipos de estos instrumentos, cada uno con el nombre de un colegio de bardos. Una criatura que intente tocar el instrumento sin estar sintonizada con él debe superar una tirada de salvación de Sabiduría CD 15 o sufrir 2d4 de daño psíquico.<br/><br/>Puedes tocar el Laúd Doss para lanzar uno de los siguientes conjuros: Fly, Invisibility, Levitate, Protection from Evil and Good, Animal Friendship, Protection from Energy (Fire damage only), and Protection from Poison. Una vez que el Laúd Doss se ha usado para lanzar un conjuro, no se podrá volver a usar para lanzar ese mismo conjuro hasta el amanecer siguiente. Los conjuros consumen tu habilidad de lanzamiento de conjuros y la CD de tu tirada de salvación.",
      attunement: "requiere sintonización por un bardo",
      tools:"https://5e.tools/items.html#instrument%20of%20the%20bards%2c%20doss%20lute_xdmg"
    },
    {
      id: 11,
      image: "https://5e.tools/img/items/XDMG/Ioun%20Stone.webp",
      name: "Ioun Stone, Fortitude",
      type: "Objeto maravilloso",
      rarity: "Muy Raro",
      price: 3000,
      desc:
        "De un tamaño similar al de las canicas, las Piedras Ioun reciben su nombre de Ioun, un dios del conocimiento y la profecía venerado en algunos mundos. Existen muchos tipos de Piedras Ioun, cada uno con una combinación única de forma y color.<br/><br/>Cuando usas una acción mágica para lanzar una Piedra Ioun al aire, esta orbita tu cabeza a una distancia de 1d3 pies, otorgándote su beneficio mientras lo hace. Puedes tener hasta tres Piedras Ioun orbitando tu cabeza simultáneamente.<br/><br/>Cada Piedra Ioun que orbita tu cabeza se considera un objeto que llevas puesto. La piedra en órbita evita el contacto con otras criaturas y objetos, ajustando su órbita para evitar colisiones y frustrando cualquier intento de otras criaturas por atacarla o arrebatársela.<br/><br/>Como acción de Utilizar , puedes capturar y guardar cualquier número de Piedras Ioun que orbiten alrededor de tu cabeza. Si tu Sintonía con una Piedra Ioun termina mientras orbita alrededor de tu cabeza, la piedra cae como si la hubieras soltado.<br/><br/>Tu Constitución aumenta en 2, hasta un máximo de 20, mientras este romboide rosa orbita tu cabeza.",
      attunement: "requiere sintonización",
      tools:"https://5e.tools/items.html#ioun%20stone%2c%20fortitude_xdmg"
    },
    {
      id: 12,
      image: "https://5e.tools/img/items/XDMG/Ioun%20Stone.webp",
      name: "Ioun Stone, Protection",
      type: "Objeto maravilloso",
      rarity: "Raro",
      price: 1200,
      desc:
        "De un tamaño similar al de las canicas, las Piedras Ioun reciben su nombre de Ioun, un dios del conocimiento y la profecía venerado en algunos mundos. Existen muchos tipos de Piedras Ioun, cada uno con una combinación única de forma y color.<br/><br/>Cuando usas una acción mágica para lanzar una Piedra Ioun al aire, esta orbita tu cabeza a una distancia de 1d3 pies, otorgándote su beneficio mientras lo hace. Puedes tener hasta tres Piedras Ioun orbitando tu cabeza simultáneamente.<br/><br/>Cada Piedra Ioun que orbita tu cabeza se considera un objeto que llevas puesto. La piedra en órbita evita el contacto con otras criaturas y objetos, ajustando su órbita para evitar colisiones y frustrando cualquier intento de otras criaturas por atacarla o arrebatársela.<br/><br/>Como acción de Utilizar , puedes capturar y guardar cualquier número de Piedras Ioun que orbiten alrededor de tu cabeza. Si tu Sintonía con una Piedra Ioun termina mientras orbita alrededor de tu cabeza, la piedra cae como si la hubieras soltado.<br/><br/>Obtienes una bonificación de +1 a la Clase de Armadura mientras este prisma rosa polvoriento orbita tu cabeza.",
      attunement: "requiere sintonización",
      tools:"https://5e.tools/items.html#ioun%20stone%2c%20protection_xdmg"
    },
    {
      id: 13,
      image: "https://5e.tools/img/items/XDMG/Ioun%20Stone.webp",
      name: "Ioun Stone, Reserve",
      type: "Objeto maravilloso",
      rarity: "Raro",
      price: 6000,
      desc:
        "De un tamaño similar al de las canicas, las Piedras Ioun reciben su nombre de Ioun, un dios del conocimiento y la profecía venerado en algunos mundos. Existen muchos tipos de Piedras Ioun, cada uno con una combinación única de forma y color.<br/><br/>Cuando usas una acción mágica para lanzar una Piedra Ioun al aire, esta orbita tu cabeza a una distancia de 1d3 pies, otorgándote su beneficio mientras lo hace. Puedes tener hasta tres Piedras Ioun orbitando tu cabeza simultáneamente.<br/><br/>Cada Piedra Ioun que orbita tu cabeza se considera un objeto que llevas puesto. La piedra en órbita evita el contacto con otras criaturas y objetos, ajustando su órbita para evitar colisiones y frustrando cualquier intento de otras criaturas por atacarla o arrebatársela.<br/><br/>Como acción de Utilizar , puedes capturar y guardar cualquier número de Piedras Ioun que orbiten alrededor de tu cabeza. Si tu Sintonía con una Piedra Ioun termina mientras orbita alrededor de tu cabeza, la piedra cae como si la hubieras soltado.<br/><br/>Este prisma púrpura vibrante almacena hechizos lanzados en él, conservándolos hasta que los uses. La piedra puede almacenar hasta 4 niveles de hechizos a la vez. Al ser encontrada, contiene 1d4 niveles de hechizos almacenados, elegidos por el DM.<br/><br/>Cualquier criatura puede lanzar un conjuro de nivel 1 a 4 sobre la piedra tocándola al lanzarlo. El conjuro no tiene efecto alguno, salvo el de almacenarse en la piedra. Si la piedra no puede contener el conjuro, este se consume sin efecto. El nivel del espacio de conjuro utilizado determina cuánto espacio ocupa.<br/><br/>Mientras esta piedra orbita tu cabeza, puedes lanzar cualquier conjuro almacenado en ella. El conjuro utiliza el nivel de espacio, la CD de salvación, el bonificador de ataque y la característica de lanzamiento de conjuros del lanzador original, pero por lo demás se trata como si lo lanzaras tú. El conjuro lanzado desde la piedra ya no está almacenado en ella, liberando espacio.",
      attunement: "requiere sintonización",
      tools:"https://5e.tools/items.html#ioun%20stone%2c%20reserve_xdmg"
    },
    {
      id: 14,
      image: "https://5e.tools/img/items/XDMG/Necklace%20of%20Prayer%20Beads.webp",
      name: "Prayer Bead - Bless",
      type: "Objeto maravilloso",
      rarity: "Raro",
      price: 2000,
      desc:
        "Este collar tiene 3 cuentas mágicas hechas de aguamarina, perla negra o topacio. También tiene muchas cuentas no mágicas hechas de piedras como ámbar, heliotropo, citrino, coral, jade, perla o cuarzo. Si se quita una cuenta mágica del collar, esa cuenta pierde su magia.<br/><br/>Existen seis tipos de cuentas mágicas. El DM decide el tipo de cada cuenta del collar o lo determina aleatoriamente tirando un dado en la tabla de abajo. Un collar puede tener más de una cuenta del mismo tipo. Para usar una, debes llevar puesto el collar. Cada cuenta contiene un conjuro que puedes lanzar como acción adicional (usando tu CD de salvación de conjuros si es necesario). Una vez lanzado el conjuro de una cuenta mágica, esta no se puede volver a usar hasta el amanecer siguiente. Este collar tiene 3 cuentas de Bendición.",
      attunement: "requiere sintonización por un clérigo, druida, o paladín",
      tools:"https://5e.tools/items.html#necklace%20of%20prayer%20beads_xdmg"
    },
    {
      id: 15,
      image: "https://5e.tools/img/items/XDMG/Ring%20of%20Warmth.webp",
      name: "Ring of Warmth",
      type: "Objeto maravilloso",
      rarity: "Raro",
      price: 1000,
      desc:
        "Si recibes daño por frío mientras llevas puesto este anillo, el anillo reduce el daño que recibes en 2d8<br/><br/>Además, mientras uses este anillo, tú y todo lo que lleves puesto y cargues con él estarán a salvo de temperaturas de 0 grados Fahrenheit o inferiores.",
      attunement: "requiere sintonización",
      tools:"https://5e.tools/items.html#ring%20of%20warmth_xdmg"
    },
    {
      id: 16,
      image: "https://5e.tools/img/items/XDMG/Robe%20of%20Stars.webp",
      name: "Robe of Stars",
      type: "Objeto maravilloso",
      rarity: "Muy Raro",
      price: 60000,
      desc:
        "Esta túnica negra o azul oscuro está bordada con pequeñas estrellas blancas o plateadas. Obtienes un bonificador de +1 a las tiradas de salvación mientras la llevas puesta.<br/><br/>Seis estrellas, ubicadas en la parte superior delantera de la túnica, son particularmente grandes. Mientras llevas puesta esta túnica, puedes usar una acción mágica para quitar una de las estrellas y gastarla para lanzar la versión de nivel 5 de Misil Mágico . Diariamente, al anochecer, reaparecen en la túnica 1d6 estrellas quitadas.<br/><br/>Mientras llevas puesta la túnica, puedes realizar una acción mágica para entrar en el Plano Astral con todo lo que llevas puesto y encima. Permaneces allí hasta que realices una acción mágica para regresar al plano en el que estabas. Reapareces en el último espacio que ocupaste o, si ese espacio está ocupado, en el espacio desocupado más cercano.",
      attunement: "requiere sintonización",
      tools:"https://5e.tools/items.html#robe%20of%20stars_xdmg"
    },
    {
      id: 17,
      image: "https://5e.tools/img/items/XDMG/Robe%20of%20Useful%20Items.webp",
      name: "Robe of Useful Items (13 special patches)",
      type: "Objeto maravilloso",
      rarity: "Poco Común",
      price: 17200,
      desc:
        "Esta túnica está cubierta de parches de tela de diversas formas y colores. Mientras la llevas puesta, puedes realizar una acción mágica para desprender uno de los parches, transformándolo en el objeto o criatura que representa. Una vez que se retira el último parche, la túnica se convierte en una prenda común.<br/><br/>La túnica tiene dos parches de cada uno de los siguientes tipos:<br/><br/>- Linterna de ojo de buey (llena y encendida)<br/>- Daga<br/>- Espejo<br/>- Polo<br/>- Cuerda (enrollada)<br/>- Bolsa<br/>Además, la túnica tiene 7 parches adicionales.",
      attunement: "",
      tools:"https://5e.tools/items.html#robe%20of%20useful%20items_xdmg"
    },
    {
      id: 18,
      image: "https://5e.tools/img/items/XDMG/Robe%20of%20Useful%20Items.webp",
      name: "Robe of Useful Items (5 special patches)",
      type: "Objeto maravilloso",
      rarity: "Poco Común",
      price: 6680,
      desc:
        "Esta túnica está cubierta de parches de tela de diversas formas y colores. Mientras la llevas puesta, puedes realizar una acción mágica para desprender uno de los parches, transformándolo en el objeto o criatura que representa. Una vez que se retira el último parche, la túnica se convierte en una prenda común.<br/><br/>La túnica tiene dos parches de cada uno de los siguientes tipos:<br/><br/>- Linterna de ojo de buey (llena y encendida)<br/>- Daga<br/>- Espejo<br/>- Polo<br/>- Cuerda (enrollada)<br/>- Bolsa<br/>Además, la túnica tiene 7 parches adicionales.",
      attunement: "",
      tools:"https://5e.tools/items.html#robe%20of%20useful%20items_xdmg"
    },
    {
      id: 19,
      image: "https://i.imgur.com/EQB5g4W.png",
      name: "Stone of Controlling Earth Elementals",
      type: "Objeto maravilloso",
      rarity: "Raro",
      price: 8000,
      desc:
        "Mientras tocas el suelo con esta piedra de 5 libras, puedes usar una acción mágica para invocar a un elemental de tierra. El elemental aparece en un espacio desocupado que elijas a 30 pies de ti, obedece tus órdenes y actúa inmediatamente después de ti en tu turno de iniciativa. El elemental desaparece después de 1 hora, cuando muere o cuando lo despides como acción adicional. La piedra no se puede volver a usar de esta manera hasta el amanecer siguiente.",
      attunement: "",
      tools:"https://5e.tools/items.html#stone%20of%20controlling%20earth%20elementals_xdmg"
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
            <a href="${it.tools}" title="Ver página de item en 5e.tools" target="_blank"><img src="https://i.imgur.com/Ym2ZJlQ.png"/></a>
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
    $("#modalDesc").innerHTML = it.desc;
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
