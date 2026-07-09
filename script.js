const EVENT = {
  title: "Beats & Bites",
  venue: "Clairton Park Lodge",
  address: "499-401 Gulch Way, Clairton, PA 15025",
  start: "2026-07-18T13:00:00",
  end: "2026-07-18T19:30:00",
};

const MUSICIANS = [
  { name: "Folk Indie Bob", time: "1:30 PM", location: "Main Stage", mapImage: "assets/mainstage-map.png" },
  { name: "MCB Woodwind Ensemble", time: "2:25 PM", location: "Pavilion Stage", mapImage: "assets/pavilionStageMap.png" },
  { name: "MCB Jazz", time: "2:50 PM", location: "Main Stage", mapImage: "assets/mainstage-map.png" },
  { name: "MCB Flute Choir", time: "3:55 PM", location: "Pavilion Stage", mapImage: "assets/pavilionStageMap.png" },
  { name: "Shrub", time: "4:15 PM", location: "Main Stage", mapImage: "assets/mainstage-map.png" },
  { name: "Munhall Community Band", time: "5:45 PM", location: "Main Stage", mapImage: "assets/mainstage-map.png" },
];

const VENDOR_MAP_IMAGE = "assets/VendorMap.png";
const VENDOR_MAP_ALT = "Map showing vendor booth locations at Beats & Bites";

const VENDORS = [
  { name: "Cutest Creations by Mary", description: "Light up wine bottles and items made out of diapers (motorcycles, guitars, wishing well, etc.)", booth: 7 },
  { name: "Pixie Dust Knots", description: "Crochet items", booth: 16 },
  { name: "LynkdByLovella Permanent Jewelry Boutique", description: "Permanent jewelry with kids options", booth: 8 },
  { name: "Oopsie Daisy Jewelry N'at", description: "Charm bar and engraving", booth: 11 },
  { name: "Hello My Friend, LLC", description: "Handmade greeting cards, gift tags and gift cards", booth: 10 },
  { name: "A & B Handmade Gifts", description: "Laser engraved signs and embroidered towels, bags, and other miscellaneous items", booth: 1 },
  { name: "Star Kelley Creations", description: "Resin items — keychains, décor, trinket trays, etc.", booth: 2 },
  { name: "Mel's Crystals and Crafts", description: "Crystals and other crafts", booth: 9 },
  { name: "Damsel in Defense", description: "Self defense tools for safety-minded women & their families", booth: 4 },
  { name: "Sewing By Janice", description: "Table runners, coasters, key fobs, quilts, nut crackers, painted pots, trivet/hot pads, flower arrangements, wooden ornaments, carved pumpkins, mantle scarves, and handmade wall decorations", booth: 5 },
  { name: "Olive's Blanket Boutique", description: "Blankets for humans and pets, dog toys, and press-on nails", booth: 12 },
  { name: "Imagination Canvas Company", description: "Pre-printed canvas kits", booth: 3 },
  { name: "Comfortable Soaks", description: "Natural healing products", booth: 17 },
  { name: "Genuine Reclaimed Wood Designs", description: "Wood American flags, custom cornhole boards, man cave/game room decor, and other wood items", booth: 13 },
  { name: "Lynn & Lissie's Boutique", description: "Purses, totes, wallets, and misc. accessories", booth: 14 },
  { name: "FolfyBlu Arts", description: "Resin crafts such as tic-tac-toe boards, trays, dice, display items, and trinket jars; hand-made paintings and plant clippings", booth: 15 },
  { name: "Watts Up Goodies", description: "Handmade jewelry, necklaces, bracelets, earrings, matching sets, keychains, magnets, seashell jewelry, and hair accessories", booth: 6 },
  { name: "Mami's Natural Essentials", description: "Candles, wax melts, perfume, cologne, and car defusers", booth: 18 },
  { name: "Totaro's Food Truck", description: "Burgers, hoagies, meatball sandwiches, cheese steaks, salad with steak or chicken, side salad, fries, chicken nuggets", website: "https://www.facebook.com/people/Totaros-Brothers/61552970893860/" },
  { name: "Beedle's Ice Cream", description: "Nostalgic ice cream treats", website: "https://www.beedles.com/" },
  { name: "Little C's Concessions", description: "Funnel cakes, specialty funnel cakes, deep fried oreos, fresh squeezed lemonade, flavored lemonade, hot dogs, deep fried pretzels, and nachos", website: "https://www.facebook.com/little.c.s.concessions/photos" },
  { name: "Arsenal Cider", description: "Alcoholic ciders and meads", website: "https://www.arsenalciderhouse.com/" },
];

