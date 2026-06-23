// ==========================================
// CONFIGURATION i18n
// ==========================================
const LANGS = {
  fr: {
    statOwned: "Obtenues",
    statCr: "Cr total",
    statPP: "PP max",
    statPower: "Puissance max",
    statWeight: "Poids max",
    collection: "Collection GT7",
    progressOf: "/ 570 voitures",
    signout: "Déconnexion",
    authSubtitle: "Connecte-toi avec ton adresse email pour accéder à ton garage.<br>Un lien de connexion te sera envoyé.",
    sendMagicLink: "Envoyer le lien de connexion",
    filterStatus: "Statut",
    filterAll: "Toutes",
    filterMissing: "○ Manquantes",
    filterWish: "⭐ Wishlist",
    filterLegend: "Voitures de légende",
    filterSearch: "Recherche",
    searchPlaceholder: "Nom, marque…",
    filterMake: "Marque",
    filterCat: "Catégorie",
    filterCountry: "Pays",
    filterRarity: "Rareté",
    filterAspiration: "Aspiration",
    filterTrans: "Transmission",
    filterYear: "Année",
    sortBy: "Trier par",
    sortName: "Nom",
    sortMake: "Marque",
    sortYear: "Année",
    sortPrice: "Prix",
    sortPower: "Puissance",
    sortWeight: "Poids",
    formPhoto: "Photo de la voiture",
    formPhotoClick: "Clique pour ajouter une photo",
    formPhotoSub: "JPG · PNG · WEBP — compressée et stockée localement",
    formPhotoChange: "🔄 Changer",
    formPhotoRemove: "✕ Supprimer",
    formMake: "Marque",
    formMakePh: "ex: Nissan",
    formModel: "Modèle",
    formModelPh: "ex: GT-R (R34)",
    formYear: "Année",
    formPrice: "Prix (Cr)",
    formPP: "PP (Performance Points)",
    formTrans: "Transmission",
    formSelect: "— Sélectionner —",
    form4RM: "4RM",
    formPower: "Puissance max (ch)",
    formWeight: "Poids (kg)",
    formAspiration: "Aspiration",
    formNA: "NA — Atmosphérique",
    formTC: "TC — Turbo",
    formSC: "SC — Compresseur",
    formVE: "VE — Électrique",
    formTCSC: "TC+SC — Turbo + Compresseur",
    formCat: "Catégorie",
    catRoad: "Routière",
    catRace: "Course",
    formRarity: "Rareté",
    raritySpecial: "Voitures d'Occasion",
    rarityLegend: "Voitures de Légende",
    formNote: "Note perso (optionnel)",
    formNotePh: "ex: Voiture préférée !",
    btnCancel: "Annuler",
    btnSave: "Enregistrer",
    drawerFilters: "Filtres",
    navGarage: "Garage",
    navWish: "Wishlist",
    navFilters: "Filtres",
    
    // Nouveaux labels dynamiques
    filterAllLabel: "Toutes",
    filterAllLabelM: "Tous",
    countryJapon: "Japon",
    countryItalie: "Italie",
    countryEtatsUnis: "États-Unis",
    countryAllemagne: "Allemagne",
    countryRoyaumeUni: "Royaume-Uni",
    countryFrance: "France",
    countryCoree: "Corée du Sud",
    countryAutre: "Autre",
    countryAutriche: "Autriche",
    countrySuede: "Suède"
  },
  en: {
    statOwned: "Owned",
    statCr: "Total Cr",
    statPP: "Max PP",
    statPower: "Max Power",
    statWeight: "Max Weight",
    collection: "GT7 Collection",
    progressOf: "/ 570 cars",
    signout: "Sign out",
    authSubtitle: "Sign in with your email address to access your garage.<br>A magic link will be sent to you.",
    sendMagicLink: "Send magic link",
    filterStatus: "Status",
    filterAll: "All",
    filterMissing: "○ Missing",
    filterWish: "⭐ Wishlist",
    filterLegend: "Legend Cars",
    filterSearch: "Search",
    searchPlaceholder: "Name, brand…",
    filterMake: "Brand",
    filterCat: "Category",
    filterCountry: "Country",
    filterRarity: "Rarity",
    filterAspiration: "Aspiration",
    filterTrans: "Transmission",
    filterYear: "Year",
    sortBy: "Sort by",
    sortName: "Name",
    sortMake: "Brand",
    sortYear: "Year",
    sortPrice: "Price",
    sortPower: "Power",
    sortWeight: "Weight",
    formPhoto: "Car Photo",
    formPhotoClick: "Click to add a photo",
    formPhotoSub: "JPG · PNG · WEBP — compressed and stored locally",
    formPhotoChange: "🔄 Change",
    formPhotoRemove: "✕ Remove",
    formMake: "Brand",
    formMakePh: "e.g., Nissan",
    formModel: "Model",
    formModelPh: "e.g., GT-R (R34)",
    formYear: "Year",
    formPrice: "Price (Cr)",
    formPP: "PP (Performance Points)",
    formTrans: "Transmission",
    formSelect: "— Select —",
    form4RM: "4WD",
    formPower: "Max Power (hp)",
    formWeight: "Weight (kg)",
    formAspiration: "Aspiration",
    formNA: "NA — Naturally Aspirated",
    formTC: "TC — Turbocharged",
    formSC: "SC — Supercharged",
    formVE: "EV — Electric Vehicle",
    formTCSC: "TC+SC — Twincharged",
    formCat: "Category",
    catRoad: "Road Car",
    catRace: "Race Car",
    formRarity: "Rarity",
    raritySpecial: "Used Cars",
    rarityLegend: "Legend Cars",
    formNote: "Personal Note (optional)",
    formNotePh: "e.g., Favorite car!",
    btnCancel: "Cancel",
    btnSave: "Save",
    drawerFilters: "Filters",
    navGarage: "Garage",
    navWish: "Wishlist",
    navFilters: "Filters",
    
    // Nouveaux labels dynamiques
    filterAllLabel: "All",
    filterAllLabelM: "All",
    countryJapon: "Japan",
    countryItalie: "Italy",
    countryEtatsUnis: "United States",
    countryAllemagne: "Germany",
    countryRoyaumeUni: "United Kingdom",
    countryFrance: "France",
    countryCoree: "South Korea",
    countryAutre: "Other",
    countryAutriche: "Austria",
    countrySuede: "Sweden"
  }
};

