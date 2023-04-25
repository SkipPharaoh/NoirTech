import { client } from "@/lib/sanity.client";
import { groq } from "next-sanity";

interface ContentQuery {
  getCategoryData: (searchWord: string, slug: string) => Promise<Post[]>;
  getPostData: (slug: string) => Promise<Post>;
  getAuthorData: (slug: string) => Promise<Author>;
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

  const getAuthorData = async (slug: string) => {
    const query = groq`*[_type == "author" && slug.current == $slug][0]
    {
        ...,
    }
    `;

    const author: Author = await client.fetch(query, { slug });

    return author;
  };

  return {
    getCategoryData,
    getPostData,
    getAuthorData,
  };
}