function vendorLocation(v) {
  return v.booth ? `Booth #${v.booth}` : "Food Truck Area";
}

const INFO_ENTRIES = [
  { name: "Free Concert", detail: "No tickets needed — just show up!" },
  { name: "1:00 PM – 7:30 PM", detail: "Event hours" },
  { name: "Clairton Park Lodge", detail: "499-401 Gulch Way, Clairton, PA 15025" },
  {
    name: "Restrooms",
    detail: "Located near the pavilion and baseball field",
    map: "assets/restroomMap.jpeg",
    mapAlt: "Map showing restroom locations at Clairton Park Lodge",
  },
];

function renderLineup() {
  const list = document.getElementById("lineup-list");
  list.innerHTML = MUSICIANS.map((m, i) => {
    if (!m.mapImage) {
      return `
      <li>
        <div class="lineup-row">
          <span class="lineup-name"><span class="name-text">${m.name}</span></span>
          <span class="lineup-time">${m.time}</span>
        </div>
      </li>`;
    }
    const mapId = `stage-map-${i}`;
    return `
    <li>
      <div class="lineup-row">
        <button type="button" class="lineup-name lineup-toggle" aria-expanded="false" aria-controls="${mapId}">
          <span class="name-text">${m.name}</span>
          <span class="toggle-icon" aria-hidden="true">▾</span>
        </button>
        <span class="lineup-time">${m.time}</span>
      </div>
      <div id="${mapId}" class="stage-map-panel" hidden>
        <p class="stage-map-caption">${m.location} &middot; ${m.time}</p>
        <img class="stage-map-thumb" src="${m.mapImage}" alt="${m.location} map for ${m.name}">
      </div>
    </li>`;
  }).join("");

  list.addEventListener("click", (e) => {
    const btn = e.target.closest(".lineup-toggle");
    if (!btn) return;
    const expanded = btn.getAttribute("aria-expanded") === "true";
    btn.setAttribute("aria-expanded", String(!expanded));
    document.getElementById(btn.getAttribute("aria-controls")).hidden = expanded;
  });
}

function renderVendors() {
  const grid = document.getElementById("vendor-grid");
  grid.innerHTML = VENDORS.map((v) => `
    <li>
      <button type="button" class="vendor-btn" data-name="${escapeHtml(v.name)}" data-detail="${escapeHtml(v.description)}" data-location="${escapeHtml(vendorLocation(v))}" data-website="${escapeHtml(v.website || "")}" data-map="${VENDOR_MAP_IMAGE}" data-map-alt="${escapeHtml(VENDOR_MAP_ALT)}">${escapeHtml(v.name)}</button>
    </li>`).join("");

  grid.addEventListener("click", (e) => {
    const btn = e.target.closest(".vendor-btn");
    if (!btn) return;
    openDetailModal({
      name: btn.dataset.name,
      detail: btn.dataset.detail,
      location: btn.dataset.location,
      website: btn.dataset.website,
      map: btn.dataset.map,
      mapAlt: btn.dataset.mapAlt,
    });
  });
}