let currentLang = localStorage.getItem('gt7_lang') || 'fr';

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('gt7_lang', lang);
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
  // Petit hack visuel rapide pour les boutons du header
  if(lang==='fr') document.querySelector(".lang-btn[onclick*='fr']").classList.add('active');
  if(lang==='en') document.querySelector(".lang-btn[onclick*='en']").classList.add('active');
  updateStaticTranslations();
  renderFilters();
  render();
}

function t(key) {
  return LANGS[currentLang][key] || LANGS['fr'][key] || key;
}

function updateStaticTranslations() {
  // Traduction des éléments avec data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.innerHTML = t(key);
  });
  // Traduction des placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    el.placeholder = t(key);
  });
}

// ==========================================
// BASE DE DONNÉES LOCALES & FILTRES ACTIFS
// ==========================================
let cars = [];       // Base de données complète des 570+ voitures du jeu
let userCars = {};   // { carId: { owned: true/false, wishlist: true/false, photo: "base64...", note: "..." } }
let currentUserId = null;

// Filtres actifs
let activeOwned = 'all'; // 'all', 'owned', 'missing', 'wishlist', 'legenda'
let activeMake = '';
let activeCategory = '';
let activeCountry = '';
let activeRarity = '';
let activeAspiration = '';
let activeTrans = '';
let activeYear = '';
let activePP = '';

// Liste ordonnée pour la navigation par flèches dans la modale
let currentFilteredList = [];
let currentModalIndex = -1;

// INITIALISATION AU CHARGEMENT
window.addEventListener('DOMContentLoaded', async () => {
  updateStaticTranslations();
  setLang(currentLang);
  
  // 1. Charger le fichier JSON des voitures de GT7
  try {
    const res = await fetch('cars.json');
    cars = await res.json();
  } catch (err) {
    console.error("Erreur lors du chargement de cars.json :", err);
    // Fallback minimal au cas où
    cars = [
      { id: 1, make: "Nissan", name: "GT-R Nismo '17", year: 2017, price: 187000, pp: 620, trans: "4RM", power: 600, weight: 1720, aspiration: "TC", cat: "Routière", country: "Japon", rarity: "normal" },
      { id: 2, make: "Alpine", name: "A110 Première Édition '17", year: 2017, price: 80000, pp: 530, trans: "FR", power: 252, weight: 1103, aspiration: "TC", cat: "Routière", country: "France", rarity: "normal" }
    ];
  }

  // 2. Simuler ou brancher une authentification basique (Magic Link fictif ou Supabase s'il y a lieu)
  // Pour cet exemple autonome, on va simuler un utilisateur connecté automatiquement en local
  initLocalAuth();
});

function initLocalAuth() {
  // On regarde s'il y a une session simulée
  let email = localStorage.getItem('gt7_user_email');
  if (!email) {
    // Écran de connexion affiché
    document.getElementById('auth-screen').style.display = 'flex';
  } else {
    loginUser(email);
  }
}

function sendMagicLink() {
  const email = document.getElementById('auth-email').value.trim();
  if (!email) return;
  
  document.getElementById('auth-msg').innerHTML = "✨ Connexion réussie ! Chargement de ton garage...";
  setTimeout(() => {
    localStorage.setItem('gt7_user_email', email);
    loginUser(email);
  }, 1000);
}

function loginUser(email) {
  currentUserId = email;
  document.getElementById('auth-screen').style.display = 'none';
  document.getElementById('header-user-bar').style.display = 'flex';
  document.getElementById('header-user-email').innerText = email;

  // Charger les données utilisateur depuis le localStorage (spécifique à cet email)
  const savedData = localStorage.getItem(`gt7_garage_${email}`);
  if (savedData) {
    userCars = JSON.parse(savedData);
  } else {
    userCars = {};
  }

  // Générer les filtres du panneau latéral et lancer le premier rendu global
  renderFilters();
  render();
}

