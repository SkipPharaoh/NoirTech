import type { Metadata } from "next";
import PrivacyPolicy from "../../../components/Legal/PrivacyPolicy";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Learn about our privacy policy at Noir Tech Tribe.",
  openGraph: {
    title: "Privacy Policy | Noir Tech Tribe",
    description: "Learn about our privacy policy at Noir Tech Tribe.",
    url: "https://www.noirtechtribe.com/privacy-policy",
    siteName: "Noir Tech Tribe",
  },
};

export default function page() {
  return <PrivacyPolicy />;
}
