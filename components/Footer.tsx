import { Icons, footerMenu } from "../lib/FooterMenus";
import BlogSubscription from "./BlogSubscription";
import Divider from "./Divider";
import FooterButton from "./FooterButton";
import SocialIcons from "./SocialIcons";

export default function Footer() {
  const date = new Date().getFullYear();

  const bg = {
    // background: "url('/images/footer.png') no-repeat",
    backgroundPosition: "bottom left",
  };

  const buttonGroup = footerMenu.map((button) => {
    return (
      <li className="my-1 lg:mx-1">
        <FooterButton footerItem={button.name} />
      </li>
    );
  });

  return (
    <footer className="bg-gray-50 text-black" style={bg}>
      <div className="container py-4 flex justify-center">
        <ul className="lg:flex lg:justify-center">{buttonGroup}</ul>
      </div>
      <Divider />
      <BlogSubscription />
      <Divider />
      <div className="flex justify-center py-2 text-black text-sm">
        {/* TODO: Add company name to copyright below */}
        <span>&copy; {date} BLK Tech ODB. All rights reserved</span>
      </div>
      <SocialIcons Icons={Icons} />
    </footer>
  );
}
