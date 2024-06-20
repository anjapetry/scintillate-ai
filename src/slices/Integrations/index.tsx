import React from "react"; // ReactFragment  from "react";
import { Content } from "@prismicio/client";
import {
  PrismicRichText,
  PrismicText,
  SliceComponentProps,
} from "@prismicio/react";
import Bounded from "@/components/Bounded";
import StarBackground from "./StarBackground";
import Image from "next/image";
import background from "./background.avif";
import AnimatedContent from "./AnimatedContent";
import clsx from "clsx";
import {
  FaDigitalOcean,
  FaCloudflare,
  FaNpm,
  FaGithub,
  FaFigma,
  FaFly,
} from "react-icons/fa6";
import StylizedLogoMark from "./StylizedLogoMark";

/**
 * Props for `Integrations`.
 */
export type IntegrationsProps = SliceComponentProps<Content.IntegrationsSlice>;

/**
 * Component for "Integrations" Slices.
 */
const Integrations = ({ slice }: IntegrationsProps): JSX.Element => {
  const icons = {
    digitalocean: <FaDigitalOcean />,
    cloudflare: <FaCloudflare />,
    npm: <FaNpm />,
    github: <FaGithub />,
    figma: <FaFigma />,
    fly: <FaFly />,
  };

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative overflow-hidden"
    >
      <Image
        src={background}
        alt=""
        fill
        className="object-cover"
        quality={90}
        priority={true}
      />
      <StarBackground />

      <div className="relative">
        <h2 className="mx-auto max-w-2xl text-balance text-center text-5xl font-medium md:text-7xl">
          <PrismicText field={slice.primary.heading} />
        </h2>

        <div className="mx-auto mt-6 max-w-md text-balance text-center text-slate-300">
          <PrismicRichText field={slice.primary.body} />
        </div>
        <AnimatedContent />
      </div>
    </Bounded>
  );
};

export default Integrations;
