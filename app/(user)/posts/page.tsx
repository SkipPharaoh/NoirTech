import LatestBlogList from "../../../components/LatestBlogList";
import { client } from "../../../lib/sanity.client";
import { query } from "../page";

export default async function page() {
  const posts = await client.fetch(query);

  return <LatestBlogList posts={posts} />;
}
