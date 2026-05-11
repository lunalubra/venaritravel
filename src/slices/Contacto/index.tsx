import { type FC } from "react";
import { type Content, isFilled } from "@prismicio/client";
import { PrismicRichText, type SliceComponentProps } from "@prismicio/react";

import { ContactForm } from "@/components/ContactForm";
import { withSoftBreaks } from "@/lib/soft-break";

type ContactoProps = SliceComponentProps<Content.ContactoSlice>;

const Contacto: FC<ContactoProps> = ({ slice }) => {
  const submitLabel = isFilled.keyText(slice.primary.submit_label)
    ? slice.primary.submit_label
    : "Enviar consulta";

  const successNode = isFilled.richText(slice.primary.success_message) ? (
    <PrismicRichText
      field={slice.primary.success_message}
      components={{
        heading2: ({ children }) => (
          <h3
            className="font-serif font-normal leading-[1.1] tracking-[-0.02em] text-hueso mb-5"
            style={{ fontSize: "clamp(1.75rem, 3.4vw, 2.5rem)" }}
          >
            {children}
          </h3>
        ),
        paragraph: ({ children }) => (
          <p className="font-sans text-[1rem] leading-[1.65] text-hueso/80 max-w-[44ch]">
            {children}
          </p>
        ),
        em: ({ children }) => <em className="italic">{children}</em>,
        strong: ({ children }) => (
          <strong className="font-medium">{children}</strong>
        ),
      }}
    />
  ) : (
    <p className="font-sans text-[1rem] leading-[1.65] text-hueso/80">
      Solicitud recibida. Le escribiremos en breve.
    </p>
  );

  return (
    <section
      id="contacto"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative isolate overflow-hidden bg-loden text-hueso scroll-mt-24"
    >
      {/* Tapestry: caballo + galgo + pájaro tiled as a single repeating
       * unit so the section's empty negative space stays inhabited rather
       * than reading as a void next to the form. */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 block"
        style={{
          backgroundColor: "currentColor",
          opacity: 0.06,
          WebkitMaskImage: "url(/iconos/pattern-contacto.svg)",
          maskImage: "url(/iconos/pattern-contacto.svg)",
          WebkitMaskRepeat: "repeat",
          maskRepeat: "repeat",
          WebkitMaskSize: "540px 420px",
          maskSize: "540px 420px",
          WebkitMaskPosition: "0 0",
          maskPosition: "0 0",
        }}
      />

      <div className="mx-auto w-full max-w-[88rem] px-6 py-28 sm:px-10 sm:py-36 lg:px-16 lg:py-40">
        <div className="grid grid-cols-12 gap-x-6">
          <header className="col-span-12 sm:col-span-3 lg:col-span-2 mb-6 sm:mb-0">
            {isFilled.keyText(slice.primary.eyebrow) ? (
              <div className="mt-2 flex items-center gap-4">
                <span
                  aria-hidden="true"
                  data-reveal="line"
                  className="inline-block h-px w-8 bg-hueso/40"
                />
                <span
                  data-reveal
                  style={
                    { "--reveal-delay": "200ms" } as React.CSSProperties
                  }
                  className="eyebrow text-hueso/70"
                >
                  {slice.primary.eyebrow}
                </span>
              </div>
            ) : null}
          </header>

          <div className="col-span-12 sm:col-span-9 lg:col-start-3 lg:col-span-7 xl:col-start-3 xl:col-span-6">
            {isFilled.richText(slice.primary.headline) ? (
              <h2
                data-reveal
                style={
                  { "--reveal-delay": "150ms" } as React.CSSProperties
                }
                className="font-serif font-normal text-hueso mb-6"
              >
                <PrismicRichText
                  field={slice.primary.headline}
                  components={{
                    heading2: ({ children }) => (
                      <span
                        className="block leading-[1.08] tracking-[-0.02em]"
                        style={{
                          fontSize: "clamp(1.875rem, 3.6vw, 3rem)",
                        }}
                      >
                        {withSoftBreaks(children)}
                      </span>
                    ),
                    em: ({ children }) => (
                      <em className="italic font-medium tracking-[-0.02em]">
                        {children}
                      </em>
                    ),
                  }}
                />
              </h2>
            ) : null}

            {isFilled.richText(slice.primary.intro) ? (
              <div
                data-reveal
                style={
                  { "--reveal-delay": "300ms" } as React.CSSProperties
                }
                className="font-sans text-[1.0625rem] leading-[1.65] text-hueso/75 mb-14 max-w-[52ch]"
              >
                <PrismicRichText
                  field={slice.primary.intro}
                  components={{
                    paragraph: ({ children }) => (
                      <p className="mb-3 last:mb-0 text-pretty">{children}</p>
                    ),
                    em: ({ children }) => (
                      <em className="italic">{children}</em>
                    ),
                    strong: ({ children }) => (
                      <strong className="font-medium text-hueso">
                        {children}
                      </strong>
                    ),
                  }}
                />
              </div>
            ) : null}

            <div
              aria-hidden="true"
              className="h-px w-12 bg-hueso/30 mb-14"
            />

            <div
              data-reveal
              style={
                { "--reveal-delay": "450ms" } as React.CSSProperties
              }
              className="max-w-[40rem]"
            >
              <ContactForm
                submitLabel={submitLabel}
                successNode={successNode}
              />
            </div>

            {isFilled.richText(slice.primary.legal_note) ? (
              <div className="mt-12 font-sans text-[0.8125rem] leading-[1.55] text-hueso/55 max-w-[52ch]">
                <PrismicRichText
                  field={slice.primary.legal_note}
                  components={{
                    paragraph: ({ children }) => (
                      <p className="mb-2 last:mb-0">{children}</p>
                    ),
                    em: ({ children }) => (
                      <em className="italic">{children}</em>
                    ),
                    strong: ({ children }) => (
                      <strong className="font-medium text-hueso">
                        {children}
                      </strong>
                    ),
                    hyperlink: ({ children, node }) => (
                      <a
                        href={
                          "url" in node.data
                            ? (node.data.url as string)
                            : undefined
                        }
                        className="link-underline text-hueso/70 hover:text-hueso"
                      >
                        {children}
                      </a>
                    ),
                  }}
                />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
