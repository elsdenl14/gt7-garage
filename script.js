const SUPABASE_URL = 'https://nspwapqjphuzqwlqdfnj.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5zcHdhcHFqcGh1enF3bHFkZm5qIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzcxNzI3NjEsImV4cCI6MjA5Mjc0ODc2MX0.xicZWCTkJIPKLXfVzLrmP4n20xboufMwcjRldMM0E5c';
const SB_HEADERS = { 'Content-Type': 'application/json', 'apikey': SUPABASE_KEY, 'Authorization': 'Bearer ' + SUPABASE_KEY };

// ── SYSTÈME I18N ────────────────────────────────────────────────────────────
const LANGS = {
  fr: {
    // Header
    statOwned:'Obtenues', statCr:'Cr total', statPP:'PP max', statPower:'Puissance max', statWeight:'Poids max',
    collection:'Collection GT7', progressOf:'/ 570 voitures', btnAdd:'+ Ajouter',
    // Sidebar
    filterStatus:'Statut', filterAll:'Toutes', filterOwned:'✓ Obtenues', filterMissing:'○ Manquantes', filterWish:'⭐ Wishlist',
    filterLegend:'🚗 Voitures de légende', filterSearch:'Recherche', searchPlaceholder:'Nom, marque…',
    filterMake:'Marque', filterCat:'Catégorie', filterCountry:'Pays', filterRarity:'Rareté',
    filterAspiration:'Aspiration', filterTrans:'Transmission', filterYear:'Année',
    filterAllLabel:'Toutes', filterAllLabelM:'Tous',
    // Toolbar
    sortBy:'Trier par', sortName:'Nom', sortMake:'Marque', sortYear:'Année', sortPrice:'Prix',
    sortPower:'Puissance', sortWeight:'Poids',
    // Formulaire
    formPhoto:'Photo de la voiture', formPhotoClick:'Clique pour ajouter une photo',
    formPhotoSub:'JPG · PNG · WEBP — compressée et stockée localement',
    formPhotoChange:'🔄 Changer', formPhotoRemove:'✕ Supprimer',
    formMake:'Marque', formMakePh:'ex: Nissan', formModel:'Modèle', formModelPh:'ex: GT-R (R34)',
    formYear:'Année', formPrice:'Prix (Cr)', formPP:'PP (Performance Points)',
    formTrans:'Transmission', formPower:'Puissance max (ch)', formWeight:'Poids (kg)',
    formAspiration:'Aspiration', formCat:'Catégorie', formRarity:'Rareté',
    formNote:'Note perso (optionnel)', formNotePh:'ex: Voiture préférée !',
    formSelect:'— Sélectionner —', formOwned:'Voiture obtenue',
    btnCancel:'Annuler', btnSave:'Enregistrer',
    catRoad:'Routière', catRace:'Course',
    raritySpecial:"Voitures d'Occasion", rarityLegend:'Voitures de Légende',
    // Modal title
    modalAdd:'Ajouter une', modalEdit:'Modifier la', modalCar:'voiture',
    // Mobile nav / drawer
    navGarage:'Garage', navWish:'Wishlist', navAdd:'Ajouter', navFilters:'Filtres',
    drawerFilters:'Filtres',
    // Cards / list
    csKeyPP:'PP', csKeyCr:'Cr', csKeyCh:'ch', csKeyKg:'kg',
    confirmDelete:'Supprimer cette voiture ?', confirmReset:"Réinitialiser l'état de cette voiture ?",
    toastLoad:'⏳ Chargement du garage…', toastLoaded:'✓ Garage chargé',
    toastSaving:'💾 Sauvegarde…', toastSaved:'✓ Voiture enregistrée', toastUpdated:'✓ Voiture mise à jour',
    toastDeleting:'🗑️ Suppression…', toastDeleted:'✓ Voiture supprimée', toastReset:'✓ État réinitialisé',
    toastError:'❌ Erreur de connexion', toastSaveError:'❌ Erreur de sauvegarde', toastDelError:'❌ Erreur suppression',
    emptyNone:'Aucune voiture dans ton garage.', emptyFound:'Aucune voiture trouvée.',
    emptyBtn:'+ Ajouter ma première voiture',
    // Rarity labels
    rarityNormal:'Brand Central', raritySpecialCard:"Voitures d'Occasion", rarityLegendCard:'Voitures de Légende',
    wishAdd:'Ajouter à la wishlist', wishRemove:'Retirer de la wishlist',
    ownedMark:'Marquer comme obtenue', ownedUnmark:'Marquer comme non obtenue',
    deleteReset:"Réinitialiser l'état de cette voiture ?",
  },
  en: {
    // Header
    statOwned:'Owned', statCr:'Total Cr', statPP:'Max PP', statPower:'Max Power', statWeight:'Max Weight',
    collection:'GT7 Collection', progressOf:'/ 570 cars', btnAdd:'+ Add',
    // Sidebar
    filterStatus:'Status', filterAll:'All', filterOwned:'✓ Owned', filterMissing:'○ Missing', filterWish:'⭐ Wishlist',
    filterLegend:'🚗 Legend Cars', filterSearch:'Search', searchPlaceholder:'Name, brand…',
    filterMake:'Brand', filterCat:'Category', filterCountry:'Country', filterRarity:'Rarity',
    filterAspiration:'Aspiration', filterTrans:'Drivetrain', filterYear:'Year',
    filterAllLabel:'All', filterAllLabelM:'All',
    // Toolbar
    sortBy:'Sort by', sortName:'Name', sortMake:'Brand', sortYear:'Year', sortPrice:'Price',
    sortPower:'Power', sortWeight:'Weight',
    // Form
    formPhoto:'Car photo', formPhotoClick:'Click to add a photo',
    formPhotoSub:'JPG · PNG · WEBP — compressed and stored locally',
    formPhotoChange:'🔄 Change', formPhotoRemove:'✕ Remove',
    formMake:'Brand', formMakePh:'e.g. Nissan', formModel:'Model', formModelPh:'e.g. GT-R (R34)',
    formYear:'Year', formPrice:'Price (Cr)', formPP:'PP (Performance Points)',
    formTrans:'Drivetrain', formPower:'Max power (hp)', formWeight:'Weight (kg)',
    formAspiration:'Aspiration', formCat:'Category', formRarity:'Rarity',
    formNote:'Personal note (optional)', formNotePh:'e.g. My favourite car!',
    formSelect:'— Select —', formOwned:'Car obtained',
    btnCancel:'Cancel', btnSave:'Save',
    catRoad:'Road', catRace:'Race',
    raritySpecial:'Used Cars', rarityLegend:'Legend Cars',
    // Modal title
    modalAdd:'Add a', modalEdit:'Edit', modalCar:'car',
    // Mobile nav / drawer
    navGarage:'Garage', navWish:'Wishlist', navAdd:'Add', navFilters:'Filters',
    drawerFilters:'Filters',
    // Cards / list
    csKeyPP:'PP', csKeyCr:'Cr', csKeyCh:'hp', csKeyKg:'kg',
    confirmDelete:'Delete this car?', confirmReset:'Reset this car\'s status?',
    toastLoad:'⏳ Loading garage…', toastLoaded:'✓ Garage loaded',
    toastSaving:'💾 Saving…', toastSaved:'✓ Car saved', toastUpdated:'✓ Car updated',
    toastDeleting:'🗑️ Deleting…', toastDeleted:'✓ Car deleted', toastReset:'✓ Status reset',
    toastError:'❌ Connection error', toastSaveError:'❌ Save error', toastDelError:'❌ Delete error',
    emptyNone:'No cars in your garage.', emptyFound:'No cars found.',
    emptyBtn:'+ Add my first car',
    // Rarity labels
    rarityNormal:'Brand Central', raritySpecialCard:'Used Cars', rarityLegendCard:'Legend Cars',
    wishAdd:'Add to wishlist', wishRemove:'Remove from wishlist',
    ownedMark:'Mark as obtained', ownedUnmark:'Mark as not obtained',
    deleteReset:'Reset this car\'s status?',
  }
};

