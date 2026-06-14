import Image from "next/image";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { company, navItems } from "@/lib/site-data";
import styles from "./layout.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={`${styles.headerInner} container`}>
        <Link href="/" className={styles.brand} aria-label="Huayue Toys home">
          <Image src="/assets/huayue-logo.png" alt="Huayue Toys logo" width={52} height={52} priority />
          <span>
            <strong>{company.brand}</strong>
            <small>Inflatable Products Manufacturer</small>
          </span>
        </Link>
        <nav className={styles.nav} aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className={styles.actions}>
          <Link className={styles.whatsapp} href={`https://wa.me/${company.whatsapp.replace(/\D/g, "")}`}>
            <MessageCircle size={17} />
            WhatsApp
          </Link>
          <Link className="button" href="/contact">
            Get a Quote
          </Link>
        </div>
      </div>
    </header>
  );
}