function signOut() {
  localStorage.removeItem('gt7_user_email');
  window.location.reload();
}

function saveUserDataToStorage() {
  if (currentUserId) {
    localStorage.setItem(`gt7_garage_${currentUserId}`, JSON.stringify(userCars));
  }
}

// ==========================================
// GÉNÉRATION DYNAMIQUE DES FILTRES (SIDEBAR)
// ==========================================
function renderFilters() {
  // On extrait les valeurs uniques existantes dans notre tableau global de voitures
  const makes = {};
  const categories = {};
  const countries = {};
  const rarities = {};
  const aspirations = {};
  const transmissions = {};
  const years = {};
  const pps = {};

  cars.forEach(c => {
    if(c.make) makes[c.make] = (makes[c.make] || 0) + 1;
    if(c.cat) categories[c.cat] = (categories[c.cat] || 0) + 1;
    if(c.country) countries[c.country] = (countries[c.country] || 0) + 1;
    if(c.rarity) rarities[c.rarity] = (rarities[c.rarity] || 0) + 1;
    if(c.aspiration) aspirations[c.aspiration] = (aspirations[c.aspiration] || 0) + 1;
    if(c.trans) transmissions[c.trans] = (transmissions[c.trans] || 0) + 1;
    
    // Groupement par décennie ou année exacte ? Faisons par tranches d'années simples
    let yGroup = "Autre";
    if (c.year < 1970) yGroup = "Avant 1970";
    else if (c.year < 1980) yGroup = "1970s";
    else if (c.year < 1990) yGroup = "1980s";
    else if (c.year < 2000) yGroup = "1990s";
    else if (c.year < 2010) yGroup = "2000s";
    else if (c.year < 2020) yGroup = "2010s";
    else if (c.year >= 2020) yGroup = "2020s";
    years[yGroup] = (years[yGroup] || 0) + 1;

    // Groupement par tranches de PP
    let ppGroup = "Sans PP";
    if (c.pp) {
      if (c.pp < 400) ppGroup = "< 400 PP";
      else if (c.pp < 500) ppGroup = "400 - 500";
      else if (c.pp < 600) ppGroup = "500 - 600";
      else if (c.pp < 700) ppGroup = "600 - 700";
      else if (c.pp < 800) ppGroup = "700 - 800";
      else ppGroup = "> 800 PP";
    }
    pps[ppGroup] = (pps[ppGroup] || 0) + 1;
  });

  // 1. MARQUES
  const makeHtml = Object.entries(makes).sort((a,b) => a[0].localeCompare(b[0])).map(([m, n]) => {
    return `<button class="filter-btn ${activeMake===m?'active':''}" onclick="filterMake('${m.replace(/'/g, "\\'")}')">${m} <span class="count">${n}</span></button>`;
  }).join('');
  
  document.getElementById('make-filters').innerHTML = 
    `<button class="filter-btn ${!activeMake?'active':''}" onclick="filterMake('')">${t('filterAllLabel')} <span class="count">${cars.length}</span></button>` + makeHtml;
  document.getElementById('m-make-filters').innerHTML = 
    `<button class="filter-btn ${!activeMake?'active':''}" onclick="filterMake('')">${t('filterAllLabel')} <span class="count">${cars.length}</span></button>` + makeHtml;

  // 2. CATEGORIES
  const catHtml = Object.entries(categories).sort((a,b)=>b[1]-a[1]).map(([cat, n]) => {
    let labelAffichage = cat; 
    if (cat === "Routière") {
      labelAffichage = t('catRoad');
    } else if (cat === "Course") {
      labelAffichage = t('catRace');
    }
    return `<button class="filter-btn ${activeCategory===cat?'active':''}" onclick="filterCategory('${cat}')">${labelAffichage} <span class="count">${n}</span></button>`;
  }).join('');

  document.getElementById('cat-filters').innerHTML = 
    `<button class="filter-btn ${!activeCategory?'active':''}" onclick="filterCategory('')">${t('filterAllLabel')} <span class="count">${cars.length}</span></button>` + catHtml;
  document.getElementById('m-cat-filters').innerHTML = 
    `<button class="filter-btn ${!activeCategory?'active':''}" onclick="filterCategory('')">${t('filterAllLabel')} <span class="count">${cars.length}</span></button>` + catHtml;

  // 3. PAYS
  const countryHtml = Object.entries(countries).sort((a,b)=>b[1]-a[1]).map(([country, n]) => {
    const mapKeys = {
      "Japon": "countryJapon",
      "Italie": "countryItalie",
      "États-Unis": "countryEtatsUnis",
      "Allemagne": "countryAllemagne",
      "Royaume-Uni": "countryRoyaumeUni",
      "France": "countryFrance",
      "Corée du Sud": "countryCoree",
      "Autre": "countryAutre",
      "Autriche": "countryAutriche",
      "Suède": "countrySuede"
    };
    const translationKey = mapKeys[country] || "countryAutre";
    const labelPays = t(translationKey) || country;
    return `<button class="filter-btn ${activeCountry===country?'active':''}" onclick="filterCountry(\"${country}\")">${labelPays} <span class="count">${n}</span></button>`;
  }).join('');

  document.getElementById('country-filters').innerHTML = 
    `<button class="filter-btn ${!activeCountry?'active':''}" onclick="filterCountry('')">${t('filterAllLabelM')} <span class="count">${cars.length}</span></button>` + countryHtml;
  document.getElementById('m-country-filters').innerHTML = 
    `<button class="filter-btn ${!activeCountry?'active':''}" onclick="filterCountry('')">${t('filterAllLabelM')} <span class="count">${cars.length}</span></button>` + countryHtml;

  // 4. RARETE
  const rarityHtml = Object.entries(rarities).sort((a,b)=>b[1]-a[1]).map(([r, n]) => {
    let lbl = r==='legend'? t('rarityLegend') : (r==='special'? t('raritySpecial') : 'Brand Central');
    return `<button class="filter-btn ${activeRarity===r?'active':''}" onclick="filterRarity('${r}')">${lbl} <span class="count">${n}</span></button>`;
  }).join('');
  
  document.getElementById('rarity-filters').innerHTML = 
    `<button class="filter-btn ${!activeRarity?'active':''}" onclick="filterRarity('')">${t('filterAllLabelM')} <span class="count">${cars.length}</span></button>` + rarityHtml;
  document.getElementById('m-rarity-filters').innerHTML = 
    `<button class="filter-btn ${!activeRarity?'active':''}" onclick="filterRarity('')">${t('filterAllLabelM')} <span class="count">${cars.length}</span></button>` + rarityHtml;

  // 5. ASPIRATION
  const aspirationHtml = Object.entries(aspirations).sort((a,b)=>b[1]-a[1]).map(([asp, n]) => {
    const translationKey = 'form' + asp.replace('+', '');
    return `<button class="filter-btn ${activeAspiration===asp?'active':''}" onclick="filterAspiration('${asp}')">${t(translationKey) || asp} <span class="count">${n}</span></button>`;
  }).join('');

  document.getElementById('aspiration-filters').innerHTML = 
    `<button class="filter-btn ${!activeAspiration?'active':''}" onclick="filterAspiration('')">${t('filterAllLabelM')} <span class="count">${cars.length}</span></button>` + aspirationHtml;
  document.getElementById('m-aspiration-filters').innerHTML = 
    `<button class="filter-btn ${!activeAspiration?'active':''}" onclick="filterAspiration('')">${t('filterAllLabelM')} <span class="count">${cars.length}</span></button>` + aspirationHtml;

  // 6. TRANSMISSION
  const transHtml = Object.entries(transmissions).sort((a,b)=>b[1]-a[1]).map(([tr, n]) => {
    return `<button class="filter-btn ${activeTrans===tr?'active':''}" onclick="filterTrans('${tr}')">${tr} <span class="count">${n}</span></button>`;
  }).join('');
  
  document.getElementById('trans-filters').innerHTML = 
    `<button class="filter-btn ${!activeTrans?'active':''}" onclick="filterTrans('')">${t('filterAllLabelM')} <span class="count">${cars.length}</span></button>` + transHtml;
  document.getElementById('m-trans-filters').innerHTML = 
    `<button class="filter-btn ${!activeTrans?'active':''}" onclick="filterTrans('')">${t('filterAllLabelM')} <span class="count">${cars.length}</span></button>` + transHtml;

  // 7. ANNEES
  const orderY = ["Avant 1970", "1970s", "1980s", "1990s", "2000s", "2010s", "2020s"];
  const yearHtml = orderY.filter(y => years[y]).map(y => {
    return `<button class="filter-btn ${activeYear===y?'active':''}" onclick="filterYear('${y}')">${y} <span class="count">${years[y]}</span></button>`;
  }).join('');
  
  document.getElementById('year-filters').innerHTML = 
    `<button class="filter-btn ${!activeYear?'active':''}" onclick="filterYear('')">${t('filterAllLabelM')} <span class="count">${cars.length}</span></button>` + yearHtml;
  document.getElementById('m-year-filters').innerHTML = 
    `<button class="filter-btn ${!activeYear?'active':''}" onclick="filterYear('')">${t('filterAllLabelM')} <span class="count">${cars.length}</span></button>` + yearHtml;

  // 8. PP
  const orderPP = ["< 400 PP", "400 - 500", "500 - 600", "600 - 700", "700 - 800", "> 800 PP"];
  const ppHtml = orderPP.filter(p => pps[p]).map(p => {
    return `<button class="filter-btn ${activePP===p?'active':''}" onclick="filterPP('${p}')">${p} <span class="count">${pps[p]}</span></button>`;
  }).join('');
  
  document.getElementById('pp-filters').innerHTML = 
    `<button class="filter-btn ${!activePP?'active':''}" onclick="filterPP('')">${p} ${t('filterAllLabelM')} <span class="count">${cars.length}</span></button>` + ppHtml;
  document.getElementById('m-pp-filters').innerHTML = 
    `<button class="filter-btn ${!activePP?'active':''}" onclick="filterPP('')">${t('filterAllLabelM')} <span class="count">${cars.length}</span></button>` + ppHtml;

  // Remplir aussi le datalist "Marques" de la modale d'édition
  const dl = document.getElementById('makes-list');
  if(dl) {
    dl.innerHTML = Object.keys(makes).sort().map(m => `<option value="${m}">`).join('');
  }
}

