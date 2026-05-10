/**
 * Seed migration for the venaritravel home page.
 *
 * Run from the repo root:
 *   PRISMIC_WRITE_TOKEN=••• npm run seed
 *
 * The script registers a single `page` document with UID `home` containing
 * all eight landing-page slices, populated with copy in castellano. After
 * the run, open Prismic, review the imported draft, and publish manually.
 *
 * Asset URLs reference Unsplash placeholders that match the design spec's
 * imagery direction. They MUST be replaced with curated photography before
 * the site goes public; the brand requires real material rather than stock.
 */

import * as prismic from "@prismicio/client";
import sm from "../slicemachine.config.json";
import type { AllDocumentTypes } from "../prismicio-types";

type ImageInput = {
  url: string;
  filename: string;
  alt: string;
};

const REPO = sm.repositoryName;

// Document locale. Defaults to es-es (Spanish copy). Override with
// PRISMIC_LOCALE=en-us to seed under the default locale of a fresh repo.
const LOCALE = process.env.PRISMIC_LOCALE ?? "es-es";

const WRITE_TOKEN = process.env.PRISMIC_WRITE_TOKEN;
if (!WRITE_TOKEN) {
  console.error(
    "[seed] Missing PRISMIC_WRITE_TOKEN. Generate one at\n" +
      `  https://${REPO}.prismic.io/settings/apps\n` +
      "and re-run with `PRISMIC_WRITE_TOKEN=… npm run seed`.",
  );
  process.exit(1);
}

/* --------------------------------------------------------------------- */
/* Imagery placeholders                                                   */
/* --------------------------------------------------------------------- */

const heroImg: ImageInput = {
  url: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2400&q=80",
  filename: "hero-amanecer-encinar.jpg",
  alt: "Niebla de amanecer sobre encinar",
};

const cazaMayorImg: ImageInput = {
  url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1400&q=80",
  filename: "modalidad-caza-mayor.jpg",
  alt: "Niebla sobre dehesa al amanecer",
};

const cabraMontesImg: ImageInput = {
  url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1400&q=80",
  filename: "modalidad-cabra-montes.jpg",
  alt: "Sierra al alba",
};

const cazaMenorImg: ImageInput = {
  url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1400&q=80",
  filename: "modalidad-caza-menor.jpg",
  alt: "Campo castellano en otoño",
};

const territorioImg: ImageInput = {
  url: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=2400&q=80",
  filename: "territorio-sierra-bruma.jpg",
  alt: "Sierra al amanecer con bruma baja",
};

const detalleImg: ImageInput = {
  url: "https://images.unsplash.com/photo-1432821596592-e2c18b78144f?auto=format&fit=crop&w=1400&q=80",
  filename: "detalle-cuero.jpg",
  alt: "Detalle de cuero curtido",
};

/* --------------------------------------------------------------------- */
/* Migration                                                              */
/* --------------------------------------------------------------------- */

const migration = prismic.createMigration<AllDocumentTypes>();

const heroAsset = migration.createAsset(heroImg.url, heroImg.filename, {
  alt: heroImg.alt,
});
const cazaMayorAsset = migration.createAsset(
  cazaMayorImg.url,
  cazaMayorImg.filename,
  { alt: cazaMayorImg.alt },
);
const cabraMontesAsset = migration.createAsset(
  cabraMontesImg.url,
  cabraMontesImg.filename,
  { alt: cabraMontesImg.alt },
);
const cazaMenorAsset = migration.createAsset(
  cazaMenorImg.url,
  cazaMenorImg.filename,
  { alt: cazaMenorImg.alt },
);
const territorioAsset = migration.createAsset(
  territorioImg.url,
  territorioImg.filename,
  { alt: territorioImg.alt },
);
const detalleAsset = migration.createAsset(detalleImg.url, detalleImg.filename, {
  alt: detalleImg.alt,
});

