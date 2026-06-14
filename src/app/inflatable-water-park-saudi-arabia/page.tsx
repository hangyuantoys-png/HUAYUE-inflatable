import type { Metadata } from "next";
import { CountryPage } from "@/components/CountryPage";
import { countryPages } from "@/lib/site-data";

const page = countryPages.find((item) => item.slug === "inflatable-water-park-saudi-arabia")!;

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: `/${page.slug}` }
};

export default function SaudiPage() {
  return <CountryPage {...page} />;
}
