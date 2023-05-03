import CookieBanner from "@/components/core/CookieBanner";
import DynamicComponentWithNoSSR from "@/components/core/DynamicComponentWithNoSSR";
import GoogleAnalytics from "@/lib/google/GoogleAnalytics";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import Banner from "../../components/Banner";
import Divider from "../../components/Divider";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ReactQueryWrapper from "../../components/core/ReactQueryWrapper";
import "../../styles/globals.css";

export const metadata: Metadata = {
  title: {
    default: "Noir Tech Tribe",
    template: "%s | Noir Tech Tribe",
  },
  description: "Empowering Black professionals in the technology industry",
  openGraph: {
    title: "Noir Tech Tribe",
    description:
      "Empowering Black professionals in the technology industry by providing knowledge and resources to navigate their careers",
    url: "https://www.noirtechtribe.com",
    siteName: "Noir Tech Tribe",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    site: "@noirtechtribe",
  },
  icons: {
    shortcut: "/favicon.ico",
  },
  // verification: {
  //   google: "google-site-verification-code",
  // },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html>
      <GoogleAnalytics GA_MEASUREMENT_ID={GA_TRACKING_ID} />
      <body className="">
        <Header />
        <Banner />
        <Divider />
        <div className="max-w-7xl mx-auto">
          <div className="container px-4 md:px-6 pb-24">
            {children}
            <Analytics />
          </div>
        </div>
        <Divider />
        <ReactQueryWrapper>
          <Footer />
        </ReactQueryWrapper>

        <DynamicComponentWithNoSSR />
        <CookieBanner />
      </body>
    </html>
  );
}
