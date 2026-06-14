"use client";

import { useState } from "react";
import type { InquiryPayload } from "@/lib/site-data";
import styles from "./sections.module.css";

const initial: InquiryPayload = {
  name: "",
  email: "",
  country: "",
  whatsapp: "",
  productRequirement: "",
  message: ""
};

export function InquiryForm() {
  const [payload, setPayload] = useState(initial);
  const [submitted, setSubmitted] = useState(false);

  function update(field: keyof InquiryPayload, value: string) {
    setPayload((current) => ({ ...current, [field]: value }));
  }

  return (
    <form
      className={styles.form}
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
        setPayload(initial);
      }}
    >
      <div className={styles.formGrid}>
        <label>
          Name
          <input required value={payload.name} onChange={(event) => update("name", event.target.value)} />
        </label>
        <label>
          Email
          <input required type="email" value={payload.email} onChange={(event) => update("email", event.target.value)} />
        </label>
        <label>
          Country
          <input required value={payload.country} onChange={(event) => update("country", event.target.value)} />
        </label>
        <label>
          WhatsApp
          <input value={payload.whatsapp} onChange={(event) => update("whatsapp", event.target.value)} />
        </label>
      </div>
      <label>
        Product Requirement
        <input
          required
          value={payload.productRequirement}
          placeholder="Inflatable water park, water slide, buoy..."
          onChange={(event) => update("productRequirement", event.target.value)}
        />
      </label>
      <label>
        Message
        <textarea
          required
          rows={5}
          value={payload.message}
          placeholder="Tell us your water area size, target country, quantity and expected use."
          onChange={(event) => update("message", event.target.value)}
        />
      </label>
      <button className="button dark" type="submit">
        Send Layout or Water Area Size for Recommendation
      </button>
      {submitted ? <p className={styles.success}>Thank you. Our sales team will contact you soon.</p> : null}
    </form>
  );
}
