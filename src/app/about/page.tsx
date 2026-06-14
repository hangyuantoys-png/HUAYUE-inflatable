import type { Metadata } from "next";
import Image from "next/image";
import { company } from "@/lib/site-data";
import styles from "../subpages.module.css";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Guangzhou Huayue Inflatable Products Co., Ltd., an OEM/ODM inflatable products manufacturer in China."
};

export default function AboutPage() {
  return (
    <main>
      <section className="pageHero">
        <div className="container">
          <h1>About {company.brand}</h1>
          <p>
            {company.name} is a source manufacturer and OEM/ODM solution provider for commercial inflatable water parks,
            slides, buoys, dry inflatable parks and custom inflatable products.
          </p>
        </div>
      </section>
      <section className="section">
        <div className={`${styles.detailGrid} container`}>
          <article>
            <h2>Company profile</h2>
            <p>
              Founded in {company.founded}, Huayue Toys serves overseas buyers who need professional inflatable products
              for resort projects, tourism venues, water parks, rental businesses and events.
            </p>
            <p>
              The website uses the 2015 founding year from the submitted company information. Older catalog information
              should be confirmed before final public launch.
            </p>
          </article>
          <article>
            <Image src="/assets/founder-evan.png" alt="Huayue Toys representative" width={760} height={760} />
          </article>
        </div>
      </section>
    </main>
  );
}
