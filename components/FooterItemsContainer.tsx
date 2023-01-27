import React from "react";
import FooterItems from "./FooterItems";
import { PRODUCTS, RESOURCES, COMPANY, SUPPORT } from "../lib/FooterMenus";

export default function FooterItemsContainer() {
  return (
    <div className="">
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16">
        <FooterItems Links={PRODUCTS} title="PRODUCTS" />
        <FooterItems Links={RESOURCES} title="RESOURCES" />
        <FooterItems Links={COMPANY} title="COMPANY" />
        <FooterItems Links={SUPPORT} title="SUPPORT" />
      </div>
    </div>
  );
}
