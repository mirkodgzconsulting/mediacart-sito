# MEDIA Cart
## Cartoleria & Tipografia - Milano Bicocca
### Documento operativo v2.0 (pronto per Cursor)

Versione: 2.0  
Data: 2026-03-26  
Lingua sito: Italiano  
Stack: Astro (static) + Cloudflare Pages

---

## 1) Obiettivo del progetto

Creare un sito informativo statico, veloce e orientato alla conversione locale per:
- essere trovati su Google da studenti Bicocca e clienti a Milano;
- generare contatti via telefono, WhatsApp e form;
- comunicare affidabilita, servizi e qualita.

**Priorita business**
1. Lead da studenti (stampa tesi)
2. Lead da aziende/privati (stampa e promozionale)
3. Reputazione locale (fiducia + presenza professionale)

---

## 2) Dati ufficiali (source of truth)

Usare questi dati in tutto il progetto (header/footer, contatti, schema, CTA):

- Brand: MEDIA Cart
- Nome scheda Google Maps: Media Print - Centro Stampa
- Categoria: Cartoleria e Tipografia Digitale
- Indirizzo: Viale Sarca, 163, 20126 Milano MI
- Telefono 1: +39 351 554 4449
- Telefono 2: 02 4002 5540
- Email: info@centrostampa.srl
- Orari: Lun-Sab 09:00-13:00 / 14:00-19:00
- Domenica: Chiuso
- Link Google Maps: https://maps.app.goo.gl/7gMguGpeDLa3ozq37
- Copertura: solo negozio fisico a Milano (SEO locale Milano)

**Nota verifica obbligatoria prima del deploy**
- Confermare coordinate Google Maps e coerenza tra brand sito e scheda Google prima di pubblicare.
- CAP ufficiale da usare ovunque: **20126**.

---

## 3) Pubblico e intenti di ricerca

### Segmento A (priorita alta): Studenti Bicocca
- Bisogni: stampa/rilegatura tesi, urgenza, prezzi chiari
- Query tipiche: "stampa tesi Bicocca", "copisteria Bicocca", "stampa tesi Milano"

### Segmento B: Aziende e privati
- Bisogni: materiale promozionale, banner, gadget, supporto grafico
- Query tipiche: "tipografia Milano", "stampa banner Milano", "materiale promozionale Milano"

---

## 4) Architettura sito (4 pagine)

1. `/` Home  
   - Hero con value proposition + CTA primaria  
   - Servizi in evidenza  
   - Blocco "Chi siamo" breve  
   - Blocco "Dove siamo" con mappa
   - Blocco partner con logo placeholder (in fondo pagina)

2. `/chi-siamo`  
   - Storia/identita  
   - Valori  
   - Team/negozio (foto reali)  
   - Richiamo contatti

3. `/servizi`  
   - Griglia completa servizi  
   - Sezione dedicata `#stampa-tesi` (priorita SEO/conversione)  
   - Blocco "solo ritiro/servizio in negozio a Milano"

4. `/contatti`  
   - Form contatto  
   - Telefoni cliccabili (`tel:`)  
   - Pulsante WhatsApp (`wa.me`)  
   - Orari e indirizzo  
   - Mappa Google Maps

5. `/partner` (opzionale)  
   - Mini presentazione partner  
   - Link esterni ai partner principali  
   - Placeholder logo sostituibili

---

## 5) Elenco servizi (obbligatorio)

- Grande formato (banner, striscioni, roll-up, poster)
- Piccolo formato (volantini, brochure, biglietti da visita, locandine)
- Etichette e adesivi
- Materiale promozionale ed espositivo
- Gadget personalizzati
- T-shirt e felpe
- Timbri
- Stampa foto
- **Stampa tesi di laurea** (massima priorita)
- Servizio grafico (layout, impaginazione, supporto creativo)

---

## 6) SEO locale: regole pratiche (anti-spam)

### Keyword target (uso naturale nei testi)
- stampa tesi Milano Bicocca
- copisteria Bicocca Milano
- stampa tesi laurea Milano
- tipografia Milano Bicocca
- stampa banner Milano
- cartoleria Viale Sarca Milano
- stampa materiale promozionale Milano
- stampa foto Milano

### Requisiti on-page
- Un solo `h1` per pagina.
- Gerarchia heading coerente (`h1 > h2 > h3`).
- `title` e `meta description` unici su ogni pagina.
- URL puliti e semantici.
- `canonical` su ogni pagina.
- Open Graph base (`og:title`, `og:description`, `og:type`, `og:url`, `og:image`).
- `alt` immagini descrittivi e contestuali (no keyword stuffing).

