import type { Metadata } from "next";
import Link from "next/link";
import { applications } from "@/lib/site-data";
import styles from "../subpages.module.css";

export const metadata: Metadata = {
  title: "Applications",
  description: "Inflatable water park solutions for resorts, hotels, rental businesses, beaches, lakes and tourism projects."
};

export default function ApplicationsPage() {
  return (
    <main>
      <section className="pageHero">
        <div className="container">
          <h1>Inflatable Water Park Applications</h1>
          <p>Build pages around buyer scenarios so advertising and SEO traffic land on a relevant commercial solution.</p>
        </div>
      </section>
      <section className="section">
        <div className={`${styles.cardGrid} container`}>
          {applications.map((application) => (
            <Link className={styles.productTile} key={application.slug} href={`/applications/${application.slug}`}>
              <h2>{application.market}</h2>
              <p>{application.solution}</p>
              <span>{application.buyerType}</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
