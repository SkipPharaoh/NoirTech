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
      <div
        className="grid grid-cols-1 lg:grid-cols-3
      text-center pt-2 text-black text-sm pb-8"
      >
        {/* TODO: Add company name to copyright below */}
        <span>&copy; {date} All rights reserved</span>
        <span>&copy; {date} All rights reserved</span>
        <SocialIcons Icons={Icons} />
      </div>
    </footer>
  );
}