### SEO tecnico
- `@astrojs/sitemap` configurato e `sitemap.xml` raggiungibile.
- `robots.txt` permissivo per pagine pubbliche.
- JSON-LD LocalBusiness nel layout base.
- `lang="it"` e metadati locali coerenti.

---

## 7) Performance e UX

- Immagini ottimizzate (WebP/AVIF dove possibile).
- Lazy loading immagini non above-the-fold.
- JS minimo (approccio Astro static-first).
- Font: solo pesi necessari; `display=swap`.
- CTA mobile sempre visibile (Call + WhatsApp) in fondo schermo.
- Accessibilita base: contrasto, focus visibile, label form, link chiari.

---

## 8) Partner e proof di fiducia

### Partner
- Partner principale: [StampeLowCost](https://print.stampelowcost.com/) (inserire placeholder logo nel layout)
- Altro partner: [Centrostampa](https://centrostampa.srl/) (inserire placeholder logo nel layout)

### Reputazione Google (social proof)
- Valutazione: **4,9/5**
- Totale recensioni: **363 recensioni**
- Evidenze da copy: rapidita, cortesia, precisione, supporto su urgenze e stampa tesi.

---

## 9) Processo di richiesta (4 passi)

1. **Contatto rapido**: il cliente scrive su WhatsApp o chiama.
2. **Verifica file e necessita**: controllo formato, quantita, supporto e tempi.
3. **Preventivo chiaro**: conferma costo e tempi prima della lavorazione.
4. **Ritiro in negozio**: consegna in sede a Milano, Viale Sarca 163.

Messaggio standard consigliato nel sito:
- "Per tempi e prezzi, chiedi un preventivo: rispondiamo rapidamente su WhatsApp o telefono."

---

## 10) Privacy e conformita (obbligatorio)

Se presenti form, mappe embed o analytics:
- Pagina Privacy Policy.
- Pagina Cookie Policy.
- Banner consenso cookie se vengono caricati script non tecnici.
- Informativa breve sotto al form con link privacy.

---

## 11) Tracking conversioni (consigliato)

Preparare eventi tracciabili per:
- click telefono (`tel:`)
- click WhatsApp
- submit form contatti

Se non si configura GA4 subito, lasciare hook/eventi pronti nel markup.

---

## 12) Restrizioni commerciali (importantissimo)

- Non promettere "consegna in 1 ora" o tempi garantiti se non certi.
- Non promettere spedizione nazionale: il servizio e locale in negozio a Milano.
- Evitare claim assoluti non verificabili (es. "prezzi piu bassi d'Italia").
- Usare CTA prudenti e concrete: "Chiedi preventivo" / "Contattaci".
- Canali prioritari CTA: WhatsApp + Telefono.

---

## 13) Struttura progetto richiesta

```txt
src/
  components/
    Header.astro
    Footer.astro
    ServizioCard.astro
    CTAStickyMobile.astro
  layouts/
    Base.astro
  pages/
    index.astro
    chi-siamo.astro
    servizi.astro
    contatti.astro
    privacy.astro
    cookie.astro
  styles/
    global.css
public/
  images/
  favicon.ico
  robots.txt
astro.config.mjs
```

---

## 14) Palette e stile

- Primario: `#00AEEF`
- Secondario: `#EC008C`
- Testo principale: tonalita scura ad alto contrasto
- Tipografia: Inter (fallback system sans-serif)
- Look & feel: pulito, professionale, locale, orientato all'azione
- Direzione visual: moderna, minimal, spacing ampio, card pulite, micro-animazioni leggere (solo CSS)

---

## 15) Prompt master v2.0 per Cursor (copia/incolla)

```text
Agisci come senior web developer + technical SEO specialist.

Obiettivo: costruire un sito web statico completo per MEDIA Cart (Milano Bicocca) usando Astro con output statico.

Contesto business:
- Brand: MEDIA Cart
- Nome scheda Google Maps: Media Print - Centro Stampa
- Settore: Cartoleria e Tipografia Digitale
- Indirizzo: Viale Sarca, 163, 20126 Milano MI
- Tel1: +39 351 554 4449
- Tel2: 02 4002 5540
- Email: info@centrostampa.srl
- Orari: Lun-Sab 09:00-13:00 / 14:00-19:00
- Domenica: Chiuso
- Link Google Maps ufficiale: https://maps.app.goo.gl/7gMguGpeDLa3ozq37
- Copertura: solo negozio fisico a Milano (no spedizioni nazionali nel copy)
- Target primario: studenti Bicocca (stampa tesi)
- Target secondario: aziende/privati (stampa promo)
- Social proof: Google 4,9/5 su 363 recensioni
- Partner da mostrare con placeholder logo:
  - https://print.stampelowcost.com/
  - https://centrostampa.srl/

Requisiti tecnici:
1) Usa Astro statico (output: 'static').
2) Crea esattamente queste pagine:
   - /
   - /chi-siamo
   - /servizi
   - /contatti
   - /privacy
   - /cookie
3) Crea componenti riusabili:
   - Header, Footer, ServizioCard, CTAStickyMobile
4) Implementa SEO tecnico:
   - title/meta description unici per pagina
   - canonical
   - Open Graph base
   - JSON-LD LocalBusiness nel layout base
   - robots.txt
   - sitemap con @astrojs/sitemap
5) Performance:
   - immagini ottimizzate e lazy loading
   - minimo JS
   - font ottimizzati (display=swap)
6) UX conversione:
   - numeri cliccabili (tel:)
   - bottone WhatsApp ben visibile
   - form contatti con label accessibili
   - CTA principali: "Chiedi preventivo" e "Contattaci"
7) Processo cliente (da spiegare nella Home e Contatti):
   - Contatto (WhatsApp/telefono)
   - Verifica file e necessita
   - Preventivo e conferma
   - Ritiro in negozio
7) Contenuti:
   - tono professionale, chiaro, locale
   - keyword integrate in modo naturale (no keyword stuffing)
   - sezione #stampa-tesi molto completa in /servizi
   - evitare promesse assolute o tempi garantiti non verificabili

Keyword target principali:
- stampa tesi Milano Bicocca
- copisteria Bicocca Milano
- stampa tesi laurea Milano
- tipografia Milano Bicocca
- stampa banner Milano
- cartoleria Viale Sarca Milano

Output richiesto:
- Genera tutti i file del progetto con codice completo.
- Includi anche `astro.config.mjs` e `public/robots.txt`.
- Se manca un dato bloccante (es. dominio finale per canonical/og:url), usa placeholder `https://example.it` e aggiungi TODO esplicito.
- Non usare framework JS aggiuntivi.
- Non usare librerie superflue.

Criteri di qualita:
- Codice ordinato, leggibile, pronto al deploy su Cloudflare Pages.
- Nessun errore di build.
- Design coerente con palette (#00AEEF, #EC008C) e stile moderno.
```

---

## 16) Testi legali sorgente (da usare nelle pagine)

### Privacy policy (`/privacy-policy/`)
- Base legale e contenuto: usare il testo fornito da Media Print Srl (GDPR + D.Lgs. 196/03).
- Titolare: Media Print Srl, Viale Sarca 163, Milano.
- Mantenere struttura in sezioni numerate come fornita.
- Inserire in fondo contatto per esercizio diritti privacy.

### Cookie policy (`/cookie-policy/`)
- Usare il testo fornito da Media Print Srl.
- Includere sezioni su cookie tecnici, analytics e marketing.
- Includere gestione consenso e link opt-out Google Analytics.

Nota editoriale:
- Uniformare i refusi normativi nel testo legale prima della pubblicazione (es. "20016/679" -> "2016/679").
- Evitare di modificare il senso giuridico, fare solo correzioni formali.

---

## 17) Deploy Cloudflare Pages (rapido)

1. Repository GitHub con progetto Astro
2. Cloudflare Pages -> Create project -> Connect to Git
3. Build command: `npm run build`
4. Output directory: `dist`
5. Collegare dominio custom

---

## 18) Checklist finale pre-go-live

### Tecnico/SEO
- [ ] Build Astro senza errori
- [ ] Sitemap raggiungibile
- [ ] robots.txt corretto
- [ ] title/meta/canonical su tutte le pagine
- [ ] JSON-LD valido (test Rich Results)

### Contenuto/Conversione
- [ ] Telefoni cliccabili
- [ ] WhatsApp funzionante
- [ ] Form contatti funzionante
- [ ] Orari e indirizzo corretti
- [ ] Sezione "stampa tesi" completa
- [ ] Sezione "Come funziona" in 4 passi presente
- [ ] Social proof "4,9/5 - 363 recensioni" visibile in Home
- [ ] Placeholder logo partner inseriti

### Legale
- [ ] Privacy policy presente
- [ ] Cookie policy presente
- [ ] Banner consenso se uso script non tecnici

---

Documento interno MEDIA Cart - v2.0
