import { Icons } from "../lib/FooterMenus";
import BlogSubscription from "./ChildComponents/BlogSubscription";
import FooterItemsContainer from "./ChildComponents/FooterItemsContainer";
import SocialIcons from "./ChildComponents/SocialIcons";

export default function Footer() {
  const date = new Date().getFullYear();
  return (
    <footer className="bg-gray-50 text-black">
      <BlogSubscription />
      <FooterItemsContainer />
      <div className="flex justify-center py-2 text-black text-sm">
        {/* TODO: Add company name to copyright below */}
        <span>&copy; {date} All rights reserved</span>
      </div>
      <SocialIcons Icons={Icons} />
    </footer>
  );
}
