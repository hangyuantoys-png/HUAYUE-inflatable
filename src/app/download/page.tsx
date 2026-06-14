import type { Metadata } from "next";
import Link from "next/link";
import styles from "../subpages.module.css";

export const metadata: Metadata = {
  title: "Download Catalog",
  description: "Download or request Huayue Toys inflatable water park and inflatable products catalog."
};

export default function DownloadPage() {
  return (
    <main>
      <section className="pageHero">
        <div className="container">
          <h1>Download Catalog</h1>
          <p>Use this page as the lead magnet for SEO, ads and sales follow-up. The PDF link can be connected after final catalog compression.</p>
          <Link className="button" href="/contact">
            Request Catalog by Email
          </Link>
        </div>
      </section>
      <section className="section">
        <div className={`${styles.detailGrid} container`}>
          <article>
            <h2>Catalog includes</h2>
            <ul>
              <li>Inflatable water parks and floating modules</li>
              <li>Inflatable slides, buoys and towable water toys</li>
              <li>Dry inflatable parks, bouncers and sport inflatables</li>
              <li>Product codes, sizes and custom options where available</li>
            </ul>
          </article>
          <article>
            <h2>Before quotation</h2>
            <p>Send target country, project site, preferred products, quantity, water area size and expected launch time.</p>
          </article>
        </div>
      </section>
    </main>
  );
}
