// Villa Rafaela — novi.html behaviour. Texts live in novi-texts.js.
'use strict';

// Owner settings.
const CONFIG = {
  email: 'mirja.koljesnikov@gmail.com',                         // enquiries are e-mailed via FormSubmit
  calendarUrl: 'https://villa-calendar.ian-koljes.workers.dev',   // Airbnb calendar (JSON: {booked:[[from,to)]})
};
const LANGS = ['hr', 'en', 'de', 'it'];
const LOCALES = { hr: 'hr-HR', en: 'en-GB', de: 'de-DE', it: 'it-IT' };

// Gallery: photo name in assets/novi, inside/outside, caption key.
const GALLERY = [
  ['hero', 'out', 'alt_hero'], ['pool', 'out', 'hl_pool_t'], ['living', 'in', 'r_family_t'],
  ['breakfast', 'out', 'hl_br_t'], ['house', 'out', 'alt_house'], ['playroom', 'in', 'hl_kids_t'],
  ['bedroom-green', 'in', 'r_green_t'], ['garden', 'out', 'hl_garden_t'], ['terrace', 'out', 'p_terrace'],
  ['kitchen', 'in', 'r_kitchen_t'], ['bedroom-blue', 'in', 'r_blue_t'], ['veranda', 'out', 'p_terrace'],
  ['bedroom-3', 'in', 'r_third_t'], ['pool-2', 'out', 'p_pool2'], ['dining', 'in', 'p_dining'],
  ['garden-2', 'out', 'p_garden2'], ['playroom-2', 'in', 'hl_kids_t'], ['bathroom', 'in', 'r_bath_t'],
  ['entrance', 'out', 'p_entrance'], ['garden-3', 'out', 'p_garden2'], ['bedroom-3b', 'in', 'r_third_t'],
  ['bathroom-2', 'in', 'r_bath_t'],
].map(([name, cat, key]) => ({ name, cat, key }));
const PORTRAIT = new Set(['house', 'veranda', 'entrance']);
const LARGE = new Set(['hero', 'house']);
const AMENITIES = ['a_pool', 'a_view', 'a_ac', 'a_wifi', 'a_tv', 'a_kitchen', 'a_park', 'a_gate', 'a_play', 'a_terrace', 'a_bbq', 'a_dogs'];

const $ = (s, root = document) => root.querySelector(s);
const $$ = (s, root = document) => [...root.querySelectorAll(s)];
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)');
let lang = 'hr';
const t = key => (window.TEXTS[lang] && window.TEXTS[lang][key]) ?? window.TEXTS.en[key] ?? key;

/* ---------- dates (local, no UTC shifts) ---------- */
const iso = d => d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
const parse = s => new Date(s + 'T12:00:00');
const addDays = (s, n) => { const d = parse(s); d.setDate(d.getDate() + n); return iso(d); };
const todayIso = () => iso(new Date());
const fmt = (s, opts = { day: 'numeric', month: 'short', year: 'numeric' }) => new Intl.DateTimeFormat(LOCALES[lang], opts).format(parse(s));

/* ---------- language ---------- */
function setLanguage(next) {
  lang = LANGS.includes(next) ? next : 'hr';
  document.documentElement.lang = lang;
  try { localStorage.setItem('rafaela-language', lang); } catch {}
  $$('[data-i]').forEach(el => { el.textContent = t(el.dataset.i); });
  $$('[data-i-alt]').forEach(el => { el.alt = t(el.dataset.iAlt); });
  $$('[data-i-aria]').forEach(el => el.setAttribute('aria-label', t(el.dataset.iAria)));
  $$('[data-lang]').forEach(el => el.setAttribute('aria-pressed', String(el.dataset.lang === lang)));
  document.title = t('metaTitle');
  $('meta[name="description"]').content = t('metaDescription');
  updateMenuLabel();
  renderAmenities();
  renderGallery();
  renderCalendars();
  renderDates();
  if (submitted) validateForm(false);
  setStatus(statusKey);
  if (lightbox.open) showSlide(slide);
}
$$('[data-lang]').forEach(b => b.addEventListener('click', () => setLanguage(b.dataset.lang)));

