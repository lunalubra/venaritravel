import { type FC } from "react";
import { type Content, isFilled } from "@prismicio/client";
import { PrismicRichText, type SliceComponentProps } from "@prismicio/react";

import { TextureStamp } from "@/components/TextureStamp";
import { withSoftBreaks } from "@/lib/soft-break";

type ProcesoProps = SliceComponentProps<Content.ProcesoSlice>;

const Proceso: FC<ProcesoProps> = ({ slice }) => {
  const steps = slice.primary.steps ?? [];

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative isolate overflow-hidden bg-loden text-hueso"
    >
      {/* Galgo: tall right-edge stamp, bleeds past the right edge so the
       * silhouette runs through the four-step rhythm like a quiet column. */}
      <TextureStamp
        src="/iconos/venaritravel-icon-galgo.svg"
        aspectRatio="168 / 226"
        className="-right-[6%] top-1/2 -z-10 h-[88%] -translate-y-1/2"
        opacity={0.07}
      />

      <div className="mx-auto w-full max-w-[88rem] px-6 py-28 sm:px-10 sm:py-36 lg:px-16 lg:py-40">
        <header className="grid grid-cols-12 gap-x-6 mb-20 sm:mb-28">
          <div className="col-span-12 sm:col-span-3 lg:col-span-2 mb-6 sm:mb-0">
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
          </div>
          <div className="col-span-12 sm:col-span-9 lg:col-span-8">
            {isFilled.richText(slice.primary.section_title) ? (
              <h2
                data-reveal
                style={
                  { "--reveal-delay": "150ms" } as React.CSSProperties
                }
                className="font-serif font-normal text-hueso"
              >
                <PrismicRichText
                  field={slice.primary.section_title}
                  components={{
                    heading2: ({ children }) => (
                      <span
                        className="block leading-[1.1] tracking-[-0.02em]"
                        style={{ fontSize: "clamp(1.875rem, 3.6vw, 3rem)" }}
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

        <ol className="grid grid-cols-12 gap-x-6">
          <li className="col-span-12 lg:col-start-2 lg:col-span-10">
            <div
              aria-hidden="true"
              className="h-px w-full bg-hueso/20"
            />
          </li>
          {steps.map((step, idx) => (
            <li
              key={idx}
              data-reveal
              style={
                { "--reveal-delay": `${idx * 110}ms` } as React.CSSProperties
              }
              className="col-span-12 lg:col-start-2 lg:col-span-10"
            >
              <div className="grid grid-cols-12 gap-x-6 py-12 sm:py-16">
                <div className="col-span-3 sm:col-span-2">
                  <span
                    className="font-serif font-normal leading-none text-hueso/85"
                    style={{ fontSize: "var(--text-numeral)" }}
                  >
                    {isFilled.keyText(step.number)
                      ? step.number
                      : String(idx + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="col-span-9 sm:col-span-10 lg:col-span-8 xl:col-span-7">
                  {isFilled.richText(step.title) ? (
                    <h3
                      className="mb-4 font-serif font-normal leading-[1.15] tracking-[-0.02em] text-hueso"
                      style={{ fontSize: "clamp(1.5rem, 2.4vw, 2rem)" }}
                    >
                      <PrismicRichText
                        field={step.title}
                        components={{
                          heading3: ({ children }) => <span>{children}</span>,
                          em: ({ children }) => (
                            <em className="italic">{children}</em>
                          ),
                        }}
                      />
                    </h3>
                  ) : null}
                  {isFilled.richText(step.description) ? (
                    <div className="font-sans text-[1rem] leading-[1.65] text-hueso/75 max-w-[52ch]">
                      <PrismicRichText
                        field={step.description}
                        components={{
                          paragraph: ({ children }) => (
                            <p className="mb-3 last:mb-0">{children}</p>
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
                </div>
              </div>
              <div
                aria-hidden="true"
                className="h-px w-full bg-hueso/20"
              />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Proceso;
