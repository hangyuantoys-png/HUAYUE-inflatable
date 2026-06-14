import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { applications } from "@/lib/site-data";
import styles from "../../subpages.module.css";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return applications.map((application) => ({ slug: application.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const application = applications.find((item) => item.slug === slug);
  if (!application) return {};
  return {
    title: `${application.market} Inflatable Solutions`,
    description: application.solution,
    alternates: { canonical: `/applications/${application.slug}` }
  };
}

export default async function ApplicationPage({ params }: Props) {
  const { slug } = await params;
  const application = applications.find((item) => item.slug === slug);
  if (!application) notFound();

  return (
    <main>
      <section className="pageHero">
        <div className="container">
          <h1>{application.market}</h1>
          <p>{application.solution}</p>
          <Link className="button" href="/contact">
            Discuss Your Project
          </Link>
        </div>
      </section>
      <section className="section">
        <div className={`${styles.detailGrid} container`}>
          <article>
            <h2>Buyer profile</h2>
            <p>{application.buyerType}</p>
            <h2>Common pain points</h2>
            <ul>
              {application.painPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
          <article>
            <h2>Recommended products</h2>
            <div>
              {application.recommendedProducts.map((product) => (
                <span className={styles.tag} key={product}>
                  {product}
                </span>
              ))}
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
