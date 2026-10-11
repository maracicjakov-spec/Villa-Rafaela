# Villa Rafaela — delivery notes

Completed: 11 October 2026. A fully local static HR/EN website, with no framework, build step, remote font requests or backend dependency.

## Files and preview

Open index.html directly, or serve the project root with any static web server. The working-session preview is http://127.0.0.1:4178/ while the local preview process is running.

- index.html: semantic page, Croatian fallback text, SEO/Open Graph metadata, LodgingBusiness structured data.
- styles.css: responsive editorial layout, motion and reduced-motion rules.
- script.js: HR/EN dictionary, room tabs, gallery/lightbox, mobile menu and booking validation.
- assets/: responsive WebP copies and locally hosted Manrope font with its OFL license. Georgia supplies the editorial serif without an external font service.
- All 28 original JPGs retain their exact filenames and remain unchanged in the root. The lightbox uses the originals.

## Deployment

Deploy this folder as a static Vercel project: framework preset Other, no build command, output directory the project root (.). No npm install is needed. No deployment has been made as part of this local implementation.

When the final domain is chosen, add its canonical URL and replace the relative og:image with the absolute production URL. Keep the JPG originals alongside the HTML, CSS, JavaScript and assets folder.

## Property facts and sources

The indexed property-specific Booking.com listing at the supplied address corroborates 150 m², 3 bedrooms, 2 bathrooms, a maximum of 7 guests, a private outdoor pool, garden, terrace, fully equipped kitchen, air conditioning, Wi-Fi, parking and barbecue facilities:
https://www.booking.com/hotel/hr/villa-rafaela-umag-umag.es-mx.html

The matching listing was identified by property name, full street address and matching property photographs. The English page itself presented an automated-access challenge; the indexed Spanish-language listing supplied the usable property details. No rates, availability, distances, pool dimensions or heating claims were copied.

An older inactive listing gives 6+2 occupants, so the owner should reconcile the difference before production:
https://www.visit-croatia.hr/hr/umag-rivijera/vila-rafaela-umag/55493

The phone and Google score (4.9/5, 10 reviews) come from the supplied brief. The score is identified on the page as supplied listing information. No review quotations or unverified direct Google property link are used. Directions use a Google Maps address query. Booking.com is not promoted as an alternative booking channel.

## Photography review and placement

All 28 photographs were viewed individually before design. Pic-1 was deliberately selected after comparison: it has the clearest strong combination of stone facade, blue shutters, terrace and private pool. Its portrait format is respected in a large split-screen composition. Pic-9 is the clearest unobstructed pool view but its facade is darker. Pic-11 best establishes the garden and the complete house, at a lower source resolution; it is used at a restrained size.

The collection contains no separate conventional living-room photograph. The shared space shown is the actual attic, rather than an invented lounge. Multiple photographs show the same rooms and bathrooms; they are not represented as separate accommodation units. Pic-28 is a lower-quality near-duplicate of pic-8 and is intentionally placed last in the complete gallery. Some source photos have strong sun/shadow contrast, visible utility cables or modest detail; these were preserved rather than altered.

