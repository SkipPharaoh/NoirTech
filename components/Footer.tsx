import { Icons } from "../lib/FooterMenus";
import BlogSubscription from "./ChildComponents/BlogSubscription";
import FooterItemsContainer from "./ChildComponents/FooterItemsContainer";
import SocialIcons from "./ChildComponents/SocialIcons";

export default function Footer() {
  const date = new Date().getFullYear();

  const bg = {
    // background: "url('/images/footer.png') no-repeat",
    backgroundPosition: "bottom left",
  };

  return (
    <footer className="bg-gray-50 text-black" style={bg}>
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
