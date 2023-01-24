import { createClient } from "next-sanity";
import { projectId, dataset, apiVersion, isProd } from "./config";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: isProd, // This should be true before deploying to production with vercel
});
