import type { Metadata } from "next";
import TermsOfUse from "../../../components/Legal/TermsOfUse";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of Use",
};

export default function page() {
  return <TermsOfUse />;
}
