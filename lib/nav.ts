export interface NavLinkItem {
  label: string;
  href: string;
}

export interface NavMenu {
  label: string;
  href: string;
  columns: { heading: string; links: NavLinkItem[] }[];
  promo: { title: string; subtitle: string; href: string; image: string };
}

export const wigsMenu: NavMenu = {
  label: "Wigs",
  href: "/shop?category=wigs",
  columns: [
    {
      heading: "Shop by Construction",
      links: [
        { label: "HD Lace Wigs", href: "/shop?type=HD Lace Wig" },
        { label: "Lace Front Wigs", href: "/shop?type=Lace Front Wig" },
        { label: "Closure Wigs", href: "/shop?type=Closure Wig" },
        { label: "Frontal Wigs", href: "/shop?type=Frontal Wig" },
        { label: "Bob Wigs", href: "/shop?type=Bob Wig" },
      ],
    },
    {
      heading: "Shop by Texture",
      links: [
        { label: "Straight", href: "/shop?texture=Straight" },
        { label: "Body Wave", href: "/shop?texture=Body Wave" },
        { label: "Deep Wave", href: "/shop?texture=Deep Wave" },
        { label: "Curly", href: "/shop?texture=Curly" },
        { label: "Water Wave", href: "/shop?texture=Water Wave" },
      ],
    },
  ],
  promo: {
    title: "The Luxury Collection",
    subtitle: "Our finest virgin hair, reserved for the wigs we are proudest of.",
    href: "/shop?collection=Luxury Collection",
    image: "/images/wigs/w-salon-bodywave-studio.jpg",
  },
};

export const hairMenu: NavMenu = {
  label: "Hair",
  href: "/shop?category=hair",
  columns: [
    {
      heading: "Extensions",
      links: [
        { label: "Bundles", href: "/shop?type=Bundle" },
        { label: "Closures", href: "/shop?type=Closure" },
        { label: "Frontals", href: "/shop?type=Frontal" },
        { label: "Tape-Ins", href: "/shop?type=Tape-In" },
        { label: "Clip-Ins", href: "/shop?type=Clip-In" },
      ],
    },
    {
      heading: "Finishing Touches",
      links: [
        { label: "Ponytails", href: "/shop?type=Ponytail" },
        { label: "Hair Care", href: "/shop?type=Accessory" },
        { label: "Wig Accessories", href: "/shop?type=Accessory" },
      ],
    },
  ],
  promo: {
    title: "Raw Bundle Sets",
    subtitle: "Cuticle aligned, tangle free, built for a flawless install.",
    href: "/shop?type=Bundle",
    image: "/images/stock/cat-bundles.jpg",
  },
};

export const collectionsMenu: NavMenu = {
  label: "Collections",
  href: "/shop",
  columns: [
    {
      heading: "Curated For You",
      links: [
        { label: "New Arrivals", href: "/shop?collection=New Arrivals" },
        { label: "Best Sellers", href: "/shop?collection=Best Sellers" },
        { label: "Luxury Collection", href: "/shop?collection=Luxury Collection" },
        { label: "Everyday Collection", href: "/shop?collection=Everyday Collection" },
      ],
    },
    {
      heading: "Occasion",
      links: [
        { label: "Bridal", href: "/shop?collection=Bridal" },
        { label: "Sale", href: "/shop?collection=Sale" },
      ],
    },
  ],
  promo: {
    title: "Bridal Edit",
    subtitle: "Soft, romantic textures made for the moments that matter.",
    href: "/shop?collection=Bridal",
    image: "/images/stock/product-p8.jpg",
  },
};

export const simpleLinks: NavLinkItem[] = [
  { label: "New Arrivals", href: "/shop?collection=New Arrivals" },
  { label: "Sale", href: "/shop?collection=Sale" },
];
