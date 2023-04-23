import type { Metadata } from "next";
import AboutUs from "../../../components/AboutUs";

export const metadata: Metadata = {
  title: "About Us",
  description: "About Us",
};

export default function page() {
  return <AboutUs />;
}
