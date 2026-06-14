import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { productCategories } from "@/lib/site-data";
import styles from "../subpages.module.css";

export const metadata: Metadata = {
  title: "Products",
  description: "Explore Huayue Toys commercial inflatable water parks, slides, water obstacle courses, buoys and custom inflatable products."
};

export default function ProductsPage() {
  return (
    <main>
      <section className="pageHero">
        <div className="container">
          <h1>Commercial Inflatable Products</h1>
          <p>
            Choose a product category for your resort, beach, lake, rental business or event project. Every category can
            be customized for size, color, logo and layout.
          </p>
        </div>
      </section>
      <section className="section">
        <div className={`${styles.cardGrid} container`}>
          {productCategories.map((category) => (
            <Link className={styles.productTile} key={category.slug} href={`/products/${category.slug}`}>
              <h2>{category.name}</h2>
              <p>{category.summary}</p>
              <span>
                View details <ArrowRight size={17} />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
