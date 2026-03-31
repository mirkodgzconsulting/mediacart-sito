/** Tre servizi in evidenza: home e pagina /servizi */
export interface ServizioEvidenza {
  titolo: string;
  descrizione: string;
  href: string;
  immagineSrc: string;
  immagineAlt: string;
  /** Dimensioni intrinseche dell'immagine (Lighthouse / CLS) */
  immagineWidth: number;
  immagineHeight: number;
}

export const serviziEvidenza: ServizioEvidenza[] = [
  {
    titolo: "Stampa Tesi di Laurea",
    descrizione:
      "Servizio dedicato agli studenti Biccoca con stampa e rilegatura professionale, anche per urgenze.",
    href: "/servizi#stampa-tesi",
    immagineSrc: "/assets/Tesi-001.avif",
    immagineAlt: "Stampa e rilegatura tesi di laurea",
    immagineWidth: 600,
    immagineHeight: 600,
  },
  {
    titolo: "Grande Formato",
    descrizione:
      "Poster, banner, roll-up e materiali visivi per eventi, negozi e presentazioni professionali.",
    href: "/servizi#grande-formato-pannelli",
    immagineSrc: "/assets/grande_formato.webp",
    immagineAlt: "Stampa grande formato: poster e materiali promozionali",
    immagineWidth: 500,
    immagineHeight: 500,
  },
  {
    titolo: "Piccolo Formato",
    descrizione:
      "Volantini, brochure, biglietti da visita e stampati aziendali curati in ogni dettaglio.",
    href: "/servizi#piccolo-formato",
    immagineSrc: "/assets/piccoloformato.webp",
    immagineAlt: "Stampa piccolo formato: volantini, brochure e biglietti",
    immagineWidth: 500,
    immagineHeight: 500,
  },
];
