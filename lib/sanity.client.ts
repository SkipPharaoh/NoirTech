import { createClient } from "next-sanity";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION;

const isProd = process.env.NODE_ENV === "production";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: isProd, // This should be true before deploying to production with vercel
});
