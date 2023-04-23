import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import Banner from "../../components/Banner";
import Divider from "../../components/Divider";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ReactQueryWrapper from "../../components/core/ReactQueryWrapper";
import "../../styles/globals.css";

export const metadata: Metadata = {
  title: { default: "Noir Tech Tribe", template: "%s | Noir Tech Tribe" },
  description: "Home",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
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
      </body>
    </html>
  );
}
