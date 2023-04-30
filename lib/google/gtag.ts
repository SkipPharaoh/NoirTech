export const pageview = (url: string, GA_MEASUREMENT_ID?: string) => {
  // @ts-ignore
  window.gtag("config", GA_MEASUREMENT_ID, {
    page_path: url,
  });
};