// Fonctions de clics pour assigner les filtres
function filterOwned(val) {
  activeOwned = val;
  const btns = ['filter-all-btn', 'filter-owned-btn', 'filter-notowned-btn', 'filter-wish-btn', 'filter-legend-btn',
                'm-filter-all-btn', 'm-filter-owned-btn', 'm-filter-notowned-btn', 'm-filter-wish-btn', 'm-filter-legend-btn'];
  btns.forEach(id => {
    const el = document.getElementById(id);
    if(el) el.classList.remove('active');
  });
  
  // Activer boutons desktop + mobile
  if(val==='all') { document.getElementById('filter-all-btn').classList.add('active'); if(document.getElementById('m-filter-all-btn')) document.getElementById('m-filter-all-btn').classList.add('active'); }
  if(val==='owned') { document.getElementById('filter-owned-btn').classList.add('active'); if(document.getElementById('m-filter-owned-btn')) document.getElementById('m-filter-owned-btn').classList.add('active'); }
  if(val==='missing') { document.getElementById('filter-notowned-btn').classList.add('active'); if(document.getElementById('m-filter-notowned-btn')) document.getElementById('m-filter-notowned-btn').classList.add('active'); }
  if(val==='wishlist') { document.getElementById('filter-wish-btn').classList.add('active'); if(document.getElementById('m-filter-wish-btn')) document.getElementById('m-filter-wish-btn').classList.add('active'); }
  if(val==='legenda') { document.getElementById('filter-legend-btn').classList.add('active'); if(document.getElementById('m-filter-legend-btn')) document.getElementById('m-filter-legend-btn').classList.add('active'); }

  render();
}
function filterMake(v) { activeMake = v; renderFilters(); render(); }
function filterCategory(v) { activeCategory = v; renderFilters(); render(); }
function filterCountry(v) { activeCountry = v; renderFilters(); render(); }
function filterRarity(v) { activeRarity = v; renderFilters(); render(); }
function filterAspiration(v) { activeAspiration = v; renderFilters(); render(); }
function filterTrans(v) { activeTrans = v; renderFilters(); render(); }
function filterYear(v) { activeYear = v; renderFilters(); render(); }
function filterPP(v) { activePP = v; renderFilters(); render(); }

