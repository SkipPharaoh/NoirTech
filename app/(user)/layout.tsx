import Banner from "../../components/Banner";
import Divider from "../../components/Divider";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "../../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className="max-w-7xl mx-auto">
        <Header />
        <Banner />
        <Divider />
        {children}
        <Divider />
        <Footer />
      </body>
    </html>
  );
}
