import { type Metadata } from "next";

import { asText } from "@prismicio/client";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";

export default async function Home() {
  const client = createClient();
  const home = await client.getByUID("page", "home");

  return <SliceZone slices={home.data.slices} components={components} />;
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const home = await client.getByUID("page", "home");

  const fallbackTitle = "venaritravel";
  const title =
    home.data.meta_title ?? (asText(home.data.title) || fallbackTitle);

  return {
    title,
    description:
      home.data.meta_description ??
      "Agencia privada de caza en España. Programas a medida en dehesas extremeñas, sierras béticas y casonas castellanas.",
    openGraph: {
      title: home.data.meta_title ?? title,
      description: home.data.meta_description ?? undefined,
      images: home.data.meta_image?.url
        ? [{ url: home.data.meta_image.url }]
        : undefined,
      locale: "es_ES",
      siteName: "venaritravel",
    },
  };
}
