import { type FC } from "react";
import { type Content, isFilled } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, type SliceComponentProps } from "@prismicio/react";

type TerritorioProps = SliceComponentProps<Content.TerritorioSlice>;

const Territorio: FC<TerritorioProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-hueso text-tinta"
    >
      <div className="mx-auto w-full max-w-[100rem] px-4 py-20 sm:px-6 sm:py-28 lg:px-10 lg:py-32">
        {isFilled.image(slice.primary.image) ? (
          <figure className="flex flex-col">
            <div
              data-reveal="image"
              className="relative w-full overflow-hidden bg-loden/5 aspect-[16/9] md:aspect-[21/9]"
            >
              <PrismicNextImage
                field={slice.primary.image}
                fill
                sizes="100vw"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <figcaption className="mt-6 grid grid-cols-12 gap-x-6">
              <div className="col-span-12 sm:col-span-2">
                {isFilled.keyText(slice.primary.location_label) ? (
                  <p
                    data-reveal
                    style={
                      {
                        "--reveal-delay": "300ms",
                      } as React.CSSProperties
                    }
                    className="font-serif italic text-piedra text-[0.875rem] sm:text-[1rem]"
                  >
                    {slice.primary.location_label}
                  </p>
                ) : null}
              </div>
              <div className="col-span-12 sm:col-span-9 lg:col-span-7 mt-2 sm:mt-0">
                {isFilled.richText(slice.primary.caption) ? (
                  <div
                    data-reveal
                    style={
                      {
                        "--reveal-delay": "400ms",
                      } as React.CSSProperties
                    }
                    className="font-sans text-[0.875rem] leading-[1.55] text-piedra"
                  >
                    <PrismicRichText
                      field={slice.primary.caption}
                      components={{
                        paragraph: ({ children }) => (
                          <p className="text-balance">{children}</p>
                        ),
                        em: ({ children }) => (
                          <em className="italic">{children}</em>
                        ),
                      }}
                    />
                  </div>
                ) : null}
              </div>
            </figcaption>
          </figure>
        ) : null}
      </div>
    </section>
  );
};

export default Territorio;
