import Link from "next/link";
import { InquiryForm } from "@/components/InquiryForm";
import { productCategories } from "@/lib/site-data";
import styles from "@/app/subpages.module.css";

export function CountryPage({ country, title, description }: { country: string; title: string; description: string }) {
  return (
    <main>
      <section className="pageHero">
        <div className="container">
          <h1>{title}</h1>
          <p>{description}</p>
          <Link className="button" href="/contact">
            Get {country} Project Quote
          </Link>
        </div>
      </section>
      <section className="section">
        <div className={`${styles.detailGrid} container`}>
          <article>
            <h2>Recommended products for {country}</h2>
            <div>
              {productCategories.slice(0, 5).map((category) => (
                <span className={styles.tag} key={category.slug}>
                  {category.name}
                </span>
              ))}
            </div>
            <p>
              Send water area size, buyer type, preferred modules and target operation season. Huayue Toys will suggest a
              practical product combination for your market.
            </p>
          </article>
          <InquiryForm />
        </div>
      </section>
    </main>
  );
}
