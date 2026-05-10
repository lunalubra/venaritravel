import { type FC } from "react";
import { type Content, isFilled } from "@prismicio/client";
import { PrismicRichText, type SliceComponentProps } from "@prismicio/react";

import { withSoftBreaks } from "@/lib/soft-break";

type ConfianzaProps = SliceComponentProps<Content.ConfianzaSlice>;

const Confianza: FC<ConfianzaProps> = ({ slice }) => {
  const pillars = slice.primary.pillars ?? [];

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-hueso text-tinta"
    >
      <div className="mx-auto w-full max-w-[88rem] px-6 py-32 sm:px-10 sm:py-40 lg:px-16 lg:py-[10rem]">
        <header className="grid grid-cols-12 gap-x-6 mb-24 sm:mb-32">
          <div className="col-span-12 sm:col-span-3 lg:col-span-2 mb-6 sm:mb-0">
            {isFilled.keyText(slice.primary.eyebrow) ? (
              <div className="mt-2 flex items-center gap-4">
                <span
                  aria-hidden="true"
                  data-reveal="line"
                  className="inline-block h-px w-8 bg-piedra/60"
                />
                <span
                  data-reveal
                  style={
                    { "--reveal-delay": "200ms" } as React.CSSProperties
                  }
                  className="eyebrow"
                >
                  {slice.primary.eyebrow}
                </span>
              </div>
            ) : null}
          </div>

          <div className="col-span-12 sm:col-span-9 lg:col-span-9 xl:col-span-8">
            {isFilled.richText(slice.primary.statement) ? (
              <h2
                data-reveal
                style={
                  { "--reveal-delay": "150ms" } as React.CSSProperties
                }
                className="font-serif font-normal text-tinta"
              >
                <PrismicRichText
                  field={slice.primary.statement}
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
                    strong: ({ children }) => (
                      <strong className="font-medium">{children}</strong>
                    ),
                  }}
                />
              </h2>
            ) : null}
          </div>
        </header>

        <ul className="grid grid-cols-1 gap-y-14 sm:grid-cols-3 sm:gap-x-10 lg:gap-x-16">
          {pillars.map((pillar, idx) => (
            <li
              key={idx}
              data-reveal
              style={
                { "--reveal-delay": `${idx * 130}ms` } as React.CSSProperties
              }
            >
              <div className="flex flex-col">
                <span
                  aria-hidden="true"
                  data-reveal="line"
                  style={
                    {
                      "--reveal-delay": `${idx * 130 + 200}ms`,
                    } as React.CSSProperties
                  }
                  className="mb-6 inline-block h-px w-12 bg-pajizo/70"
                />
                {isFilled.keyText(pillar.label) ? (
                  <h3 className="font-serif text-[1.375rem] font-normal leading-[1.2] tracking-[-0.02em] text-tinta mb-4">
                    {pillar.label}
                  </h3>
                ) : null}
                {isFilled.richText(pillar.text) ? (
                  <div className="font-sans text-[0.9375rem] leading-[1.65] text-tinta/80">
                    <PrismicRichText
                      field={pillar.text}
                      components={{
                        paragraph: ({ children }) => (
                          <p className="mb-3 last:mb-0">{children}</p>
                        ),
                        em: ({ children }) => (
                          <em className="italic">{children}</em>
                        ),
                        strong: ({ children }) => (
                          <strong className="font-medium text-tinta">
                            {children}
                          </strong>
                        ),
                      }}
                    />
                  </div>
                ) : null}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Confianza;