function renderSearch(query) {
  const results = document.getElementById("search-results");
  const q = query.trim().toLowerCase();

  if (!q) {
    results.hidden = true;
    results.innerHTML = "";
    results.classList.remove("empty");
    return;
  }

  const matches = [
    ...MUSICIANS.filter((m) => m.name.toLowerCase().includes(q)).map((m) => ({
      name: m.name,
      type: "musician",
      label: m.time,
    })),
    ...VENDORS.filter(
      (v) =>
        v.name.toLowerCase().includes(q) ||
        v.description.toLowerCase().includes(q)
    ).map((v) => ({
      name: v.name,
      type: "vendor",
      label: vendorLocation(v),
      detail: v.description,
      location: vendorLocation(v),
      website: v.website,
      map: VENDOR_MAP_IMAGE,
      mapAlt: VENDOR_MAP_ALT,
    })),
    ...INFO_ENTRIES.filter(
      (e) =>
        e.name.toLowerCase().includes(q) || e.detail.toLowerCase().includes(q)
    ).map((e) => ({
      name: e.name,
      type: "info",
      label: e.detail,
      detail: e.detail,
      map: e.map,
      mapAlt: e.mapAlt,
    })),
  ];

  results.hidden = false;

  if (matches.length === 0) {
    results.classList.add("empty");
    results.innerHTML = `<p>No matches for "${escapeHtml(query)}". Try a different search.</p>`;
    return;
  }

  results.classList.remove("empty");
  results.innerHTML = matches
    .map((m) => {
      const clickable = m.map ? " result-item-clickable" : "";
      const attrs = m.map
        ? ` role="button" tabindex="0" data-name="${escapeHtml(m.name)}" data-detail="${escapeHtml(m.detail || m.label)}" data-location="${escapeHtml(m.location || "")}" data-website="${escapeHtml(m.website || "")}" data-map="${escapeHtml(m.map)}" data-map-alt="${escapeHtml(m.mapAlt || "")}"`
        : "";
      return `
      <div class="result-item${clickable}"${attrs}>
        <span class="r-name">${escapeHtml(m.name)}</span>
        <span class="r-type r-type-${m.type}">${escapeHtml(m.label)}</span>
      </div>`;
    })
    .join("");
}

function openDetailModal({ name, detail, location, website, map, mapAlt }) {
  document.getElementById("detail-modal-title").textContent = name;
  document.getElementById("detail-modal-text").textContent = detail;
  const locationEl = document.getElementById("detail-modal-location");
  locationEl.textContent = location || "";
  locationEl.hidden = !location;
  const linkEl = document.getElementById("detail-modal-link");
  linkEl.href = website || "";
  linkEl.hidden = !website;
  const img = document.getElementById("detail-modal-img");
  img.src = map;
  img.alt = mapAlt || `Map for ${name}`;
  document.getElementById("detail-modal").hidden = false;
}

function closeDetailModal() {
  document.getElementById("detail-modal").hidden = true;
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

function toIcsDate(dateStr) {
  return dateStr.replace(/[-:]/g, "").replace(/\.\d+/, "");
}

function downloadIcs() {
  const uid = `beats-and-bites-${Date.now()}@local`;
  const ics = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Beats and Bites//EN",
    "BEGIN:VEVENT",
    `UID:${uid}`,
    `DTSTAMP:${toIcsDate(new Date().toISOString().slice(0, 19))}Z`,
    `DTSTART:${toIcsDate(EVENT.start)}`,
    `DTEND:${toIcsDate(EVENT.end)}`,
    `SUMMARY:${EVENT.title}`,
    `LOCATION:${EVENT.venue}, ${EVENT.address}`,
    "DESCRIPTION:Free community concert presented by the Munhall Community Band.",
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");

  const blob = new Blob([ics], { type: "text/calendar" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "beats-and-bites.ics";
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

document.addEventListener("DOMContentLoaded", () => {
  renderLineup();
  renderVendors();

  const searchBox = document.getElementById("search-box");
  searchBox.addEventListener("input", (e) => renderSearch(e.target.value));

  document.getElementById("add-to-cal").addEventListener("click", downloadIcs);
  document.getElementById("add-to-cal-2").addEventListener("click", downloadIcs);

  const results = document.getElementById("search-results");
  const openFromResultItem = (item) => {
    if (!item || !item.dataset.map) return;
    openDetailModal({
      name: item.dataset.name,
      detail: item.dataset.detail,
      location: item.dataset.location,
      website: item.dataset.website,
      map: item.dataset.map,
      mapAlt: item.dataset.mapAlt,
    });
  };
  results.addEventListener("click", (e) => {
    openFromResultItem(e.target.closest(".result-item-clickable"));
  });
  results.addEventListener("keydown", (e) => {
    if (e.key !== "Enter" && e.key !== " ") return;
    const item = e.target.closest(".result-item-clickable");
    if (!item) return;
    e.preventDefault();
    openFromResultItem(item);
  });

  const modal = document.getElementById("detail-modal");
  modal.addEventListener("click", (e) => {
    if (e.target.closest("[data-close]")) closeDetailModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.hidden) closeDetailModal();
  });
});
