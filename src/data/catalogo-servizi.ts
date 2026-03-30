export type CatalogCategory = {
  id: string;
  title: string;
  intro: string;
  items: string[];
};

export const catalogoServizi: CatalogCategory[] = [
  {
    id: "piccolo-formato",
    title: "Piccolo formato",
    intro:
      "Stampa professionale per comunicazione quotidiana e materiali commerciali: biglietti da visita, volantini, pieghevoli e molto altro. Preventivo e ritiro in negozio a Milano.",
    items: [
      "Biglietti da visita (angoli arrotondati, quadrati, spessorati, PVC, lusso, pieghevoli, plastificati)",
      "Volantini / Flyer",
      "Locandine",
      "Cartoline & Inviti",
      "Pieghevoli (brochure, depliant)",
      "Buste",
      "Cartelline personalizzate",
      "Cartellini",
      "Timbri personalizzati",
      "Altri formati / Fogli macchina"
    ]
  },
  {
    id: "riviste-libri-cataloghi",
    title: "Riviste, libri & cataloghi",
    intro:
      "Impaginazione e stampa di pubblicazioni con diverse rilegature e finiture. Ideale per editoria leggera, cataloghi aziendali e progetti editoriali.",
    items: [
      "Brossura (grecata, cucita filo refe, nobilitata)",
      "Copertina rigida nobilitata",
      "Libri (arte, cucina, tascabili, da colorare, manga, fumetti)",
      "Riviste",
      "Cataloghi / Lookbook",
      "Opuscoli / Pieghevoli informativi",
      "Punto metallico (normale e nobilitato)",
      "Spirale (metallica e nobilitata)",
      "Fotolibri",
      "Annuari / Ricettari / Manuali",
      "Autopubblicazioni / Self-publishing",
      "Schede non rilegate / Segnalibri"
    ]
  },
  {
    id: "etichette-sticker",
    title: "Etichette & sticker",
    intro:
      "Adesivi ed etichette per packaging, logistica, retail e personalizzazione prodotti, anche in bobina e resina.",
    items: [
      "Etichette adesive (normali, bobina, resinate)",
      "Etichette da stampare",
      "Adesivi grande formato",
      "Nastro adesivo (normale, fragile, imballaggio)",
      "Termoadesivi tessuti DTF"
    ]
  },
  {
    id: "grande-formato-pannelli",
    title: "Grande formato & pannelli",
    intro:
      "Comunicazione visiva di impatto: poster, supporti rigidi, manifesti e soluzioni per vetrine ed eventi in zona Milano.",
    items: [
      "Stampa poster alta qualita",
      "Stampa PVC / Adesivi",
      "Striscioni microforato",
      "Supporti rigidi (Forex, alluminio, plexiglas)",
      "Fotoquadri",
      "Targhe",
      "Adesivi magnetici auto",
      "Manifesti per affissione (standard, personalizzati, maxi affissioni)"
    ]
  },
  {
    id: "striscioni-tessuti",
    title: "Striscioni & tessuti",
    intro:
      "Stampa su tessuto e supporti flessibili per eventi, negozi e allestimenti temporanei.",
    items: [
      "Bandiere (vari formati)",
      "Canvas",
      "Tessuti alta qualita",
      "Abbigliamento stampato"
    ]
  },
  {
    id: "espositori-stand",
    title: "Espositori & stand",
    intro:
      "Stand portatili, roll-up e allestimenti per fiere, punti vendita e promozioni sul territorio.",
    items: [
      "Roll-up",
      "Banner stand",
      "Backdrop",
      "Totem pubblicitari",
      "Cavalletti pubblicitari",
      "Desk promozionali",
      "Espositori fieristici / da banco / esterno",
      "Bandiere pubblicitarie",
      "Cornici tessuto tensione (parete, retroilluminata)",
      "Sedute / Gazebo"
    ]
  },
  {
    id: "packaging",
    title: "Packaging",
    intro:
      "Scatole, buste e packaging flessibile personalizzato per e-commerce, food, cosmetica e retail.",
    items: [
      "Scatole personalizzate (su misura, e-commerce, spedizione, postali)",
      "Scatole con chiusura magnetica",
      "Scatole per regali / cosmetici / gioielli / bomboniere / vino",
      "Buste doypack / stand-up / zip / piatte",
      "Packaging alimentare / caffe / spezie / cosmetici / abbigliamento / pet food",
      "Carta imballaggio / carta per confezioni",
      "Packaging flessibile personalizzato"
    ]
  },
  {
    id: "shopper-borse",
    title: "Shopper & borse",
    intro:
      "Borse e sacchetti personalizzati per negozi, eventi e brand identity.",
    items: ["Borse di carta", "Borse in tessuto", "Sacchetti stoffa"]
  },
  {
    id: "stampa-foto",
    title: "Stampa foto",
    intro:
      "Stampa fotografica e decorazioni personalizzate su supporti diversi, ideali per casa e regali.",
    items: [
      "Foto su tela / canvas / alluminio / forex",
      "Quadri canvas",
      "Cuscini personalizzati",
      "Decorazioni da parete",
      "Pannelli fotografici",
      "Photo booth / Cornici selfie",
      "Sacche / Shopper personalizzate"
    ]
  },
  {
    id: "gadget-personalizzati",
    title: "Gadget personalizzati",
    intro:
      "Merchandising e oggetti promozionali con logo per aziende, team ed eventi.",
    items: [
      "Abbigliamento lavoro (t-shirt, felpe, bomber, giacche)",
      "Borracce / Bicchieri termici",
      "Auricolari / Altoparlanti bluetooth",
      "Block notes / Agende / Penne",
      "Zaini / Sacche / Beauty case",
      "Power bank / Accessori tech",
      "Articoli da cucina",
      "Articoli pubblicitari generici"
    ]
  },
  {
    id: "calendari-agende",
    title: "Calendari & agende",
    intro:
      "Calendari da parete o da tavolo e agende personalizzate per uffici, clienti e campagne stagionali.",
    items: [
      "Calendari da parete / da tavolo / poster / tascabili",
      "Calendari punto metallico / trittici / quadrittici",
      "Agende (spirale, copertina rigida)",
      "Planning / Mini calendari / Segnalibri"
    ]
  },
  {
    id: "carte-tessere-pvc",
    title: "Carte & tessere PVC",
    intro:
      "Tessere in plastica per fedelta, gift card e programmi membership con finiture premium.",
    items: [
      "Gift card personalizzate",
      "Tessere magnetiche",
      "Luxury card PVC",
      "Scratch card",
      "Carte fedelta",
      "Tessere associative"
    ]
  },
  {
    id: "settori-verticali",
    title: "Settori verticali",
    intro:
      "Soluzioni di stampa pensate per settori specifici: dalla ristorazione agli eventi, dal retail alla comunicazione elettorale.",
    items: [
      "Ristorazione: menu, etichette, volantini, allestimento tavola",
      "Food & Beverage: bar/pub, catering, forno/pasticceria",
      "Matrimonio: inviti, libretto messa, menu, poster, quadri",
      "Materiale elettorale: manifesti, volantini, santini, striscioni",
      "Bellezza & Fitness: parrucchieri, estetiste, personal trainer, tatuatori",
      "Negozi & Retail: insegne, cartelli, volantini",
      "Arte & Intrattenimento: poster eventi, cartoline, biglietti da visita artisti"
    ]
  }
];