migration.createDocument(
  {
    type: "page",
    uid: "home",
    lang: LOCALE,
    tags: ["home", "landing"],
    data: {
      title: [
        {
          type: "heading1",
          text: "venaritravel",
          spans: [],
        },
      ],
      meta_title: "venaritravel: el arte de cazar en España",
      meta_description:
        "Agencia privada de caza en España. Programas a medida en dehesas extremeñas, sierras béticas y casonas castellanas.",
      meta_image: heroAsset,
      slices: [
        /* 1. Hero ------------------------------------------------------- */
        {
          slice_type: "hero",
          variation: "default",
          version: "sktwi1xtmkfgx8626",
          slice_label: null,
          primary: {
            background_image: heroAsset,
            headline: [
              {
                type: "heading1",
                text: "El arte de cazar en España, sin gestionar nada.",
                spans: [{ type: "em", start: 28, end: 46 }],
              },
            ],
            scroll_cue_label: "Continuar",
          },
          items: [],
        },

        /* 2. Manifiesto ------------------------------------------------- */
        {
          slice_type: "manifiesto",
          variation: "default",
          version: "sktwi1xtmkfgx8626",
          slice_label: null,
          primary: {
            eyebrow: "Manifiesto",
            statement: [
              {
                type: "heading2",
                text: "La caza, en España, es el oficio. |Lo demás lo organizamos nosotros.",
                spans: [{ type: "em", start: 23, end: 32 }],
              },
            ],
            support: [
              {
                type: "paragraph",
                text: "Trabajamos con un número limitado de fincas privadas en Castilla, Extremadura y Andalucía. Cada programa se construye sobre una conversación, no sobre un catálogo.",
                spans: [],
              },
            ],
          },
          items: [],
        },

        /* 3. Modalidades ------------------------------------------------ */
        {
          slice_type: "modalidades",
          variation: "default",
          version: "sktwi1xtmkfgx8626",
          slice_label: null,
          primary: {
            eyebrow: "Modalidades",
            section_title: [
              {
                type: "heading2",
                text: "Tres modalidades, fincas privadas, una conversación cada vez.",
                spans: [],
              },
            ],
            modalidades: [
              {
                image: cazaMayorAsset,
                name: [
                  { type: "heading3", text: "Caza mayor", spans: [] },
                ],
                description: [
                  {
                    type: "paragraph",
                    text: "Monterías clásicas en dehesas extremeñas y serranías béticas. Ciervo, gamo y jabalí en lances de tradición castellana, con rehalas reconocidas y cuadrillas de la finca.",
                    spans: [],
                  },
                ],
                tags: "monterías, recechos, aguardos",
              },
              {
                image: cabraMontesAsset,
                name: [
                  { type: "heading3", text: "Cabra montés", spans: [] },
                ],
                description: [
                  {
                    type: "paragraph",
                    text: "Recechos en sierras de Gredos, Beceite y Sierra Nevada. Ascensión a primera luz con guía local; trofeos medibles, tiempos sin prisa, regreso a casa rural privada.",
                    spans: [],
                  },
                ],
                tags: "Gredos, Beceite, Sierra Nevada",
              },
              {
                image: cazaMenorAsset,
                name: [
                  { type: "heading3", text: "Caza menor", spans: [] },
                ],
                description: [
                  {
                    type: "paragraph",
                    text: "Ojeos de perdiz roja en fincas de Toledo y Ciudad Real. Jornadas de tradición inglesa adaptada a campo castellano, con perros de muestra, almuerzo en cortijo y un ritmo deliberado.",
                    spans: [],
                  },
                ],
                tags: "perdiz roja, ojeos, paloma torcaz",
              },
            ],
          },
          items: [],
        },

        /* 4. Proceso ---------------------------------------------------- */
        {
          slice_type: "proceso",
          variation: "default",
          version: "sktwi1xtmkfgx8626",
          slice_label: null,
          primary: {
            eyebrow: "Cómo trabajamos",
            section_title: [
              {
                type: "heading2",
                text: "Cuatro pasos. Sin formularios largos, sin catálogo.",
                spans: [],
              },
            ],
            steps: [
              {
                number: "01",
                title: [
                  { type: "heading3", text: "Consulta privada", spans: [] },
                ],
                description: [
                  {
                    type: "paragraph",
                    text: "Una conversación de cuarenta minutos por teléfono. Modalidad, fechas, número de invitados, expectativas.",
                    spans: [],
                  },
                ],
              },
              {
                number: "02",
                title: [
                  { type: "heading3", text: "Propuesta a medida", spans: [] },
                ],
                description: [
                  {
                    type: "paragraph",
                    text: "Documento breve con finca, días, alojamiento, comidas y tarifa cerrada. Sin extras escondidos.",
                    spans: [],
                  },
                ],
              },
              {
                number: "03",
                title: [
                  { type: "heading3", text: "Preparación", spans: [] },
                ],
                description: [
                  {
                    type: "paragraph",
                    text: "Permisos, traslados internos, alquiler de armas si procede, menús, vinos. Un único interlocutor desde la propuesta.",
                    spans: [],
                  },
                ],
              },
              {
                number: "04",
                title: [
                  { type: "heading3", text: "La jornada", spans: [] },
                ],
                description: [
                  {
                    type: "paragraph",
                    text: "Acompañamiento discreto en finca durante los días de caza. Lo único que pedimos es que llegue con tiempo y se quede a la sobremesa.",
                    spans: [],
                  },
                ],
              },
            ],
          },
          items: [],
        },

        /* 5. Territorio ------------------------------------------------- */
        {
          slice_type: "territorio",
          variation: "default",
          version: "sktwi1xtmkfgx8626",
          slice_label: null,
          primary: {
            image: territorioAsset,
            caption: [
              {
                type: "paragraph",
                text: "Bruma de octubre a primera luz; los recechos comienzan antes del alba y terminan en la cocina de la casa rural.",
                spans: [],
              },
            ],
            location_label: "Sierra de Gredos · Castilla y León",
          },
          items: [],
        },

        /* 6. DetalleEditorial ------------------------------------------- */
        {
          slice_type: "detalle_editorial",
          variation: "default",
          version: "sktwi1xtmkfgx8626",
          slice_label: null,
          primary: {
            eyebrow: "Detalle",
            headline: [
              {
                type: "heading2",
                text: "El equipo, el guante, la cocina.",
                spans: [],
              },
            ],
            body: [
              {
                type: "paragraph",
                text: "Trabajamos con casas y armerías que entienden el oficio. Si llega sin equipo, alquilamos en la finca; si quiere traer el suyo, gestionamos el permiso temporal.",
                spans: [],
              },
              {
                type: "paragraph",
                text: "Las cenas no son una atracción turística. Son las que hace la casa, con vinos de la zona, en la mesa larga del comedor.",
                spans: [],
              },
            ],
            image: detalleAsset,
            image_position: "left",
          },
          items: [],
        },

        /* 7. Confianza -------------------------------------------------- */
        {
          slice_type: "confianza",
          variation: "default",
          version: "sktwi1xtmkfgx8626",
          slice_label: null,
          primary: {
            eyebrow: "Confianza",
            statement: [
              {
                type: "heading2",
                text: "El modelo es relacional. Pocos clientes, mucho tiempo, ninguna transacción a ciegas.",
                spans: [{ type: "em", start: 13, end: 23 }],
              },
            ],
            pillars: [
              {
                label: "Tarifa cerrada",
                text: [
                  {
                    type: "paragraph",
                    text: "Una cifra que cubre la jornada completa: alojamiento, comidas, traslados, derechos de finca y trofeo.",
                    spans: [],
                  },
                ],
              },
              {
                label: "Concierge dedicado",
                text: [
                  {
                    type: "paragraph",
                    text: "Un único interlocutor desde la primera llamada hasta el regreso. Sin transferencias internas, sin call centers.",
                    spans: [],
                  },
                ],
              },
              {
                label: "Acceso curado",
                text: [
                  {
                    type: "paragraph",
                    text: "Fincas privadas que no aparecen en catálogos. Ocupación reducida, calendarios reservados con un año de antelación.",
                    spans: [],
                  },
                ],
              },
            ],
          },
          items: [],
        },

        /* 8. Contacto --------------------------------------------------- */
        {
          slice_type: "contacto",
          variation: "default",
          version: "sktwi1xtmkfgx8626",
          slice_label: null,
          primary: {
            eyebrow: "Contacto",
            headline: [
              {
                type: "heading2",
                text: "Solicitar consulta privada",
                spans: [],
              },
            ],
            intro: [
              {
                type: "paragraph",
                text: "Cuéntenos qué busca. Respondemos en menos de cuarenta y ocho horas con una llamada o una propuesta inicial, según corresponda.",
                spans: [],
              },
            ],
            submit_label: "Enviar consulta",
            success_message: [
              {
                type: "heading2",
                text: "Recibido. Gracias.",
                spans: [],
              },
              {
                type: "paragraph",
                text: "Le escribiremos en menos de cuarenta y ocho horas para concertar una llamada.",
                spans: [],
              },
            ],
            legal_note: [
              {
                type: "paragraph",
                text: "Tratamos los datos con discreción y nunca los compartimos. Consulte el aviso de privacidad.",
                spans: [],
              },
            ],
          },
          items: [],
        },
      ],
    },
  },
  "Home",
);

/* --------------------------------------------------------------------- */
/* Run                                                                    */
/* --------------------------------------------------------------------- */

const writeClient = prismic.createWriteClient(REPO, {
  writeToken: WRITE_TOKEN,
});

writeClient
  .migrate(migration, {
    reporter: (event) => {
      const verb =
        event.type === "start" ? "▶" : event.type === "end" ? "✓" : "•";
      console.log(`${verb} ${event.type}`, event.data ?? "");
    },
  })
  .then(() => {
    console.log("\nMigration complete. Open Prismic and publish the draft.");
    process.exit(0);
  })
  .catch((err) => {
    console.error("Migration failed:");
    console.error(err);
    const response = (err as { response?: unknown })?.response;
    if (response && typeof response === "object") {
      console.error("\nResponse details:");
      console.error(JSON.stringify(response, null, 2));
    }
    process.exit(1);
  });
