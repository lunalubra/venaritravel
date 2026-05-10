import { type FC } from "react";
import { type Content, isFilled } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, type SliceComponentProps } from "@prismicio/react";

import { Wordmark } from "@/components/Wordmark";
import { withSoftBreaks } from "@/lib/soft-break";

type HeroProps = SliceComponentProps<Content.HeroSlice>;

const Hero: FC<HeroProps> = ({ slice }) => {
  const hasImage = isFilled.image(slice.primary.background_image);

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative isolate flex w-full flex-col overflow-hidden bg-loden text-hueso min-h-[clamp(34rem,80svh,48rem)]"
    >
      {hasImage ? (
        <PrismicNextImage
          field={slice.primary.background_image}
          fill
          preload
          sizes="100vw"
          className="hero-image-frame absolute inset-0 -z-20 h-full w-full object-cover"
          fallbackAlt=""
        />
      ) : null}

      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-loden/35" />

      <div className="relative z-10 mx-auto grid w-full max-w-[88rem] flex-1 grid-cols-12 grid-rows-[auto_1fr] gap-x-6 px-6 sm:px-10 lg:px-16">
        <header className="col-span-12 row-start-1 pt-8 sm:pt-12 lg:pt-14">
          <Wordmark className="hero-text-rise text-[clamp(1.25rem,1.6vw,1.5rem)] text-hueso" />
        </header>

        <div className="col-span-12 row-start-2 flex flex-col justify-end pb-24 pt-32 sm:col-span-9 sm:col-start-4 sm:pb-28 lg:col-start-3 lg:col-span-9 lg:pb-32 xl:col-start-3 xl:col-span-8">
          {isFilled.richText(slice.primary.headline) ? (
            <h1
              className="hero-text-rise font-serif font-normal leading-[1.02] tracking-[-0.02em] text-hueso"
              style={{
                fontSize: "var(--text-display)",
                animationDelay: "350ms",
              }}
            >
              <PrismicRichText
                field={slice.primary.headline}
                components={{
                  heading1: ({ children }) => (
                    <>{withSoftBreaks(children)}</>
                  ),
                  em: ({ children }) => (
                    <em className="font-serif italic font-medium tracking-[-0.02em]">
                      {children}
                    </em>
                  ),
                  strong: ({ children }) => (
                    <strong className="font-serif font-medium">
                      {children}
                    </strong>
                  )
                }}
              />
            </h1>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default Hero;
