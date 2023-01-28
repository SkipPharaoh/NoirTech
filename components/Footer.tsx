import React from "react";
import FooterItemsContainer from "./FooterItemsContainer";
import SocialIcons from "./SocialIcons";
import { Icons } from "../lib/FooterMenus";
import BlogSubscription from "./BlogSubscription";

export default function Footer() {
  const date = new Date().getFullYear();
  return (
    <footer className="bg-white text-black">
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
