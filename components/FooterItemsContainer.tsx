import { BRANDS, COMPANY, LEGAL, TOPICS } from "../lib/FooterMenus";
import FooterItems from "./FooterItems";

export default function FooterItemsContainer() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:px-8 px-5 py-16">
      <FooterItems Links={TOPICS} title="CATEGORIES" />
      <FooterItems Links={COMPANY} title="COMPANY" />
      <FooterItems Links={BRANDS} title="WE SUPPORT" />
      <FooterItems Links={LEGAL} title="LEGAL" />
    </div>
  );
}
