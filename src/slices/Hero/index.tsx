import { Content, isFilled } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import {
  PrismicRichText,
  PrismicText,
  SliceComponentProps,
} from "@prismicio/react";

import ButtonLink from "@/components/ButtonLink";
import Bounded from "@/components/Bounded";
import StarGrid from "@/components/StarGrid";
/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="relative">
        <StarGrid />
        {isFilled.richText(slice.primary.heading) && (
          <h1 className="hero__heading text-balance text-5xl font-medium opacity-0 md:text-7xl">
            <PrismicText field={slice.primary.heading} />
          </h1>
        )}
        <PrismicRichText field={slice.primary.body} />
        <ButtonLink field={slice.primary.button_link}>
          {slice.primary.button_label}
        </ButtonLink>
        <PrismicNextImage field={slice.primary.image} />
      </div>
    </Bounded>
  );
};

export default Hero;
