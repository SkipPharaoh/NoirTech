import { Icons } from "../lib/FooterMenus";
import AboutSection from "./AboutSection";
import BlogSubscription from "./BlogSubscription";
import FooterItemsContainer from "./FooterItemsContainer";
import SocialIcons from "./SocialIcons";

export default function Footer() {
  const date = new Date().getFullYear();
  return (
    <footer className="bg-white text-black">
      <div className="flex justify-around px-6">
        <AboutSection />
        <BlogSubscription />
      </div>
      <FooterItemsContainer />
      <div className="flex justify-center py-2 text-black text-sm">
        {/* TODO: Add company name to copyright below */}
        <span>&copy; {date} All rights reserved</span>
      </div>
      <SocialIcons Icons={Icons} />
    </footer>
  );
}