let currentLang = localStorage.getItem('gt7_lang') || 'fr';

function t(key) { return LANGS[currentLang][key] || LANGS['fr'][key] || key; }

function applyLang() {
  // Mettre à jour les boutons du sélecteur
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.textContent === currentLang.toUpperCase());
  });
  // Mettre à jour tous les éléments avec data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t(key)) el.textContent = t(key);
  });
  // Mettre à jour les placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t(key)) el.placeholder = t(key);
  });
  // Mettre à jour les options de select
  document.querySelectorAll('option[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t(key)) el.textContent = t(key);
  });
}

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('gt7_lang', lang);
  applyLang();
  render(); // re-render pour les toasts, labels des cartes, etc.
}

// ── CATALOGUE FIXE ─────────────────────────────────────────────────────────
// Toutes les voitures GT7. Chaque entrée a un id fixe et permanent.
// owned/wished/note/img sont gérés par l'état utilisateur dans Supabase.
let CATALOGUE = [];

function getCarEmoji(car) {
  return (car?.cat || '').trim().toLowerCase() === 'routière' ? '🚗' : '🏎️';
}

function addComputedCarFields(car) {
  return {
    ...car,
    country: getCountryFromMake(car.make),
    emoji: getCarEmoji(car),
  };
}

async function loadCatalogue() {
  const res = await fetch('cars.json');
  if (!res.ok) throw new Error('Impossible de charger cars.json');
  const data = await res.json();
  CATALOGUE = data.map(addComputedCarFields);
}


// ── AUTH SUPABASE ───────────────────────────────────────────────────────────
let currentUser = null; // { id, email }

// Récupère la session depuis l'URL (magic link) ou le localStorage
async function initAuth() {
  // 1. Vérifier si un token est dans l'URL (retour magic link)
  const hash = window.location.hash;
  const params = new URLSearchParams(hash.replace('#', '?'));
  const accessToken = params.get('access_token');
  const refreshToken = params.get('refresh_token');

  if (accessToken) {
    // Nettoyer l'URL
    history.replaceState(null, '', window.location.pathname);
    // Stocker les tokens
    localStorage.setItem('gt7_access_token', accessToken);
    if (refreshToken) localStorage.setItem('gt7_refresh_token', refreshToken);
  }

  // 2. Essayer avec le token stocké
  const storedToken = localStorage.getItem('gt7_access_token');
  if (storedToken) {
    try {
      const res = await fetch(`${SUPABASE_URL}/auth/v1/user`, {
        headers: { 'apikey': SUPABASE_KEY, 'Authorization': 'Bearer ' + storedToken }
      });
      if (res.ok) {
        const user = await res.json();
        currentUser = { id: user.id, email: user.email };
        onAuthSuccess();
        return;
      } else {
        // Token expiré, essayer de le rafraîchir
        const refreshed = await refreshSession();
        if (refreshed) return;
      }
    } catch(e) { /* continue */ }
  }

  // 3. Aucune session valide → afficher l'écran de connexion
  showAuthScreen();
}

async function refreshSession() {
  const refreshToken = localStorage.getItem('gt7_refresh_token');
  if (!refreshToken) return false;
  try {
    const res = await fetch(`${SUPABASE_URL}/auth/v1/token?grant_type=refresh_token`, {
      method: 'POST',
      headers: { 'apikey': SUPABASE_KEY, 'Content-Type': 'application/json' },
      body: JSON.stringify({ refresh_token: refreshToken })
    });
    if (!res.ok) return false;
    const data = await res.json();
    localStorage.setItem('gt7_access_token', data.access_token);
    if (data.refresh_token) localStorage.setItem('gt7_refresh_token', data.refresh_token);
    const user = data.user;
    currentUser = { id: user.id, email: user.email };
    onAuthSuccess();
    return true;
  } catch(e) { return false; }
}

async function sendMagicLink() {
  const email = document.getElementById('auth-email').value.trim();
  if (!email || !email.includes('@')) {
    setAuthMsg('Adresse email invalide.', 'err');
    return;
  }
  const btn = document.getElementById('auth-btn');
  btn.disabled = true;
  btn.textContent = 'Envoi en cours…';
  setAuthMsg('');
  try {
    const res = await fetch(`${SUPABASE_URL}/auth/v1/otp`, {
      method: 'POST',
      headers: { 'apikey': SUPABASE_KEY, 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, create_user: true })
    });
    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.message || 'Erreur inconnue');
    }
    setAuthMsg('✓ Lien envoyé ! Vérifie ta boîte mail.', 'ok');
    document.getElementById('auth-subtitle').textContent = 'Un lien de connexion a été envoyé à ' + email + '. Clique dessus pour accéder à ton garage.';
    document.getElementById('auth-form-wrap').style.opacity = '0.4';
    document.getElementById('auth-form-wrap').style.pointerEvents = 'none';
  } catch(e) {
    setAuthMsg('Erreur : ' + e.message, 'err');
    btn.disabled = false;
    btn.textContent = 'Envoyer le lien de connexion';
  }
}

function setAuthMsg(msg, type='') {
  const el = document.getElementById('auth-msg');
  el.textContent = msg;
  el.className = 'auth-msg' + (type ? ' ' + type : '');
}

