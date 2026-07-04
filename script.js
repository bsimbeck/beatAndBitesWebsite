const EVENT = {
  title: "Beats & Bites",
  venue: "Clairton Park Lodge",
  address: "499-401 Gulch Way, Clairton, PA 15025",
  start: "2026-07-18T13:00:00",
  end: "2026-07-18T19:30:00",
};

const MUSICIANS = [
  { name: "MCB Flute Choir", time: "1:25 PM" },
  { name: "Folk Indie Bob", time: "1:30 PM", stageMap: true },
  { name: "MCB Jazz", time: "2:50 PM", stageMap: true },
  { name: "MCB Woodwind Ensemble", time: "3:55 PM" },
  { name: "Shrub", time: "4:15 PM", stageMap: true },
  { name: "Munhall Community Band", time: "5:45 PM", stageMap: true },
];

const VENDORS = [
  "Cutest Creations by Mary",
  "Sewing by Janice",
  "Pixie Dust Knots",
  "Olive's Blanket Boutique",
  "LynkdByLovella",
  "Imagination Canvas Company",
  "Hello My Friend",
  "Genuine Reclaimed Wood Designs",
  "A & B Handmade Gifts",
  "Lynn and Lissie's Boutique",
  "Star Kelley Creations",
  "Folfyblu Arts",
  "Mel's Crystals and Crafts",
  "Oopsie Daisy Jewelry N'at",
];

const INFO_ENTRIES = [
  { name: "Free Concert", detail: "No tickets needed — just show up!" },
  { name: "1:00 PM – 7:30 PM", detail: "Event hours" },
  { name: "Clairton Park Lodge", detail: "499-401 Gulch Way, Clairton, PA 15025" },
  { name: "Restrooms", detail: "See the restroom map in Event Info" },
];

function renderLineup() {
  const list = document.getElementById("lineup-list");
  list.innerHTML = MUSICIANS.map((m, i) => {
    if (!m.stageMap) {
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
      <img id="${mapId}" class="stage-map-thumb" src="assets/mainstage-map.png" alt="Main stage map for ${m.name}" hidden>
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
  grid.innerHTML =
    VENDORS.map((name) => `<li>${name}</li>`).join("") +
    `<li class="more">...and more!</li>`;
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
    ...VENDORS.filter((n) => n.toLowerCase().includes(q)).map((n) => ({
      name: n,
      type: "vendor",
      label: "Vendor",
    })),
    ...INFO_ENTRIES.filter(
      (e) =>
        e.name.toLowerCase().includes(q) || e.detail.toLowerCase().includes(q)
    ).map((e) => ({ name: e.name, type: "info", label: e.detail })),
  ];

  results.hidden = false;

  if (matches.length === 0) {
    results.classList.add("empty");
    results.innerHTML = `<p>No matches for "${escapeHtml(query)}". Try a different search.</p>`;
    return;
  }

  results.classList.remove("empty");
  results.innerHTML = matches
    .map(
      (m) => `
      <div class="result-item">
        <span class="r-name">${escapeHtml(m.name)}</span>
        <span class="r-type r-type-${m.type}">${escapeHtml(m.label)}</span>
      </div>`
    )
    .join("");
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
});
