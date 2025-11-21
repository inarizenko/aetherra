document.addEventListener("DOMContentLoaded", () => {
  // Sample inventory data — replace or extend.
  const ITEMS = [
    {
      id: 1,
      image: "http://placehold.co/40",
      name: "Moonsteel Dagger",
      type: "Weapon",
      rarity: "Poco Común",
      price: 45,
      desc:
        "A finely balanced dagger forged from moonsteel. Grants +1 to stealth checks when concealed.",
      attunement: ""
    },
    {
      id: 2,
      image: "http://placehold.co/40",
      name: "Traveler's Cloak",
      type: "Armor",
      rarity: "Común",
      price: 12,
      desc:
        "A weatherproof cloak with deep pockets and subtle stitching for concealment.",
      attunement: ""
    },
    {
      id: 3,
      image: "http://placehold.co/40",
      name: "Phantom Lantern",
      type: "Wondrous",
      rarity: "Raro",
      price: 220,
      desc:
        "Emits a soft light that only allies can see. Glows brighter near hidden doors.",
      attunement: ""
    },
    {
      id: 4,
      image: "http://placehold.co/40",
      name: "Everfull Waterskin",
      type: "Wondrous",
      rarity: "Poco Común",
      price: 60,
      desc: "A waterskin that refills once per day at dawn.",
      attunement: ""
    },
    {
      id: 5,
      image: "http://placehold.co/40",
      name: "Sentinel Shield",
      type: "Armor",
      rarity: "Raro",
      price: 350,
      desc: "A shield with runes that vibrate when a foe readies an attack.",
      attunement: ""
    },
    {
      id: 6,
      image: "http://placehold.co/40",
      name: "Scroll of Whispering",
      type: "Consumable",
      rarity: "Raro",
      price: 120,
      desc: "Single-use scroll that carries a whispered message across miles.",
      attunement: ""
    },
    {
      id: 7,
      image: "http://placehold.co/40",
      name: "Roguish Gloves",
      type: "Armor",
      rarity: "Común",
      price: 18,
      desc: "Thin gloves that improve grip and lockpicking by a small margin.",
      attunement: ""
    },
    {
      id: 8,
      image: "http://placehold.co/40",
      name: "Dragonbone Longspear",
      type: "Weapon",
      rarity: "Muy Raro",
      price: 1250,
      desc:
        "A long spear made from dragonbone. Imbued with a faint elemental hum.",
      attunement: ""
    }
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
    $("#modalAvatar").textContent = it.name
      .split(" ")
      .map((w) => w[0])
      .slice(0, 3)
      .join("");
    $("#modalType").textContent = `${it.type} • ${it.rarity}`;
    $("#modalName").textContent = it.name;
    $("#modalDesc").textContent = it.desc;
    $("#modalPrice").textContent = `${it.price} GP`;
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
      itemsEl.innerHTML = '<div class="muted">Your cart is empty</div>';
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
      } GP each</div></div>
          <div style="text-align:right">${
            it.price * it.qty
          } GP<br/><button class=\"btn-ghost\" data-remove=\"${
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
    )} GP`;
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
