import type { Metadata } from "next";
import Link from "next/link";
import { InquiryForm } from "@/components/InquiryForm";
import { company } from "@/lib/site-data";
import styles from "../subpages.module.css";

export const metadata: Metadata = {
  title: "Contact Huayue Toys",
  description: "Contact Huayue Toys for commercial inflatable water park quotation, OEM/ODM customization and global delivery."
};

export default function ContactPage() {
  return (
    <main>
      <section className="pageHero">
        <div className="container">
          <h1>Contact Huayue Toys</h1>
          <p>
            Send your product requirement, water area size, country and WhatsApp. Our sales team will help you plan a
            practical inflatable water park solution and export quotation.
          </p>
        </div>
      </section>
      <section className="section">
        <div className={`${styles.contactGrid} container`}>
          <article className={styles.contactPanel}>
            <h2>Talk to our sales team</h2>
            <p>
              For faster quotation, please include product type, target country, quantity, expected use and project
              launch time.
            </p>
            <div className={styles.contactCards}>
              <div>
                <span>Email</span>
                <strong>{company.email}</strong>
              </div>
              <div>
                <span>WhatsApp / Phone</span>
                <strong>{company.whatsapp}</strong>
              </div>
              <div>
                <span>Factory Address</span>
                <strong>{company.address}</strong>
                <small>{company.addressCn}</small>
              </div>
            </div>
            <Link className="button dark" href={`https://wa.me/${company.whatsapp.replace(/\D/g, "")}`}>
              Chat on WhatsApp
            </Link>
          </article>
          <InquiryForm />
        </div>
      </section>
      <section className={styles.mapSection}>
        <div className="container">
          <div className="sectionHeader">
            <h2>Visit our factory in Guangzhou.</h2>
            <p>OpenStreetMap view of Huayue Toys factory area in Shenshan Industrial Park, Baiyun District.</p>
          </div>
          <div className={styles.mapCard}>
            <iframe
              title="Huayue Toys factory location on OpenStreetMap"
              src={company.map.embedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className={styles.mapInfo}>
              <div>
                <span>Factory Location</span>
                <strong>No.83, Zhenhua North Road</strong>
                <p>Shenshan Industrial Park, Jianggao Town, Baiyun District, Guangzhou, Guangdong Province, China</p>
              </div>
              <Link href={company.map.osmUrl} target="_blank" rel="noreferrer" className="button">
                Open in OpenStreetMap
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