function showAuthScreen() {
  document.getElementById('auth-screen').style.display = 'flex';
  document.getElementById('header-user-bar').style.display = 'none';
}

function onAuthSuccess() {
  document.getElementById('auth-screen').style.display = 'none';
  document.getElementById('header-user-bar').style.display = 'flex';
  document.getElementById('header-user-email').textContent = currentUser.email;
  // Mettre à jour les headers Supabase avec le token utilisateur
  const token = localStorage.getItem('gt7_access_token');
  SB_HEADERS['Authorization'] = 'Bearer ' + token;
  loadFromSupabase();
}

function signOut() {
  localStorage.removeItem('gt7_access_token');
  localStorage.removeItem('gt7_refresh_token');
  currentUser = null;
  cars = [];
  document.getElementById('cars-container').innerHTML = '';
  // Reset form
  document.getElementById('auth-email').value = '';
  document.getElementById('auth-btn').disabled = false;
  document.getElementById('auth-btn').textContent = 'Envoyer le lien de connexion';
  document.getElementById('auth-form-wrap').style.opacity = '';
  document.getElementById('auth-form-wrap').style.pointerEvents = '';
  document.getElementById('auth-subtitle').textContent = "Connecte-toi avec ton adresse email pour accéder à ton garage. Un lien de connexion te sera envoyé.";
  setAuthMsg('');
  showAuthScreen();
}

// ── ÉTAT LOCAL ─────────────────────────────────────────────────────────────
// cars = catalogue fusionné avec l'état de l'utilisateur
let cars = [];
let editId = null;
let activeCategory = null;
let activeCountry = null;
let activeRarity = null;
let activeTrans = null;
let activeAspiration = null;
let activeYear = null;
let activePP = null;
let activeMake = null;
let currentView = 'grid';
let ownedFilter = 'all';
let currentImgBase64 = null;
const TOTAL_GT7 = 570;

function showToast(msg, type='info') {
  let t = document.getElementById('toast');
  if (!t) {
    t = document.createElement('div');
    t.id = 'toast';
    t.style.cssText = 'position:fixed;bottom:1.5rem;left:50%;transform:translateX(-50%);background:var(--bg2);border:1px solid var(--border);color:var(--text);padding:0.5rem 1.2rem;border-radius:8px;font-family:Barlow Condensed,sans-serif;font-size:0.9rem;z-index:9999;transition:opacity 0.3s;pointer-events:none;';
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.style.borderColor = type==='error' ? 'var(--accent2)' : type==='ok' ? 'var(--accent)' : 'var(--border)';
  t.style.opacity = '1';
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.style.opacity = '0', 2500);
}

// ── CHARGEMENT ─────────────────────────────────────────────────────────────
async function loadFromSupabase() {
  showToast(t('toastLoad'));
  try {
    const res = await fetch(
      `${SUPABASE_URL}/rest/v1/user_states?user_id=eq.${encodeURIComponent(currentUser.id)}&select=car_id,owned,wished,note,img`,
      { headers: SB_HEADERS }
    );
    if (!res.ok) throw new Error(await res.text());
    const rows = await res.json();

    // Indexer les états par car_id
    const stateMap = {};
    rows.forEach(r => { stateMap[r.car_id] = r; });

    // Fusionner catalogue + état utilisateur
    cars = CATALOGUE.map(c => ({
      ...addComputedCarFields(c),
      owned:  stateMap[c.id] ? stateMap[c.id].owned  : false,
      wished: stateMap[c.id] ? stateMap[c.id].wished : false,
      note:   stateMap[c.id]?.note || '',
      img:    stateMap[c.id]?.img  || null,
    }));

    showToast(t('toastLoaded'), 'ok');
  } catch(e) {
    showToast(t('toastError'), 'error');
    console.error(e);
    // Fallback : catalogue sans état
    cars = CATALOGUE.map(c => ({ ...addComputedCarFields(c), owned: false, wished: false, note: '', img: null }));
  }
  render();
}

// ── SAUVEGARDE D'UN ÉTAT UTILISATEUR ──────────────────────────────────────
async function saveCarState(carId) {
  const c = cars.find(x => x.id === carId);
  if (!c) return;
  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/user_states`, {
      method: 'POST',
      headers: { ...SB_HEADERS, 'Prefer': 'resolution=merge-duplicates' },
      body: JSON.stringify([{
        user_id: currentUser.id,
        car_id:  c.id,
        owned:   c.owned,
        wished:  c.wished,
        note:    c.note   || '',
        img:     c.img    || '',
      }])
    });
    if (!res.ok) throw new Error(await res.text());
  } catch(e) {
    showToast(t('toastSaveError'), 'error');
    console.error(e);
  }
}

// Alias pour compatibilité avec le reste du code (saveCar appelle save())
async function save() {
  // Sauvegarder tous les états modifiés — utilisé après import/reset
  const payload = cars.map(c => ({
    user_id: currentUser.id,
    car_id:  c.id,
    owned:   c.owned,
    wished:  c.wished,
    note:    c.note  || '',
    img:     c.img   || '',
  }));
  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/user_states`, {
      method: 'POST',
      headers: { ...SB_HEADERS, 'Prefer': 'resolution=merge-duplicates' },
      body: JSON.stringify(payload)
    });
    if (!res.ok) throw new Error(await res.text());
  } catch(e) {
    showToast(t('toastSaveError'), 'error');
    console.error(e);
  }
}

async function deleteFromSupabase(id) {
  // Dans ce modèle on ne supprime pas une voiture du catalogue,
  // on remet juste son état à "non obtenue"
  const idx = cars.findIndex(c => c.id === id);
  if (idx === -1) return;
  cars[idx].owned  = false;
  cars[idx].wished = false;
  cars[idx].note   = '';
  cars[idx].img    = null;
  await saveCarState(id);
}

function setView(v) {
  if (window.innerWidth <= 768) v = 'grid';
  currentView = v;
  document.getElementById('grid-btn').classList.toggle('active', v==='grid');
  document.getElementById('list-btn').classList.toggle('active', v==='list');
  render();
}

function openDrawer() { document.getElementById('filter-drawer').classList.add('open'); }
function closeDrawer() { document.getElementById('filter-drawer').classList.remove('open'); }

function onMobileSearch() {
  const val = document.getElementById('m-search-input').value;
  document.getElementById('search-input').value = val;
  render();
}

