import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { company, products } from "@/lib/site-data";
import { breadcrumbSchema, faqSchema, productSchema } from "@/lib/seo";
import styles from "../../subpages.module.css";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product) return {};
  return {
    title: product.seoTitle,
    description: product.seoDescription,
    alternates: { canonical: `/products/${product.slug}` },
    openGraph: {
      title: product.seoTitle,
      description: product.seoDescription,
      images: product.images
    }
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product) notFound();

  return (
    <main>
      <JsonLd data={productSchema(product.name, product.seoDescription, product.slug)} />
      <JsonLd data={faqSchema(product.faq)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: company.siteUrl },
          { name: "Products", url: `${company.siteUrl}/products` },
          { name: product.name, url: `${company.siteUrl}/products/${product.slug}` }
        ])}
      />
      <section className={styles.productHero}>
        <div className={`${styles.productHeroGrid} container`}>
          <div>
            <h1>{product.name}</h1>
            <p>{product.seoDescription}</p>
            <Link className="button" href="/contact">
              Get a Quote
            </Link>
          </div>
          <Image src={product.images[0]} alt={product.name} width={900} height={480} priority />
        </div>
      </section>
      <section className="section">
        <div className={`${styles.detailGrid} container`}>
          <article>
            <h2>Key selling points</h2>
            <ul>
              {product.keyFeatures.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </article>
          <article>
            <h2>Specifications</h2>
            <dl className={styles.specs}>
              {Object.entries(product.specs).map(([key, value]) => (
                <div key={key}>
                  <dt>{key}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
          </article>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="sectionHeader">
            <h2>Applications and buyer questions.</h2>
            <p>Built for commercial procurement pages, advertising landing pages and AI-search friendly answers.</p>
          </div>
          <div className={styles.twoColumn}>
            <div>
              {product.applications.map((item) => (
                <span className={styles.tag} key={item}>
                  {item}
                </span>
              ))}
            </div>
            <div className={styles.faqStack}>
              {product.faq.map((faq) => (
                <article key={faq.question}>
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
