import { buildLegacyTheme } from "sanity";

const props = {
  "--my-white": "#fff",
  "--my-black": "#000",
  "--my-gray": "#f7fafc",
  "--my-red": "#f56565",
  "--my-yellow": "#ed8936",
  "--my-green": "#48bb78",
};

export const myTheme = buildLegacyTheme({
  "--black": props["--my-black"],
  "--white": props["--my-white"],

  "--gray": "#f7fafc",
  "--gray-base": "#f7fafc",

  "--component-bg": props["--my-black"],
  "--component-text-color": props["--my-white"],

  "--brand-primary": props["--my-gray"],

  "--default-button-color": "#666",
  "--default-button-primary-color": props["--my-gray"],
  "--default-button-success-color": props["--my-green"],
  "--default-button-warning-color": props["--my-yellow"],
  "--default-button-danger-color": props["--my-red"],

  "--state-info-color": props["--my-gray"],
  "--state-success-color": props["--my-green"],
  "--state-warning-color": props["--my-yellow"],
  "--state-danger-color": props["--my-red"],

  "--main-navigation-color": props["--my-black"],
  "--main-navigation-color--inverted": props["--my-white"],

  "--focus-color": props["--my-gray"],
});