/* ---------- header, menu, booking bar ---------- */
const header = $('#header'), menu = $('.menu-toggle'), nav = $('#navigation');
function onScroll() {
  header.classList.toggle('solid', scrollY > 40);
  document.body.classList.toggle('at-hero', scrollY < innerHeight * .6);
}
addEventListener('scroll', onScroll, { passive: true });
onScroll();
function updateMenuLabel() { menu.setAttribute('aria-label', t(header.classList.contains('menu-open') ? 'menuClose' : 'menu')); }
function closeMenu(restore) {
  header.classList.remove('menu-open'); menu.setAttribute('aria-expanded', 'false');
  document.body.classList.remove('locked'); updateMenuLabel(); if (restore) menu.focus();
}
menu.addEventListener('click', () => {
  const open = !header.classList.contains('menu-open');
  header.classList.toggle('menu-open', open); menu.setAttribute('aria-expanded', String(open));
  document.body.classList.toggle('locked', open); updateMenuLabel();
  if (open) nav.querySelector('a').focus();
});
nav.addEventListener('click', e => { if (e.target.closest('a')) closeMenu(false); });
document.addEventListener('keydown', e => { if (e.key === 'Escape' && header.classList.contains('menu-open')) closeMenu(true); });
matchMedia('(min-width: 951px)').addEventListener('change', e => { if (e.matches) closeMenu(false); });
// Hide the bottom bar while typing so it never covers form fields.
document.addEventListener('focusin', e => document.body.classList.toggle('form-focus', !!e.target.closest('#booking-form input, #booking-form textarea, #booking-form select')));
document.addEventListener('focusout', () => document.body.classList.remove('form-focus'));

/* ---------- amenities ---------- */
function renderAmenities() {
  $('#amenity-list').replaceChildren(...AMENITIES.map((key, i) => {
    const li = document.createElement('li');
    li.innerHTML = '<span class="n">' + String(i + 1).padStart(2, '0') + '</span><span></span><span class="ok" aria-hidden="true">✓</span>';
    li.children[1].textContent = t(key);
    return li;
  }));
}

/* ---------- gallery + lightbox ---------- */
const grid = $('#gallery-grid'), lightbox = $('#lightbox');
let filter = 'all', expanded = false, slide = 0, shown = [], lastTrigger = null;
const photo = (name, big) => 'assets/novi/' + name + '-' + (LARGE.has(name) ? (big ? 1600 : 800) : (big ? 1200 : 600)) + '.webp';
function renderGallery() {
  const list = GALLERY.filter(p => filter === 'all' || p.cat === filter);
  const limit = expanded ? list.length : 9;
  shown = list;
  grid.replaceChildren(...list.map((p, i) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'g-item' + (PORTRAIT.has(p.name) ? ' tall' : (i % 5 === 0 ? ' wide' : ''));
    b.hidden = i >= limit;
    b.dataset.index = i;
    b.setAttribute('aria-label', t('openPhoto') + ': ' + t(p.key));
    const img = new Image();
    img.src = photo(p.name, false); img.alt = t(p.key); img.loading = 'lazy'; img.decoding = 'async';
    const num = document.createElement('span'); num.className = 'g-num'; num.textContent = String(i + 1).padStart(2, '0'); num.setAttribute('aria-hidden', 'true');
    const open = document.createElement('span'); open.className = 'g-open'; open.textContent = '↗'; open.setAttribute('aria-hidden', 'true');
    b.append(img, num, open);
    return b;
  }));
  $$('[data-filter]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.filter === filter)));
  $('#gallery-count').textContent = Math.min(limit, list.length) + ' / ' + list.length + ' ' + t('shown');
  const more = $('#gallery-more');
  more.hidden = list.length <= 9;
  more.firstElementChild.textContent = expanded ? t('less') : t('moreFiltered').replace('{n}', list.length);
  more.lastElementChild.textContent = expanded ? '−' : '+';
}
$$('[data-filter]').forEach(b => b.addEventListener('click', () => { filter = b.dataset.filter; expanded = false; renderGallery(); }));
$('#gallery-more').addEventListener('click', () => {
  expanded = !expanded; renderGallery();
  if (!expanded) $('#galerija').scrollIntoView({ behavior: reduceMotion.matches ? 'instant' : 'smooth' });
});
grid.addEventListener('click', e => {
  const b = e.target.closest('.g-item'); if (!b) return;
  lastTrigger = b; showSlide(Number(b.dataset.index));
  lightbox.showModal(); document.body.classList.add('locked'); $('#lb-close').focus();
});
function showSlide(i) {
  slide = (i + shown.length) % shown.length;
  const p = shown[slide], img = $('#lb-img');
  img.src = photo(p.name, true); img.alt = t(p.key);
  $('#lb-caption').textContent = t(p.key);
  $('#lb-count').textContent = String(slide + 1).padStart(2, '0') + ' / ' + String(shown.length).padStart(2, '0');
  new Image().src = photo(shown[(slide + 1) % shown.length].name, true);
}
$('#lb-close').addEventListener('click', () => lightbox.close());
$('#lb-prev').addEventListener('click', () => showSlide(slide - 1));
$('#lb-next').addEventListener('click', () => showSlide(slide + 1));
lightbox.addEventListener('close', () => { document.body.classList.remove('locked'); if (lastTrigger?.isConnected) lastTrigger.focus(); });
lightbox.addEventListener('keydown', e => {
  if (e.key === 'ArrowLeft') { e.preventDefault(); showSlide(slide - 1); }
  else if (e.key === 'ArrowRight') { e.preventDefault(); showSlide(slide + 1); }
});
lightbox.addEventListener('click', e => { if (e.target === lightbox || e.target.classList.contains('lb-stage')) lightbox.close(); });
let touch = null;
$('#lb-img').addEventListener('touchstart', e => { touch = e.touches.length === 1 ? { x: e.touches[0].clientX, y: e.touches[0].clientY } : null; }, { passive: true });
$('#lb-img').addEventListener('touchend', e => {
  if (!touch) return;
  const dx = e.changedTouches[0].clientX - touch.x, dy = e.changedTouches[0].clientY - touch.y; touch = null;
  if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy) * 1.4) showSlide(slide + (dx < 0 ? 1 : -1));
}, { passive: true });

