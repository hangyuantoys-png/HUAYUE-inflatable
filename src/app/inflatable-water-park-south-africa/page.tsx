import type { Metadata } from "next";
import { CountryPage } from "@/components/CountryPage";
import { countryPages } from "@/lib/site-data";

const page = countryPages.find((item) => item.slug === "inflatable-water-park-south-africa")!;

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: `/${page.slug}` }
};

export default function SouthAfricaPage() {
  return <CountryPage {...page} />;
}
