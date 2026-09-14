import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { articles, getArticleBySlug } from "@/lib/journal";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return { title: article.title, description: article.excerpt };
}

export default async function JournalArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  return (
    <article className="mx-auto max-w-2xl px-4 py-8 sm:px-6">
      <Breadcrumbs items={[{ label: "Journal", href: "/journal" }, { label: article.title }]} />
      <h1 className="mt-4 font-serif-display text-3xl text-burgundy sm:text-4xl">{article.title}</h1>
      <div className="relative mt-8 aspect-[16/9] w-full overflow-hidden rounded-sm">
        <Image src={article.image} alt={article.title} fill sizes="(min-width: 640px) 42rem, 100vw" className="object-cover" />
      </div>
      <div className="mt-8 space-y-5">
        {article.body.map((p, i) => (
          <p key={i} className="text-sm leading-relaxed text-ink/75">
            {p}
          </p>
        ))}
      </div>
      <div className="mt-12 border-t border-bronze/15 pt-6">
        <Link href="/shop" className="text-sm font-medium text-bronze underline underline-offset-2">
          Shop the products mentioned in this guide
        </Link>
      </div>
    </article>
  );
}
