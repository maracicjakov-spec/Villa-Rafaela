'use strict';
// All page text and accessibility labels share this HR/EN dictionary.
const translations={
  "hr": {
    "nav_home": "Početna",
    "nav_villa": "Vila",
    "nav_gallery": "Galerija",
    "nav_amenities": "Sadržaji",
    "nav_location": "Lokacija",
    "skip": "Preskoči na sadržaj",
    "nav_book": "Rezervacija",
    "hero_location": "UMAG, ISTRA · HRVATSKA",
    "hero_line1": "Vaš privatni",
    "hero_line2": "kutak",
    "hero_line3": "Istre.",
    "hero_text": "Kamena kuća. Plave škure. Vrijeme samo za vas.",
    "explore": "Istražite vilu",
    "enquire": "Pošaljite upit",
    "hero_note": "Jedna vila. Samo vaš odmor.",
    "alt1": "Kamena Villa Rafaela s plavim škurama, ležaljkama i privatnim bazenom",
    "photo_note": "Mediteran, sasvim osobno.",
    "entire": "Cijela vila za vas",
    "bedrooms": "spavaće sobe",
    "bathrooms": "kupaonice",
    "upTo": "Do 7 gostiju",
    "privatePool": "Privatni bazen",
    "alt11": "Pogled kroz cvjetni vrt na kamenu vilu i plave škure",
    "intro_caption": "Kuća s istarskim karakterom",
    "alt12": "Maslina, cvijeće i kamen u vrtu vile",
    "welcome": "DOBRO DOŠLI U VILLU RAFAELA",
    "intro_head1": "Mjesto gdje dani",
    "intro_head2": "traju dulje.",
    "intro_lead": "Iza plavih škura, jedan drukčiji ritam.",
    "intro_body": "U Umagu, Villa Rafaela spaja toplinu kamene kuće s jednostavnim užitkom odmora. Jutarnja kava na terasi, osvježenje u vlastitom bazenu i večeri koje ostavljaju dovoljno vremena za razgovor.",
    "intro_body2": "Cijela vila pripada vašem boravku. Prostor za obitelj, prijatelje i one male trenutke zbog kojih se odmor pamti.",
    "inside": "Zavirite unutra",
    "alt9": "Privatni bazen ispred kamene vile, okružen ležaljkama i plavim suncobranima",
    "pool_caption": "Manje planova. Više ovakvih trenutaka.",
    "outdoor": "ŽIVOT NA OTVORENOM",
    "pool_head1": "Vaš bazen.",
    "pool_head2": "Vaš ritam.",
    "pool_body": "Prvi jutarnji dodir vode. Knjiga na ležaljci. Ručak u hladu terase. Ovdje se dan ne mora ispuniti planovima — dovoljno je uživati u njemu.",
    "pool_tag1": "Privatni vanjski bazen",
    "pool_tag2": "Vrt i terasa",
    "alt15": "Natkrivena terasa s drvenim stolom uz kamenu fasadu i plave škure",
    "terrace_caption": "Za duge razgovore u hladu",
    "interior_label": "UDOBNOST KOJA SE OSJEĆA",
    "interior_head": "Prostor za biti",
    "interior_head2": "zajedno.",
    "interior_intro": "Tri spavaće sobe, dvije kupaonice i kuhinja s blagovaonicom. Jedna kuća za sve vaše male rituale.",
    "tab_sleep": "Spavaće sobe",
    "tab_living": "Prostor za druženje",
    "tab_kitchen": "Kuhinja i blagovaonica",
    "tab_bath": "Kupaonice",
    "alt17": "Spavaći prostor pod drvenim gredama, s bračnim krevetom i okruglim prozorima",
    "room_sleep_title": "Jutra bez žurbe.",
    "room_sleep_body": "Svjetlo kroz prozore, drvene grede i miran početak dana. Tri spavaće sobe za odmor nakon dana u Istri.",
    "allPhotos": "Sve fotografije",
    "gallery_label": "VILLA, KROZ OBJEKTIV",
    "gallery_head": "Mali pogled u",
    "gallery_head2": "vaš odmor.",
    "photographs": "fotografija. Jedna priča.",
    "filter_all": "Sve",
    "filter_outdoor": "Eksterijer",
    "filter_pool": "Bazen",
    "filter_interior": "Interijer",
    "filter_bedroom": "Spavaće sobe",
    "more": "Pogledajte svih 28 fotografija",
    "gallery_tip": "Odaberite fotografiju za prikaz preko cijelog zaslona.",
    "amenities_label": "MALI DETALJI, POTPUN ODMOR",
    "amenities_head": "Sve za vaš",
    "amenities_head2": "laganiji dan.",
    "amenities_body": "Udobnost doma, uz zadovoljstvo da ste negdje drugdje.",
    "amenity01": "Privatni vanjski bazen",
    "amenity02": "Vrt i terasa",
    "amenity03": "Potpuno opremljena kuhinja",
    "amenity04": "Prostor za roštilj",
    "amenity05": "Klimatizacija",
    "amenity06": "Wi-Fi",
    "amenity07": "Privatni parking",
    "alt13": "Lavanda i žuto cvijeće u vrtu Ville Rafaela",
    "istria_garden": "Istra počinje u vrtu.",
    "location_label": "VAŠA ISTARSKA ADRESA",
    "location_head": "Otkrijte",
    "location_head2": "Umag.",
    "location_body": "Šetnje uz more, kamene ulice i stol za kojim se ostaje malo dulje. Upoznajte Umag svojim tempom, a zatim se vratite svom mirnom kutku Istre.",
    "croatia": "Hrvatska",
    "directions": "Kako do nas",
    "google_reviews": "10 Google recenzija",
    "rating_head": "Lijepi dojmovi ostaju.",
    "rating_note": "Ocjena prema dostavljenim podacima Google profila.",
    "booking_label": "IZRAVNO S DOMAĆINOM",
    "booking_head": "Vaš odmor",
    "booking_head2": "počinje ovdje.",
    "booking_body": "Recite nam kada biste željeli doći. Javite se izravno putem WhatsAppa za dostupnost, cijenu i sve što vas zanima.",
    "call_label": "RADIJE BISTE NAZVALI?",
    "stay_details": "Vaš boravak",
    "checkin": "Dolazak",
    "checkout": "Odlazak",
    "guests": "Broj gostiju",
    "your_details": "Vaši podaci",
    "fullname": "Ime i prezime",
    "contact": "E-mail ili telefon",
    "message": "Vaša poruka (neobavezno)",
    "send_whatsapp": "Nastavite na WhatsApp",
    "send_hint": "Upit ćete pregledati i poslati u WhatsAppu.",
    "reopen": "Otvorite pripremljeni upit",
    "booking_notice": "Slanjem upita rezervacija nije automatski potvrđena. Domaćin će vam odgovoriti s informacijama o dostupnosti i cijeni.",
    "privacy_note": "Podaci iz obrasca prenose se u WhatsApp tek kada nastavite. Ova stranica ih ne pohranjuje.",
    "footer_place": "Umag, Istra, Hrvatska",
    "footer_contact": "Kontakt i rezervacija",
    "rights": "Sva prava pridržana.",
    "backTop": "Natrag na vrh",
    "alt2": "Zelena spavaća soba",
    "alt3": "Spavaća soba s plavim zidom",
    "alt4": "Pogled na bračni krevet u plavoj sobi",
    "alt5": "Spavaći prostor pod drvenim gredama",
    "alt6": "Zeleni ležajevi u potkrovlju",
    "alt7": "Kutak za igru u potkrovlju",
    "alt8": "Pogled s terase na bazen i vrt",
    "alt10": "Drveno unutarnje stubište",
    "alt14": "Prostor za druženje u potkrovlju",
    "alt16": "Okrugli prozor i kutak za igru",
    "alt18": "Detalj plave spavaće sobe",
    "alt19": "Zelena spavaća soba s bijelom posteljinom",
    "alt20": "Kuhinja s blagovaonskim stolom",
    "alt21": "Prostor s perilicom rublja",
    "alt22": "Kupaonica s tušem i dva umivaonika",
    "alt23": "Pogled u veću kupaonicu",
    "alt24": "Kupaonica s morskim zidnim motivom",
    "alt25": "Kupaonica s tušem",
    "alt26": "Drugi pogled na manju kupaonicu",
    "alt27": "Toalet s umivaonikom",
    "alt28": "Bazen gledan iz hlada terase",
    "chooseGuests": "Odaberite broj gostiju",
    "menu": "Otvori izbornik",
    "menuClose": "Zatvori izbornik",
    "navigation": "Glavna navigacija",
    "seePhotos": "Pogledajte fotografije",
    "rooms": "Prostori vile",
    "filter": "Filtriraj fotografije",
    "lightbox": "Galerija fotografija",
    "close": "Zatvori galeriju",
    "prev": "Prethodna fotografija",
    "next": "Sljedeća fotografija",
    "openPhoto": "Otvori fotografiju",
    "less": "Prikažite manje fotografija",
    "shown": "prikazano",
    "room_living_title": "Vrijeme za svoje.",
    "room_living_body": "Pod drvenim krovom, mjesto za igru i opuštanje. Za razgovore i trenutke u kojima je dovoljno samo biti zajedno.",
    "room_kitchen_title": "Za istim stolom.",
    "room_kitchen_body": "Potpuno opremljena kuhinja i blagovaonica za zajedničke doručke, domaće obroke i kušanje istarskih okusa.",
    "room_bath_title": "Jednostavno osvježenje.",
    "room_bath_body": "Dvije kupaonice s tuševima. Mirni tonovi i praktično uređenje za svakodnevni ritam vašeg odmora.",
    "required": "Molimo ispunite ovo polje.",
    "past": "Dolazak ne može biti u prošlosti.",
    "dateInvalid": "Unesite valjan datum.",
    "dateOrder": "Odlazak mora biti nakon dolaska.",
    "guestInvalid": "Odaberite broj gostiju od 1 do 7.",
    "nameInvalid": "Unesite ime i prezime (najmanje 2 znaka).",
    "contactInvalid": "Unesite valjan e-mail ili telefonski broj.",
    "ready": "Upit je pripremljen. Pregledajte ga i pritisnite Pošalji u WhatsAppu. Rezervacija još nije potvrđena.",
    "formErrors": "Provjerite označena polja prije nastavka.",
    "metaTitle": "Villa Rafaela — Vaš privatni kutak Istre · Umag",
    "metaDescription": "Kamena vila s privatnim bazenom u Umagu. Tri spavaće sobe, mediteranski vrt i terasa za vaš odmor u Istri. Pošaljite upit izravno domaćinu."
  },
  "en": {
    "nav_home": "Home",
    "nav_villa": "The villa",
    "nav_gallery": "Gallery",
    "nav_amenities": "Amenities",
    "nav_location": "Location",
    "skip": "Skip to content",
    "nav_book": "Enquire",
    "hero_location": "UMAG, ISTRIA · CROATIA",
    "hero_line1": "Your private",
    "hero_line2": "corner of",
    "hero_line3": "Istria.",
    "hero_text": "A stone house. Blue shutters. Time just for you.",
    "explore": "Explore the villa",
    "enquire": "Send an enquiry",
    "hero_note": "One villa. A stay all your own.",
    "alt1": "Stone-built Villa Rafaela with blue shutters, sun loungers and a private pool",
    "photo_note": "The Mediterranean, made personal.",
    "entire": "The whole villa, just for you",
    "bedrooms": "bedrooms",
    "bathrooms": "bathrooms",
    "upTo": "Up to 7 guests",
    "privatePool": "Private pool",
    "alt11": "View across the flowering garden towards the stone villa and blue shutters",
    "intro_caption": "A house with Istrian character",
    "alt12": "Olive tree, flowers and stone in the villa garden",
    "welcome": "WELCOME TO VILLA RAFAELA",
    "intro_head1": "A place where days",
    "intro_head2": "linger longer.",
    "intro_lead": "Behind the blue shutters, a different pace.",
    "intro_body": "In Umag, Villa Rafaela brings together the warmth of a stone house and the simple pleasure of taking time off. Coffee on the terrace, a dip in your own pool and evenings with plenty of time to talk.",
    "intro_body2": "The entire villa is yours for your stay. A place for family, friends and the little moments that make a holiday memorable.",
    "inside": "Step inside",
    "alt9": "Private pool in front of the stone villa, surrounded by loungers and blue parasols",
    "pool_caption": "Fewer plans. More moments like these.",
    "outdoor": "LIFE OUTDOORS",
    "pool_head1": "Your pool.",
    "pool_head2": "Your rhythm.",
    "pool_body": "The first dip of the morning. A book on a sun lounger. Lunch in the shade of the terrace. Here, a day needs no itinerary — just time to enjoy it.",
    "pool_tag1": "Private outdoor pool",
    "pool_tag2": "Garden & terrace",
    "alt15": "Covered terrace with a wooden dining table beside stone walls and blue shutters",
    "terrace_caption": "For long conversations in the shade",
    "interior_label": "COMFORT YOU CAN FEEL",
    "interior_head": "Space to be",
    "interior_head2": "together.",
    "interior_intro": "Three bedrooms, two bathrooms and a kitchen with dining space. One house for all your little rituals.",
    "tab_sleep": "Bedrooms",
    "tab_living": "Time together",
    "tab_kitchen": "Kitchen & dining",
    "tab_bath": "Bathrooms",
    "alt17": "Sleeping space under exposed timber beams, with a double bed and circular windows",
    "room_sleep_title": "Unhurried mornings.",
    "room_sleep_body": "Light through the windows, timber beams and a gentle start to the day. Three bedrooms to unwind in after exploring Istria.",
    "allPhotos": "All photographs",
    "gallery_label": "THE VILLA, THROUGH THE LENS",
    "gallery_head": "A little glimpse of",
    "gallery_head2": "your holiday.",
    "photographs": "photographs. One story.",
    "filter_all": "All",
    "filter_outdoor": "Outdoors",
    "filter_pool": "Pool",
    "filter_interior": "Interiors",
    "filter_bedroom": "Bedrooms",
    "more": "View all 28 photographs",
    "gallery_tip": "Select a photograph to see it in full screen.",
    "amenities_label": "LITTLE DETAILS, A COMPLETE STAY",
    "amenities_head": "Everything for your",
    "amenities_head2": "easy-going days.",
    "amenities_body": "The comforts of home, with the pleasure of being somewhere else.",
    "amenity01": "Private outdoor pool",
    "amenity02": "Garden & terrace",
    "amenity03": "Fully equipped kitchen",
    "amenity04": "Barbecue area",
    "amenity05": "Air conditioning",
    "amenity06": "Wi-Fi",
    "amenity07": "Private parking",
    "alt13": "Lavender and yellow flowers in the garden of Villa Rafaela",
    "istria_garden": "Istria begins in the garden.",
    "location_label": "YOUR ISTRIAN ADDRESS",
    "location_head": "Discover",
    "location_head2": "Umag.",
    "location_body": "Seafront walks, stone streets and a table worth lingering at. Discover Umag at your own pace, then come back to your own quiet corner of Istria.",
    "croatia": "Croatia",
    "directions": "Get directions",
    "google_reviews": "10 Google reviews",
    "rating_head": "Good memories stay.",
    "rating_note": "Rating based on the supplied Google business listing.",
    "booking_label": "DIRECTLY WITH YOUR HOST",
    "booking_head": "Your holiday",
    "booking_head2": "starts here.",
    "booking_body": "Tell us when you would like to visit. Get in touch directly on WhatsApp for availability, prices and anything you would like to know.",
    "call_label": "PREFER A CALL?",
    "stay_details": "Your stay",
    "checkin": "Check-in",
    "checkout": "Check-out",
    "guests": "Number of guests",
    "your_details": "Your details",
    "fullname": "Full name",
    "contact": "Email or phone",
    "message": "Your message (optional)",
    "send_whatsapp": "Continue to WhatsApp",
    "send_hint": "You will review and send your enquiry in WhatsApp.",
    "reopen": "Open your prepared enquiry",
    "booking_notice": "Sending an enquiry does not automatically confirm your reservation. Your host will reply with availability and pricing information.",
    "privacy_note": "Your form details are passed to WhatsApp only when you continue. This website does not store them.",
    "footer_place": "Umag, Istria, Croatia",
    "footer_contact": "Contact & enquiries",
    "rights": "All rights reserved.",
    "backTop": "Back to top",
    "alt2": "Green bedroom",
    "alt3": "Bedroom with a blue feature wall",
    "alt4": "Double bed in the blue bedroom",
    "alt5": "Sleeping space under timber beams",
    "alt6": "Green daybeds in the attic",
    "alt7": "Play corner in the attic",
    "alt8": "Pool and garden seen from the terrace",
    "alt10": "Interior wooden staircase",
    "alt14": "Shared space in the attic",
    "alt16": "Circular window and play corner",
    "alt18": "Detail of the blue bedroom",
    "alt19": "Green bedroom with white bed linen",
    "alt20": "Kitchen with a dining table",
    "alt21": "Laundry area",
    "alt22": "Bathroom with shower and twin basins",
    "alt23": "View into the larger bathroom",
    "alt24": "Bathroom with a coastal wall mural",
    "alt25": "Bathroom with a shower",
    "alt26": "Another view of the smaller bathroom",
    "alt27": "Toilet and washbasin",
    "alt28": "Pool viewed from the shaded terrace",
    "chooseGuests": "Select the number of guests",
    "menu": "Open menu",
    "menuClose": "Close menu",
    "navigation": "Main navigation",
    "seePhotos": "View photographs",
    "rooms": "Villa spaces",
    "filter": "Filter photographs",
    "lightbox": "Photo gallery",
    "close": "Close gallery",
    "prev": "Previous photograph",
    "next": "Next photograph",
    "openPhoto": "Open photograph",
    "less": "Show fewer photographs",
    "shown": "shown",
    "room_living_title": "Time for your people.",
    "room_living_body": "Beneath the timber roof, space to play and relax. For conversations and moments when simply being together is enough.",
    "room_kitchen_title": "Around the same table.",
    "room_kitchen_body": "A fully equipped kitchen and dining area for shared breakfasts, home-cooked meals and a taste of Istria.",
    "room_bath_title": "A fresh start.",
    "room_bath_body": "Two bathrooms with showers. Calm tones and practical details for the everyday rhythm of your holiday.",
    "required": "Please complete this field.",
    "past": "Check-in cannot be in the past.",
    "dateInvalid": "Please enter a valid date.",
    "dateOrder": "Check-out must be after check-in.",
    "guestInvalid": "Please select between 1 and 7 guests.",
    "nameInvalid": "Enter your full name (at least 2 characters).",
    "contactInvalid": "Enter a valid email address or phone number.",
    "ready": "Your enquiry is ready. Review it and press Send in WhatsApp. Your reservation is not yet confirmed.",
    "formErrors": "Please check the highlighted fields before continuing.",
    "metaTitle": "Villa Rafaela — Your private corner of Istria · Umag",
    "metaDescription": "A stone villa with a private pool in Umag. Three bedrooms, a Mediterranean garden and terrace for your stay in Istria. Enquire directly with your host."
  }
};
const photos=[{"n":1,"width":1479,"height":2000,"widths":[600,1200],"hr":"Kamena vila i privatni bazen","en":"Stone villa and private pool","categories":["outdoor","pool"]},{"n":2,"width":2000,"height":1500,"widths":[600,1200],"hr":"Zelena spavaća soba","en":"Green bedroom","categories":["interior","bedroom"]},{"n":3,"width":2000,"height":1500,"widths":[600,1200],"hr":"Spavaća soba s plavim zidom","en":"Bedroom with a blue feature wall","categories":["interior","bedroom"]},{"n":4,"width":2000,"height":1500,"widths":[600,1200],"hr":"Pogled na bračni krevet u plavoj sobi","en":"Double bed in the blue bedroom","categories":["interior","bedroom"]},{"n":5,"width":2000,"height":1500,"widths":[600,1200],"hr":"Spavaći prostor pod drvenim gredama","en":"Sleeping space under timber beams","categories":["interior","bedroom"]},{"n":6,"width":2000,"height":1500,"widths":[600,1200],"hr":"Zeleni ležajevi u potkrovlju","en":"Green daybeds in the attic","categories":["interior","bedroom"]},{"n":7,"width":2000,"height":1500,"widths":[600,1200],"hr":"Kutak za igru u potkrovlju","en":"Play corner in the attic","categories":["interior","bedroom"]},{"n":8,"width":2000,"height":1500,"widths":[600,1200],"hr":"Pogled s terase na bazen i vrt","en":"Pool and garden seen from the terrace","categories":["outdoor","pool"]},{"n":9,"width":1500,"height":2000,"widths":[600,1200],"hr":"Bazen, ležaljke i kamena fasada","en":"Pool, loungers and stone facade","categories":["outdoor","pool"]},{"n":10,"width":1500,"height":2000,"widths":[600,1200],"hr":"Drveno unutarnje stubište","en":"Interior wooden staircase","categories":["interior"]},{"n":11,"width":956,"height":1263,"widths":[600,956],"hr":"Vila iza mediteranskog vrta","en":"Villa beyond the Mediterranean garden","categories":["outdoor"]},{"n":12,"width":1500,"height":2000,"widths":[600,1200],"hr":"Maslina i cvijeće među kamenjem","en":"Olive tree and flowers among the stones","categories":["outdoor"]},{"n":13,"width":1500,"height":2000,"widths":[600,1200],"hr":"Lavanda i žuto vrtno cvijeće","en":"Lavender and yellow garden flowers","categories":["outdoor"]},{"n":14,"width":1500,"height":2000,"widths":[600,1200],"hr":"Prostor za druženje u potkrovlju","en":"Shared space in the attic","categories":["interior","bedroom"]},{"n":15,"width":1500,"height":2000,"widths":[600,1200],"hr":"Natkrivena terasa i vanjski stol","en":"Covered terrace and outdoor dining table","categories":["outdoor"]},{"n":16,"width":1500,"height":2000,"widths":[600,1200],"hr":"Okrugli prozor i kutak za igru","en":"Circular window and play corner","categories":["interior"]},{"n":17,"width":2000,"height":1500,"widths":[600,1200],"hr":"Bračni krevet pod drvenim gredama","en":"Double bed beneath exposed timber beams","categories":["interior","bedroom"]},{"n":18,"width":1104,"height":1079,"widths":[600,1104],"hr":"Detalj plave spavaće sobe","en":"Detail of the blue bedroom","categories":["interior","bedroom"]},{"n":19,"width":2000,"height":1500,"widths":[600,1200],"hr":"Zelena spavaća soba s bijelom posteljinom","en":"Green bedroom with white bed linen","categories":["interior","bedroom"]},{"n":20,"width":2000,"height":1500,"widths":[600,1200],"hr":"Kuhinja s blagovaonskim stolom","en":"Kitchen with a dining table","categories":["interior"]},{"n":21,"width":1500,"height":2000,"widths":[600,1200],"hr":"Prostor s perilicom rublja","en":"Laundry area","categories":["interior"]},{"n":22,"width":1105,"height":819,"widths":[600,1105],"hr":"Kupaonica s tušem i dva umivaonika","en":"Bathroom with shower and twin basins","categories":["interior"]},{"n":23,"width":1500,"height":2000,"widths":[600,1200],"hr":"Pogled u veću kupaonicu","en":"View into the larger bathroom","categories":["interior"]},{"n":24,"width":2000,"height":1500,"widths":[600,1200],"hr":"Kupaonica s morskim zidnim motivom","en":"Bathroom with a coastal wall mural","categories":["interior"]},{"n":25,"width":1113,"height":1498,"widths":[600,1113],"hr":"Kupaonica s tušem","en":"Bathroom with a shower","categories":["interior"]},{"n":26,"width":1500,"height":2000,"widths":[600,1200],"hr":"Drugi pogled na manju kupaonicu","en":"Another view of the smaller bathroom","categories":["interior"]},{"n":27,"width":1108,"height":1079,"widths":[600,1108],"hr":"Toalet s umivaonikom","en":"Toilet and washbasin","categories":["interior"]},{"n":28,"width":1096,"height":839,"widths":[600,1096],"hr":"Bazen gledan iz hlada terase","en":"Pool viewed from the shaded terrace","categories":["outdoor","pool"]}];
const galleryOrder=[8,3,15,20,13,22,19,11,9,1,17,2,4,5,6,7,10,12,14,16,18,21,23,24,25,26,27,28];
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
let language='hr', category='all', expanded=false, room='sleep', slide=0, lightboxPhotos=[], lastPhotoTrigger=null;
const header=$('#header'), menu=$('.menu-toggle'), navigation=$('#navigation'), dialog=$('#lightbox'), grid=$('#gallery-grid');
const form=$('#booking-form'), fields=['checkin','checkout','guests','fullname','contact'];
let submitted=false, prepared=false;
const t=key=>translations[language][key] || key;
const imgPath=(n,width)=>'assets/villa-rafaela-umag-umag-pic-'+n+'-'+width+'.webp';
const originalPath=n=>'villa-rafaela-umag-umag-pic-'+n+'.jpg';
function setPhoto(image,n,sizes='(max-width: 700px) 100vw, 65vw'){
  const p=photos[n-1]; image.src=imgPath(n,p.widths[1]);image.srcset=imgPath(n,600)+' 600w, '+imgPath(n,p.widths[1])+' '+p.widths[1]+'w';image.sizes=sizes;image.width=p.width;image.height=p.height;image.alt=t('alt'+n);image.dataset.alt='alt'+n;
}
function setLanguage(next){
  language=next==='en'?'en':'hr';document.documentElement.lang=language;
  try{localStorage.setItem('rafaela-language',language);}catch{}
  $$('[data-i18n]').forEach(el=>el.textContent=t(el.dataset.i18n));
  $$('[data-alt]').forEach(el=>el.alt=t(el.dataset.alt));
  $$('[data-aria]').forEach(el=>el.setAttribute('aria-label',t(el.dataset.aria)));
  $$('[data-lang]').forEach(el=>el.setAttribute('aria-pressed',String(el.dataset.lang===language)));
  navigation.setAttribute('aria-label',t('navigation'));updateMenuLabel();
  document.title=t('metaTitle');$('meta[name="description"]').content=t('metaDescription');
  $('meta[property="og:title"]').content=t('metaTitle');$('meta[property="og:description"]').content=t('metaDescription');
  $('meta[property="og:image:alt"]').content=t('alt1');$('meta[property="og:locale"]').content=language==='hr'?'hr_HR':'en_GB';$('meta[property="og:locale:alternate"]').content=language==='hr'?'en_GB':'hr_HR';
  renderGallery();updateRoom();if(dialog.open)showSlide(slide);
  if(submitted)validateForm(false);if(prepared){$('#form-status').textContent=t('ready');$('#whatsapp-fallback').href=buildWhatsAppURL();}
}
$$('[data-lang]').forEach(el=>el.addEventListener('click',()=>setLanguage(el.dataset.lang)));
function updateMenuLabel(){menu.setAttribute('aria-label',t(header.classList.contains('menu-open')?'menuClose':'menu'));}
function closeMenu(restore=false){header.classList.remove('menu-open');menu.setAttribute('aria-expanded','false');document.body.classList.remove('locked');updateMenuLabel();if(restore)menu.focus();}
menu.addEventListener('click',()=>{const open=!header.classList.contains('menu-open');header.classList.toggle('menu-open',open);menu.setAttribute('aria-expanded',String(open));document.body.classList.toggle('locked',open);updateMenuLabel();if(open)navigation.querySelector('a').focus();});
navigation.addEventListener('click',e=>{if(e.target.closest('a'))closeMenu();});
document.addEventListener('keydown',e=>{
  if(header.classList.contains('menu-open')){if(e.key==='Escape'){closeMenu(true);return;}if(e.key==='Tab'){const controls=[...navigation.querySelectorAll('a'),...$$('.nav-tools button')],first=controls[0],last=controls.at(-1);if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}}}
});
matchMedia('(min-width:951px)').addEventListener('change',e=>{if(e.matches)closeMenu();});
function scrollHeader(){header.classList.toggle('scrolled',scrollY>20);}addEventListener('scroll',scrollHeader,{passive:true});scrollHeader();
// Tab buttons follow the standard arrow-key, Home and End interaction.
const rooms={sleep:{n:17,index:1},living:{n:14,index:2},kitchen:{n:20,index:3},bath:{n:22,index:4}};
function updateRoom(){const entry=rooms[room];$$('[data-room]').forEach(button=>{let active=button.dataset.room===room;button.setAttribute('aria-selected',String(active));button.tabIndex=active?0:-1;});$('#room-panel').setAttribute('aria-labelledby','tab-'+room);$('#room-number').textContent='0'+entry.index+' / 04';$('#room-title').textContent=t('room_'+room+'_title');$('#room-description').textContent=t('room_'+room+'_body');setPhoto($('.room-photo img'),entry.n);}
$$('[data-room]').forEach((button,index)=>{button.addEventListener('click',()=>{room=button.dataset.room;updateRoom();});button.addEventListener('keydown',e=>{const tabs=$$('[data-room]');let target=index;if(e.key==='ArrowRight')target=(index+1)%tabs.length;else if(e.key==='ArrowLeft')target=(index+tabs.length-1)%tabs.length;else if(e.key==='Home')target=0;else if(e.key==='End')target=tabs.length-1;else return;e.preventDefault();tabs[target].focus();room=tabs[target].dataset.room;updateRoom();});});
function filteredPhotos(){return galleryOrder.map(n=>photos[n-1]).filter(p=>category==='all'||p.categories.includes(category));}
function renderGallery(){
  const list=filteredPhotos(),limit=expanded?list.length:6;grid.replaceChildren();grid.classList.toggle('filtered',category!=='all');
  list.forEach((p,i)=>{const button=document.createElement('button');button.type='button';button.className='gallery-item'+(p.height>p.width?' portrait':'');button.dataset.photo=p.n;button.hidden=i>=limit;button.setAttribute('aria-label',t('openPhoto')+': '+p[language]);const img=document.createElement('img');setPhoto(img,p.n,'(max-width:700px) 90vw, (max-width:950px) 45vw, 600px');img.alt=p[language];img.loading='lazy';img.decoding='async';const number=document.createElement('span');number.className='photo-index';number.textContent=String(i+1).padStart(2,'0');number.setAttribute('aria-hidden','true');const expand=document.createElement('span');expand.className='photo-expand';expand.textContent='↗';expand.setAttribute('aria-hidden','true');button.append(img,number,expand);grid.append(button);});
  $$('[data-filter]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.filter===category)));
  $('#gallery-count').textContent=Math.min(limit,list.length)+' / '+list.length+' '+t('shown');
  const more=$('#gallery-more');more.hidden=list.length<=6;more.firstElementChild.textContent=t(expanded?'less':'more');more.lastElementChild.textContent=expanded?'−':'+';
  if(category!=='all'&&!expanded)more.firstElementChild.textContent=language==='hr'?'Pogledajte sve fotografije ('+list.length+')':'View all photographs ('+list.length+')';
}
$$('[data-filter]').forEach(button=>button.addEventListener('click',()=>{category=button.dataset.filter;expanded=false;renderGallery();}));
$('#gallery-more').addEventListener('click',()=>{expanded=!expanded;renderGallery();if(!expanded)$('#galerija').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion:reduce)').matches?'instant':'smooth'});});
grid.addEventListener('click',e=>{const button=e.target.closest('[data-photo]');if(!button)return;lastPhotoTrigger=button;lightboxPhotos=filteredPhotos();slide=lightboxPhotos.findIndex(p=>p.n===Number(button.dataset.photo));showSlide(slide);dialog.showModal();document.body.classList.add('locked');$('#lightbox-close').focus();});
function showSlide(index){if(!lightboxPhotos.length)return;slide=(index+lightboxPhotos.length)%lightboxPhotos.length;const p=lightboxPhotos[slide],im=$('#lightbox-image');im.src=originalPath(p.n);im.alt=p[language];$('#lightbox-caption').textContent=p[language];$('#lightbox-count').textContent=String(slide+1).padStart(2,'0')+' / '+String(lightboxPhotos.length).padStart(2,'0');const preload=new Image();preload.src=originalPath(lightboxPhotos[(slide+1)%lightboxPhotos.length].n);}
$('#lightbox-close').addEventListener('click',()=>dialog.close());$('#lightbox-prev').addEventListener('click',()=>showSlide(slide-1));$('#lightbox-next').addEventListener('click',()=>showSlide(slide+1));
dialog.addEventListener('close',()=>{document.body.classList.remove('locked');if(lastPhotoTrigger?.isConnected)lastPhotoTrigger.focus();});
dialog.addEventListener('keydown',e=>{if(e.key==='Tab'){const controls=[...dialog.querySelectorAll('button')],first=controls[0],last=controls.at(-1);if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}return;}if(e.key==='ArrowLeft'){e.preventDefault();showSlide(slide-1);}else if(e.key==='ArrowRight'){e.preventDefault();showSlide(slide+1);}else if(e.key==='Home'){e.preventDefault();showSlide(0);}else if(e.key==='End'){e.preventDefault();showSlide(lightboxPhotos.length-1);}});
dialog.addEventListener('click',e=>{if(e.target===dialog||e.target.classList.contains('lightbox-stage'))dialog.close();});
let touchStart=null;
$('#lightbox-image').addEventListener('touchstart',e=>{touchStart=e.touches.length===1?{x:e.touches[0].clientX,y:e.touches[0].clientY}:null;},{passive:true});
$('#lightbox-image').addEventListener('touchend',e=>{if(!touchStart)return;const dx=e.changedTouches[0].clientX-touchStart.x,dy=e.changedTouches[0].clientY-touchStart.y;touchStart=null;if(Math.abs(dx)>45&&Math.abs(dx)>Math.abs(dy)*1.4)showSlide(slide+(dx<0?1:-1));},{passive:true});
$('#lightbox-image').addEventListener('touchcancel',()=>{touchStart=null;},{passive:true});
// Local calendar dates avoid UTC shifts for guests in different time zones.
function dateString(date){return date.getFullYear()+'-'+String(date.getMonth()+1).padStart(2,'0')+'-'+String(date.getDate()).padStart(2,'0');}
function validDate(value){if(!/^\d{4}-\d{2}-\d{2}$/.test(value))return false;const d=new Date(value+'T12:00:00');return Number.isFinite(d.getTime())&&dateString(d)===value;}
function updateDateLimits(){const today=dateString(new Date());$('#checkin').min=today;const value=$('#checkin').value;const d=new Date((validDate(value)&&value>=today?value:today)+'T12:00:00');d.setDate(d.getDate()+1);$('#checkout').min=dateString(d);}
updateDateLimits();$('#checkin').addEventListener('change',updateDateLimits);addEventListener('focus',updateDateLimits);
function errorFor(id){const value=$('#'+id).value.trim();if(!value)return 'required';if(id==='checkin'||id==='checkout'){if(!validDate(value))return 'dateInvalid';if(id==='checkin'&&value<dateString(new Date()))return 'past';if(id==='checkout'&&value<=($('#checkin').value||dateString(new Date())))return 'dateOrder';}if(id==='guests'&&(!Number.isInteger(Number(value))||Number(value)<1||Number(value)>7))return 'guestInvalid';if(id==='fullname'&&value.length<2)return 'nameInvalid';if(id==='contact'){const email=/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),phone=/^\+?[\d\s().-]+$/.test(value)&&value.replace(/\D/g,'').length>=7&&value.replace(/\D/g,'').length<=15;if(!email&&!phone)return 'contactInvalid';}return '';}
function displayError(id){const key=errorFor(id);$('#'+id+'-error').textContent=key?t(key):'';$('#'+id).setAttribute('aria-invalid',String(!!key));return !key;}
function validateForm(focus){updateDateLimits();const invalid=fields.filter(id=>!displayError(id));if(invalid.length){$('#form-status').textContent=t('formErrors');if(focus)$('#'+invalid[0]).focus();return false;}if(!prepared)$('#form-status').textContent='';return true;}
fields.forEach(id=>$('#'+id).addEventListener('input',()=>{if(prepared){prepared=false;$('#whatsapp-fallback').hidden=true;$('#form-status').textContent='';}if(submitted){displayError(id);if(id==='checkin')displayError('checkout');}}));
$('#message').addEventListener('input',()=>{prepared=false;$('#whatsapp-fallback').hidden=true;$('#form-status').textContent='';});
function buildWhatsAppURL(){
  const values=Object.fromEntries(new FormData(form));const format=value=>new Intl.DateTimeFormat(language==='hr'?'hr-HR':'en-GB',{day:'numeric',month:'long',year:'numeric'}).format(new Date(value+'T12:00:00'));
  const lines=language==='hr'?['Poštovani, želio/željela bih poslati upit za boravak u Villi Rafaela.','','Dolazak: '+format(values.checkin),'Odlazak: '+format(values.checkout),'Broj gostiju: '+values.guests,'Ime i prezime: '+values.fullname.trim(),'Kontakt: '+values.contact.trim()]:['Hello, I would like to enquire about a stay at Villa Rafaela.','','Check-in: '+format(values.checkin),'Check-out: '+format(values.checkout),'Number of guests: '+values.guests,'Full name: '+values.fullname.trim(),'Contact: '+values.contact.trim()];
  if(values.message.trim())lines.push('',(language==='hr'?'Poruka: ':'Message: ')+values.message.trim());
  lines.push('',language==='hr'?'Molim informacije o dostupnosti i cijeni za navedene datume. Hvala!':'Please let me know the availability and price for these dates. Thank you!');
  return 'https://wa.me/385981707172?text='+encodeURIComponent(lines.join('\n'));
}
form.addEventListener('submit',e=>{e.preventDefault();submitted=true;prepared=false;$('#whatsapp-fallback').hidden=true;if(!validateForm(true))return;const url=buildWhatsAppURL();const fallback=$('#whatsapp-fallback');fallback.href=url;fallback.hidden=false;prepared=true;$('#form-status').textContent=t('ready');window.open(url,'_blank','noopener,noreferrer');});
// Progressive enhancement: content is visible when scripts or observers are unavailable.
if('IntersectionObserver'in window){const reduce=matchMedia('(prefers-reduced-motion:reduce)');const reveals=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');reveals.unobserve(entry.target);}}),{threshold:.12});if(!reduce.matches)$$('.reveal').forEach(el=>{el.classList.add('awaiting');reveals.observe(el);});reduce.addEventListener('change',()=>{if(reduce.matches)$$('.reveal').forEach(el=>el.classList.add('visible'));});
const sectionObserver=new IntersectionObserver(entries=>{for(const entry of entries){if(entry.isIntersecting){$$('#navigation a').forEach(a=>a.removeAttribute('aria-current'));const link=$('#navigation a[href="#'+entry.target.id+'"]');if(link)link.setAttribute('aria-current','location');}}},{rootMargin:'-20% 0px -60% 0px'});$$('main section[id]').forEach(s=>sectionObserver.observe(s));}
$('#year').textContent=new Date().getFullYear();
let saved='hr';try{saved=localStorage.getItem('rafaela-language')||'hr';}catch{}setLanguage(saved);

$('.submit').disabled=false;
