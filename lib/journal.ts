export interface JournalArticle {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  body: string[];
}

export const articles: JournalArticle[] = [
  {
    slug: "how-to-choose-a-wig",
    title: "How to Choose Your First Wig",
    excerpt: "A simple framework for picking a construction, texture and length you will actually love wearing.",
    image: "/images/wigs/w-wall-of-wigs.jpg",
    body: [
      "Choosing your first wig can feel overwhelming, but it comes down to three decisions, construction, texture and length.",
      "Start with construction. Closure wigs offer a single natural part and tend to be the most affordable place to start. Frontal wigs give you ear to ear parting freedom for styles like slicked back ponytails. HD lace wigs offer the most undetectable finish for photos and close up wear.",
      "Next, think about texture in terms of your lifestyle rather than trends alone. Straight and body wave styles are easy to maintain day to day, while curly and deep wave textures need a little more care but deliver striking volume.",
      "Finally, choose a length that suits your face shape and how much daily styling you are willing to do. Shorter bobs are low maintenance and versatile, while longer lengths make a bigger statement but require more detangling and care between wears.",
    ],
  },
  {
    slug: "how-to-measure-your-head",
    title: "Measuring Your Head, Made Simple",
    excerpt: "Get an accurate fit in under five minutes with a soft measuring tape and this step by step guide.",
    image: "/images/stock/guide-measure.jpg",
    body: [
      "A well fitted wig starts with an accurate head measurement. All you need is a soft, flexible measuring tape.",
      "Circumference, place the tape around your hairline, starting at your front hairline, around your ears, to the nape of your neck and back to the front. Most adults fall between 21 and 23 inches, which is considered an average cap size.",
      "Front to back, measure from your natural hairline at the forehead to the nape of your neck, following the curve of your head.",
      "Ear to ear, measure across the top of your head from one ear to the other, following the highest point of your scalp.",
      "If your measurement falls between sizes, most of our wigs include adjustable straps and combs to help you achieve a secure, comfortable fit.",
    ],
  },
  {
    slug: "how-to-care-for-human-hair",
    title: "Caring for Human Hair at Home",
    excerpt: "The wash, condition and storage routine that keeps human hair soft, shiny and tangle free for longer.",
    image: "/images/stock/guide-care.jpg",
    body: [
      "Human hair rewards a little care with a much longer lifespan. Here is a simple routine to follow between wears.",
      "Detangle first, always work through hair gently with a wide tooth comb before washing, starting at the ends and working up to avoid unnecessary shedding.",
      "Wash with care, use a sulphate free shampoo and lukewarm water, working in downward motions rather than scrubbing in circles which can cause tangling.",
      "Condition and air dry, apply conditioner from mid length to ends, then allow hair to air dry on a wig stand rather than using high heat whenever possible.",
      "Store thoughtfully, keep your wig or hair piece on a stand or in a silk bag away from direct sunlight to protect both the lace and the hair fibres.",
    ],
  },
  {
    slug: "lace-guide",
    title: "Understanding Lace Types",
    excerpt: "HD lace, transparent lace and Swiss lace explained, so you know exactly what you are buying.",
    image: "/images/wigs/w-lace-styling-straight.jpg",
    body: [
      "Not all lace is the same, and understanding the differences will help you choose the right wig for your skin tone and lifestyle.",
      "HD lace is the thinnest and most transparent option available, designed to melt into the skin almost invisibly. It is a favourite for photography and close up wear, though it is slightly more delicate.",
      "Transparent lace sits between HD and standard Swiss lace, offering a natural blend across a wider range of skin tones with a bit more durability.",
      "Swiss lace is slightly thicker and more affordable, offering good durability for everyday wear while still providing a natural looking hairline once tinted or powdered to match your skin tone.",
    ],
  },
];

export function getArticleBySlug(slug: string) {
  return articles.find((a) => a.slug === slug);
}
