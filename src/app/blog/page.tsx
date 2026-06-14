import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/site-data";
import styles from "../subpages.module.css";

export const metadata: Metadata = {
  title: "Inflatable Water Park Blog",
  description: "SEO and AI-search content hub for commercial inflatable water park buyers."
};

export default function BlogPage() {
  return (
    <main>
      <section className="pageHero">
        <div className="container">
          <h1>Inflatable Water Park Buyer Guides</h1>
          <p>First SEO content cluster for cost, installation, safety, ROI, country pages and project buying questions.</p>
        </div>
      </section>
      <section className="section">
        <div className={`${styles.cardGrid} container`}>
          {blogPosts.map((post) => (
            <Link href={`/blog/${post.slug}`} className={styles.productTile} key={post.slug}>
              <h2>{post.title}</h2>
              <p>{post.excerpt}</p>
              <span>Read guide</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
