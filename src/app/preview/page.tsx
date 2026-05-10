/**
 * Local preview of the home page with mock data.
 *
 * This route lets you inspect the eight landing-page slices without running
 * the Prismic seed migration. Visit /preview while the dev server runs.
 * It is safe to keep in production but is unlinked from the public site.
 */

import { type FC } from "react";
import type { Content } from "@prismicio/client";

import Hero from "@/slices/Hero";
import Manifiesto from "@/slices/Manifiesto";
import Modalidades from "@/slices/Modalidades";
import Proceso from "@/slices/Proceso";
import Territorio from "@/slices/Territorio";
import DetalleEditorial from "@/slices/DetalleEditorial";
import Confianza from "@/slices/Confianza";
import Contacto from "@/slices/Contacto";

const mockImage = (
  url: string,
  width: number,
  height: number,
  alt: string,
) => ({
  url,
  alt,
  copyright: null,
  dimensions: { width, height },
  edit: { x: 0, y: 0, zoom: 1, background: "transparent" as const },
  id: "mock",
});

type Range = [number, number];
const emSpans = (ranges: Range[]) =>
  ranges.map(([start, end]) => ({ type: "em", start, end }));

const richHeading2 = (text: string, em: Range[] = []) =>
  [{ type: "heading2", text, spans: emSpans(em), direction: "ltr" }] as never;

const richHeading1 = (text: string, em: Range[] = []) =>
  [{ type: "heading1", text, spans: emSpans(em), direction: "ltr" }] as never;

const richHeading3 = (text: string) =>
  [{ type: "heading3", text, spans: [], direction: "ltr" }] as never;

const richMulti = (...paragraphs: string[]) =>
  paragraphs.map((text) => ({
    type: "paragraph",
    text,
    spans: [],
    direction: "ltr",
  })) as never;

const sliceMeta = {
  variation: "default" as const,
  version: "sktwi1xtmkfgx8626",
  slice_label: null,
  id: "mock",
};

const heroSlice = {
  ...sliceMeta,
  slice_type: "hero",
  primary: {
    background_image: mockImage(
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2400&q=80",
      2400,
      1600,
      "Niebla de amanecer sobre encinar",
    ),
    headline: richHeading1("El arte de cazar en España, sin gestionar nada.", [
      [28, 46],
    ]),
    scroll_cue_label: "Continuar",
  },
  items: [],
} as unknown as Content.HeroSlice;

const manifiestoSlice = {
  ...sliceMeta,
  slice_type: "manifiesto",
  primary: {
    eyebrow: "Manifiesto",
    statement: richHeading2(
      "La caza, en España, es el oficio. |Lo demás lo organizamos nosotros.",
      [[23, 32]],
    ),
    support: richMulti(
      "Trabajamos con un número limitado de fincas privadas en Castilla, Extremadura y Andalucía. Cada programa se construye sobre una conversación, no sobre un catálogo.",
    ),
  },
  items: [],
} as unknown as Content.ManifiestoSlice;

const modalidadesSlice = {
  ...sliceMeta,
  slice_type: "modalidades",
  primary: {
    eyebrow: "Modalidades",
    section_title: richHeading2(
      "Tres modalidades, fincas privadas, una conversación cada vez.",
    ),
    modalidades: [
      {
        image: mockImage(
          "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1400&q=80",
          1400,
          1750,
          "Niebla sobre dehesa al amanecer",
        ),
        name: richHeading3("Caza mayor"),
        description: richMulti(
          "Monterías clásicas en dehesas extremeñas y serranías béticas. Ciervo, gamo y jabalí en lances de tradición castellana, con rehalas reconocidas y cuadrillas de la finca.",
        ),
        tags: "monterías, recechos, aguardos",
      },
      {
        image: mockImage(
          "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1400&q=80",
          1400,
          1750,
          "Sierra al alba",
        ),
        name: richHeading3("Cabra montés"),
        description: richMulti(
          "Recechos en sierras de Gredos, Beceite y Sierra Nevada. Ascensión a primera luz con guía local; trofeos medibles, tiempos sin prisa, regreso a casa rural privada.",
        ),
        tags: "Gredos, Beceite, Sierra Nevada",
      },
      {
        image: mockImage(
          "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1400&q=80",
          1400,
          1750,
          "Campo castellano en otoño",
        ),
        name: richHeading3("Caza menor"),
        description: richMulti(
          "Ojeos de perdiz roja en fincas de Toledo y Ciudad Real. Jornadas de tradición inglesa adaptada a campo castellano, con perros de muestra, almuerzo en cortijo y un ritmo deliberado.",
        ),
        tags: "perdiz roja, ojeos, paloma torcaz",
      },
    ],
  },
  items: [],
} as unknown as Content.ModalidadesSlice;

