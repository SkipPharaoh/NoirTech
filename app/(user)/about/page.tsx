import type { Metadata } from "next";
import AboutUs from "../../../components/AboutUs";

export const metadata: Metadata = {
  title: {
    default: "About Us | Noir Tech Tribe",
    template: "%s | Noir Tech Tribe",
  },
  description:
    "Learn more about Noir Tech Tribe and our mission to empower Black professionals in the technology industry.",
  openGraph: {
    title: "About Us | Noir Tech Tribe",
    description:
      "Learn more about Noir Tech Tribe and our mission to empower Black professionals in the technology industry.",
    url: "https://www.noirtechtribe.com/about-us",
  },
};

export default function page() {
  return <AboutUs />;
}