/* ---------- availability calendar (shared by the section and the picker) ---------- */
const stay = { arr: '', dep: '' };
const cal = { booked: null, error: false, offset: { section: 0, picker: 0 }, msg: '' };
function nightBooked(day) {
  if (!cal.booked) return false;
  return cal.booked.some(([from, to]) => day >= from && day < to);
}
function rangeFree(from, to) { for (let d = from; d < to; d = addDays(d, 1)) if (nightBooked(d)) return false; return true; }
function setMsg(key, extra) { cal.msg = key ? t(key) + (extra || '') : ''; $$('[data-cal-msg]').forEach(el => { el.textContent = cal.msg; }); }
function stayMessage() {
  if (stay.arr && stay.dep) {
    const n = Math.round((parse(stay.dep) - parse(stay.arr)) / 864e5);
    return fmt(stay.arr) + ' – ' + fmt(stay.dep) + ' · ' + n + ' ' + t(n === 1 ? 'av_night' : 'av_nights');
  }
  return stay.arr ? t('av_pick_dep') : t('av_pick_arr');
}
function pickDay(day) {
  if (day < todayIso()) return;
  if (stay.arr && !stay.dep && day > stay.arr) {
    if (!rangeFree(stay.arr, day)) { setMsg('av_conflict'); return; }
    stay.dep = day;
  } else {
    if (nightBooked(day)) { setMsg('av_booked_day'); return; }
    stay.arr = day; stay.dep = '';
  }
  stayChanged();
  if (stay.dep && picker.open) setTimeout(() => picker.close(), reduceMotion.matches ? 0 : 380);
}
function stayChanged() {
  $('#checkin').value = stay.arr; $('#checkout').value = stay.dep;
  renderCalendars(); renderDates();
  if (submitted) { displayError('checkin'); displayError('checkout'); }
}
function renderDates() {
  $$('[data-date]').forEach(el => {
    const v = stay[el.dataset.date];
    el.textContent = v ? fmt(v, { weekday: 'short', day: 'numeric', month: 'short' }) : t('pick_date');
    el.classList.toggle('empty', !v);
  });
  $$('[data-cal-msg]').forEach(el => { el.textContent = cal.error ? t('av_err') : stayMessage(); });
  $$('[data-cal-clear]').forEach(el => { el.hidden = !stay.arr; });
  $$('[data-cal-continue]').forEach(el => { el.hidden = !(stay.arr && stay.dep); });
  // The pool is open 15 May – 1 October; warn when a stay falls outside.
  const outside = stay.arr && stay.dep && (() => {
    for (let d = stay.arr; d < stay.dep; d = addDays(d, 1)) { const md = d.slice(5); if (md < '05-15' || md > '10-01') return true; }
    return false;
  })();
  $('#pool-note').hidden = !outside;
}
function renderCalendars() {
  $$('[data-cal]').forEach(root => {
    const which = root.dataset.cal, months = Number(root.dataset.months) || 2;
    if (!cal.booked && !cal.error) { root.innerHTML = '<p class="cal-loading">' + t('av_loading') + '</p>'; return; }
    const now = new Date(), first = new Date(now.getFullYear(), now.getMonth() + cal.offset[which], 1);
    const wrap = document.createElement('div'); wrap.className = 'cal-months'; wrap.style.setProperty('--m', months);
    const dows = [...Array(7)].map((_, i) => new Intl.DateTimeFormat(LOCALES[lang], { weekday: 'short' }).format(new Date(2024, 0, 1 + i)));
    for (let m = 0; m < months; m++) {
      const start = new Date(first.getFullYear(), first.getMonth() + m, 1);
      const box = document.createElement('div'); box.className = 'cal-month';
      const title = document.createElement('h4');
      const label = new Intl.DateTimeFormat(LOCALES[lang], { month: 'long', year: 'numeric' }).format(start);
      title.textContent = label.charAt(0).toUpperCase() + label.slice(1);
      const g = document.createElement('div'); g.className = 'cal-grid'; g.setAttribute('role', 'grid'); g.setAttribute('aria-label', label);
      dows.forEach(d => { const s = document.createElement('span'); s.className = 'cal-dow'; s.textContent = d.replace('.', ''); g.append(s); });
      for (let i = 0; i < (start.getDay() + 6) % 7; i++) g.append(document.createElement('span'));
      const days = new Date(start.getFullYear(), start.getMonth() + 1, 0).getDate();
      for (let d = 1; d <= days; d++) {
        const day = iso(new Date(start.getFullYear(), start.getMonth(), d));
        const b = document.createElement('button'); b.type = 'button'; b.className = 'day'; b.textContent = d; b.dataset.day = day;
        const past = day < todayIso(), tonight = nightBooked(day), lastNight = nightBooked(addDays(day, -1));
        if (past) { b.classList.add('past'); b.disabled = true; }
        else if (tonight && lastNight) b.classList.add('booked');
        else if (tonight !== lastNight) b.classList.add('change', ...(lastNight ? ['out'] : []));
        if (day === todayIso()) b.classList.add('today');
        if (day === stay.arr || day === stay.dep) b.classList.add('sel');
        else if (stay.arr && stay.dep && day > stay.arr && day < stay.dep) b.classList.add('in-range');
        const state = past ? '' : (tonight && lastNight) ? t('av_booked') : (tonight !== lastNight) ? t('av_change') : t('av_free');
        b.setAttribute('aria-label', fmt(day, { weekday: 'long', day: 'numeric', month: 'long' }) + (state ? ', ' + state : ''));
        if (day === stay.arr || day === stay.dep) b.setAttribute('aria-pressed', 'true');
        g.append(b);
      }
      box.append(title, g); wrap.append(box);
    }
    const navEl = document.createElement('div'); navEl.className = 'cal-nav';
    navEl.innerHTML = '<button type="button" data-step="-1">←</button><button type="button" data-step="1">→</button>';
    navEl.children[0].setAttribute('aria-label', t('prev_m')); navEl.children[1].setAttribute('aria-label', t('next_m'));
    navEl.children[0].disabled = cal.offset[which] <= 0; navEl.children[1].disabled = cal.offset[which] >= 11;
    root.replaceChildren(navEl, wrap);
  });
}
document.addEventListener('click', e => {
  const day = e.target.closest('.day');
  if (day && !day.disabled && !day.classList.contains('booked')) { pickDay(day.dataset.day); return; }
  if (day && day.classList.contains('booked')) { setMsg('av_booked_day'); return; }
  const step = e.target.closest('.cal-nav button');
  if (step) {
    const which = step.closest('[data-cal]').dataset.cal;
    cal.offset[which] = Math.max(0, Math.min(11, cal.offset[which] + Number(step.dataset.step)));
    renderCalendars();
    $('[data-cal="' + which + '"] .cal-nav button[data-step="' + step.dataset.step + '"]')?.focus();
  }
});
$$('[data-cal-clear]').forEach(b => b.addEventListener('click', () => { stay.arr = stay.dep = ''; stayChanged(); }));

