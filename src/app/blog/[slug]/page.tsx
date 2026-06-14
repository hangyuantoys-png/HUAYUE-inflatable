import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/site-data";
import styles from "../../subpages.module.css";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` }
  };
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) notFound();

  return (
    <main>
      <section className="pageHero">
        <div className="container">
          <h1>{post.title}</h1>
          <p>{post.excerpt}</p>
        </div>
      </section>
      <section className="section">
        <article className={`${styles.productTile} container`}>
          <h2>Recommended article structure</h2>
          <p>
            This starter page is ready for long-form SEO expansion. Add buyer intent, cost factors, product comparison,
            safety notes, application advice, FAQ and a quotation CTA. Avoid unsupported claims and use confirmed project
            evidence when available.
          </p>
        </article>
      </section>
    </main>
  );
}