function mobileNav(tab) {
  document.querySelectorAll('.mobile-nav-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('nav-' + tab).classList.add('active');
  if (tab === 'wish') filterOwned('wishlist');
  else if (tab === 'garage') filterOwned('all');
}

function filterOwned(mode) {
  ownedFilter = mode;
  // Desktop buttons
  const da = document.getElementById('filter-all-btn');
  const do_ = document.getElementById('filter-owned-btn');
  const dn = document.getElementById('filter-notowned-btn');
  const dw = document.getElementById('filter-wish-btn');
  const dl = document.getElementById('filter-legend-btn');
  if(da) da.classList.toggle('active', mode==='all');
  if(do_) do_.classList.toggle('active', mode==='owned');
  if(dn) dn.classList.toggle('active', mode==='missing');
  if(dw) dw.classList.toggle('active', mode==='wishlist');
  if(dl) dl.classList.toggle('active', mode==='legend');
  // Mobile buttons
  const ma = document.getElementById('m-filter-all-btn');
  const mo = document.getElementById('m-filter-owned-btn');
  const mn = document.getElementById('m-filter-notowned-btn');
  const mw = document.getElementById('m-filter-wish-btn');
  const ml = document.getElementById('m-filter-legend-btn');
  if(ma) ma.classList.toggle('active', mode==='all');
  if(mo) mo.classList.toggle('active', mode==='owned');
  if(mn) mn.classList.toggle('active', mode==='missing');
  if(mw) mw.classList.toggle('active', mode==='wishlist');
  if(ml) ml.classList.toggle('active', mode==='legend');
  render();
}

function getFiltered() {
  const q = document.getElementById('search-input').value.toLowerCase();
  const sort = document.getElementById('sort-select').value;
  let list = [...cars];
  if (q) list = list.filter(c => c.name.toLowerCase().includes(q)||(c.make||'').toLowerCase().includes(q));
  if (activeCategory) list = list.filter(c => c.cat===activeCategory);
  if (activeCountry) list = list.filter(c => c.country===activeCountry);
  if (activeRarity) list = list.filter(c => c.rarity===activeRarity);
  if (activeTrans) list = list.filter(c => c.trans===activeTrans);
  if (activeAspiration) list = list.filter(c => c.aspiration===activeAspiration);
  if (activeYear) list = list.filter(c => c.year && Math.floor(c.year / 10) * 10 == activeYear);
  if (activePP !== null) list = list.filter(c => c.pp && Math.floor(c.pp / 100) * 100 == activePP);
  if (activeMake) list = list.filter(c => c.make===activeMake);
  if (ownedFilter==='owned') list = list.filter(c => c.owned!==false);
  if (ownedFilter==='missing') list = list.filter(c => c.owned===false);
  if (ownedFilter==='wishlist') list = list.filter(c => c.wished===true);
  if (ownedFilter==='legend') list = list.filter(c => c.rarity === 'legend');
  list.sort((a,b) => {
    if (sort==='name') return (a.make+a.name).localeCompare(b.make+b.name);
    if (sort==='make') return (a.make||'').localeCompare(b.make||'');
    if (sort==='pp') return (b.pp||0)-(a.pp||0);
    if (sort==='year') return (b.year||0)-(a.year||0);
    if (sort==='price') return (b.price||0)-(a.price||0);
    if (sort==='power') return (b.power||0)-(a.power||0);
    if (sort==='weight') return (b.weight||0)-(a.weight||0);
    return 0;
  });
  return list;
}

function fmtNum(n) {
  if (!n&&n!==0) return '—';
  if (n>=1000000) return (n/1000000).toFixed(1)+'M';
  if (n>=1000) return (n/1000).toFixed(0)+'K';
  return n.toString();
}

function render() {
  const list = getFiltered();
  const container = document.getElementById('cars-container');
  const owned = cars.filter(c=>c.owned!==false);
  document.getElementById('total-count').textContent = owned.length;
  document.getElementById('total-value').textContent = fmtNum(owned.reduce((a,c)=>a+(parseInt(c.price)||0),0));
  const maxPP = owned.length?Math.max(...owned.map(c=>parseInt(c.pp)||0)):0;
  document.getElementById('max-pp').textContent = maxPP||'—';
  const maxPower = owned.length ? Math.max(...owned.map(c=>parseInt(c.power)||0)) : 0;
  document.getElementById('max-ch').textContent = maxPower ? maxPower + " ch" : '—';
  const maxWeight = owned.length ? Math.max(...owned.map(c=>parseInt(c.weight)||0)) : 0;
  document.getElementById('max-kg').textContent = maxWeight ? maxWeight + " kg" : '—';
  const pct = Math.round(owned.length/TOTAL_GT7*100);
  document.getElementById('progress-pct').textContent = pct+'%';
  document.getElementById('progress-fill').style.width = Math.min(100,pct)+'%';
  document.getElementById('progress-count').textContent = owned.length;
  renderFilters();
  if (list.length===0) {
    container.innerHTML = `<div class="empty-state"><div class="big">🏎️</div><p>${cars.length>0?t('emptyFound'):t('emptyNone')}</p></div>`;
    return;
  }
  container.innerHTML = currentView==='grid'
    ? `<div class="cars-grid">${list.map(cardHTML).join('')}</div>`
    : `<div class="cars-list">${list.map(listHTML).join('')}</div>`;
}

// Logos locaux depuis le dossier logos/
// Correspondances spéciales pour les noms qui diffèrent
// Correspondance automatique marque → pays
const MAKE_TO_COUNTRY = {
  'daihatsu':'🇯🇵 Japon','honda':'🇯🇵 Japon','infiniti':'🇯🇵 Japon','super formula':'🇯🇵 Japon',
  'lexus':'🇯🇵 Japon','mazda':'🇯🇵 Japon','mitsubishi':'🇯🇵 Japon','re amemiya':'🇯🇵 Japon',
  'nissan':'🇯🇵 Japon','subaru':'🇯🇵 Japon','suzuki':'🇯🇵 Japon','toyota':'🇯🇵 Japon',
  'amuse':'🇯🇵 Japon','nismo':'🇯🇵 Japon','afeela':'🇯🇵 Japon','gran turismo':'🇯🇵 Japon','mine\'s':'🇯🇵 Japon',
  'audi':'🇩🇪 Allemagne','bmw':'🇩🇪 Allemagne','mercedes':'🇩🇪 Allemagne',
  'opel':'🇩🇪 Allemagne','porsche':'🇩🇪 Allemagne',
  'volkswagen':'🇩🇪 Allemagne','amg':'🇩🇪 Allemagne',
  'ruf':'🇩🇪 Allemagne',
  'alfa romeo':'🇮🇹 Italie','de tomaso':'🇮🇹 Italie',
  'ferrari':'🇮🇹 Italie','fiat':'🇮🇹 Italie','lamborghini':'🇮🇹 Italie',
  'lancia':'🇮🇹 Italie','maserati':'🇮🇹 Italie','pagani':'🇮🇹 Italie','bvlgari':'🇮🇹 Italie',
  'abarth':'🇮🇹 Italie','zagato':'🇮🇹 Italie','autobianchi':'🇮🇹 Italie','italdesign':'🇮🇹 Italie',
  'alpine':'🇫🇷 France','citroen':'🇫🇷 France','bugatti':'🇫🇷 France',
  'ds':'🇫🇷 France','peugeot':'🇫🇷 France','renault':'🇫🇷 France',
  'aston martin':'🇬🇧 Royaume-Uni','bac':'🇬🇧 Royaume-Uni','radical':'🇬🇧 Royaume-Uni',
  'jaguar':'🇬🇧 Royaume-Uni',
  'mclaren':'🇬🇧 Royaume-Uni',
  'mini':'🇬🇧 Royaume-Uni','tvr':'🇬🇧 Royaume-Uni',
  'chevrolet':'🇺🇸 États-Unis','chaparral':'🇺🇸 États-Unis','dmc':'🇺🇸 États-Unis','eckert\'s':'🇺🇸 États-Unis',
  'dodge':'🇺🇸 États-Unis','ford':'🇺🇸 États-Unis','chc':'🇺🇸 États-Unis','greddy':'🇺🇸 États-Unis','garage rcr':'🇺🇸 États-Unis',
  'jeep':'🇺🇸 États-Unis','pontiac':'🇺🇸 États-Unis','greening auto company':'🇺🇸 États-Unis','plymouth':'🇺🇸 États-Unis',
  'shelby':'🇺🇸 États-Unis','tesla':'🇺🇸 États-Unis','roadster shop':'🇺🇸 États-Unis','wicked fabrication':'🇺🇸 États-Unis',
  'volvo':'🇸🇪 Suède','polestar':'🇸🇪 Suède',
  'hyundai':'🇰🇷 Corée du Sud','genesis':'🇰🇷 Corée du Sud',
  'skoda':'🇨🇿 République Tchèque',
  'ktm':'🇦🇹 Autriche',
  'yangwang':'🇨🇳 Chine','xiaomi':'🇨🇳 Chine',
};
function getCountryFromMake(make) {
  if (!make) return '';
  return MAKE_TO_COUNTRY[make.toLowerCase().trim()] || '🌍 Autre';
}

const BRAND_LOGO_OVERRIDES = {
  'škoda': 'skoda',
  'skoda': 'skoda',
  'mercedes-benz': 'mercedes',
  'mercedes benz': 'mercedes',
};

function getBrandLogoUrl(make) {
  if (!make) return null;
  const key = make.toLowerCase().trim();
  const mapped = BRAND_LOGO_OVERRIDES[key] || key;
  return `logos/${mapped}.png`;
}

function logoImgTag(make, cls='brand-logo') {
  const url = getBrandLogoUrl(make);
  if (!url) return '';
  return `<img src="${url}" alt="${make}" class="${cls}" onerror="this.style.display='none'">`;
}

function cardHTML(c) {
  const isOwned = c.owned!==false;
  const isWished = c.wished===true;
  const rc = {normal:'rarity-normal',special:'rarity-special',legend:'rarity-legend'}[c.rarity]||'rarity-normal';
  const rl = {normal:t('rarityNormal'),special:t('raritySpecialCard'),legend:t('rarityLegendCard')}[c.rarity]||'Standard';
  // Priorité : photo catalogue → photo utilisateur → emoji
  const imgSrc = c.img || `photos/${c.id}.jpg`;
  const imgContent = imgSrc
    ? `<img src="${imgSrc}" alt="${c.name}" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">\
<span style="font-size:3.5rem;line-height:1;display:none;">${c.emoji||'🚗'}</span>`
    : `<span style="font-size:3.5rem;line-height:1;">${c.emoji||'🚗'}</span>`;
  const hasImg = !!imgSrc;
  return `<div class="car-card${isOwned?'':' not-owned'}${isWished?' wished-card':''}" onclick="openLightbox(${c.id})" style="cursor:${hasImg?'pointer':'default'}">
    <div class="car-img-wrap">
      ${imgContent}
      <button class="owned-toggle${isOwned?' owned':''}" onclick="event.stopPropagation();toggleOwned(${c.id})">${isOwned?'✓':'○'}</button>
      <button class="wish-btn${isWished?' wished':''}" onclick="event.stopPropagation();toggleWish(${c.id})" title="${isWished?'Retirer de la wishlist':'Ajouter à la wishlist'}">${isWished?'⭐':'☆'}</button>
      <span class="car-rarity ${rc}">${rl}</span>
      <div class="wish-banner">⭐ Wishlist</div>
      ${isLegendCar(c) ? '<span class="legend-badge">🚗</span>' : ''}
    </div>
    <div class="car-body">
      ${logoImgTag(c.make)}
      <div class="car-make">${c.make||''}</div>
      <div class="car-name">${c.name}</div>
      <div class="car-tags">
        ${c.country?`<span class="tag tag-country">${c.country}</span>`:''}
        ${c.cat?`<span class="tag tag-cat">${c.cat}</span>`:''}
        ${c.year?`<span class="tag tag-a">${c.year}</span>`:''}
        ${c.trans?`<span class="tag tag-b">${c.trans}</span>`:''}
        ${c.aspiration?`<span class="tag tag-c">${c.aspiration}</span>`:''}
      </div>
      <div class="car-stats">
        <div class="cs-item">
          <div class="cs-val">${c.pp||'—'}</div>
          <div class="cs-key">PP</div>
        </div>
        <div class="cs-item">
          <div class="cs-val">${c.price || '—'}</div>
          <div class="cs-key">Cr</div>
        </div>
        <div class="cs-item">
          <div class="cs-val">${c.power || '—'}</div>
          <div class="cs-key">ch</div>
        </div>
        <div class="cs-item">
          <div class="cs-val">${c.weight || '—'}</div>
          <div class="cs-key">kg</div>
        </div>
      </div>
      ${c.note?`<div style="font-size:0.78rem;color:var(--muted);margin-top:0.5rem;font-style:italic;">${c.note}</div>`:''}
    </div>
    <div class="card-actions">
      <button class="action-btn" onclick="event.stopPropagation();editCar(${c.id})">✏️</button>
      <button class="action-btn del" onclick="event.stopPropagation();deleteCar(${c.id})">🗑️</button>
    </div>
  </div>`;
}

function listHTML(c) {
  const isOwned = c.owned!==false;
  const isWished = c.wished===true;
  const thumb = c.img
    ? `<img src="${c.img}" alt="${c.name}" style="width:60px;height:40px;object-fit:cover;display:block;">`
    : `<span style="font-size:1.6rem;">${c.emoji||'🚗'}</span>`;
  return `<div class="list-row${isOwned?'':' not-owned'}${isWished?' wished-row':''}">
    <div class="list-thumb">${thumb}</div>
    <div class="list-info">
      <div class="list-name" style="display:flex;align-items:center;gap:0.5rem;">${logoImgTag(c.make,'brand-logo-list')}${c.make?c.make+' ':''}${c.name}</div>
      <div class="list-tags">
        ${c.country?`<span class="tag tag-country" style="font-size:0.65rem;padding:1px 6px;">${c.country}</span>`:''}
        ${c.cat?`<span class="tag tag-cat" style="font-size:0.65rem;padding:1px 6px;">${c.cat}</span>`:''}
        ${c.year?`<span class="tag tag-a" style="font-size:0.65rem;padding:1px 6px;">${c.year}</span>`:''}
        ${c.trans?`<span class="tag tag-b" style="font-size:0.65rem;padding:1px 6px;">${c.trans}</span>`:''}
        ${c.aspiration?`<span class="tag tag-c" style="font-size:0.65rem;padding:1px 6px;">${c.aspiration}</span>`:''}
      </div>
    </div>
    <div class="list-stats">
      <div><div class="ls-val">${c.pp||'—'}</div><div class="ls-key">PP</div></div>
      <div><div class="ls-val">${fmtNum(parseInt(c.price)||0)}</div><div class="ls-key">Cr</div></div>
      <div><div class="ls-val">${fmtNum(parseInt(c.power)||0)}</div><div class="cs-key">ch</div></div>
      <div><div class="ls-val">${fmtNum(parseInt(c.weight)||0)}</div><div class="cs-key">kg</div></div>
    </div>
    <div class="list-actions">
      <button class="action-btn" onclick="toggleOwned(${c.id})" title="${isOwned?'Marquer comme non obtenue':'Marquer comme obtenue'}" style="font-size:0.8rem;${isOwned?'color:var(--accent);border-color:var(--accent);':''}">${isOwned?'✓':'○'}</button>
      <button class="action-btn" onclick="toggleWish(${c.id})" title="${isWished?'Retirer de la wishlist':'Ajouter à la wishlist'}" style="font-size:0.8rem;${isWished?'color:#f5a623;border-color:#f5a623;':''}">⭐</button>
      <button class="action-btn" onclick="editCar(${c.id})">✏️</button>
      <button class="action-btn del" onclick="deleteCar(${c.id})">🗑️</button>
    </div>
  </div>`;
}

function renderFilters() {
  const labels = {
    'legend': t('rarityLegendCard'),
    'special': t('raritySpecialCard'),
    'normal': t('rarityNormal')
  };
  const rarities={};
  cars.forEach(c=>{ if(c.rarity) rarities[c.rarity]=(rarities[c.rarity]||0)+1; });
  function makeRarityHTML(prefix) {
    const el = document.getElementById(prefix+'rarity-filters');
    if (!el) return;
    el.innerHTML =
      `<button class="filter-btn ${!activeRarity?'active':''}" onclick="filterRarity(null)">Tous <span class="count">${cars.length}</span></button>`+
      Object.entries(rarities).sort((a,b)=>b[1]-a[1]).map(([ra,n])=>{
        const rarityName = labels[ra] || ra;
        return `<button class="filter-btn ${activeRarity===ra?'active':''}" onclick="filterRarity('${ra}')">${rarityName} <span class="count">${n}</span></button>`;
      }).join('');
  }
  makeRarityHTML(''); makeRarityHTML('m-');

  const aspirations={};
  cars.forEach(c=>{ if(c.aspiration) aspirations[c.aspiration]=(aspirations[c.aspiration]||0)+1; });
  const aspirationLabels = { 'NA':'NA — Atmosphérique', 'TC':'TC — Turbo', 'SC':'SC — Compresseur', 'VE':'VE — Électrique', 'TC+SC':'TC+SC — Turbo + Compresseur' };
  function makeAspirationHTML(prefix) {
    const el = document.getElementById(prefix+'aspiration-filters');
    if (!el) return;
    el.innerHTML =
      `<button class="filter-btn ${!activeAspiration?'active':''}" onclick="filterAspiration(null)">Tous <span class="count">${cars.length}</span></button>`+
      Object.entries(aspirations).sort((a,b)=>b[1]-a[1]).map(([asp,n])=>
        `<button class="filter-btn ${activeAspiration===asp?'active':''}" onclick="filterAspiration('${asp}')">${aspirationLabels[asp]||asp} <span class="count">${n}</span></button>`).join('');
  }
  makeAspirationHTML(''); makeAspirationHTML('m-');

  const transs={};
  cars.forEach(c=>{ if(c.trans) transs[c.trans]=(transs[c.trans]||0)+1; });
  function makeTransHTML(prefix) {
    const el = document.getElementById(prefix+'trans-filters');
    if (!el) return;
    el.innerHTML =
      `<button class="filter-btn ${!activeTrans?'active':''}" onclick="filterTrans(null)">Tous <span class="count">${cars.length}</span></button>`+
      Object.entries(transs).sort((a,b)=>b[1]-a[1]).map(([tr,n])=>
        `<button class="filter-btn ${activeTrans===tr?'active':''}" onclick="filterTrans('${tr}')">${tr} <span class="count">${n}</span></button>`).join('');
  }
  makeTransHTML(''); makeTransHTML('m-');

  const years={};
  cars.forEach(c=>{ if(c.year){ const d=Math.floor(c.year/10)*10; years[d]=(years[d]||0)+1; }});
  function makeYearHTML(prefix) {
    const el = document.getElementById(prefix+'year-filters');
    if (!el) return;
    el.innerHTML =
      `<button class="filter-btn ${!activeYear?'active':''}" onclick="filterYear(null)">Tous <span class="count">${cars.length}</span></button>`+
      Object.entries(years).sort((a,b)=>b[0]-a[0]).map(([ye,n])=>
        `<button class="filter-btn ${activeYear==ye?'active':''}" onclick="filterYear(${ye})">${ye}s <span class="count">${n}</span></button>`).join('');
  }
  makeYearHTML(''); makeYearHTML('m-');

  const PPs={};
  cars.forEach(c=>{ if(c.pp){ const r=Math.floor(c.pp/100)*100; PPs[r]=(PPs[r]||0)+1; }});
  function makePPHTML(prefix) {
    const el = document.getElementById(prefix+'pp-filters');
    if (!el) return;
    el.innerHTML =
      `<button class="filter-btn ${activePP===null?'active':''}" onclick="filterPP(null)">Tous <span class="count">${cars.length}</span></button>`+
      Object.entries(PPs).sort((a,b)=>b[0]-a[0]).map(([pp,n])=>
        `<button class="filter-btn ${activePP==pp?'active':''}" onclick="filterPP(${pp})">${pp} - ${parseInt(pp)+99} <span class="count">${n}</span></button>`).join('');
  }
  makePPHTML(''); makePPHTML('m-');
  const makes2={};
  cars.forEach(c=>{ if(c.make) makes2[c.make]=(makes2[c.make]||0)+1; });
  function makeMakeHTML(prefix) {
    const el = document.getElementById(prefix+'make-filters');
    if (!el) return;
    el.innerHTML =
      `<button class="filter-btn ${!activeMake?'active':''}" data-make="">Toutes <span class="count">${cars.length}</span></button>`+
      Object.entries(makes2).sort((a,b)=>a[0].localeCompare(b[0])).map(([mk,n])=>
        `<button class="filter-btn ${activeMake===mk?'active':''}" data-make="${mk.replace(/"/g,'&quot;')}">${mk} <span class="count">${n}</span></button>`).join('');
    el.querySelectorAll('[data-make]').forEach(btn => {
      btn.addEventListener('click', () => { activeMake = btn.dataset.make || null; render(); });
    });
  }
  makeMakeHTML(''); makeMakeHTML('m-');

  function makeCatHTML(prefix) {
    const cats={};
    cars.forEach(c=>{ if(c.cat) cats[c.cat]=(cats[c.cat]||0)+1; });
    const el = document.getElementById(prefix+'cat-filters');
    if (!el) return;
    el.innerHTML =
      `<button class="filter-btn ${!activeCategory?'active':''}" onclick="filterCat(null)">Toutes <span class="count">${cars.length}</span></button>`+
      Object.entries(cats).sort((a,b)=>b[1]-a[1]).map(([cat,n])=>
        `<button class="filter-btn ${activeCategory===cat?'active':''}" onclick="filterCat('${cat}')">${cat} <span class="count">${n}</span></button>`).join('');
  }
  makeCatHTML(''); makeCatHTML('m-');

  function makeCountryHTML(prefix) {
    const countries={};
    cars.forEach(c=>{ if(c.country) countries[c.country]=(countries[c.country]||0)+1; });
    const el = document.getElementById(prefix+'country-filters');
    if (!el) return;
    el.innerHTML =
      `<button class="filter-btn ${!activeCountry?'active':''}" onclick="filterCountry(null)">Tous <span class="count">${cars.length}</span></button>`+
      Object.entries(countries).sort((a,b)=>b[1]-a[1]).map(([ct,n])=>
        `<button class="filter-btn ${activeCountry===ct?'active':''}" onclick="filterCountry('${ct}')">${ct} <span class="count">${n}</span></button>`).join('');
  }
  makeCountryHTML(''); makeCountryHTML('m-');

  const makes=[...new Set(cars.map(c=>c.make).filter(Boolean))];
  document.getElementById('makes-list').innerHTML = makes.map(m=>`<option value="${m}">`).join('');
}

function filterCat(cat) { activeCategory=cat; render(); }
function filterCountry(ct) { activeCountry=ct; render(); }
function filterRarity(ra) { activeRarity=ra; render(); }
function filterTrans(tr) { activeTrans=tr; render(); }
function filterAspiration(asp) { activeAspiration=asp; render(); }
function filterYear(ye) { activeYear=ye; render(); }
function filterPP(pp) { activePP=pp; render(); }

async function toggleOwned(id) {
  const idx = cars.findIndex(c=>c.id===id);
  if (idx===-1) return;
  cars[idx].owned = cars[idx].owned===false ? true : false;
  render();
  await saveCarState(id);
}

async function toggleWish(id) {
  const idx = cars.findIndex(c=>c.id===id);
  if (idx===-1) return;
  cars[idx].wished = !cars[idx].wished;
  render();
  await saveCarState(id);
}

function filterMake(mk) { activeMake=mk; render(); }

/* IMAGE UPLOAD */
function triggerImgUpload() { document.getElementById('f-img-input').click(); }

function handleImgUpload(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const maxW = 900, maxH = 500;
      let w = img.width, h = img.height;
      if (w > maxW) { h = Math.round(h*maxW/w); w = maxW; }
      if (h > maxH) { w = Math.round(w*maxH/h); h = maxH; }
      canvas.width = w; canvas.height = h;
      canvas.getContext('2d').drawImage(img, 0, 0, w, h);
      currentImgBase64 = canvas.toDataURL('image/jpeg', 0.82);
      showImgPreview(currentImgBase64);
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
  event.target.value = '';
}

function showImgPreview(src) {
  document.getElementById('img-preview').src = src;
  document.getElementById('img-preview-wrap').classList.add('visible');
  document.getElementById('img-placeholder').style.display = 'none';
  document.getElementById('img-upload-zone').classList.add('has-image');
}

function clearImgPreview() {
  document.getElementById('img-preview').src = '';
  document.getElementById('img-preview-wrap').classList.remove('visible');
  document.getElementById('img-placeholder').style.display = '';
  document.getElementById('img-upload-zone').classList.remove('has-image');
}

function removeImg() { currentImgBase64 = null; clearImgPreview(); }

/* MODAL */
function openModal(id=null) {
  editId = id;
  currentImgBase64 = null;
  clearImgPreview();
  const navEl = document.getElementById('modal-nav');
  if (id !== null) {
    const c = cars.find(x=>x.id===id);
    document.getElementById('modal-title').innerHTML = 'Modifier la <span>voiture</span>';
    document.getElementById('f-make').value = c.make||'';
    document.getElementById('f-name').value = c.name||'';
    document.getElementById('f-year').value = c.year||'';
    document.getElementById('f-pp').value = c.pp||'';
    document.getElementById('f-price').value = c.price||'';
    document.getElementById('f-aspiration').value = c.aspiration||'';
    document.getElementById('f-cat').value = c.cat||'';
    document.getElementById('f-rarity').value = c.rarity||'';
    document.getElementById('f-note').value = c.note||'';
    document.getElementById('f-trans').value = c.trans||'';
    document.getElementById('f-power').value = c.power||'';
    document.getElementById('f-weight').value = c.weight||'';
    if (c.img && c.img.startsWith('data:')) { currentImgBase64=c.img; showImgPreview(c.img); }
    // Flèches de navigation
    const list = getFiltered();
    const idx = list.findIndex(x => x.id === id);
    navEl.style.display = 'flex';
    document.getElementById('modal-nav-count').textContent = `${idx+1} / ${list.length}`;
    document.getElementById('modal-prev').disabled = idx <= 0;
    document.getElementById('modal-next').disabled = idx >= list.length - 1;
  } else {
    document.getElementById('modal-title').innerHTML = 'Ajouter une <span>voiture</span>';
    ['f-make','f-name','f-year','f-pp','f-price','f-note','f-power','f-weight'].forEach(fid=>document.getElementById(fid).value='');
    document.getElementById('f-aspiration').value='';
    document.getElementById('f-cat').value='';
    document.getElementById('f-rarity').value='';
    document.getElementById('f-trans').value='';
    navEl.style.display = 'none';
  }
  document.getElementById('modal-bg').classList.add('open');
  setTimeout(()=>document.getElementById('f-make').focus(),100);
}

async function modalNavigate(direction) {
  // Sauvegarde silencieuse avant de naviguer
  if (editId !== null) {
    const name = document.getElementById('f-name').value.trim();
    if (name) {
      const make = document.getElementById('f-make').value.trim();
      const idx = cars.findIndex(c => c.id === editId);
      if (idx !== -1) {
        cars[idx] = {
          ...cars[idx],
          make, name,
          year:       parseInt(document.getElementById('f-year').value)||null,
          pp:         parseInt(document.getElementById('f-pp').value)||null,
          price:      parseInt(document.getElementById('f-price').value)||null,
          country:    getCountryFromMake(make),
          cat:        document.getElementById('f-cat').value,
          rarity:     document.getElementById('f-rarity').value,
          note:       document.getElementById('f-note').value.trim(),
          trans:      document.getElementById('f-trans').value,
          power:      document.getElementById('f-power').value,
          weight:     document.getElementById('f-weight').value,
          aspiration: document.getElementById('f-aspiration').value,
          img:        currentImgBase64 || cars[idx].img || null,
          owned:      cars[idx].owned,
        };
        saveCarState(editId); // sans await, silencieux
      }
    }
  }
  const list = getFiltered();
  const curIdx = list.findIndex(c => c.id === editId);
  const newIdx = curIdx + direction;
  if (newIdx < 0 || newIdx >= list.length) return;
  openModal(list[newIdx].id);
}

function closeModal(e) {
  if (!e||e.target===document.getElementById('modal-bg'))
    document.getElementById('modal-bg').classList.remove('open');
}

async function saveCar() {
  const name = document.getElementById('f-name').value.trim();
  if (!name) { document.getElementById('f-name').focus(); return; }
  const make = document.getElementById('f-make').value.trim();

  if (editId !== null) {
    const idx = cars.findIndex(c => c.id === editId);
    if (idx !== -1) {
      cars[idx] = {
        ...cars[idx],
        make, name,
        year:       parseInt(document.getElementById('f-year').value)||null,
        pp:         parseInt(document.getElementById('f-pp').value)||null,
        price:      parseInt(document.getElementById('f-price').value)||null,
        country:    getCountryFromMake(make),
        cat:        document.getElementById('f-cat').value,
        rarity:     document.getElementById('f-rarity').value,
        note:       document.getElementById('f-note').value.trim(),
        trans:      document.getElementById('f-trans').value,
        power:      document.getElementById('f-power').value,
        weight:     document.getElementById('f-weight').value,
        aspiration: document.getElementById('f-aspiration').value,
        img:        currentImgBase64 || cars[idx].img || null,
        owned:      cars[idx].owned, // <-- CORRECTION : on conserve l'état actuel
      };
      closeModal();
      showToast(t('toastSaving'));
      await saveCarState(editId);
      showToast(t('toastUpdated'), 'ok');
      render();
    }
  } else {
    // Nouvelle voiture hors catalogue
    const newId = Math.max(...cars.map(c => c.id), 1000) + 1;
    const newCar = {
      id: newId, make, name,
      year:       parseInt(document.getElementById('f-year').value)||null,
      pp:         parseInt(document.getElementById('f-pp').value)||null,
      price:      parseInt(document.getElementById('f-price').value)||null,
      country:    getCountryFromMake(make),
      cat:        document.getElementById('f-cat').value,
      rarity:     document.getElementById('f-rarity').value,
      emoji:      getCarEmoji({ cat: document.getElementById('f-cat').value }),
      note:       document.getElementById('f-note').value.trim(),
      trans:      document.getElementById('f-trans').value,
      power:      document.getElementById('f-power').value,
      weight:     document.getElementById('f-weight').value,
      aspiration: document.getElementById('f-aspiration').value,
      img:        currentImgBase64 || null,
      owned:      true, // <-- CORRECTION : on la marque comme obtenue par défaut
      wished:     false,
    };
    cars.push(newCar);
    closeModal();
    showToast(t('toastSaving'));
    await saveCarState(newId);
    showToast('✓ Voiture ajoutée', 'ok');
    render();
  }
}

function editCar(id) { openModal(id); }

async function deleteCar(id) {
  // Dans le nouveau modèle : reset de l'état au lieu de supprimer du catalogue
  const c = cars.find(x => x.id === id);
  if (!c) return;
  // Voitures hors catalogue (id > 1000) : on les retire vraiment
  if (id > 1000) {
    if (!confirm(t('confirmDelete'))) return;
    cars = cars.filter(x => x.id !== id);
    showToast(t('toastDeleting'));
    await deleteFromSupabase(id);
    showToast(t('toastDeleted'), 'ok');
  } else {
    // Voiture du catalogue : reset état seulement
    if (!confirm(t('deleteReset'))) return;
    await deleteFromSupabase(id); // remet owned=false, wished=false, note='', img=null
    showToast(t('toastReset'), 'ok');
  }
  render();
}

/* LIGHTBOX */
function openLightbox(id) {
  const c = cars.find(x=>x.id===id);
  if (!c) return;
  const src = c.catalogImg ? `photos/${c.catalogImg}` : c.img;
  if (!src) return;
  document.getElementById('lightbox-img').src = src;
  document.getElementById('lightbox-name').textContent = (c.make?c.make+' ':'')+c.name;
  document.getElementById('lightbox').classList.add('open');
}
function closeLightbox() { document.getElementById('lightbox').classList.remove('open'); }
document.addEventListener('keydown', e => {
  if (e.key==='Escape') { closeLightbox(); closeModal(); }
  if (document.getElementById('modal-bg').classList.contains('open') && editId !== null) {
    if (e.key==='ArrowLeft') modalNavigate(-1);
    if (e.key==='ArrowRight') modalNavigate(1);
  }
});

function isLegendCar(c) {
  const LEGEND_CAR_IDS = [1,2,3];
  return LEGEND_CAR_IDS.includes(c.id);
}

/* INIT */
async function initApp() {
  try {
    await loadCatalogue();
  } catch (e) {
    console.error(e);
    showToast('❌ Impossible de charger cars.json', 'error');
    return;
  }
  applyLang();
  initAuth();
}

initApp();
