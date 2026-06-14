import Link from "next/link";
import { company, navItems, productCategories } from "@/lib/site-data";
import styles from "./layout.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerGrid}>
          <div>
            <h2>{company.brand}</h2>
            <p>{company.name}</p>
            <p>OEM/ODM commercial inflatable water parks, slides, buoys and custom aqua park solutions.</p>
          </div>
          <div>
            <h3>Products</h3>
            {productCategories.slice(0, 5).map((item) => (
              <Link key={item.slug} href={`/products/${item.slug}`}>
                {item.name}
              </Link>
            ))}
          </div>
          <div>
            <h3>Company</h3>
            {navItems.slice(3).map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
          <div>
            <h3>Contact</h3>
            <p>Email: {company.email}</p>
            <p>WhatsApp: {company.whatsapp}</p>
            <p>Phone: {company.phone}</p>
            <p>{company.address}</p>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <span>© 2026 {company.name}. All rights reserved.</span>
          <span>CE / EN14960 information shown only where applicable.</span>
        </div>
      </div>
    </footer>
  );
}
