import type { Metadata } from "next";
import AcceptableUse from "../../../components/Legal/AcceptableUse";

export const metadata: Metadata = {
  title: "Acceptable Use",
  description: "Acceptable Use",
};

export default function page() {
  return <AcceptableUse />;
}
