"use client";

import Link from "next/link";

import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";

import ButtonLink from "@/components/ButtonLink";
import WordMark from "@/components/WordMark";

type NavBarProps = {
  settings: Content.SettingsDocument;
};
export default function NavBar({ settings }: NavBarProps) {
  return (
    <nav className="p-4 md:p-6" aria-label="main">
      <div className="mx-auto flex max-w-6xl flex-col justify-between py-2 font-medium md:flex-row md:items-center">
        <Link href="/">
          <WordMark />
          <span className="sr-only">Scintillate.ai Homepage</span>
        </Link>
        <ul className="flex gap-6">
          {settings.data.navigation.map((item) => {
            if (item.cta_button) {
              return (
                <li key={item.label}>
                  <ButtonLink field={item.link}>{item.label}</ButtonLink>
                </li>
              );
            }
            return (
              <li key={item.label}>
                <PrismicNextLink
                  field={item.link}
                  className="inline-flex min-h-11 items-center"
                >
                  {item.label}
                </PrismicNextLink>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
