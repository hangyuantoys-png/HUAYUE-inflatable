import type { Metadata } from "next";
import Link from "next/link";
import { company, processSteps } from "@/lib/site-data";
import styles from "../subpages.module.css";

export const metadata: Metadata = {
  title: "Factory Strength",
  description: "Huayue Toys factory capability, production process, quality control and global delivery support."
};

export default function FactoryPage() {
  return (
    <main>
      <section className="pageHero">
        <div className="container">
          <h1>Factory Strength</h1>
          <p>
            {company.factoryArea} factory area, {company.team}, OEM/ODM customization and practical project support for
            global commercial inflatable buyers.
          </p>
        </div>
      </section>
      <section className="section">
        <div className={`${styles.detailGrid} container`}>
          <article>
            <h2>Production process</h2>
            <ul>
              {processSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ul>
          </article>
          <article>
            <h2>Quality position</h2>
            <p>
              Huayue Toys focuses on commercial-grade material selection, reinforced seams, inflation testing and careful
              packing. Certifications are shown only when confirmed, including CE / EN14960 where applicable.
            </p>
            <Link className="button dark" href="/contact">
              Send Project Requirement
            </Link>
          </article>
        </div>
      </section>
    </main>
  );
}
