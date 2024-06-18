"use client";

import { Content, isFilled } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, PrismicText } from "@prismicio/react";
import ButtonLink from "@/components/ButtonLink";
import StarGrid from "@/components/StarGrid";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function AnimatedContent({
  slice,
}: {
  slice: Content.HeroSlice; // Replace `type` with the name of your slice type
}) {
  const container = useRef(null); // set ref to your container element in slices to animate elements
  gsap.registerPlugin(useGSAP); // register gsap plugin for useGSAP hook in slices to animate elements

  useGSAP(
    () => {
      const tl = gsap.timeline();
    },
    { scope: container },
  );

  return (
    <div className="relative" ref={container}>
      <StarGrid />
      {isFilled.richText(slice.primary.heading) && (
        <h1 className="hero__heading text-balance text-5xl font-medium md:text-7xl">
          <PrismicText field={slice.primary.heading} />
        </h1>
      )}

      {isFilled.richText(slice.primary.body) && (
        <div className="hero__body mx-auto mt-6 max-w-md text-balance text-slate-300">
          <PrismicRichText field={slice.primary.body} />
        </div>
      )}

      {isFilled.link(slice.primary.button_link) && (
        <ButtonLink
          className="hero__button mt-8"
          field={slice.primary.button_link}
        >
          {slice.primary.button_label}
        </ButtonLink>
      )}

      {isFilled.image(slice.primary.image) && (
        <div className="hero__image glass-container mt-16 w-fit">
          <div className="hero__glow absolute inset-0 -z-10 bg-blue-300/30 blur-2xl filter" />
          <PrismicNextImage
            className="rounded-lg"
            field={slice.primary.image}
          />
        </div>
      )}
    </div>
  );
}
