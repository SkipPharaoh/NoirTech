import { client } from "@/lib/sanity.client";
import { groq } from "next-sanity";

interface ContentQuery {
  getCategoryData: (searchWord: string, slug: string) => Promise<Post[]>;
  getPostData: (slug: string) => Promise<Post>;
}

export default function useContentQuery(): ContentQuery {
  const getCategoryData = async (searchWord: string, slug: string) => {
    const query = groq`*[_type == "post" && categories[]->title match "${searchWord}"]
    {
        ...,
        author->,
        categories[]->,
    }
    `;

    const booksPost: Post[] = await client.fetch(query, { slug });

    return booksPost;
  };

  const getPostData = async (slug: string) => {
    const query = groq`*[_type == "post" && slug.current == $slug][0]
    {
        ...,
        author->,
        categories[]->,
    }
    `;

    const post: Post = await client.fetch(query, { slug });

    return post;
  };

  return {
    getCategoryData,
    getPostData,
  };
}
