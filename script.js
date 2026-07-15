const EVENT = {
  title: "Beats & Bites",
  venue: "Clairton Park Lodge",
  address: "499-401 Gulch Way, Clairton, PA 15025",
  start: "2026-07-18T13:00:00",
  end: "2026-07-18T19:30:00",
};

const MUSICIANS = [
  { name: "Folk Indie Bob", time: "1:30 PM", location: "Main Stage", mapImage: "assets/mainstage-map.png" },
  {
    name: "MCB Woodwind Ensemble",
    time: "2:25 PM",
    location: "Pavilion Stage",
    mapImage: "assets/pavilionStageMap.png",
    director: "Libby Riconda",
    setlist: [
      { title1: "Anitra's Dance", composer: "By Edvard Grieg, Arranged by James Christensen" },
      { title1: "Novelette", composer: "By Kevin Kaisershot" },
    ],
  },
  {
    name: "MCB Jazz",
    time: "2:50 PM",
    location: "Main Stage",
    mapImage: "assets/mainstage-map.png",
    director: "Rick Porter",
    setlist: [
      { title1: "The Muppet Show Theme", composer: "by Jim Henson and Sam Pottle, Arranged by Jerry Nowak" },
      { title1: "In the Mood", title2: "As played by 'Glenn Miller'", composer: "Joe Garland" },
      { title1: "Peter Gunn", composer: "Music by Henry Mancini, Arranged by Paul Jennings" },
      { title1: "Contessa", composer: "By Lennie Niehaus" },
      { title1: "Vehicle", composer: "By James M. Peterik, Arranged by Paul Jennings" },
      { title1: "Fly Me To The Moon", composer: "Words and Music by Bart Howard, Arranged by Sammy Nestico" },
      { title1: "Pennsylvania 6-5000", composer: "By Glenn Miller" },
      { title1: "Old Devil Moon", composer: "By B. Lane and E. Y. Harburg, Arranged by Sammy Nestico" },
      { title1: "Just Friends", composer: "Music by John Klenner, Lyrics by Sam M. Lewis, Arranged by Joe Jackson" },
      { title1: "The Girl from Ipanema", composer: "Music by Antonio Carlos Jobim, English words by Norman Gimbel, Original Words by Vinicius De Moraes, Arranged by Glenn Osser" },
      { title1: "A Time For Love", composer: "Words by Paul Francis Webster, Music by Johnny Mandel, Arranged by Sammy Nestico" },
      { title1: "Moonlight Serenade", title2: "As Played by 'Glenn Miller'", composer: "By Glenn Miller" },
      { title1: "April in Paris", composer: "Words by E. Y. Harburg, Music by Vernon Duke, Arranged by Bob Lowden" },
    ],
  },
  {
    name: "MCB Flute Choir",
    time: "3:55 PM",
    location: "Pavilion Stage",
    mapImage: "assets/pavilionStageMap.png",
    director: "Libby Riconda",
    setlist: [
      { title1: "Little Red Monkey", composer: "by Jack Jordan, Adapted for Flute Choir by Kathy Farmer" },
      { title1: "Beckett's Whisper", composer: "By Ron Korb" },
      { title1: "Siyahamba", composer: "Arranged by Amy Rice-Young" },
    ],
  },
  { name: "Shrub", time: "4:15 PM", location: "Main Stage", mapImage: "assets/mainstage-map.png" },
  {
    name: "Munhall Community Band",
    time: "5:45 PM",
    location: "Main Stage",
    mapImage: "assets/mainstage-map.png",
    setlist: [
      { title1: "America, The Beautiful", composer: "Samuel Augustus Ward, Arranged for Band by Carmen Dragon" },
      { title1: "A Swinging Safari", composer: "Bert Kaempfert, Arranged by Ted Parson" },
      { title1: "The Pride of Pittsburgh", composer: "John Philip Sousa" },
      {
        title1: "Billy Joel In Concert",
        title2: "Featuring Piano Man, It's Still Rock and Roll to Me, Just the Way You Are, Uptown Girl, and You May Be Right",
        composer: "Words and Music by Billy Joel, Arranged by Paul Murtha",
      },
      { title1: "Sea Songs", composer: "R. Vaughan Williams" },
      { title1: "Game of Thrones", composer: "Music By Ramin Djawadi, Arranged by Jay Bocook, Percussion Arrangement by Omar Carmenates" },
      { title1: "Theme From L'Arlesiene Suite No. 1", composer: "By Georges Bizet, Arranged by Jerry Nowak" },
      { title1: "Marche Slave", composer: "By Piotr Ilyitch Tchaikovsky, Arranged by Dave Henning, Percussion by Alan Keown" },
      { title1: "Da Doo Ron Ron", composer: "Words and Music by Ellie Greenwich, Jeff Barry, and Phil Spector. Arranged by Doug Adams" },
      { title1: "Rock This Town", composer: "Words and Music by Brian Setzer, Arranged by Nick Baratta" },
      {
        title1: "United States Armed Forces Salute",
        title2: "Featuring The Army Goes Rolling Along, Marines' Hymn, Anchors Aweigh, The U.S. Air Force Song, and Semper Paratus (Always Ready)",
        composer: "Arranged by Douglas E. Wagner",
      },
      { title1: "A Fifth of Beethoven", title2: 'As featured in "Mrs. America."', composer: "By Walter Murphy, Arranged by John Ivor Holland" },
      {
        title1: "Doctor Who: Through Time and Space",
        title2: "Featuring Doctor Who Theme XI, Martha's Theme, The Dark and Endless Dalek Night, Rose's Theme, The Cybermen, The Doctor's Theme, and I am the Doctor",
        composer: "By Murry Gold, Arranged by Robert Buckley",
      },
      { title1: "Raiders of the Lost Ark Medley", title2: "Featuring Raiders March and Marion's Theme", composer: "Music by John Williams, Transcribed by Jack Bullock" },
    ],
  },
];