const picker = $('#picker');
$$('[data-open-picker]').forEach(b => b.addEventListener('click', () => {
  if (b.dataset.openPicker === 'arr' && stay.arr && stay.dep) { stay.dep = ''; }
  const base = stay.arr ? parse(stay.arr) : new Date(), now = new Date();
  cal.offset.picker = Math.max(0, (base.getFullYear() - now.getFullYear()) * 12 + base.getMonth() - now.getMonth());
  renderCalendars(); renderDates();
  picker.showModal(); document.body.classList.add('locked');
  (picker.querySelector('.day.sel') || picker.querySelector('.day:not(:disabled):not(.booked)'))?.focus();
  picker.dataset.returnTo = b.id || '';
  picker._trigger = b;
}));
$$('[data-close-picker]').forEach(b => b.addEventListener('click', () => picker.close()));
picker.addEventListener('click', e => { if (e.target === picker) picker.close(); });
picker.addEventListener('close', () => { document.body.classList.remove('locked'); picker._trigger?.focus(); });

function loadCalendar() {
  if (!CONFIG.calendarUrl) { cal.error = true; renderCalendars(); renderDates(); return; }
  fetch(CONFIG.calendarUrl).then(r => { if (!r.ok) throw new Error(r.status); return r.json(); }).then(data => {
    cal.booked = Array.isArray(data.booked) ? data.booked.filter(r => Array.isArray(r) && r.length === 2) : [];
  }).catch(err => { console.warn('Calendar not loaded:', err); cal.error = true; cal.booked = []; })
    .finally(() => { renderCalendars(); renderDates(); });
}

