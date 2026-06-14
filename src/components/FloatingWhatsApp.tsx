import { MessageCircle } from "lucide-react";
import { company } from "@/lib/site-data";
import styles from "./layout.module.css";

const message = "Hello, I am interested in your products. Please send me more details.";

export function FloatingWhatsApp() {
  const phone = company.whatsapp.replace(/\D/g, "");
  const href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a className={styles.floatingWhatsApp} href={href} target="_blank" rel="noreferrer" aria-label="Chat with Huayue Toys on WhatsApp">
      <MessageCircle size={30} strokeWidth={2.4} />
    </a>
  );
}
