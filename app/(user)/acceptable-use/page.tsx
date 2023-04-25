import type { Metadata } from "next";
import AcceptableUse from "../../../components/Legal/AcceptableUse";

export const metadata: Metadata = {
  title: "Acceptable Use Policy",
  description: "Our Acceptable Use Policy.",
  openGraph: {
    title: "Acceptable Use Policy",
    description: "Our Acceptable Use Policy.",
    url: "https://www.noirtechtribe.com/acceptable-use",
  },
};

export default function page() {
  return <AcceptableUse />;
}
