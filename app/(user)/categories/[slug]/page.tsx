import { groq } from "next-sanity";
import Image from "next/image";
import LinkTo from "../../../../components/core/LinkTo";
import { client } from "../../../../lib/sanity.client";
import urlFor from "../../../../lib/urlFor";

export const dynamic = "force-dynamic";
interface Props {
  params: {
    slug: string;
  };
  searchParams?: {
    search?: string;
  };
}

export const revalidate = 60;

export async function generateStaticParams() {
  const query = groq`*[_type == "post"]
    {
        slug,
    }`;

  const slugs: Post[] = await client.fetch(query);
  const slugRoutes = slugs.map((slug) => slug.slug.current);

  return slugRoutes.map((slug) => ({
    slug,
  }));
}

export default async function Post({ params: { slug }, searchParams }: Props) {
  // console.log(searchParams);

  /*
  ***
  Below is just a temporary fix for the searchParams prop in the next js13 bug.
  Issue link is below for reference.
  https://github.com/vercel/next.js/issues/43077

  The temporary fix is the toTitleCase function, the word being replaced & the searchWord variable.
  ***
  */

  const toTitleCase = (phrase: string) => {
    return phrase
      .toLowerCase()
      .split(" ")
      .map((char: string) => char.charAt(0).toUpperCase() + char.slice(1))
      .join(" ");
  };

  const word = slug
    .replace(/[&\/\\#,+()$~%.'":*?<>{}-]/g, " ")
    .replace("and", "&");

  const searchWord = toTitleCase(word);

  const query = groq`*[_type == "post" && categories[]->title match "${searchWord}"]
    {
        ...,
        author->,
        categories[]->,
    }
    `;

  const booksPost: Post[] = await client.fetch(query, { slug });

  const BlogPosts = booksPost.map((blogPost) => {
    const blogCategories =
      blogPost.categories &&
      blogPost.categories.map((category) => (
        <div
          key={category ? category._id : undefined}
          className="text-orange-600 hover:text-orange-800"
        >
          {category && category.title}
        </div>
      ));

    return (
      <div className="group" key={blogPost._id}>
        <div className="hover:bg-gray-400 hover:bg-opacity-10 hover:backdrop-blur-lg rounded hover:drop-shadow-xl hover:shadow-md">
          <LinkTo href={`/posts/${blogPost.slug.current}`}>
            <div className="images">
              <Image
                src={urlFor(blogPost.mainImage)?.url() ?? ""}
                alt=""
                width={600}
                height={400}
              />
            </div>
            <div className="info flex justify-center flex-col py-4">
              <div className="cat">
                <div className="line-clamp-1">{blogCategories}</div>
                <p className="text-gray-800 hover:text-gray-600">
                  {new Date(blogPost._createdAt).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>
              <div className="title text-xl font-bold text-gray-800 hover:text-gray-600">
                {blogPost.title}
              </div>
              <p className="text-gray-500 py-3 line-clamp-2">
                {blogPost.description}
              </p>
              {/* <Author></Author> */}
            </div>
          </LinkTo>
        </div>
      </div>
    );
  });

  return (
    <section className="container mx-auto md:px-20 pb-10">
      <h1 className="font-bold text-4xl py-12 text-center">{searchWord}</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
        {BlogPosts}
      </div>
    </section>
  );
}
