import { groq } from "next-sanity";
import { client } from "../../../../lib/sanity.client";
import Image from "next/image";
import urlFor from "../../../../lib/urlFor";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "../../../../components/RichTextComponents";
import RelatedBlog from "../../../../components/RelatedBlog";
import Author from "../../../../components/Author";

interface Props {
  params: {
    slug: string;
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

export default async function Post({ params: { slug } }: Props) {
  const query = groq`*[_type == "post" && slug.current == $slug][0]
    {
        ...,
        author->,
        categories[]->,
    }
    `;

  const post: Post = await client.fetch(query, { slug });

  return (
    <article className="px-10 pb-28 mb-10 mt-10">
      <section className="container mx-auto md:px-2">
        <div className="post py-5">
          {/* <div className="opacity-90 blur-sm p-32">
            <Image
              className=" object-center mx-auto"
              src={urlFor(post.mainImage).url()}
              alt={post.author.name}
              fill
            />
          </div> */}
          <h1 className="font-bold text-4xl">{post.title}</h1>
          <div className="flex justify-between pt-4">
            <h1 className="text-gray-400 pt-2">
              {new Date(post._createdAt).toLocaleDateString("en-US", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </h1>
          </div>

          <div className="space-x-2 flex justify-between">
            <Author
              image={post.author.image && urlFor(post.author.image).url()}
              name={post.author.name}
              profession={post.author.profession}
            />
            <div className="space-x-2 py-5">
              {post.categories.map((category) => (
                <div
                  key={category && category._id}
                  className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-semibold"
                >
                  <p>{category && category.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <PortableText value={post.body} components={RichTextComponents} />
      <div className="flex justify-center">
        <RelatedBlog />
      </div>
    </article>
  );
}