const VENDOR_MAP_IMAGE = "assets/VendorMap.png";
const VENDOR_MAP_ALT = "Map showing vendor booth locations at Beats & Bites";

const VENDORS = [
  { name: "Cutest Creations by Mary", description: "Light up wine bottles and items made out of diapers (motorcycles, guitars, wishing well, etc.)", booth: 7 },
  { name: "Pixie Dust Knots", description: "Crochet items", booth: 16, website: "https://www.instagram.com/pixie_dust_knots?utm_source=qr" },
  { name: "LynkdByLovella Permanent Jewelry Boutique", description: "Permanent jewelry with kids options", booth: 3, website: "https://www.instagram.com/lovellawellness" },
  { name: "Oopsie Daisy Jewelry N'at", description: "Charm bar and engraving", booth: 11, website: "https://www.instagram.com/oopsiedaisyjewelry_n.at" },
  { name: "Hello My Friend, LLC", description: "Handmade greeting cards, gift tags and gift cards", booth: 10, website: "https://www.etsy.com/shop/Hellomyfriendllc?etsrc=sdt" },
  { name: "A & B Handmade Gifts", description: "Laser engraved signs and embroidered towels, bags, and other miscellaneous items", booth: 1, website: "https://www.facebook.com/profile.php?id=100094131791691" },
  { name: "Star Kelley Creations", description: "Resin items — keychains, décor, trinket trays, etc.", booth: 2, website: "https://starkelleycreations.com/" },
  { name: "Mel's Crystals and Crafts", description: "Crystals and other crafts", booth: 9, website: "https://www.facebook.com/profile.php?id=100083115505550&mibextid=wwXIfr&rdid=O0QdSGvkTBqDUvkQ&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1BDyGrxadu%2F%3Fmibextid%3DwwXIfr" },
  { name: "Damsel in Defense", description: "Self defense tools for safety-minded women & their families", booth: 4, website: "https://damselindefense.net/?ref=Carmyprotects" },
  { name: "Sewing By Janice", description: "Table runners, coasters, key fobs, quilts, nut crackers, painted pots, trivet/hot pads, flower arrangements, wooden ornaments, carved pumpkins, mantle scarves, and handmade wall decorations", booth: 5 },
  { name: "Olive's Blanket Boutique", description: "Blankets for humans and pets, dog toys, and press-on nails", booth: 12, website: "https://www.facebook.com/OlivesBlankets?mibextid=wwXIfr&rdid=9QEMCuZqN2D1VGaf&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1EZZRyeWzu%2F%3Fmibextid%3DwwXIfr" },
  { name: "Imagination Canvas Company", description: "Pre-printed canvas kits", booth: 8, website: "https://www.facebook.com/people/Imagination-Canvas-Co/61589542648898/" },
  { name: "Comfortable Soaks", description: "Natural healing products", booth: 17, website: "https://comfortablesoaks.square.site/s/shop" },
  { name: "Genuine Reclaimed Wood Designs", description: "Wood American flags, custom cornhole boards, man cave/game room decor, and other wood items", booth: 13, website: "https://www.facebook.com/photo/?fbid=10216983090749564&set=p.10216983090749564" },
  { name: "Lynn & Lissie's Boutique", description: "Purses, totes, wallets, and misc. accessories", booth: 14, website: "https://www.facebook.com/profile.php?id=61578019886834&mibextid=wwXIfr&rdid=fgKWUr9l4adfxii6&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1GK7KfdiWc%2F%3Fmibextid%3DwwXIfr" },
  { name: "FolfyBlu Arts", description: "Resin crafts such as tic-tac-toe boards, trays, dice, display items, and trinket jars; hand-made paintings and plant clippings", booth: 15, website: "https://www.facebook.com/FolfyBluArts?mibextid=wwXIfr&rdid=1DXjXgaUWCms7mUp&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1Cx3oBN2aM%2F%3Fmibextid%3DwwXIfr" },
  { name: "Watts Up Goodies", description: "Handmade jewelry, necklaces, bracelets, earrings, matching sets, keychains, magnets, seashell jewelry, and hair accessories", booth: 6, website: "https://www.etsy.com/shop/wattsupgoodies/?etsrc=sdt" },
  { name: "Mami's Natural Essentials", description: "Candles, wax melts, perfume, cologne, and car defusers", booth: 18, website: "https://mamisessentials.com/" },
  { name: "Ash & Kris Kitchen", description: "Hummus, baba ghanoush, stuffed grape leaves, falafel, pita bread, double fried French fries, lamb gyro sandwich, chicken shawarma sandwich, falafel sandwich, lamb gyro rice platter, chicken shawarma rice platter, falafel rice platter, baklava, and Coca-Cola and Pepsi products", website: "https://www.ashkris.com/" },
  { name: "Arsenal Cider", description: "Alcoholic ciders and meads", website: "https://www.arsenalciderhouse.com/" },
  { name: "Beedle's Ice Cream", description: "Nostalgic ice cream treats", website: "https://www.beedles.com/" },
  { name: "Totaro's Food Truck", description: "Burgers, hoagies, meatball sandwiches, cheese steaks, salad with steak or chicken, side salad, fries, chicken nuggets", website: "https://www.facebook.com/people/Totaros-Brothers/61552970893860/" },
  { name: "Little C's Concessions", description: "Funnel cakes, specialty funnel cakes, deep fried oreos, fresh squeezed lemonade, flavored lemonade, hot dogs, deep fried pretzels, and nachos", website: "https://www.facebook.com/little.c.s.concessions/photos" },
];

