import { PrismicNextLink, PrismicNextLinkProps } from "@prismicio/next";

export default function ButtonLink({
  className,
  ...restProps
}: PrismicNextLinkProps) {
  return <PrismicNextLink className="text-red-600" {...restProps} />;
}
