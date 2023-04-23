import type { Metadata } from "next";
import PrivacyPolicy from "../../../components/Legal/PrivacyPolicy";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy",
};

export default function page() {
  return <PrivacyPolicy />;
}
