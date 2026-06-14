import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Factory, Globe2, Mail, MapPin, ShieldCheck, Sparkles } from "lucide-react";
import { InquiryForm } from "@/components/InquiryForm";
import { JsonLd } from "@/components/JsonLd";
import { applications, company, faqs, processSteps, productCategories } from "@/lib/site-data";
import { faqSchema, organizationSchema } from "@/lib/seo";
import styles from "./page.module.css";

const advantages = [
  ["OEM/ODM Customization", "Custom size, color, logo and aqua park layout for different project budgets."],
  ["Industrial-grade Quality Control", "Reinforced seams, inflation testing and careful packing before shipment."],
  ["Global Delivery & Project Support", "Export communication for buyers in the Middle East, Africa, Europe and beyond."],
  ["3D Design Before Production", "Visualize layout and product combinations before production begins."],
  ["Heat Welding, Cutting, Sewing & Sealing Equipment", "A practical production workflow for commercial inflatable products."],
  ["12+ Years Inflatable Production Experience", "A focused manufacturer serving rental, resort and water tourism buyers."]
];

export default function Home() {
  return (
    <>
      <JsonLd data={organizationSchema()} />
      <JsonLd data={faqSchema(faqs)} />
      <main>
        <section className={styles.hero}>
          <div className={`${styles.heroGrid} container`}>
            <div className={styles.heroCopy}>
              <h1>Build a Profitable Inflatable Water Park Project</h1>
              <p>
                Huayue Toys provides factory-direct OEM/ODM aqua park systems for resorts, beaches, lakes, rental
                companies and tourism investors. Get a practical layout, product mix and export quotation.
              </p>
              <div className={styles.heroActions}>
                <Link className="button" href="/contact">
                  Get a Project Quote <ArrowRight size={18} />
                </Link>
                <Link className="button ghost" href="/download">
                  Download Catalog
                </Link>
              </div>
              <div className={styles.trustChips}>
                {["6250+ m² Factory", "OEM/ODM Custom Design", "Global Delivery", "CE / EN14960"].map((chip) => (
                  <span key={chip}>
                    <CheckCircle2 size={16} />
                    {chip}
                  </span>
                ))}
              </div>
            </div>
            <aside className={styles.quickQuote} aria-label="Quick quote information">
              <h2>Quick Quote</h2>
              <p>Send us your water area size, country and preferred modules.</p>
              <div className={styles.quoteRows}>
                <span>
                  <MapPin size={16} />
                  UAE, Saudi Arabia, Nigeria, South Africa
                </span>
                <span>
                  <Mail size={16} />
                  {company.email}
                </span>
              </div>
              <Link className="button dark" href="/contact">
                Send Requirement
              </Link>
            </aside>
          </div>
          <div className={`${styles.heroImageWrap} container`}>
            <div className={styles.heroImage}>
              <Image
                src="/assets/hero-water-park.png"
                alt="Commercial inflatable water park with slides and floating modules"
                width={1744}
                height={915}
                priority
              />
              <div className={styles.marketStrip}>
                {["Resort Projects", "Rental Business", "Beach & Lake", "Theme Parks", "Event Operators"].map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className={styles.buyers}>
          <div className={`${styles.buyerGrid} container`}>
            <div>
              <strong>Target Buyers</strong>
              <p>Importers, distributors, resort owners, rental businesses and tourism project buyers.</p>
            </div>
            <div>
              <strong>Core Markets</strong>
              <p>Middle East, Africa, North America, Europe, Southeast Asia and Russia.</p>
            </div>
            <div>
              <strong>Main Conversion</strong>
              <p>Get a quote, WhatsApp consultation and catalog download for qualified project leads.</p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="sectionHeader">
              <h2>Choose the right inflatable products for your business model.</h2>
              <p>Start from high-demand commercial categories, then customize dimensions, colors, logo and layout.</p>
            </div>
            <div className={styles.categoryGrid}>
              {productCategories.map((category, index) => (
                <Link className={styles.categoryCard} key={category.slug} href={`/products/${category.slug}`}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{category.name}</h3>
                  <p>{category.summary}</p>
                  <ArrowRight size={18} />
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className={`${styles.darkBand} section`}>
          <div className="container">
            <div className="sectionHeader">
              <h2>Factory support for overseas project buyers.</h2>
              <p>Turn a rough water area or rental idea into a shippable commercial inflatable solution.</p>
            </div>
            <div className={styles.advantageGrid}>
              {advantages.map(([title, text], index) => {
                const Icon = [Sparkles, ShieldCheck, Globe2, Factory, CheckCircle2, ShieldCheck][index];
                return (
                  <article key={title}>
                    <Icon size={26} />
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="sectionHeader">
              <h2>Solutions by application scenario.</h2>
              <p>Each application page is designed for SEO, AIO/GEO answers and advertising landing traffic.</p>
            </div>
            <div className={styles.applicationGrid}>
              {applications.map((item) => (
                <Link href={`/applications/${item.slug}`} className={styles.applicationCard} key={item.slug}>
                  <h3>{item.market}</h3>
                  <p>{item.solution}</p>
                  <strong>{item.buyerType}</strong>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.process}>
          <div className="container">
            <h2>Factory process from design to global shipping.</h2>
            <div className={styles.processRail}>
              {processSteps.map((step) => (
                <span key={step}>{step}</span>
              ))}
            </div>
          </div>
        </section>

        <section className={`${styles.lead} section`} id="quote">
          <div className={`${styles.leadGrid} container`}>
            <div>
              <h2>Get Your Custom Inflatable Water Park Solution</h2>
              <p>
                Send your layout, water area size, product requirement or target country. Huayue Toys will recommend a
                practical product combination for quotation.
              </p>
              <ul>
                <li>Factory direct OEM/ODM support</li>
                <li>Commercial water park and rental business recommendations</li>
                <li>Global delivery communication</li>
              </ul>
            </div>
            <InquiryForm />
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="sectionHeader">
              <h2>FAQ for commercial inflatable water park buyers.</h2>
              <p>Useful answers for procurement, SEO and AI search visibility.</p>
            </div>
            <div className={styles.faqList}>
              {faqs.map((faq) => (
                <article key={faq.question}>
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
