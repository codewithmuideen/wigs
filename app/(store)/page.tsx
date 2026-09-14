import Hero from "@/components/home/Hero";
import AboutTeaser from "@/components/home/AboutTeaser";
import ValueProps from "@/components/home/ValueProps";
import CategoryGrid from "@/components/home/CategoryGrid";
import ProductRail from "@/components/home/ProductRail";
import TextureLength from "@/components/home/TextureLength";
import HowItWorks from "@/components/home/HowItWorks";
import Editorial from "@/components/home/Editorial";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Reviews from "@/components/home/Reviews";
import HairGuide from "@/components/home/HairGuide";
import InstagramGrid from "@/components/home/InstagramGrid";
import HomeFaq from "@/components/home/HomeFaq";
import NewsletterBand from "@/components/home/NewsletterBand";
import { products } from "@/lib/products";

export default function Home() {
  const newArrivals = products.filter((p) => p.badges.includes("New")).slice(0, 4);
  const bestSellers = products.filter((p) => p.badges.includes("Best Seller")).slice(0, 4);

  return (
    <>
      <Hero />
      <AboutTeaser />
      <ValueProps />
      <CategoryGrid />
      <ProductRail
        eyebrow="Just In"
        title="New Arrivals"
        products={newArrivals}
        viewAllHref="/shop?collection=New Arrivals"
      />
      <ProductRail
        eyebrow="Customer Favourites"
        title="Best Sellers"
        products={bestSellers}
        viewAllHref="/shop?collection=Best Sellers"
        tone="sand"
      />
      <TextureLength />
      <HowItWorks />
      <Editorial />
      <WhyChooseUs />
      <Reviews />
      <HairGuide />
      <InstagramGrid />
      <HomeFaq />
      <NewsletterBand />
    </>
  );
}
