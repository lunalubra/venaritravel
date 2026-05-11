import { type FC } from "react";
import { type Content, isFilled } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, type SliceComponentProps } from "@prismicio/react";

import { TextureStamp } from "@/components/TextureStamp";
import { withSoftBreaks } from "@/lib/soft-break";

type DetalleEditorialProps = SliceComponentProps<Content.DetalleEditorialSlice>;

const DetalleEditorial: FC<DetalleEditorialProps> = ({ slice }) => {
  const imageOnRight = slice.primary.image_position === "right";

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative isolate overflow-hidden bg-cordoban text-hueso"
    >
      {/* Caballo: square stamp tucked into the top-right corner, tilted a
       * touch so it reads as a hand-applied seal rather than centered art. */}
      <TextureStamp
        src="/iconos/venaritravel-icon-caballo.svg"
        aspectRatio="232 / 232"
        className="-right-[8%] -top-[12%] -z-10 h-[70%]"
        opacity={0.09}
        rotate={-8}
      />

      <div className="mx-auto w-full max-w-[88rem] px-6 py-24 sm:px-10 sm:py-32 lg:px-16 lg:py-36">
        <div className="grid grid-cols-12 gap-x-6 gap-y-12">
          <div
            className={`col-span-12 lg:col-span-6 ${
              imageOnRight ? "lg:order-2 lg:col-start-7" : "lg:col-start-1"
            }`}
          >
            {isFilled.image(slice.primary.image) ? (
              <div
                data-reveal="image"
                className="group relative w-full overflow-hidden bg-hueso/5 aspect-[4/5] lg:aspect-[1/1]"
              >
                <div className="parallax-image absolute inset-0">
                  <PrismicNextImage
                    field={slice.primary.image}
                    fill
                    sizes="(min-width: 1024px) 45vw, 90vw"
                    className="object-cover transition-transform duration-[1800ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
                  />
                </div>
              </div>
            ) : (
              <div
                aria-hidden="true"
                className="aspect-[4/5] lg:aspect-[1/1] w-full bg-hueso/10"
              />
            )}
          </div>

          <div
            className={`col-span-12 lg:col-span-5 ${
              imageOnRight ? "lg:order-1 lg:col-start-1" : "lg:col-start-8"
            } flex flex-col justify-center`}
          >
            {isFilled.keyText(slice.primary.eyebrow) ? (
              <div className="mb-6 mt-2 flex items-center gap-4">
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

            {isFilled.richText(slice.primary.headline) ? (
              <h2
                data-reveal
                style={
                  { "--reveal-delay": "150ms" } as React.CSSProperties
                }
                className="font-serif font-normal text-hueso mb-7"
              >
                <PrismicRichText
                  field={slice.primary.headline}
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

            <div
              aria-hidden="true"
              className="mb-7 h-px w-12 bg-hueso/30"
            />

            {isFilled.richText(slice.primary.body) ? (
              <div
                data-reveal
                style={
                  { "--reveal-delay": "350ms" } as React.CSSProperties
                }
                className="font-sans text-[1rem] leading-[1.7] text-hueso/80 max-w-[44ch]"
              >
                <PrismicRichText
                  field={slice.primary.body}
                  components={{
                    paragraph: ({ children }) => (
                      <p className="mb-4 last:mb-0">{children}</p>
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
                        className="link-underline text-hueso"
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

export default DetalleEditorial;
