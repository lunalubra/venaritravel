import { type FC } from "react";
import { type Content, isFilled } from "@prismicio/client";
import { PrismicRichText, type SliceComponentProps } from "@prismicio/react";

import { withSoftBreaks } from "@/lib/soft-break";

type ManifiestoProps = SliceComponentProps<Content.ManifiestoSlice>;

const Manifiesto: FC<ManifiestoProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-hueso text-tinta"
    >
      <div className="mx-auto grid w-full max-w-[88rem] grid-cols-12 gap-x-6 px-6 py-24 sm:px-10 sm:py-28 lg:px-16 lg:py-28 lg:pb-16">
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
                style={{ "--reveal-delay": "200ms" } as React.CSSProperties}
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
              style={{ "--reveal-delay": "150ms" } as React.CSSProperties}
              className="font-serif font-normal text-tinta"
            >
              <PrismicRichText
                field={slice.primary.statement}
                components={{
                  heading2: ({ children }) => (
                    <span
                      className="block leading-[1.1] tracking-[-0.02em]"
                      style={{
                        fontSize: "clamp(1.875rem, 3.6vw, 3rem)"
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
                  )
                }}
              />
            </h2>
          ) : null}

          {isFilled.richText(slice.primary.support) ? (
            <div
              data-reveal
              style={{ "--reveal-delay": "400ms" } as React.CSSProperties}
              className="mt-12 max-w-[44ch] text-[1.0625rem] leading-[1.65] text-piedra"
            >
              <PrismicRichText
                field={slice.primary.support}
                components={{
                  paragraph: ({ children }) => (
                    <p className="font-sans">{children}</p>
                  ),
                  em: ({ children }) => <em className="italic">{children}</em>,
                  strong: ({ children }) => (
                    <strong className="font-medium text-tinta">
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
                      className="link-underline text-tinta"
                    >
                      {children}
                    </a>
                  )
                }}
              />
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default Manifiesto;