const procesoSlice = {
  ...sliceMeta,
  slice_type: "proceso",
  primary: {
    eyebrow: "Cómo trabajamos",
    section_title: richHeading2(
      "Cuatro pasos. Sin formularios largos, sin catálogo.",
    ),
    steps: [
      {
        number: "01",
        title: richHeading3("Consulta privada"),
        description: richMulti(
          "Una conversación de cuarenta minutos por teléfono. Modalidad, fechas, número de invitados, expectativas.",
        ),
      },
      {
        number: "02",
        title: richHeading3("Propuesta a medida"),
        description: richMulti(
          "Documento breve con finca, días, alojamiento, comidas y tarifa cerrada. Sin extras escondidos.",
        ),
      },
      {
        number: "03",
        title: richHeading3("Preparación"),
        description: richMulti(
          "Permisos, traslados internos, alquiler de armas si procede, menús, vinos. Un único interlocutor desde la propuesta.",
        ),
      },
      {
        number: "04",
        title: richHeading3("La jornada"),
        description: richMulti(
          "Acompañamiento discreto en finca durante los días de caza. Lo único que pedimos es que llegue con tiempo y se quede a la sobremesa.",
        ),
      },
    ],
  },
  items: [],
} as unknown as Content.ProcesoSlice;

const territorioSlice = {
  ...sliceMeta,
  slice_type: "territorio",
  primary: {
    image: mockImage(
      "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=2400&q=80",
      2400,
      1350,
      "Sierra al amanecer con bruma baja",
    ),
    caption: richMulti(
      "Bruma de octubre a primera luz; los recechos comienzan antes del alba y terminan en la cocina de la casa rural.",
    ),
    location_label: "Sierra de Gredos · Castilla y León",
  },
  items: [],
} as unknown as Content.TerritorioSlice;

const detalleSlice = {
  ...sliceMeta,
  slice_type: "detalle_editorial",
  primary: {
    eyebrow: "Detalle",
    headline: richHeading2("El equipo, el guante, la cocina."),
    body: richMulti(
      "Trabajamos con casas y armerías que entienden el oficio. Si llega sin equipo, alquilamos en la finca; si quiere traer el suyo, gestionamos el permiso temporal.",
      "Las cenas no son una atracción turística. Son las que hace la casa, con vinos de la zona, en la mesa larga del comedor.",
    ),
    image: mockImage(
      "https://images.unsplash.com/photo-1432821596592-e2c18b78144f?auto=format&fit=crop&w=1400&q=80",
      1400,
      1960,
      "Detalle de cuero curtido",
    ),
    image_position: "left",
  },
  items: [],
} as unknown as Content.DetalleEditorialSlice;

const confianzaSlice = {
  ...sliceMeta,
  slice_type: "confianza",
  primary: {
    eyebrow: "Confianza",
    statement: richHeading2(
      "El modelo es relacional. Pocos clientes, mucho tiempo, ninguna transacción a ciegas.",
      [[13, 23]],
    ),
    pillars: [
      {
        label: "Tarifa cerrada",
        text: richMulti(
          "Una cifra que cubre la jornada completa: alojamiento, comidas, traslados, derechos de finca y trofeo.",
        ),
      },
      {
        label: "Concierge dedicado",
        text: richMulti(
          "Un único interlocutor desde la primera llamada hasta el regreso. Sin transferencias internas, sin call centers.",
        ),
      },
      {
        label: "Acceso curado",
        text: richMulti(
          "Fincas privadas que no aparecen en catálogos. Ocupación reducida, calendarios reservados con un año de antelación.",
        ),
      },
    ],
  },
  items: [],
} as unknown as Content.ConfianzaSlice;

const contactoSlice = {
  ...sliceMeta,
  slice_type: "contacto",
  primary: {
    eyebrow: "Contacto",
    headline: richHeading2("Solicitar consulta privada"),
    intro: richMulti(
      "Cuéntenos qué busca. Respondemos en menos de cuarenta y ocho horas con una llamada o una propuesta inicial, según corresponda.",
    ),
    submit_label: "Enviar consulta",
    success_message: [
      ...richHeading2("Recibido. Gracias."),
      ...richMulti(
        "Le escribiremos en menos de cuarenta y ocho horas para concertar una llamada.",
      ),
    ] as never,
    legal_note: richMulti(
      "Tratamos los datos con discreción y nunca los compartimos. Consulte el aviso de privacidad.",
    ),
  },
  items: [],
} as unknown as Content.ContactoSlice;

const PreviewPage: FC = () => {
  return (
    <>
      <Hero slice={heroSlice} index={0} slices={[]} context={{}} />
      <Manifiesto slice={manifiestoSlice} index={1} slices={[]} context={{}} />
      <Modalidades slice={modalidadesSlice} index={2} slices={[]} context={{}} />
      <Proceso slice={procesoSlice} index={3} slices={[]} context={{}} />
      <Territorio slice={territorioSlice} index={4} slices={[]} context={{}} />
      <DetalleEditorial
        slice={detalleSlice}
        index={5}
        slices={[]}
        context={{}}
      />
      <Confianza slice={confianzaSlice} index={6} slices={[]} context={{}} />
      <Contacto slice={contactoSlice} index={7} slices={[]} context={{}} />
    </>
  );
};

export default PreviewPage;

export const metadata = {
  title: "Preview · venaritravel",
  description: "Local preview of the landing page slices with mock data.",
  robots: { index: false, follow: false },
};
