import { type FC } from "react";
import { type Content, isFilled } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, type SliceComponentProps } from "@prismicio/react";

import { withSoftBreaks } from "@/lib/soft-break";

type ModalidadesProps = SliceComponentProps<Content.ModalidadesSlice>;

const Modalidades: FC<ModalidadesProps> = ({ slice }) => {
  const items = slice.primary.modalidades ?? [];
  const cols = items.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3";

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-hueso text-tinta"
    >
      <div className="mx-auto w-full max-w-[88rem] px-6 py-28 sm:px-10 sm:py-32 lg:px-16 lg:py-36">
        <header className="grid grid-cols-12 gap-x-6 mb-20 sm:mb-28">
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

          <div className="col-span-12 sm:col-span-9 lg:col-span-8">
            {isFilled.richText(slice.primary.section_title) ? (
              <h2
                data-reveal
                style={
                  { "--reveal-delay": "150ms" } as React.CSSProperties
                }
                className="font-serif font-normal text-tinta"
              >
                <PrismicRichText
                  field={slice.primary.section_title}
                  components={{
                    heading2: ({ children }) => (
                      <span
                        className="block leading-[1.1] tracking-[-0.02em]"
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
          </div>
        </header>

        <ul
          className={`grid grid-cols-1 gap-x-8 gap-y-20 sm:grid-cols-2 ${cols}`}
        >
          {items.map((item, idx) => {
            const tagList = isFilled.keyText(item.tags)
              ? item.tags.split(",").map((t) => t.trim()).filter(Boolean)
              : [];
            const delay = `${idx * 120}ms`;

            return (
              <li
                key={idx}
                data-reveal
                style={{ "--reveal-delay": delay } as React.CSSProperties}
                className="group flex flex-col"
              >
                {isFilled.image(item.image) ? (
                  <div className="relative mb-7 w-full overflow-hidden bg-loden/5 aspect-[4/5]">
                    <PrismicNextImage
                      field={item.image}
                      fill
                      sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                    />
                  </div>
                ) : (
                  <div
                    aria-hidden="true"
                    className="mb-7 aspect-[4/5] w-full bg-loden/10"
                  />
                )}

                {isFilled.richText(item.name) ? (
                  <h3 className="font-serif text-[1.625rem] font-normal leading-[1.15] tracking-[-0.02em] text-tinta mb-3">
                    <PrismicRichText
                      field={item.name}
                      components={{
                        heading3: ({ children }) => <span>{children}</span>,
                        em: ({ children }) => (
                          <em className="italic">{children}</em>
                        ),
                      }}
                    />
                  </h3>
                ) : null}

                {tagList.length > 0 ? (
                  <p className="mb-4 font-sans text-[0.8125rem] text-piedra">
                    {tagList.join(" · ")}
                  </p>
                ) : null}

                {isFilled.richText(item.description) ? (
                  <div className="font-sans text-[1rem] leading-[1.65] text-tinta/80 max-w-[42ch]">
                    <PrismicRichText
                      field={item.description}
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
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Modalidades;
