import dynamic from "next/dynamic";

const DynamicComponentWithNoSSR = dynamic(
  () => import("@/components/core/CookieBanner"),
  { ssr: false }
);

export default DynamicComponentWithNoSSR;
