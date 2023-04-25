import type { Metadata } from "next";
import TermsOfUse from "../../../components/Legal/TermsOfUse";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "Our terms and conditions",
  openGraph: {
    title: "Terms and Conditions | Noir Tech Tribe",
    description: "Our terms and conditions",
    url: "https://www.noirtechtribe.com/terms-and-conditions",
    siteName: "Noir Tech Tribe",
  },
};

export default function page() {
  return <TermsOfUse />;
}
