/** Tre servizi in evidenza: home e pagina /servizi */
export interface ServizioEvidenza {
  titolo: string;
  descrizione: string;
  href: string;
  immagineSrc: string;
  immagineAlt: string;
}

export const serviziEvidenza: ServizioEvidenza[] = [
  {
    titolo: "Stampa Tesi di Laurea",
    descrizione:
      "Servizio dedicato agli studenti Biccoca con stampa e rilegatura professionale, anche per urgenze.",
    href: "/servizi#stampa-tesi",
    immagineSrc: "/assets/Tesi-001.avif",
    immagineAlt: "Stampa e rilegatura tesi di laurea",
  },
  {
    titolo: "Grande Formato",
    descrizione:
      "Poster, banner, roll-up e materiali visivi per eventi, negozi e presentazioni professionali.",
    href: "/servizi#grande-formato-pannelli",
    immagineSrc: "/assets/grande_formato.jpg",
    immagineAlt: "Stampa grande formato: poster e materiali promozionali",
  },
  {
    titolo: "Piccolo Formato",
    descrizione:
      "Volantini, brochure, biglietti da visita e stampati aziendali curati in ogni dettaglio.",
    href: "/servizi#piccolo-formato",
    immagineSrc: "/assets/piccoloformato.jpg",
    immagineAlt: "Stampa piccolo formato: volantini, brochure e biglietti",
  },
];
