import React from "react";
import FooterItems from "./FooterItems";
import { BRANDS, TOPICS, COMPANY, LEGAL } from "../lib/FooterMenus";

export default function FooterItemsContainer() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16">
      <FooterItems Links={BRANDS} title="WE SUPPORT" />
      <FooterItems Links={TOPICS} title="BLOG CATEGORIES" />
      <FooterItems Links={COMPANY} title="COMPANY" />
      <FooterItems Links={LEGAL} title="LEGAL" />
    </div>
  );
}