| Photo number | Observed subject | Original pixels / orientation | Placement |
| --- | --- | --- | --- |
| 1 | Kamena vila i privatni bazen | 1479 × 2000 · portrait | Hero — best combined facade/pool composition; gallery |
| 2 | Zelena spavaća soba | 2000 × 1500 · landscape | Gallery |
| 3 | Spavaća soba s plavim zidom | 2000 × 1500 · landscape | Gallery |
| 4 | Pogled na bračni krevet u plavoj sobi | 2000 × 1500 · landscape | Gallery |
| 5 | Spavaći prostor pod drvenim gredama | 2000 × 1500 · landscape | Gallery |
| 6 | Zeleni ležajevi u potkrovlju | 2000 × 1500 · landscape | Gallery |
| 7 | Kutak za igru u potkrovlju | 2000 × 1500 · landscape | Gallery |
| 8 | Pogled s terase na bazen i vrt | 2000 × 1500 · landscape | Gallery |
| 9 | Bazen, ležaljke i kamena fasada | 1500 × 2000 · portrait | Dedicated private-pool section; gallery |
| 10 | Drveno unutarnje stubište | 1500 × 2000 · portrait | Gallery |
| 11 | Vila iza mediteranskog vrta | 956 × 1263 · portrait | Editorial villa introduction; gallery |
| 12 | Maslina i cvijeće među kamenjem | 1500 × 2000 · portrait | Garden detail in introduction; gallery |
| 13 | Lavanda i žuto vrtno cvijeće | 1500 × 2000 · portrait | Location section, explicitly labelled as villa garden; gallery |
| 14 | Prostor za druženje u potkrovlju | 1500 × 2000 · portrait | Shared-space tab; gallery |
| 15 | Natkrivena terasa i vanjski stol | 1500 × 2000 · portrait | Terrace photograph in pool story; gallery |
| 16 | Okrugli prozor i kutak za igru | 1500 × 2000 · portrait | Gallery |
| 17 | Bračni krevet pod drvenim gredama | 2000 × 1500 · landscape | Bedrooms tab; gallery |
| 18 | Detalj plave spavaće sobe | 1104 × 1079 · near square | Gallery |
| 19 | Zelena spavaća soba s bijelom posteljinom | 2000 × 1500 · landscape | Gallery |
| 20 | Kuhinja s blagovaonskim stolom | 2000 × 1500 · landscape | Kitchen and dining tab; gallery |
| 21 | Prostor s perilicom rublja | 1500 × 2000 · portrait | Gallery |
| 22 | Kupaonica s tušem i dva umivaonika | 1105 × 819 · landscape | Bathrooms tab; gallery |
| 23 | Pogled u veću kupaonicu | 1500 × 2000 · portrait | Gallery |
| 24 | Kupaonica s morskim zidnim motivom | 2000 × 1500 · landscape | Gallery |
| 25 | Kupaonica s tušem | 1113 × 1498 · portrait | Gallery |
| 26 | Drugi pogled na manju kupaonicu | 1500 × 2000 · portrait | Gallery |
| 27 | Toalet s umivaonikom | 1108 × 1079 · near square | Gallery |
| 28 | Bazen gledan iz hlada terase | 1096 × 839 · landscape | Gallery |

Gallery categories: all (28), outdoors (8), pool (4), interiors (20), bedrooms/sleeping spaces (10). Categories overlap where appropriate. Six curated images appear initially; the expansion button exposes all photographs. Fullscreen viewing always preserves each original aspect ratio.

## Implemented interactions

- HR/EN switching without reload, including alt text, accessibility labels, room descriptions, form errors, booking messages, metadata and footer; language preference persists locally.
- Sticky navigation, functional mobile menu, Escape dismissal and controlled keyboard focus.
- Four interior tabs with arrow-key, Home and End navigation.
- Filterable editorial gallery, full-window native dialog, counter, previous/next, looping, arrow keys, Home/End, Escape, focus restoration and touch swipe.
- Responsive images, eager high-priority hero, lazy loading elsewhere, image dimensions and reduced-motion support.
- Date/guest/contact validation with local calendar dates, translated inline errors and first-error focus.
- Clickable telephone and Google Maps directions.

## WhatsApp booking status

The form opens https://wa.me/385981707172 with a URI-encoded HR or EN enquiry containing both dates, guest count, full name, contact information and optional message. Guests still review the message and press Send inside WhatsApp. The site never sends a message automatically, takes payment, promises availability or confirms a reservation. A fallback link remains available when a browser blocks the popup. Form data is not stored by this website; only the chosen language is saved. Without JavaScript the submit button remains disabled and the telephone fallback is displayed.

The actual browser popup and correct destination were verified with the external WhatsApp request intercepted by the local test. No message was sent and the owner's WhatsApp account was not contacted or authenticated.

## Checks actually completed

Chromium/Chrome on Windows, with desktop and emulated mobile viewports:

- Layout at 360, 375, 390, 430, 768, 1024 and 1440 px in HR and EN: no horizontal overflow.
- Desktop and mobile full-page screenshots visually reviewed; hero screenshots reviewed at narrow mobile, tablet and desktop widths.
- All 28 gallery assets decoded successfully; original JPGs opened in the lightbox.
- 43 functional assertions passed: category membership/counts, expansion, lightbox navigation/wrapping/focus/Escape, interior tabs and keyboard controls, translations and persistence, empty/past/equal-date validation, invalid contact rejection, telephone acceptance, both message languages, UTF-8 encoding, preserved form fields, popup fallback, real window.open destination, reduced motion, anchor targets, directions and telephone links, mobile menu and CDP-emulated touch swipe.
- No JavaScript runtime or console errors in those checks.

These checks do not claim physical iOS/Android device testing, Safari/Firefox coverage, a Lighthouse audit, a live WhatsApp send or a live Vercel deployment.

## Owner confirmation for production

1. Confirm the current licensed guest capacity, given the older 6+2 listing and newer maximum of 7.
2. Confirm the current Google rating/review count and provide the exact Google business listing URL if a direct review link is wanted.
3. Confirm that the supplied phone is the intended active WhatsApp booking contact.
4. Supply the final production domain for canonical and absolute sharing URLs.