function onMobileSearch() {
  document.getElementById('search-input').value = document.getElementById('m-search-input').value;
  render();
}

// ==========================================
// RENDU DU CONTENU PRINCIPAL & CALCUL STATS
// ==========================================
let currentView = 'grid'; // 'grid' ou 'list'
function setView(view) {
  currentView = view;
  document.getElementById('grid-btn').classList.toggle('active', view==='grid');
  document.getElementById('list-btn').classList.toggle('active', view==='list');
  render();
}

function render() {
  const container = document.getElementById('cars-container');
  const searchVal = document.getElementById('search-input').value.toLowerCase().trim();

  // 1. Filtrer la liste des voitures
  let filtered = cars.filter(c => {
    // Statut possédé / manquant / wishlist / légende
    const u = userCars[c.id] || {};
    if (activeOwned === 'owned' && !u.owned) return false;
    if (activeOwned === 'missing' && u.owned) return false;
    if (activeOwned === 'wishlist' && !u.wishlist) return false;
    if (activeOwned === 'legenda' && c.rarity !== 'legend') return false;

    // Panneaux latéraux
    if (activeMake && c.make !== activeMake) return false;
    if (activeCategory && c.cat !== activeCategory) return false;
    if (activeCountry && c.country !== activeCountry) return false;
    if (activeRarity && c.rarity !== activeRarity) return false;
    if (activeAspiration && c.aspiration !== activeAspiration) return false;
    if (activeTrans && c.trans !== activeTrans) return false;
    
    // Année tranche
    if (activeYear) {
      if (activeYear === "Avant 1970" && c.year >= 1970) return false;
      if (activeYear === "1970s" && (c.year < 1970 || c.year >= 1980)) return false;
      if (activeYear === "1980s" && (c.year < 1980 || c.year >= 1990)) return false;
      if (activeYear === "1990s" && (c.year < 1990 || c.year >= 2000)) return false;
      if (activeYear === "2000s" && (c.year < 2000 || c.year >= 2010)) return false;
      if (activeYear === "2010s" && (c.year < 2010 || c.year >= 2020)) return false;
      if (activeYear === "2020s" && c.year < 2020) return false;
    }

    // PP tranche
    if (activePP) {
      if (!c.pp) return false;
      if (activePP === "< 400 PP" && c.pp >= 400) return false;
      if (activePP === "400 - 500" && (c.pp < 400 || c.pp >= 500)) return false;
      if (activePP === "500 - 600" && (c.pp < 500 || c.pp >= 600)) return false;
      if (activePP === "600 - 700" && (c.pp < 600 || c.pp >= 700)) return false;
      if (activePP === "700 - 800" && (c.pp < 700 || c.pp >= 800)) return false;
      if (activePP === "> 800 PP" && c.pp < 800) return false;
    }

    // Recherche par texte libre (nom ou marque)
    if (searchVal) {
      const target = `${c.make} ${c.name}`.toLowerCase();
      if (!target.includes(searchVal)) return false;
    }

    return true;
  });

  // 2. Trier la liste filtrée
  const sortBy = document.getElementById('sort-select').value;
  filtered.sort((a, b) => {
    if (sortBy === 'name') return a.name.localeCompare(b.name);
    if (sortBy === 'make') return a.make.localeCompare(b.make);
    if (sortBy === 'year') return b.year - a.year; // Récent d'abord
    if (sortBy === 'price') return (b.price || 0) - (a.price || 0);
    if (sortBy === 'pp') return (b.pp || 0) - (a.pp || 0);
    if (sortBy === 'power') return (b.power || 0) - (a.power || 0);
    if (sortBy === 'weight') return (a.weight || 0) - (b.weight || 0); // Léger d'abord
    return 0;
  });

  // Sauvegarder pour la navigation de la modale
  currentFilteredList = filtered;

  // 3. Calculer les statistiques globales du garage (uniquement sur les voitures possédées)
  let totalCount = 0;
  let totalValue = 0;
  let maxPP = 0;
  let maxCh = 0;
  let maxKg = 0;

  cars.forEach(c => {
    const u = userCars[c.id];
    if (u && u.owned) {
      totalCount++;
      totalValue += (c.price || 0);
      if ((c.pp || 0) > maxPP) maxPP = c.pp;
      if ((c.power || 0) > maxCh) maxCh = c.power;
      if ((c.weight || 0) > maxKg) maxKg = c.weight;
    }
  });

  // Mettre à jour les compteurs graphiques du header
  document.getElementById('total-count').innerText = totalCount;
  document.getElementById('total-value').innerText = totalValue.toLocaleString() + " Cr";
  document.getElementById('max-pp').innerText = maxPP ? maxPP + " PP" : "—";
  document.getElementById('max-ch').innerText = maxCh ? maxCh + " ch" : "—";
  document.getElementById('max-kg').innerText = maxKg ? maxKg + " kg" : "—";

  // Barre de progression de la collection globale
  const totalUniqueInGame = 570; // Ajustable selon les MàJ
  const pct = Math.min(100, Math.round((totalCount / totalUniqueInGame) * 100));
  document.getElementById('progress-pct').innerText = pct + "%";
  document.getElementById('progress-fill').style.width = pct + "%";
  document.getElementById('progress-count').innerText = totalCount;

  // 4. Générer le HTML du conteneur principal
  if (filtered.length === 0) {
    container.innerHTML = `<div class="empty-state">Aucune voiture ne correspond à ces critères.</div>`;
    return;
  }

  container.className = currentView === 'grid' ? 'cars-grid' : 'cars-list';

  container.innerHTML = filtered.map(c => {
    const u = userCars[c.id] || {};
    const isOwned = !!u.owned;
    const isWish = !!u.wishlist;
    const hasCustomImg = !!u.photo;
    const currentImgSrc = u.photo || 'placeholder-car.jpg'; // Image par défaut ou base64 locale

    // Traduction de la rareté sous forme de tag
    let rarityTag = '';
    if(c.rarity==='legend') rarityTag = `<span class="badge legend">${t('rarityLegend')}</span>`;
    if(c.rarity==='special') rarityTag = `<span class="badge special">${t('raritySpecial')}</span>`;

    if (currentView === 'grid') {
      return `
        <div class="car-card ${isOwned?'owned':''}" onclick="openModalById(${c.id})">
          <div class="card-img-wrap">
            <img src="${currentImgSrc}" alt="${c.name}" class="car-thumb" loading="lazy" onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100\" height=\"60\" viewBox=\"0 0 100 60\"><rect width=\"100%\" height=\"100%\" fill=\"%23222\"/><text x=\"50%\" y=\"55%\" dominant-baseline=\"middle\" text-anchor=\"middle\" fill=\"%23444\" font-size=\"10\" font-family=\"sans-serif\">Pas de photo</text></svg>'">
            <div class="card-tags">
              ${rarityTag}
              ${c.pp ? `<span class="badge pp">${c.pp} PP</span>` : ''}
            </div>
            <div class="card-actions-overlay" onclick="event.stopPropagation();">
              <button class="action-toggle-btn ${isOwned?'active':''}" onclick="toggleOwnedQuick(${c.id})" title="Possédée ou non">✓</button>
              <button class="action-toggle-btn star ${isWish?'active':''}" onclick="toggleWishQuick(${c.id})" title="Ajouter à la wishlist">⭐</button>
            </div>
          </div>
          <div class="card-info">
            <div class="car-make">${c.make}</div>
            <div class="car-name">${c.name}</div>
            <div class="car-specs">
              <span>${c.year}</span> · <span>${c.trans || '—'}</span> · <span>${c.power ? c.power+' ch' : '—'}</span>
            </div>
            <div class="car-price-row">
              <span class="price-val">${c.price ? c.price.toLocaleString()+' Cr' : 'Gratuit / Récompense'}</span>
              ${u.note ? `<span class="note-indicator" title="${u.note.replace(/"/g, '&quot;')}">💬</span>` : ''}
            </div>
          </div>
        </div>
      `;
    } else {
      // Vue en liste compacte
      return `
        <div class="list-row ${isOwned?'owned':''}" onclick="openModalById(${c.id})">
          <img src="${currentImgSrc}" alt="" class="list-thumb" onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 40 25\"><rect width=\"100%\" height=\"100%\" fill=\"%23222\"/></svg>'">
          <div class="list-cell main-cell">
            <div class="list-car-title"><strong>${c.make}</strong> ${c.name}</div>
            <div style="font-size:0.75rem;color:var(--muted);">${c.cat} · ${c.country}</div>
          </div>
          <div class="list-cell text-center" style="width:70px;"><strong>${c.pp || '—'}</strong> <span style="font-size:0.65rem;color:var(--muted)">PP</span></div>
          <div class="list-cell text-center" style="width:80px;">${c.power ? c.power+' ch' : '—'}</div>
          <div class="list-cell text-center" style="width:70px;">${c.weight ? c.weight+' kg' : '—'}</div>
          <div class="list-cell text-right" style="width:110px; font-weight:600; color:var(--accent); font-family: 'Barlow Condensed';">${c.price ? c.price.toLocaleString() : '—'}</div>
          <div class="list-cell text-right" style="width:90px;" onclick="event.stopPropagation();">
            <button class="action-toggle-btn ${isOwned?'active':''}" onclick="toggleOwnedQuick(${c.id})">✓</button>
            <button class="action-toggle-btn star ${isWish?'active':''}" onclick="toggleWishQuick(${c.id})">⭐</button>
          </div>
        </div>
      `;
    }
  }).join('');
}

// Actions rapides sur les cartes sans ouvrir la modale
function toggleOwnedQuick(id) {
  if(!userCars[id]) userCars[id] = { owned: false, wishlist: false, photo: null, note: "" };
  userCars[id].owned = !userCars[id].owned;
  if(userCars[id].owned) userCars[id].wishlist = false; // Plus besoin d'être en wishlist si obtenue
  saveUserDataToStorage();
  render();
}

function toggleWishQuick(id) {
  if(!userCars[id]) userCars[id] = { owned: false, wishlist: false, photo: null, note: "" };
  userCars[id].wishlist = !userCars[id].wishlist;
  if(userCars[id].wishlist) userCars[id].owned = false; // Inversement
  saveUserDataToStorage();
  render();
}

// ==========================================
// PANNEAU MOBILE (DRAWER) & NAVIGATION
// ==========================================
function openDrawer() {
  document.getElementById('filter-drawer').classList.add('open');
}
function closeDrawer() {
  document.getElementById('filter-drawer').classList.remove('open');
}
function mobileNav(screen) {
  document.querySelectorAll('.mobile-nav-btn').forEach(b => b.classList.remove('active'));
  if(screen==='garage') {
    document.getElementById('nav-garage').classList.add('active');
    filterOwned('all');
  } else if(screen==='wish') {
    document.getElementById('nav-wish').classList.add('active');
    filterOwned('wishlist');
  }
}

// ==========================================
// GESTION DE LA MODALE D'ÉDITION AVANCÉE
// ==========================================
let currentEditingCarId = null;

function openModalById(id) {
  currentEditingCarId = id;
  const c = cars.find(car => car.id === id);
  if(!c) return;

  // Calculer l'index actuel dans la liste filtrée pour afficher la pagination
  currentModalIndex = currentFilteredList.findIndex(car => car.id === id);
  if(currentModalIndex !== -1 && currentFilteredList.length > 1) {
    document.getElementById('modal-nav').style.display = 'flex';
    document.getElementById('modal-nav-count').innerText = `${currentModalIndex + 1} / ${currentFilteredList.length}`;
  } else {
    document.getElementById('modal-nav').style.display = 'none';
  }

  // Charger les données utilisateur
  const u = userCars[id] || { owned: false, wishlist: false, photo: null, note: "" };

  // Titre de la modale
  document.getElementById('modal-title').innerHTML = `${c.make} <span>${c.name}</span>`;

  // Remplir le formulaire (en lecture ou pré-remplissage)
  document.getElementById('f-make').value = c.make || '';
  document.getElementById('f-name').value = c.name || '';
  document.getElementById('f-year').value = c.year || '';
  document.getElementById('f-price').value = c.price || '';
  document.getElementById('f-pp').value = c.pp || '';
  document.getElementById('f-trans').value = c.trans || '';
  document.getElementById('f-power').value = c.power || '';
  document.getElementById('f-weight').value = c.weight || '';
  document.getElementById('f-aspiration').value = c.aspiration || '';
  document.getElementById('f-cat').value = c.cat || '';
  document.getElementById('f-rarity').value = c.rarity || 'normal';
  document.getElementById('f-note').value = u.note || '';

  // Gestion de la preview d'image custom
  const previewWrap = document.getElementById('img-preview-wrap');
  const placeholder = document.getElementById('img-placeholder');
  const imgEl = document.getElementById('img-preview');

  if(u.photo) {
    imgEl.src = u.photo;
    previewWrap.style.display = 'block';
    placeholder.style.display = 'none';
  } else {
    imgEl.src = '';
    previewWrap.style.display = 'none';
    placeholder.style.display = 'flex';
  }

  // Ouvrir la modale graphiquement
  document.getElementById('modal-bg').classList.add('open');
  // Écoute des touches du clavier pour naviguer
  window.addEventListener('keydown', handleModalKeyDown);
}

function closeModal(e) {
  // Si e est fourni, fermer seulement si clic sur le background gris
  if(e && e.target !== document.getElementById('modal-bg')) return;
  
  document.getElementById('modal-bg').classList.remove('open');
  window.removeEventListener('keydown', handleModalKeyDown);
}

function modalNavigate(direction) {
  if(currentModalIndex === -1) return;
  let newIndex = currentModalIndex + direction;
  
  // Boucler si on dépasse les bornes
  if(newIndex < 0) newIndex = currentFilteredList.length - 1;
  if(newIndex >= currentFilteredList.length) newIndex = 0;
  
  openModalById(currentFilteredList[newIndex].id);
}

function handleModalKeyDown(e) {
  if(e.key === 'ArrowLeft') {
    modalNavigate(-1);
  } else if(e.key === 'ArrowRight') {
    modalNavigate(1);
  } else if(e.key === 'Escape') {
    closeModal();
  }
}

// Enregistrement des notes ou modification (si tu permets de modifier les fiches de base)
function saveCar() {
  if(!currentEditingCarId) return;
  
  if(!userCars[currentEditingCarId]) {
    userCars[currentEditingCarId] = { owned: true, wishlist: false, photo: null, note: "" };
  }
  
  // Par défaut, si on clique sur Enregistrer dans la modale, on considère la voiture possédée
  userCars[currentEditingCarId].owned = true;
  userCars[currentEditingCarId].wishlist = false;
  userCars[currentEditingCarId].note = document.getElementById('f-note').value.trim();
  
  // Optionnel : On pourrait aussi modifier le tableau global 'cars' si l'utilisateur a édité les PP ou ch.
  const c = cars.find(car => car.id === currentEditingCarId);
  if(c) {
    c.make = document.getElementById('f-make').value;
    c.name = document.getElementById('f-name').value;
    c.year = parseInt(document.getElementById('f-year').value) || c.year;
    c.price = parseInt(document.getElementById('f-price').value) || c.price;
    c.pp = parseInt(document.getElementById('f-pp').value) || c.pp;
    c.trans = document.getElementById('f-trans').value;
    c.power = parseInt(document.getElementById('f-power').value) || c.power;
    c.weight = parseInt(document.getElementById('f-weight').value) || c.weight;
    c.aspiration = document.getElementById('f-aspiration').value;
    c.cat = document.getElementById('f-cat').value;
    c.rarity = document.getElementById('f-rarity').value;
  }

  saveUserDataToStorage();
  renderFilters();
  render();
  closeModal();
}

// ==========================================
// ENREGISTREMENT PHOTO LOCALE (BASE64)
// ==========================================
function triggerImgUpload() {
  document.getElementById('f-img-input').click();
}

function handleImgUpload(event) {
  const file = event.target.files[0];
  if(!file) return;

  // Compresser et lire le fichier en tant que DataURL (Base64)
  const reader = new FileReader();
  reader.onload = function(e) {
    const img = new Image();
    img.onload = function() {
      // Redimensionnement via un canvas pour limiter le stockage local à ~150-200kb max par image
      const canvas = document.createElement('canvas');
      let width = img.width;
      let height = img.height;
      const MAX_WIDTH = 800; // Largeur max suffisante pour le web
      
      if (width > MAX_WIDTH) {
        height *= MAX_WIDTH / width;
        width = MAX_WIDTH;
      }
      canvas.width = width;
      canvas.height = height;
      
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, width, height);
      
      // Conversion en JPEG compressé à 0.7
      const compressedBase64 = canvas.toDataURL('image/jpeg', 0.7);
      
      // Injection dans la structure locale
      if(!userCars[currentEditingCarId]) {
        userCars[currentEditingCarId] = { owned: true, wishlist: false, photo: null, note: "" };
      }
      userCars[currentEditingCarId].photo = compressedBase64;
      
      // Mise à jour de l'affichage de l'aperçu dans la modale
      document.getElementById('img-preview').src = compressedBase64;
      document.getElementById('img-preview-wrap').style.display = 'block';
      document.getElementById('img-placeholder').style.display = 'none';
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}

function removeImg() {
  if(currentEditingCarId && userCars[currentEditingCarId]) {
    userCars[currentEditingCarId].photo = null;
  }
  document.getElementById('img-preview').src = '';
  document.getElementById('img-preview-wrap').style.display = 'none';
  document.getElementById('img-placeholder').style.display = 'flex';
  document.getElementById('f-img-input').value = ''; // Reset input file
}

// ==========================================
// LIGHTBOX POUR AGRANDISSEMENT PHOTO (OPTIONNEL)
// ==========================================
function openLightbox(src, name) {
  document.getElementById('lightbox-img').src = src;
  document.getElementById('lightbox-name').innerText = name;
  document.getElementById('lightbox').classList.add('open');
}
function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
}
