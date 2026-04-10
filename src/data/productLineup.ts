import type { ProductLogoItem } from "../types/product";

export type ProductSlug =
  | "domani"
  | "remale"
  | "brick-block"
  | "urban-garage"
  | "premiere"
  | "mezonage"
  | "tsunagu-project";

export const productLineup: ProductLogoItem[] = [
  {
    href: "/products/domani",
    src: "/img/product/img_product01.png",
    alt: "Domani",
  },
  {
    href: "/products/remale",
    src: "/img/product/img_product02.png",
    alt: "REMALE",
  },
  {
    href: "/products/brick-block",
    src: "/img/product/img_product03.png",
    alt: "BRICK BLOCK",
  },
  {
    href: "/products/urban-garage",
    src: "/img/product/img_product04.png",
    alt: "URBAN GARAGE",
  },
  {
    href: "/products/premiere",
    src: "/img/product/img_product05.png",
    alt: "Premiere",
  },
  {
    href: "/products/mezonage",
    src: "/img/product/img_product06.png",
    alt: "MEZONAGE",
  },
  {
    href: "/products/tsunagu-project",
    src: "/img/product/img_product07.png",
    alt: "つなぐPROJECT",
  },
];

export function otherProductsExcept(slug: ProductSlug): ProductLogoItem[] {
  const map: Record<ProductSlug, string> = {
    domani: "/products/domani",
    remale: "/products/remale",
    "brick-block": "/products/brick-block",
    "urban-garage": "/products/urban-garage",
    premiere: "/products/premiere",
    mezonage: "/products/mezonage",
    "tsunagu-project": "/products/tsunagu-project",
  };
  const path = map[slug];
  return productLineup.filter((item) => item.href !== path);
}