/* ---------- hero quick bar ---------- */
$('#quick').addEventListener('submit', e => {
  e.preventDefault();
  const guests = Number($('#quick-guests').value);
  $('#adults').value = String(Math.min(7, Math.max(1, guests)));
  $('#children').value = '0';
  const target = stay.arr && stay.dep ? '#upit' : '#dostupnost';
  $(target).scrollIntoView({ behavior: reduceMotion.matches ? 'instant' : 'smooth' });
});

/* ---------- enquiry form (FormSubmit → host e-mail) ---------- */
const form = $('#booking-form');
const FIELDS = ['checkin', 'checkout', 'adults', 'fullname', 'contact'];
let submitted = false, sending = false, statusKey = '';
function errorFor(id) {
  const value = $('#' + id).value.trim();
  if (!value) return 'required';
  if (id === 'checkin' && value < todayIso()) return 'past';
  if (id === 'checkout' && stay.arr && value <= stay.arr) return 'dateOrder';
  if (id === 'checkout' && stay.arr && !cal.error && !rangeFree(stay.arr, value)) return 'av_conflict';
  if (id === 'adults' && Number(value) + Number($('#children').value) > 7) return 'e_guests';
  if (id === 'fullname' && value.length < 2) return 'nameInvalid';
  if (id === 'contact') {
    const email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    const digits = value.replace(/\D/g, '').length;
    const phone = /^\+?[\d\s().-]+$/.test(value) && digits >= 7 && digits <= 15;
    if (!email && !phone) return 'contactInvalid';
  }
  return '';
}
function displayError(id) {
  const key = errorFor(id);
  $('#' + id + '-error').textContent = key ? t(key) : '';
  const target = id === 'checkin' ? $('#checkin-btn') : id === 'checkout' ? $('#checkout-btn') : $('#' + id);
  target.setAttribute('aria-invalid', String(!!key));
  return !key;
}
function setStatus(key) { statusKey = key; $('#form-status').textContent = key ? t(key) : ''; }
function validateForm(focus) {
  const invalid = FIELDS.filter(id => !displayError(id));
  if (invalid.length) {
    setStatus('formErrors');
    if (focus) ({ checkin: $('#checkin-btn'), checkout: $('#checkout-btn') }[invalid[0]] || $('#' + invalid[0])).focus();
    return false;
  }
  if (statusKey === 'formErrors') setStatus('');
  return true;
}
['adults', 'children', 'fullname', 'contact'].forEach(id => $('#' + id).addEventListener('input', () => { if (submitted) FIELDS.forEach(displayError); }));
// The e-mail goes to the host, so its labels stay in Croatian whatever the page language.
function enquiryPayload() {
  const v = Object.fromEntries(new FormData(form)), contact = v.contact.trim();
  const hr = s => new Intl.DateTimeFormat('hr-HR', { day: 'numeric', month: 'long', year: 'numeric' }).format(parse(s));
  const payload = {
    _subject: 'Novi upit — Villa Rafaela (' + hr(v.checkin) + ' – ' + hr(v.checkout) + ')', _template: 'table',
    'Ime i prezime': v.fullname.trim(), 'Kontakt': contact, 'Dolazak': hr(v.checkin), 'Odlazak': hr(v.checkout),
    'Odrasli': v.adults, 'Djeca': v.children, 'Mali pas': v.dog ? 'Da' : 'Ne',
    'Poruka': v.message.trim() || '—', 'Jezik gosta': lang.toUpperCase(),
  };
  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact)) payload._replyto = contact;
  return payload;
}
function setSending(active) {
  sending = active;
  const btn = $('.submit'), label = btn.querySelector('[data-i]');
  btn.disabled = active; btn.setAttribute('aria-busy', String(active));
  label.dataset.i = active ? 'sending' : 'send'; label.textContent = t(label.dataset.i);
}
function resetForm() {
  form.reset(); submitted = false; stay.arr = stay.dep = ''; stayChanged();
  FIELDS.forEach(id => { $('#' + id + '-error').textContent = ''; });
  $$('[aria-invalid]', form).forEach(el => el.removeAttribute('aria-invalid'));
}
form.addEventListener('submit', async e => {
  e.preventDefault(); if (sending) return; submitted = true;
  if (!validateForm(true)) return;
  if (form.elements._honey.value) { resetForm(); setStatus('sent'); return; }
  if (!CONFIG.email) { setStatus('notConfigured'); $('#form-status').focus(); return; }
  setSending(true); setStatus('');
  try {
    const res = await fetch('https://formsubmit.co/ajax/' + CONFIG.email, {
      method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(enquiryPayload()),
    });
    const result = await res.json().catch(() => ({}));
    if (!res.ok || String(result.success) !== 'true') throw new Error(result.message || 'HTTP ' + res.status);
    resetForm(); setStatus('sent');
  } catch (err) { console.warn('Enquiry not sent:', err); setStatus('sendError'); }
  finally { setSending(false); $('#form-status').focus(); }
});

/* ---------- reveal + current section ---------- */
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver(entries => entries.forEach(en => {
    if (en.isIntersecting) { en.target.classList.remove('awaiting'); io.unobserve(en.target); }
  }), { threshold: .12, rootMargin: '0px 0px -6% 0px' });
  if (!reduceMotion.matches) $$('.reveal').forEach(el => { if (el.getBoundingClientRect().top > innerHeight) { el.classList.add('awaiting'); io.observe(el); } });
  const so = new IntersectionObserver(entries => entries.forEach(en => {
    if (!en.isIntersecting) return;
    $$('#navigation a').forEach(a => a.removeAttribute('aria-current'));
    $('#navigation a[href="#' + en.target.id + '"]')?.setAttribute('aria-current', 'location');
  }), { rootMargin: '-25% 0px -60% 0px' });
  $$('main section[id]').forEach(s => so.observe(s));
}

$('#year').textContent = new Date().getFullYear();
let saved = 'hr';
try { saved = localStorage.getItem('rafaela-language') || 'hr'; } catch {}
setLanguage(saved);
loadCalendar();
$('.submit').disabled = false;