function vendorLocation(v) {
  return v.booth ? `Booth #${v.booth}` : "Food Truck Area";
}

const INFO_ENTRIES = [
  { name: "Free Concert", detail: "No tickets needed — just show up!" },
  { name: "1:00 PM – 7:30 PM", detail: "Event hours" },
  { name: "Clairton Park Lodge", detail: "499-401 Gulch Way, Clairton, PA 15025" },
  {
    name: "Weather",
    detail: "This event is rain or shine, but in the event of severe storms please check this website for any schedule changes. Clairton Park Lodge and pavilion does provide significant shelter for attendees in the event of rain.",
  },
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
        ${renderSetlist(m)}
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

function renderSetlist(m) {
  if (!m.setlist) return "";
  const director = m.director
    ? `<p class="setlist-director">Under the Direction of ${escapeHtml(m.director)}</p>`
    : "";
  const songs = m.setlist
    .map(
      (song) => `
      <li class="setlist-item">
        <span class="setlist-title1">${escapeHtml(song.title1)}</span>
        ${song.title2 ? `<span class="setlist-title2">${escapeHtml(song.title2)}</span>` : ""}
        <span class="setlist-composer">${escapeHtml(song.composer)}</span>
      </li>`
    )
    .join("");
  return `${director}<ol class="setlist">${songs}</ol>`;
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
